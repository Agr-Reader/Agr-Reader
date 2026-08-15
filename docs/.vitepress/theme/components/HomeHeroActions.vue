<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { apkUrl } from '../../version.mjs'
import HeroDownloadButton from './HeroDownloadButton.vue'

const { localeIndex } = useData()

// Font Awesome 图标（自 index.md frontmatter 的 iconHtml 原样迁移，EN/ZH 共享）
const SVG = {
  googlePlay: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M293.6 234.3L72.9 13 353.7 174.2 293.6 234.3zM15.3 0C2.3 6.8-6.4 19.2-6.4 35.3l0 441.3c0 16.1 8.7 28.5 21.7 35.3L271.9 255.9 15.3 0zM440.5 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM72.9 499L353.7 337.8 293.6 277.7 72.9 499z"/></svg>',
  windows: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z"/></svg>',
  linux: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="black" d="M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73"/></svg>',
  apple: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>'
}

interface Action {
  theme: 'download' | 'download-cn'
  text: string
  subtitle: string
  href: string
  iconSvg?: string
}

// hero 下载按钮（自两份 index.md 的 frontmatter hero.actions 迁移至此：
// ZH 的 APK 链接来自 version.mjs 单一数据源，YAML 无法引用构建期变量）
const actions = computed<Action[]>(() => {
  if (localeIndex.value === 'zh') {
    return [
      // 无 iconSvg → 使用内置下载箭头（与原 frontmatter 行为一致）
      { theme: 'download-cn', text: 'Android APK', subtitle: '立即下载', href: apkUrl },
      { theme: 'download', text: 'Windows', subtitle: '立即下载', href: 'https://apps.microsoft.com/detail/9NLQHVGWG5D2', iconSvg: SVG.windows },
      { theme: 'download', text: 'Linux', subtitle: '立即下载', href: 'https://github.com/Agr-Reader/Agr-Reader/releases', iconSvg: SVG.linux },
      // href 空字符串 = iOS 未发布，渲染不可点链接（保持现状）
      { theme: 'download', text: 'iOS/Macos', subtitle: '即将到来', href: '', iconSvg: SVG.apple }
    ]
  }
  return [
    { theme: 'download', text: 'Google Play', subtitle: 'Available on', href: 'https://play.google.com/store/apps/details?id=com.lowae.agrreader', iconSvg: SVG.googlePlay },
    { theme: 'download', text: 'Windows', subtitle: 'Available on', href: 'https://apps.microsoft.com/detail/9NLQHVGWG5D2', iconSvg: SVG.windows },
    { theme: 'download', text: 'Linux', subtitle: 'Available on', href: 'https://github.com/Agr-Reader/Agr-Reader/releases', iconSvg: SVG.linux },
    { theme: 'download', text: 'iOS/Macos', subtitle: 'Coming soon', href: '', iconSvg: SVG.apple }
  ]
})
</script>

<template>
  <div class="actions" style="align-items: center;">
    <div v-for="a in actions" :key="a.text" class="action">
      <HeroDownloadButton :text="a.text" :subtitle="a.subtitle" :href="a.href" :theme="a.theme" :icon-svg="a.iconSvg" />
    </div>
  </div>
  <div style="margin-top: 8px;">
    <a href="https://github.com/Agr-Reader/Agr-Reader/releases" style="text-decoration: underline;">
      Additional download options: Windows(Zip, Msi), Linux(Deb) and more
    </a>
    <p v-if="localeIndex === 'root'" style="text-decoration: underline; padding-top: 4px;">
      <a href="/zh">
        国内用户可前往此处下载->
      </a>
    </p>
  </div>
</template>
