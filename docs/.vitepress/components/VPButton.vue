<script setup lang="ts">
import { computed } from 'vue'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared'

interface Props {
  tag?: string
  size?: 'medium' | 'big'
  theme?: 'brand' | 'alt' | 'sponsor' | 'google'
  text: string
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
</script>

<template>
  <component is="a" v-if="theme === 'google'" class="VPButton" :href="href ? normalizeLink(href) : undefined"
    :target="props.target ?? (isExternal ? '_blank' : undefined)"
    :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)" >
    <img src="/google-play-badge.png" style="width: 14rem;">
  </component>
  <component v-else :is="component" class="VPButton" :class="[size, theme]"
    :href="href ? normalizeLink(href) : undefined" :target="props.target ?? (isExternal ? '_blank' : undefined)"
    :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)" :download="theme === 'brand' ? 'Agr_Reader_1.9.3.apk' : undefined">
    <img v-if="theme === 'brand'" src="/logo.png" alt="Icon" class="icon">
    <span class="text">{{ text }}</span>
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