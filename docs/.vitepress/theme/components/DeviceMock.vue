<script setup lang="ts">
interface Props {
  src: string
  alt: string
  kind?: 'phone' | 'desktop'
  caption?: string
}
withDefaults(defineProps<Props>(), { kind: 'phone' })
</script>

<template>
  <figure class="agr-device" :class="`agr-device-${kind}`">
    <div class="agr-device-frame">
      <img :src="src" :alt="alt" data-zoomable class="image_screenshot medium-zoom-image" loading="lazy" />
    </div>
    <figcaption v-if="caption" class="agr-device-caption">{{ caption }}</figcaption>
  </figure>
</template>
