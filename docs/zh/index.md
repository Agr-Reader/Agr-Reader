---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Agr Reader"
  text: Material3. Concise. Graceful. RSS Reader
  tagline: 简洁、优美、Material You风格的RSS阅读器
  image:
    src: /logo.png
    alt: Agr Reader
  actions:
    - theme: brand
      text: 立即下载(V1.11.0)
      link: /resources/Agr_Reader_1.11.0.apk
    - theme: alt
      text: 导航
      link: /navigation/index

features:
  - icon: 🎨
    title: 简洁而又优美 Material3 风格，各种主题色随心选择
    details: 完全遵循material3规范，带来视觉上一一致体验。
  - icon: 👍
    title: 强力且有效的全文解析
    details: 大部分页面都是可以全文解析的，并且默认支持离线阅读，给你带来纯净的阅读体验
  - icon: 📱
    title: 桌面小组件，一触即达
    details: 方便你第一时间获取新的推送文章，不落下每一篇推文
  - icon: ✏
    title: 丰富的自定义样式以及各项配置
    details: 阅读页文字样式配置，全部标记已读、滚动标记配置等等
  - icon: 👏
    title: 支持接入各种RSS服务
    details: 如FreshRSS, Tiny Tiny RSS, Miniflux, The Old Reader等主流自托管服务均可支持，包括以及Google Reader API和Fever API。inoreader、feedly正在逐步支持中...
  - icon: 🔠
    title: 支持沉浸式翻译效果
    details: 支持文章在列表中的标题翻译，支持文章内容的沉浸式翻译，轻松阅读外文RSS文章，不再有语言障碍
  - icon: 🖥️
    title: 宽屏模式
    details: 充分利用您的平板电脑或大屏幕设备，并排显示文章列表和阅读视图，让您无缝浏览。
  - icon: ☁️
    title: WebDAV备份
    details: 支持WebDAV备份和恢复，防止因意外情况而丢失您的RSS订阅源数据。
---

## 截图
<div class="horizontal-scroll">
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

## 常见问题
::: details 什么是RSS ？
RSS，全称为 Really Simple Syndication（简易信息聚合），是一种用于订阅和分发网站内容的格式。通过RSS，网站可以以结构化的方式提供文章的标题、摘要、全文等信息，用户只需订阅网站的RSS链接，就能在一个RSS阅读器中集中查看多个网站的更新内容。

简而言之，RSS让用户可以在一个地方看到多个信息源的最新内容，不必逐一访问每个网站。这种方式为用户提供了更高的内容获取效率和更强的自主性，避免了依赖算法推荐的随机性和信息过载问题。
:::

::: details 为什么选择 RSS？
在信息爆炸的时代，社交媒体和聚合阅读工具通过算法推荐大量内容，这些内容可能让我们感兴趣，但也会导致信息过载，使我们接触的资讯类型变得狭窄。

RSS（Really Simple Syndication）提供了解决方案。它让我们自主选择和订阅信息源，不受算法干扰，并按时间顺序显示内容。这样，我们能够有效地掌控接收的信息，避免信息过载。

尽管RSS使用门槛较高，但它的“听话”特性，正如一个按时完成任务的学生，让我们可以高效地获取所需信息，是应对现代资讯过量的理想工具。
:::
::: details 我要怎么寻找 RSS 订阅源？
可见：https://www.agrreader.xyz/navigation/
:::