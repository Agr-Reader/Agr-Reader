<script setup lang="ts">
import IconSvg from './IconSvg.vue'
import type { FeatureTint } from '../data/home'

interface Props {
  icon: string
  title: string
  details: string
  tint?: FeatureTint
}
withDefaults(defineProps<Props>(), { tint: 'green' })
</script>

<template>
  <div class="agr-feature-card">
    <div class="agr-feature-icon" :class="`tint-${tint}`">
      <IconSvg :svg="icon" />
    </div>
    <h3 class="agr-feature-title">{{ title }}</h3>
    <p class="agr-feature-details">{{ details }}</p>
  </div>
</template>
