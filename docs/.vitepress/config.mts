import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Agr Reader Changelog (EN)', href: '/rss/changelog.xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Agr Reader Changelog (ZH)', href: '/rss/changelog-zh.xml' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Agr Reader",
      titleTemplate: "Lightweight. Full-Featured. AI-Powered RSS Reader",
      description: "Elegant, powerful RSS Reader for a seamless, personalized experience.",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Articles', link: '/articles/index' },
          { text: 'Navigation', link: '/navigation/index' },
          { text: 'Changelog', link: '/changelog/index' },
          { text: 'Privacy', link: '/privacy' }
        ],

        sidebar: {
          '/navigation/': [
            {
              text: 'Catalog',
              items: [
                { text: 'User Guide', link: '/navigation/how-to-use' },
                { text: 'RSS Service Integration Guide', link: '/navigation/rss-service' },
                { text: 'RSS Feed Settings', link: '/navigation/feed-info' },
                { text: 'Backup Settings', link: '/navigation/webdav' },
              ]
            }
          ],
          '/articles/': [
            {
              text: 'Articles',
              items: [
                { text: 'Why Choose Agr Reader', link: '/articles/why-agr-reader' },
                { text: 'Supercharge Your RSS Reading: Agr Reader AI Prompt Pack', link: '/articles/ai-prompt' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' },
          { icon: 'mastodon', link: 'https://mastodon.social/@Lowae' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"/></svg>'
            },
            link: 'https://bsky.app/profile/lowae.bsky.social'
          }
        ],
        footer: {
          message: 'Made with ❤️ by Lowae.',
          copyright: 'Copyright © 2024-present Lowae'
        },
        search: {
          provider: 'local'
        }
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      title: "Agr Reader",
      titleTemplate: "轻量、功能齐全、AI 驱动的 RSS 阅读器",
      description: "优雅而强大的 RSS 阅读器，给你带来无缝且个性化的阅读体验。",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '文章', link: '/zh/articles/index' },
          { text: '导航', link: '/zh/navigation/index' },
          { text: '更新日志', link: '/zh/changelog/index' },
          { text: '隐私政策', link: '/zh/privacy' }
        ],

        sidebar: {
          '/zh/navigation/': [
            {
              text: '目录',
              items: [
                { text: '使用教程', link: '/zh/navigation/how-to-use' },
                { text: 'RSS服务接入教程', link: '/zh/navigation/rss-service' },
                { text: '订阅源设置', link: '/zh/navigation/feed-info' },
                { text: '备份设置', link: '/zh/navigation/webdav' },
                { text: '微信公众号RSS', link: '/zh/navigation/wechat' },
                { text: '为什么选择Agr Reader', link: '/zh/articles/why-agr-reader' },
              ]
            }
          ],
          '/zh/articles/': [
            {
              text: '文章',
              items: [
                { text: '为什么选择Agr Reader', link: '/zh/articles/why-agr-reader' },
                { text: '让你的 RSS 阅读效率起飞：Agr Reader AI Prompt 套装', link: '/zh/articles/ai-prompt' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' },
          { icon: 'mastodon', link: 'https://mastodon.social/@Lowae' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"/></svg>'
            },
            link: 'https://bsky.app/profile/lowae.bsky.social'
          }
        ],
        footer: {
          message: 'Made with ❤️ by Lowae.',
          copyright: 'Copyright © 2024-present Lowae'
        },
        search: {
          provider: 'local'
        }
      },
    }
  },
  sitemap: {
    hostname: 'https://agrreader.com'
  }
})
