// 首页（EN/ZH）文案与数据的单一数据源。
// 组件通过 useData().localeIndex 读取对应语言，保证两份 index.md 正文一致、无文案漂移。
// 图标为内联 SVG 字符串（沿用 HomeHeroActions.vue 的 Font Awesome 模式），经 IconSvg.vue 渲染。

export type FeatureTint = 'green' | 'teal' | 'lime' | 'amber' | 'slate' | 'emerald'

export interface Feature {
  icon: string
  title: string
  details: string
  tint?: FeatureTint
}

export interface Screenshot {
  src: string
  alt: string
  caption: string
}

export interface HomeData {
  heroName: string
  heroText: string
  heroTagline: string
  featuresTitle: string
  featuresSubtitle: string
  features: Feature[]
  syncTitle: string
  syncServices: string[]
  screenshotsTitle: string
  screenshotsSubtitle: string
  screenshots: Screenshot[]
  rssHubTitle: string
  rssHubSubtitle: string
  rssHubBadge: string
  rssHubLinkText: string
  rssHubLinkHref: string
  rssHubDesc: string
}

// Font Awesome 免费图标（与 HomeHeroActions.vue 同源）
const ICON = {
  palette:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>',
  bolt:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/></svg>',
  rotate:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-2.7 7.6-10.7 11.4-18.2 8.9s-11.9-10.4-9.7-18.2c9.1-25.7 23.9-49.7 44.7-70.4c75-75 196.5-75 271.5 0l8.2 8.2-.4-64c0-9.3 7.6-16.9 16.9-16.9s16.9 7.6 16.9 16.9l0 96c0 9.4-7.6 16.9-16.9 16.9l-96 0c-9.3 0-16.9-7.6-16.9-16.9s7.6-16.9 16.9-16.9l58.9 0-17.3-17.3c-56-56-146.9-56-202.9 0zm226.2 226.2c17.5-17.5 30.1-38 37.8-59.8c2.7-7.6 10.7-11.4 18.2-8.9s11.9 10.4 9.7 18.2c-9.1 25.7-23.9 49.7-44.7 70.4c-75 75-196.5 75-271.5 0l-8.2-8.2 .4 64c0 9.3-7.6 16.9-16.9 16.9s-16.9-7.6-16.9-16.9l0-96c0-9.4 7.6-16.9 16.9-16.9l96 0c9.3 0 16.9 7.6 16.9 16.9s-7.6 16.9-16.9 16.9l-59.6 0 18 18c56 56 146.9 56 202.9 0z"/></svg>',
  robot:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>',
  language:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 192 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-192 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 192 0 0-256-192 0zM178.3 175.9c-3.2-8.1-9.8-15.9-18.3-15.9s-15.1 7.8-18.3 15.9l-64 144c-3.6 8.2 .6 17.5 8.9 21.1s17.5-.6 21.1-8.9l11.2-25.2 74.9 0 11.2 25.2c3.6 8.2 12.8 12.5 21.1 8.9s12.5-12.8 8.9-21.1l-64-144zm-18.3 96l18.3-41.2 18.3 41.2-36.6 0zM400 128c8.8 0 16 7.2 16 16l0 16 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144c0-8.8 7.2-16 16-16z"/></svg>',
  display:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-16 32-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0-16-32 176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>',
  inbox:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M96 0c-35 0-64 28.7-64 64l0 352c0 35 29 64 64 64l384 0c35 0 64-29 64-64l0-352c0-35-29-64-64-64L96 0zM512 64l0 192-96 0c-17.7 0-32 14.3-32 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-17.7-14.3-32-32-32l-96 0 0-192 384 0z"/></svg>',
  cloud:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>',
  mobile:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free--><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-64L64 416 64 96l448 0 0 64 64 0 0-64c0-35.3-28.7-64-64-64L64 32zM352 224l0 224c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32zm80 176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16z"/></svg>'
}

