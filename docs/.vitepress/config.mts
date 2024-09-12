import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Agr Reader",
  titleTemplate: "Material3. Concise. Graceful. RSS Reader",
  description: "Agr Reader - A minimalist and elegant Material3-style RSS reader",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Navigation', link: '/navigation/index' },
          { text: 'Changelog', link: '/changelog/index' },
          { text: 'Privacy', link: '/privacy' }
        ],

        sidebar: {
          '/navigation/': [
            {
              text: 'Catalog',
              items: [
                { text: 'RSS Service Integration Guide', link: '/navigation/rss-service' },
                { text: 'RSS Feed Settings', link: '/navigation/feed-info' },
                { text: 'Backup Settings', link: '/navigation/webdav' },
                // { text: '微信公众号RSS', link: '/navigation/wechat' },
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' }
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
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '导航', link: '/zh/navigation/index' },
          { text: '更新日志', link: '/zh/changelog/index' },
          { text: '隐私政策', link: '/zh/privacy' }
        ],

        sidebar: {
          '/zh/navigation/': [
            {
              text: '目录',
              items: [
                { text: 'RSS服务接入教程', link: '/zh/navigation/rss-service' },
                { text: '订阅源设置', link: '/zh/navigation/feed-info' },
                { text: '备份设置', link: '/zh/navigation/webdav' },
                { text: '微信公众号RSS', link: '/zh/navigation/wechat' },
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' }
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
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPButton\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPButton.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPHero.vue', import.meta.url)
          )
        }
      ]
    }
  },
  sitemap: {
    hostname: 'https://www.agrreader.xyz'
  }
})
