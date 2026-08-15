<script setup lang="ts">
import { computed } from 'vue'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared'

interface Props {
  text: string
  subtitle?: string
  // 空字符串（iOS "Coming soon"）渲染为无 href 的 <a>——保持现状，非 bug
  href?: string
  theme?: 'download' | 'download-cn'
  iconSvg?: string
  target?: string
  rel?: string
}
const props = withDefaults(defineProps<Props>(), {
  theme: 'download'
})

const isExternal = computed(() => props.href && EXTERNAL_URL_RE.test(props.href))

// 无 iconSvg 时的内置下载箭头（ZH 版 Android APK 按钮依赖此回退图标）
const fallbackDownloadIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232f3a3f' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v10'/%3E%3Cpath d='M8 10l4 4 4-4'/%3E%3Cpath d='M5 18h14'/%3E%3C/svg%3E"
</script>

<template>
  <a class="VPButton medium" :class="theme"
    :href="href ? normalizeLink(href) : undefined"
    :target="target ?? (isExternal ? '_blank' : undefined)"
    :rel="rel ?? (isExternal ? 'noreferrer' : undefined)">
    <span v-if="iconSvg" class="download-icon icon-svg" aria-hidden="true" v-html="iconSvg"></span>
    <span v-else class="download-icon" aria-hidden="true">
      <img :src="fallbackDownloadIcon" alt="">
    </span>
    <span class="content">
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
      <span class="text">{{ text }}</span>
    </span>
  </a>
</template>

<style scoped>
.VPButton {
  display: inline-flex;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  align-items: center;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.VPButton.download {
  display: inline-flex;
  text-align: center;
  white-space: nowrap;
  align-items: center;
}

.VPButton .icon-svg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.VPButton .icon-svg :deep(svg) {
  width: 36px;
  height: 36px;
  display: block;
}

.VPButton .content {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.VPButton .subtitle {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  line-height: 1.2;
}

.VPButton .download-icon.icon-svg :deep(svg) {
  width: 18px;
  height: 18px;
}

.VPButton:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

/* 注意：不放 .VPButton.medium 的尺寸规则（padding/border-radius/line-height/font-size）。
   它们与 custom.css 的 .VPHomeHero .VPButton.download 皮肤特异性同为 (0,3,0)，
   谁胜取决于 CSS 注入顺序——按钮尺寸由 custom.css 唯一负责，避免级联对赌。 */
</style>
