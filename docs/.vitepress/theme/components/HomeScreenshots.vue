<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { homeData } from '../data/home'
import DeviceMock from './DeviceMock.vue'

const { localeIndex } = useData()
const data = computed(() => homeData[localeIndex.value === 'zh' ? 'zh' : 'root'])

const kindFor = (src: string) => (src.includes('desktop_cover') ? 'desktop' : 'phone')

const scroller = ref<HTMLElement | null>(null)
const progress = ref(0)
const canPrev = ref(false)
const canNext = ref(false)

// 更新进度条与箭头可用态
const update = () => {
  const el = scroller.value
  if (!el) return
  const max = el.scrollWidth - el.clientWidth
  progress.value = max > 0 ? el.scrollLeft / max : 0
  canPrev.value = el.scrollLeft > 4
  canNext.value = el.scrollLeft < max - 4
}

// 按“一项”的宽度平滑滚动
const scrollBy = (dir: 1 | -1) => {
  const el = scroller.value
  if (!el) return
  const step = Math.max(el.clientWidth * 0.6, 240)
  el.scrollBy({ left: dir * step, behavior: 'smooth' })
}

let ro: ResizeObserver | null = null
onMounted(() => {
  const el = scroller.value
  if (!el) return
  update()
  el.addEventListener('scroll', update, { passive: true })
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(update)
    ro.observe(el)
  }
})
onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', update)
  ro?.disconnect()
})
</script>

<template>
  <section class="agr-section">
    <h2 class="agr-section-title">{{ data.screenshotsTitle }}</h2>

    <div class="agr-gallery-wrap">
      <div ref="scroller" class="agr-gallery agr-gallery-fade">
        <DeviceMock
          v-for="s in data.screenshots"
          :key="s.src"
          :src="s.src"
          :alt="s.alt"
          :caption="s.caption"
          :kind="kindFor(s.src)"
        />
      </div>

      <button
        type="button"
        class="agr-gallery-arrow prev"
        :class="{ 'is-disabled': !canPrev }"
        aria-label="Previous"
        @click="scrollBy(-1)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        type="button"
        class="agr-gallery-arrow next"
        :class="{ 'is-disabled': !canNext }"
        aria-label="Next"
        @click="scrollBy(1)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    </div>

    <div class="agr-gallery-progress" aria-hidden="true">
      <span class="agr-gallery-progress-fill" :style="{ transform: `scaleX(${progress})` }"></span>
    </div>
  </section>
</template>
