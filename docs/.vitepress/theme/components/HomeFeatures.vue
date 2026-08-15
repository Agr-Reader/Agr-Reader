<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { homeData } from '../data/home'
import FeatureCard from './FeatureCard.vue'

const { localeIndex } = useData()
const data = computed(() => homeData[localeIndex.value === 'zh' ? 'zh' : 'root'])
</script>

<template>
  <section class="agr-section">
    <h2 class="agr-section-title">{{ data.featuresTitle }}</h2>
    <p class="agr-section-subtitle">{{ data.featuresSubtitle }}</p>
    <div class="agr-features-grid">
      <FeatureCard
        v-for="f in data.features"
        :key="f.title"
        :icon="f.icon"
        :title="f.title"
        :details="f.details"
        :tint="f.tint"
      />
    </div>
    <div class="agr-sync">
      <p class="agr-sync-title">{{ data.syncTitle }}</p>
      <div class="agr-sync-chips">
        <span v-for="s in data.syncServices" :key="s" class="agr-sync-chip">{{ s }}</span>
      </div>
    </div>
  </section>
</template>
