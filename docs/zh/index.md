---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Agr Reader"
  text: 轻量、功能齐全、AI 驱动
  tagline: 优雅而强大的 RSS 阅读器，给你带来无缝且个性化的阅读体验。
  image:
    src: /logo.png
    alt: Agr Reader
  actions:
    - theme: download-cn
      text: Android APK
      subtitle: 立即下载
      link: https://resource.agrreader.com/f/O7Fa/Agr_Reader_1.17.1.apk
    - theme: download
      text: Windows
      subtitle: 立即下载
      link: https://apps.microsoft.com/detail/9NLQHVGWG5D2
      iconHtml: |
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z"/></svg>
    - theme: download
      text: Linux
      subtitle: 立即下载
      link: https://github.com/Agr-Reader/Agr-Reader/releases
      iconHtml: |
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="black" d="M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.3 4.3 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73"/></svg>
    - theme: download
      text: iOS/Macos
      subtitle: 即将到来
      link: 
      iconHtml: |
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
features:
  - icon: 🎨
    title: Material You 动态配色的现代设计
    details: 跟随壁纸与系统颜色的动态主题，界面简洁、精致且轻量。
  - icon: 👍
    title: 随时随地阅读（全文 + 离线）
    details: 全文提取与离线阅读，让你无需来回跳转页面也能读完文章；通勤、飞行或弱网环境都很好用。
  - icon: 👏
    title: 与工作流契合的 RSS 同步
    details: 通过 Feedly、Feedbin、The Old Reader、Bazqux 以及 FreshRSS、Miniflux、Tiny Tiny RSS 等自建服务同步订阅（以及阅读进度，取决于服务支持），并兼容 Google Reader / Fever API。
  - icon: 🤖
    title: AI 助手，帮你更快理解
    details: 支持自定义 Prompt，生成摘要、翻译、要点提炼与可分享的回顾文案。
  - icon: 🛠️
    title: 深度自定义，阅读更高效
    details: 细调字号/字重、行距与布局，配置手势，并简化“滚动标记已读”“全部标记已读”等已读/未读操作流程。
  - icon: 🔠
    title: 舒适的多语言阅读体验
    details: 支持列表标题翻译与文章双语对照阅读，适合语言学习与跨语言浏览。
  - icon: 📱
    title: 跨设备也顺手
    details: 平板/大屏分栏视图 + 桌面小组件，快速补读更方便。
  - icon: ☁️
    title: WebDAV 备份与恢复，更安心换机
    details: 通过 WebDAV 备份与恢复，迁移更省心，降低意外丢失风险。
---

## 截图
<div class="horizontal-scroll">
  <img src="/screenshots/mobile_cover.webp" alt="Android" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/desktop_cover.webp" alt="Windows/Linux/Macos" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/1.webp" alt="简洁而又优美的Material3风格，各种主题随心选择" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/2.webp" alt="强力且有效的网页全文解析" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/3.webp" alt="桌面小组件，一触即达" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/4.webp" alt="丰富的自定义阅读样式配置" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/5.webp" alt="支持FreshRSS, Miniflux, Tiny Tiny RSS托管服务" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/6.webp" alt="沉浸式翻译，轻松阅读外文RSS" data-zoomable class="image_screenshot medium-zoom-image">
  <img src="/screenshots/7.webp" alt="平板模式" data-zoomable class="image_screenshot medium-zoom-image">
</div>

## RSSHub <Badge type="tip" text="自建服务" />
详细内容可见👉[Agr Reader's RSSHub](/zh/navigation/#agr-reader-s-rsshub)
<div style="padding: 20px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; background-color: var(--vp-c-bg-soft); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <img src="/images/rsshub-logo.webp" alt="RSSHub" width="100" loading="lazy" style="margin-bottom: 20px;"/>
  <h1 style="margin-bottom: 20px; text-align: center;">Welcome to <span style="color:var(--vp-c-brand-1);"><a href="https://rsshub.agrreader.xyz/">Agr Reader's</a></span> <span style="color: #FF5722; ">RSSHub</span>!</h1>
  <button 
    onclick="window.location.href='https://rsshub.agrreader.xyz/';" 
    style="
      background-color: #FF5722; 
      color: white; 
      padding: 10px 40px; 
      border-radius: 20px; 
      cursor: pointer; 
      font-size: 16px; 
      transition: background-color 0.3s ease, transform 0.2s ease;
      "
      onmouseover="this.style.backgroundColor='#E64A19'; this.style.transform='scale(1.05)';"
      onmouseout="this.style.backgroundColor='#FF5722'; this.style.transform='scale(1)';"
      onmousedown="this.style.transform='scale(1.02)';"
      onmouseup="this.style.transform='scale(1.05)';"
      >
    GO!
  </button>
</div>

## 简介
Agr Reader 是一款简洁、快速的 Material You 风格 Android RSS 阅读器（信息聚合器），支持通过你常用的 RSS 服务顺滑同步。

把你喜欢的博客、新闻站点和各类网站集中到一起，按时间顺序阅读，并通过强大的工具（AI 助手、沉浸式翻译、全文提取、深度自定义）更高效地处理信息，同时保持轻量、精致的阅读体验。
> [让你的 RSS 阅读效率起飞：Agr Reader AI 提示词套装](/zh/articles/ai-prompt)
### 随时随地阅读（全文 + 离线）
无需在网页间来回跳转，全文提取与离线阅读让你在通勤、飞行或弱网环境下也能安心读完。

### 与工作流契合的 RSS 同步
Agr Reader 可接入多种 RSS 平台，让你的订阅（以及阅读进度，取决于服务支持）在设备间保持同步：

- **主流平台：** Feedly、Feedbin、The Old Reader、Bazqux
- **自建服务：** FreshRSS、Miniflux、Tiny Tiny RSS
- **兼容 API：** Google Reader API / Fever API

### [为什么你会喜欢 Agr Reader](/zh/articles/why-agr-reader)
- **AI 更快理解：** 通过自定义 Prompt 生成摘要、翻译、要点提炼与可分享的回顾文案。
- **阅读完全按你来：** 微调字号/字重、行距与布局，配置手势，并简化“滚动标记已读”“全部标记已读”等已读/未读工作流。
- **Material You 设计：** 动态主题配色，跟随壁纸与系统颜色。
- **多语言阅读更顺滑：** 列表标题翻译 + 文章双语对照，适合语言学习与跨语言浏览。
- **跨设备更现代：** 平板/大屏分栏视图 + 桌面小组件，快速补读不费力。
- **更安心的迁移：** WebDAV 备份与恢复，换机更省心，降低意外丢失风险。

### 适合哪些人？
- 关注博客、科技站点与新闻资讯的 RSS 用户
- 需要离线阅读与全文模式的读者
- 经常阅读外语内容的用户
- 重视设计、速度与可定制性的用户

如果你在找一款兼顾 Material You 界面、强大自定义与可靠同步的 Android RSS 阅读器，试试 Agr Reader。