export const homeData: Record<'root' | 'zh', HomeData> = {
  root: {
    heroName: 'Agr Reader',
    heroText: 'Lightweight. Full-Featured. AI-Powered.',
    heroTagline:
      'An elegant, powerful RSS reader for a seamless, personalized reading experience.',
    featuresTitle: 'Why Agr Reader',
    features: [
      {
        icon: ICON.palette,
        title: 'Elegant Material You design',
        details:
          'A clean, polished Material3 experience with dynamic colors that follow your wallpaper and system theme — lightweight, modern, easy on the eyes.',
        tint: 'teal'
      },
      {
        icon: ICON.bolt,
        title: 'Read anywhere, even offline',
        details:
          'Full-text extraction and offline reading let you finish articles without juggling web pages — ideal for commuting, flights, and low-signal moments.',
        tint: 'amber'
      },
      {
        icon: ICON.rotate,
        title: 'RSS sync for your setup',
        details:
          'Sync with the services you already use — Feedly, Feedbin, The Old Reader, Bazqux, FreshRSS, Miniflux, Tiny Tiny RSS, Folo, plus Google Reader and Fever APIs.',
        tint: 'green'
      },
      {
        icon: ICON.robot,
        title: 'Understand more with AI',
        details:
          'Custom prompts summarize articles, translate content, and extract key takeaways — turning long reads into share-ready recaps in seconds.',
        tint: 'slate'
      },
      {
        icon: ICON.language,
        title: 'Built for multilingual reading',
        details:
          'Translated titles and bilingual article views make it easy to follow foreign-language feeds and browse content across regions.',
        tint: 'emerald'
      },
      {
        icon: ICON.display,
        title: 'Available beyond Android',
        details:
          'Start on Android and continue on Windows and Linux, with iOS and macOS planned — a consistent experience on every screen.',
        tint: 'lime'
      },
      {
        icon: ICON.inbox,
        title: 'Everything you read, in one place',
        details:
          'Collect blogs, news, product updates and websites in a single RSS inbox — chronological, no algorithmic noise.',
        tint: 'green'
      },
      {
        icon: ICON.cloud,
        title: 'Move devices with confidence',
        details:
          'WebDAV backup and restore protect your reading setup and make migrating to a new device smooth and worry-free.',
        tint: 'teal'
      },
      {
        icon: ICON.mobile,
        title: 'A better experience on every screen',
        details:
          'Split-view reading on tablets and large screens, plus home screen widgets — a layout that adapts to how you read.',
        tint: 'slate'
      }
    ],
    syncTitle: 'Works with the services you already use',
    syncServices: [
      'Feedly',
      'Feedbin',
      'The Old Reader',
      'Bazqux',
      'FreshRSS',
      'Miniflux',
      'Tiny Tiny RSS',
      'Folo',
      'Google Reader / Fever APIs'
    ],
    screenshotsTitle: 'Screenshots',
    screenshots: [
      { src: '/screenshots/gallery-iphone.png', alt: 'Agr Reader on iPhone - AI-powered reading experience', caption: 'Agr Reader on iPhone - AI-powered reading experience' },
      { src: '/screenshots/gallery-android.png', alt: 'Agr Reader on Android - full article with clean typography', caption: 'Agr Reader on Android - full article with clean typography' },
      { src: '/screenshots/gallery-ipad.png', alt: 'Agr Reader on iPad - Comprehensive feed management features', caption: 'Agr Reader on iPad - Comprehensive feed management features' },
      { src: '/screenshots/gallery-macos.png', alt: 'Agr Reader on macOS - two-column layout with list and article', caption: 'Agr Reader on macOS - two-column layout with list and article' },
      { src: '/screenshots/gallery-windows.png', alt: 'Agr Reader on Windows - two-column layout with list and article', caption: 'Agr Reader on Windows - two-column layout with list and article' },
    ],
    rssHubTitle: 'RSSHub',
    rssHubBadge: 'Self-Hosted',
    rssHubLinkText: 'Learn more about Agr Reader’s RSSHub',
    rssHubLinkHref: '/navigation/#agr-reader-s-rsshub',
    rssHubDesc: 'Turn almost any website into a subscribable feed with our self-hosted RSSHub instance.'
  },
  zh: {
    heroName: 'Agr Reader',
    heroText: '轻量、功能齐全、AI 驱动',
    heroTagline: '优雅而强大的 RSS 阅读器，给你带来无缝且个性化的阅读体验。',
    featuresTitle: '为什么选择 Agr Reader',
    features: [
      {
        icon: ICON.palette,
        title: '优雅的 Material You 设计',
        details: '简洁、精致的 Material3 体验，动态配色可跟随壁纸与系统主题变化，轻盈现代，观感舒适。',
        tint: 'teal'
      },
      {
        icon: ICON.bolt,
        title: '随时随地阅读，离线也可以',
        details: '全文提取与离线阅读让你无需反复跳转网页，也能完整读完文章，非常适合通勤、飞行和弱网环境。',
        tint: 'amber'
      },
      {
        icon: ICON.rotate,
        title: '适配你的 RSS 同步方式',
        details: '支持与你常用的 RSS 服务同步，包括 Feedly、Feedbin、The Old Reader、Bazqux、FreshRSS、Miniflux、Tiny Tiny RSS、Folo 等。',
        tint: 'green'
      },
      {
        icon: ICON.robot,
        title: '用 AI 更快理解内容',
        details: '使用自定义提示词快速总结文章、翻译内容、提取重点，并将长文转化为适合分享的摘要。',
        tint: 'slate'
      },
      {
        icon: ICON.language,
        title: '为多语言阅读而生',
        details: '支持标题翻译与双语文章视图，更轻松地阅读外语订阅源、学习语言，并浏览不同地区的内容。',
        tint: 'emerald'
      },
      {
        icon: ICON.display,
        title: '不止于 Android',
        details: '从 Android 开始，也可在 Windows 和 Linux 桌面端继续使用；iOS 与 macOS 支持也在规划中。',
        tint: 'lime'
      },
      {
        icon: ICON.inbox,
        title: '将你的阅读内容集中到一处',
        details: '把博客、新闻、产品更新和各类网页统一收进一个 RSS 收件箱，按时间顺序清爽阅读，远离算法干扰。',
        tint: 'green'
      },
      {
        icon: ICON.cloud,
        title: '换机迁移更安心',
        details: 'WebDAV 备份与恢复帮助保护你的阅读配置，让迁移到新设备更顺畅、更安心。',
        tint: 'teal'
      },
      {
        icon: ICON.mobile,
        title: '每块屏幕都有更好的体验',
        details: '在平板和大屏设备上使用分栏阅读，通过桌面小组件快速查看最新文章，让布局适应你的阅读方式。',
        tint: 'slate'
      }
    ],
    syncTitle: '与你常用的服务无缝同步',
    syncServices: [
      'Feedly',
      'Feedbin',
      'The Old Reader',
      'Bazqux',
      'FreshRSS',
      'Miniflux',
      'Tiny Tiny RSS',
      'Folo',
      'Google Reader / Fever APIs'
    ],
    screenshotsTitle: '截图',
    screenshots: [
      { src: '/screenshots/gallery-iphone.png', alt: 'Agr Reader on iPhone - AI-powered reading experience', caption: 'Agr Reader on iPhone - AI-powered reading experience' },
      { src: '/screenshots/gallery-android.png', alt: 'Agr Reader on Android - full article with clean typography', caption: 'Agr Reader on Android - full article with clean typography' },
      { src: '/screenshots/gallery-ipad.png', alt: 'Agr Reader on iPad - Comprehensive feed management features', caption: 'Agr Reader on iPad - Comprehensive feed management features' },
      { src: '/screenshots/gallery-macos.png', alt: 'Agr Reader on macOS - two-column layout with list and article', caption: 'Agr Reader on macOS - two-column layout with list and article' },
      { src: '/screenshots/gallery-windows.png', alt: 'Agr Reader on Windows - two-column layout with list and article', caption: 'Agr Reader on Windows - two-column layout with list and article' },
    ],
    rssHubTitle: 'RSSHub',
    rssHubBadge: '自建服务',
    rssHubLinkText: '了解 Agr Reader 的 RSSHub',
    rssHubLinkHref: '/zh/navigation/#agr-reader-s-rsshub',
    rssHubDesc: '通过自建的 RSSHub 实例，将几乎任何网站变成可订阅的订阅源。'
  }
}
