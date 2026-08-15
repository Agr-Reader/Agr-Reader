<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { homeData } from '../data/home'

const { localeIndex } = useData()
const data = computed(() => homeData[localeIndex.value === 'zh' ? 'zh' : 'root'])

const goLabel = computed(() => (localeIndex.value === 'zh' ? '前往' : 'GO!'))
const RSSHUB_URL = 'https://rsshub.agrreader.com/'
</script>

<template>
  <div class="rsshub-card">
    <img class="rsshub-card-logo" src="/images/rsshub-logo.webp" alt="RSSHub" width="56" height="56" loading="lazy" />
    <div class="rsshub-card-body">
      <p class="rsshub-card-title">
        <a :href="RSSHUB_URL" target="_blank" rel="noreferrer" class="rsshub-card-brand">Agr Reader's</a>
        <span class="rsshub-card-accent"> RSSHub</span>
      </p>
      <p class="rsshub-card-desc">{{ data.rssHubDesc }}</p>
    </div>
    <a class="rsshub-card-go" :href="RSSHUB_URL" target="_blank" rel="noreferrer">{{ goLabel }}</a>
  </div>
</template>
