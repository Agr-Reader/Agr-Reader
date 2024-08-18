import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Agr Reader",
  titleTemplate: "Material3风格的极简优美的RSS阅读器",
  description: "Agr Reader - Material3风格的极简优美的RSS阅读器",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/navigation/index' },
      { text: '更新日志', link: '/changelog/index' },
      { text: '隐私政策', link: '/privacy' }
    ],

    sidebar: {
      '/navigation/': [
        {
          text: '目录',
          items: [
            { text: 'RSS服务接入教程', link: '/navigation/rss-service' },
            { text: '订阅源设置', link: '/navigation/feed-info' },
            { text: '备份设置', link: '/navigation/webdav' },
            { text: '微信公众号RSS', link: '/navigation/wechat' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg>`
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
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
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPButton\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPButton.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
