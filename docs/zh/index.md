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
features:
  - icon: 🧭
    title: 将你的阅读内容集中到一处
    details: 把博客、新闻网站、产品更新和各类网页统一收进一个 RSS 收件箱，按时间顺序清爽阅读，远离算法干扰。

  - icon: 🎨
    title: 优雅的 Material You 设计
    details: 享受简洁、精致的 Material3 体验，动态配色可跟随壁纸与系统主题变化，轻盈现代，观感舒适。

  - icon: 👍
    title: 随时随地阅读，离线也可以
    details: 全文提取与离线阅读让你无需反复跳转网页，也能完整读完文章，非常适合通勤、飞行和弱网环境。

  - icon: 👏
    title: 适配你的 RSS 同步方式
    details: 支持与你常用的 RSS 服务同步，包括 Feedly、Feedbin、The Old Reader、Bazquz、FreshRSS、Miniflux、Tiny Tiny RSS，以及 Google Reader 和 Fever API。

  - icon: 🌐
    title: 通过 RSSHub 发现更多内容
    details: 内置 RSSHub 支持，帮助将更多网站转化为可订阅来源，让那些没有标准 RSS Feed 的内容也更容易被关注。

  - icon: 🤖
    title: 用 AI 更快理解内容
    details: 使用自定义提示词快速总结文章、翻译内容、提取重点，并将长文转化为适合分享的摘要。

  - icon: 🧩
    title: 构建属于你的阅读工作流
    details: 通过提示词串联总结、标记、翻译和分享流程，让每篇文章都能自然地从“阅读”进入“理解”与“行动”。

  - icon: 🔠
    title: 为多语言阅读而生
    details: 支持标题翻译与双语文章视图，更轻松地阅读外语订阅源、学习语言，并浏览不同地区的内容。

  - icon: 🛠️
    title: 打造刚刚好的阅读体验
    details: 自由调整字体、间距、布局、手势，以及已读/未读操作，例如“滚动时标为已读”或“一键全部标为已读”，让阅读更高效、更舒适。

  - icon: 📱
    title: 每块屏幕都有更好的体验
    details: 在平板和大屏设备上使用分栏阅读，通过桌面小组件快速查看最新文章，让布局适应你的阅读方式。

  - icon: 💻
    title: 不止于 Android
    details: 从 Android 开始，也可在 Windows 和 Linux 桌面端继续使用；iOS 与 macOS 支持也在规划中。

  - icon: ☁️
    title: 换机迁移更安心
    details: WebDAV 备份与恢复帮助保护你的阅读配置，降低意外数据丢失风险，也让迁移到新设备更顺畅。
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
<RssHubCard />

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
