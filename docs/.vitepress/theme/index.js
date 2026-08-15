import DefaultTheme from "vitepress/theme";
import { onMounted, watch, nextTick, h } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";

import "./custom.css";
import HomeHeroBadge from "./components/HomeHeroBadge.vue";
import HomeHeroActions from "./components/HomeHeroActions.vue";
import RssHubCard from "./components/RssHubCard.vue";

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "home-hero-info-before": () => h(HomeHeroBadge),
      "home-hero-actions-after": () => h(HomeHeroActions),
    }),
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
      // mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  // VitePress 1.2.2 无组件自动注册，markdown 中使用的组件必须在此手动注册
  enhanceApp({ app }) {
    app.component("RssHubCard", RssHubCard);
  },
};
