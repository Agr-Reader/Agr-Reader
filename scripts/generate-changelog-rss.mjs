import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://www.agrreader.xyz'

const FEED_CONFIGS = [
  {
    sourcePath: 'docs/changelog/index.md',
    outputPath: 'docs/public/rss/changelog.xml',
    channelPath: '/changelog/index',
    selfPath: '/rss/changelog.xml',
    title: 'Agr Reader Changelog',
    description: 'Agr Reader release notes and updates.',
    language: 'en-US'
  },
  {
    sourcePath: 'docs/zh/changelog/index.md',
    outputPath: 'docs/public/rss/changelog-zh.xml',
    channelPath: '/zh/changelog/index',
    selfPath: '/rss/changelog-zh.xml',
    title: 'Agr Reader Changelog (Chinese)',
    description: 'Agr Reader release notes and updates in Chinese.',
    language: 'zh-CN'
  }
]

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..')

function parseHeading(headingText) {
  const headingWithDate = headingText.match(/^([^\s(（]+)\s*[\(（]([^)）]+)[\)）]\s*$/)
  if (headingWithDate) {
    return {
      version: headingWithDate[1].trim(),
      dateText: headingWithDate[2].trim()
    }
  }

  return {
    version: headingText.trim(),
    dateText: null
  }
}

function parseDate(dateText) {
  if (!dateText) {
    return null
  }

  const dateMatch = dateText.match(/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/)
  if (!dateMatch) {
    return null
  }

  const year = Number(dateMatch[1])
  const month = Number(dateMatch[2])
  const day = Number(dateMatch[3])
  const parsedDate = new Date(Date.UTC(year, month - 1, day))

  if (Number.isNaN(parsedDate.getTime())) {
    return null
  }

  return parsedDate
}

function trimBlankLines(lines) {
  const copied = [...lines]
  while (copied.length > 0 && copied[0].trim() === '') {
    copied.shift()
  }
  while (copied.length > 0 && copied[copied.length - 1].trim() === '') {
    copied.pop()
  }
  return copied.join('\n').trim()
}

function parseEntries(markdownText) {
  const lines = markdownText.split(/\r?\n/)
  const entries = []
  let current = null

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+?)\s*$/)
    if (headingMatch) {
      if (current) {
        const description = trimBlankLines(current.content)
        entries.push({
          heading: current.heading,
          version: current.version,
          dateText: current.dateText,
          publishedAt: parseDate(current.dateText),
          description
        })
      }

      const heading = headingMatch[1].trim()
      const parsedHeading = parseHeading(heading)
      current = {
        heading,
        version: parsedHeading.version,
        dateText: parsedHeading.dateText,
        content: []
      }
      continue
    }

    if (current) {
      current.content.push(line)
    }
  }

  if (current) {
    const description = trimBlankLines(current.content)
    entries.push({
      heading: current.heading,
      version: current.version,
      dateText: current.dateText,
      publishedAt: parseDate(current.dateText),
      description
    })
  }

  return entries.filter((entry) => entry.version)
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toAbsoluteUrl(relativePath) {
  return `${SITE_URL}${relativePath}`
}

function buildFeedXml(config, entries) {
  const now = new Date()
  const lastBuildDate = entries.find((entry) => entry.publishedAt)?.publishedAt ?? now
  const channelLink = toAbsoluteUrl(config.channelPath)
  const selfLink = toAbsoluteUrl(config.selfPath)

  const itemsXml = entries.map((entry) => {
    const title = entry.dateText ? `${entry.version} (${entry.dateText})` : entry.version
    const descriptionText = entry.description || entry.heading
    const guid = `${channelLink}#${encodeURIComponent(entry.version)}`
    const pubDateXml = entry.publishedAt
      ? `\n      <pubDate>${entry.publishedAt.toUTCString()}</pubDate>`
      : ''

    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(channelLink)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>${pubDateXml}
      <description>${escapeXml(descriptionText)}</description>
    </item>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.title)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(config.description)}</description>
    <language>${escapeXml(config.language)}</language>
    <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`
}

async function generateSingleFeed(config) {
  const sourceFile = path.resolve(ROOT_DIR, config.sourcePath)
  const outputFile = path.resolve(ROOT_DIR, config.outputPath)
  const sourceMarkdown = await readFile(sourceFile, 'utf8')
  const entries = parseEntries(sourceMarkdown)
  const rssXml = buildFeedXml(config, entries)

  await mkdir(path.dirname(outputFile), { recursive: true })
  await writeFile(outputFile, rssXml, 'utf8')
  return { outputFile, itemCount: entries.length }
}

async function main() {
  const results = await Promise.all(FEED_CONFIGS.map(generateSingleFeed))
  for (const result of results) {
    const relativePath = path.relative(ROOT_DIR, result.outputFile)
    console.log(`[rss] generated ${relativePath} (${result.itemCount} items)`)
  }
}

main().catch((error) => {
  console.error('[rss] failed to generate changelog feeds')
  console.error(error)
  process.exitCode = 1
})
