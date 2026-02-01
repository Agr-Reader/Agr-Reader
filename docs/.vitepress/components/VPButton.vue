<script setup lang="ts">
import { computed } from 'vue'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared'

interface Props {
  tag?: string
  size?: 'medium' | 'big'
  theme?: string
  text: string
  subtitle?: string
  icon?: string
  iconAlt?: string
  iconHtml?: string
  href?: string
  target?: string;
  rel?: string;
}
const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  theme: 'brand'
})

const isExternal = computed(
  () => props.href && EXTERNAL_URL_RE.test(props.href)
)

const component = computed(() => {
  return props.tag || props.href ? 'a' : 'button'
})

const isDownloadTheme = computed(() => {
  const theme = props.theme ?? ''
  return theme === 'download' || theme === 'download-cn' || theme.startsWith('download-')
})

const fallbackDownloadIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232f3a3f' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v10'/%3E%3Cpath d='M8 10l4 4 4-4'/%3E%3Cpath d='M5 18h14'/%3E%3C/svg%3E"

const resolvedIcon = computed(() => {
  if (props.iconHtml) return ''
  if (props.icon) return props.icon
  if (isDownloadTheme.value) return fallbackDownloadIcon
  if (props.theme === 'brand') return '/logo.png'
  return ''
})
</script>

<template>
  <component is="a" v-if="theme === 'google'" class="VPButton" :href="href ? normalizeLink(href) : undefined"
    :target="props.target ?? (isExternal ? '_blank' : undefined)"
    :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)" >
    <img src="/google-play-badge.png" style="width: 14rem;">
  </component>
  <component v-else :is="component" class="VPButton" :class="[size, theme]"
    :href="href ? normalizeLink(href) : undefined" :target="props.target ?? (isExternal ? '_blank' : undefined)"
    :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)">
    <span v-if="isDownloadTheme && props.iconHtml" class="download-icon icon-svg" aria-hidden="true" v-html="props.iconHtml"></span>
    <span v-else-if="isDownloadTheme && resolvedIcon" class="download-icon" aria-hidden="true">
      <img :src="resolvedIcon" :alt="props.iconAlt ?? ''">
    </span>
    <span v-else-if="props.iconHtml" class="icon icon-svg" aria-hidden="true" v-html="props.iconHtml"></span>
    <img v-else-if="resolvedIcon" :src="resolvedIcon" :alt="props.iconAlt ?? ''" class="icon">
    <span class="content">
      <span v-if="props.subtitle" class="subtitle">{{ props.subtitle }}</span>
      <span class="text">{{ text }}</span>
    </span>
  </component>
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

.VPButton .icon {
  margin-right: 0.5em;
  width: 36px;
  /* 根据需要调整图片大小 */
  height: 36px;
  vertical-align: middle;
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

.VPButton.medium {
  border-radius: 26px;
  padding: 6px 24px;
  line-height: 38px;
  font-size: 18px;
}

.VPButton.big {
  border-radius: 24px;
  padding: 0 24px;
  line-height: 46px;
  font-size: 16px;
}

.VPButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.VPButton.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.VPButton.brand:active {
  border-color: var(--vp-button-brand-active-border);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
}

.VPButton.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.VPButton.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.VPButton.alt:active {
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
}

.VPButton.sponsor {
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.VPButton.sponsor:hover {
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}

.VPButton.sponsor:active {
  border-color: var(--vp-button-sponsor-active-border);
  color: var(--vp-button-sponsor-active-text);
  background-color: var(--vp-button-sponsor-active-bg);
}
</style>
