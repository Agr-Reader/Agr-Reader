<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeScreenshots from './HomeScreenshots.vue'
import HomeRssHub from './HomeRssHub.vue'
import { vReveal } from '../composables/useReveal'
</script>

<template>
  <div class="agr-home">
    <HomeHero />
    <HomeFeatures v-reveal />
    <HomeScreenshots v-reveal />
    <HomeRssHub v-reveal />
  </div>
</template>
