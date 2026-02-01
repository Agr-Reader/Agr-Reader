<script setup lang="ts">
import { type Ref, inject, onMounted, ref } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

export interface HeroAction {
    theme?: string
    text: string
    subtitle?: string
    link: string
    icon?: string
    iconAlt?: string
    iconHtml?: string
    target?: string
    rel?: string
}

defineProps<{
    name?: string
    text?: string
    tagline?: string
    image?: DefaultTheme.ThemeableImage
    actions?: HeroAction[]
    tip?: string
}>()

const heroImageSlotExists = inject('hero-image-slot-exists') as Ref<boolean>
</script>

<template>
    <div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
        <div class="container">
            <div class="main">
                <slot name="home-hero-info-before" />
                <a href="https://www.producthunt.com/products/agr-reader?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-agr&#0045;reader"
                    target="_blank" class="ProductHunt-badge"><img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1011330&theme=light&t=1756642981749"
                        alt="Agr&#0032;Reader - Material3&#0046;&#0032;Concise&#0046;&#0032;Graceful&#0046;&#0032;RSS&#0032;Reader | Product Hunt"
                        style="width: 250px; height: 54px; margin-bottom: 8px;" width="250" height="54" /></a>
                <slot name="home-hero-info">
                    <h1 v-if="name" class="name">
                        <span v-html="name" class="clip"></span>
                    </h1>
                    <h2 v-if="text" v-html="text" class="text"></h2>
                    <h3 v-if="tagline" v-html="tagline" class="tagline"></h3>
                </slot>
                <slot name="home-hero-info-after" />
                <div v-if="actions" class="actions" style="align-items: center;">
                    <div v-for="action in actions" :key="action.link" class="action">
                        <VPButton tag="a" size="medium" :theme="action.theme" :text="action.text"
                            :subtitle="action.subtitle" :href="action.link" :icon="action.icon"
                            :iconAlt="action.iconAlt" :iconHtml="action.iconHtml" :target="action.target"
                            :rel="action.rel" />
                    </div>
                </div>
                <a v-if="actions?.[0].text === 'Google Play'" href="/zh"
                    style="text-decoration: underline; margin-left: 2px; color: var(--vp-c-text-2); font-size: 14px; font-weight: 400;">
                    中国用户可前往此处下载
                </a>
                <slot name="home-hero-actions-after" />
            </div>
            <div v-if="image || heroImageSlotExists" class="image">
                <div class="image-container">
                    <div class="image-bg" />
                    <slot name="home-hero-image">
                        <VPImage v-if="image" class="image-src" :image="image" />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.VPHero {
    margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
    }
}

@media (min-width: 960px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;
}

@media (min-width: 960px) {
    .container {
        flex-direction: row;
    }
}

.main {
    position: relative;
    z-index: 10;
    order: 2;
    flex-grow: 1;
    flex-shrink: 0;
}

.VPHero.has-image .container {
    text-align: center;
}

@media (min-width: 960px) {
    .VPHero.has-image .container {
        text-align: left;
    }
}

@media (min-width: 960px) {
    .main {
        order: 1;
        width: calc((100% / 3) * 2);
    }

    .VPHero.has-image .main {
        max-width: 592px;
    }
}

.name,
.text {
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
    margin: 0 auto;
}

.name {
    color: var(--vp-home-hero-name-color);
}

.clip {
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {

    .name,
    .text {
        max-width: 576px;
        line-height: 56px;
        font-size: 48px;
    }
}

@media (min-width: 960px) {

    .name,
    .text {
        line-height: 64px;
        font-size: 56px;
    }

    .VPHero.has-image .name,
    .VPHero.has-image .text {
        margin: 0;
    }
}

.tagline {
    padding-top: 8px;
    max-width: 392px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
    margin: 0 auto;
}

@media (min-width: 640px) {
    .tagline {
        padding-top: 12px;
        max-width: 576px;
        line-height: 32px;
        font-size: 20px;
    }
}

@media (min-width: 960px) {
    .tagline {
        line-height: 36px;
        font-size: 24px;
    }

    .VPHero.has-image .tagline {
        margin: 0;
    }
}

.actions {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
    padding-top: 24px;
}

.VPHero.has-image .actions {
    justify-content: center;
}

@media (min-width: 640px) {
    .actions {
        padding-top: 32px;
    }
}

@media (min-width: 960px) {
    .VPHero.has-image .actions {
        justify-content: flex-start;
    }
}

.action {
    flex-shrink: 0;
    padding: 6px;
}

.image {
    order: 1;
    margin: -76px -24px -48px;
}

@media (min-width: 640px) {
    .image {
        margin: -108px -24px -48px;
    }
}

@media (min-width: 960px) {
    .image {
        flex-grow: 1;
        order: 2;
        margin: 0;
        min-height: 100%;
    }
}

.image-container {
    position: relative;
    margin: 0 auto;
    width: 320px;
    height: 320px;
}

@media (min-width: 640px) {
    .image-container {
        width: 392px;
        height: 392px;
    }
}

@media (min-width: 960px) {
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /*rtl:ignore*/
        transform: translate(-32px, -32px);
    }
}

.image-bg {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    .image-bg {
        width: 256px;
        height: 256px;
    }
}

@media (min-width: 960px) {
    .image-bg {
        width: 320px;
        height: 320px;
    }
}

:deep(.image-src) {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    max-width: 192px;
    max-height: 192px;
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    :deep(.image-src) {
        max-width: 256px;
        max-height: 256px;
    }
}

@media (min-width: 960px) {
    :deep(.image-src) {
        max-width: 320px;
        max-height: 320px;
    }
}
</style>
