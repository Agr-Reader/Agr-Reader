import DefaultTheme from "vitepress/theme";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";

import "./custom.css";
import RssHubCard from "./components/RssHubCard.vue";
import CustomHome from "./components/CustomHome.vue";

export default {
  extends: DefaultTheme,
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
  // VitePress 1.2.2 无组件自动注册，markdown 中使用的组件必须在此手动注册。
  // RssHubCard 供首页（HomeRssHub）及两份导航页使用，保留全局注册；CustomHome 为首页入口组件。
  enhanceApp({ app }) {
    app.component("RssHubCard", RssHubCard);
    app.component("CustomHome", CustomHome);
  },
};
