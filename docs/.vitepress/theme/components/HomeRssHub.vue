<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { homeData } from '../data/home'

const { localeIndex } = useData()
const data = computed(() => homeData[localeIndex.value === 'zh' ? 'zh' : 'root'])
</script>

<template>
  <section class="agr-section">
    <h2 class="agr-section-title">
      {{ data.rssHubTitle }}
      <span class="agr-badge">{{ data.rssHubBadge }}</span>
    </h2>
    <p class="agr-rsshub-link">
      <a :href="data.rssHubLinkHref">{{ data.rssHubLinkText }}</a>
    </p>
    <RssHubCard />
  </section>
</template>
