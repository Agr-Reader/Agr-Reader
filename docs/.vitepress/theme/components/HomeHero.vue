<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { homeData } from '../data/home'
import HomeHeroBadge from './HomeHeroBadge.vue'
import HomeHeroActions from './HomeHeroActions.vue'
import DeviceMock from './DeviceMock.vue'

const { localeIndex } = useData()
const data = computed(() => homeData[localeIndex.value === 'zh' ? 'zh' : 'root'])
</script>

<template>
  <div class="agr-hero VPHomeHero">
    <div class="agr-hero-inner">
      <div class="agr-hero-copy">
        <HomeHeroBadge />
        <h1 class="agr-hero-name">{{ data.heroName }}</h1>
        <p class="agr-hero-text">{{ data.heroText }}</p>
        <p class="agr-hero-tagline">{{ data.heroTagline }}</p>
        <HomeHeroActions />
      </div>
      <div class="agr-hero-visual">
        <div class="agr-hero-glow" aria-hidden="true"></div>
        <DeviceMock class="agr-hero-desktop" src="/screenshots/gallery-macos.png" alt="Agr Reader on macOS" kind="desktop" />
        <DeviceMock class="agr-hero-phone" src="/screenshots/gallery-iphone.png" alt="Agr Reader on iPhone" kind="phone" />
      </div>
    </div>
  </div>
</template>
