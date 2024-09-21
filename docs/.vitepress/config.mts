import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Agr Reader",
      titleTemplate: "Material3. Concise. Graceful. RSS Reader",
      description: "A minimalist and elegant Material3-style RSS reader",
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
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Livello_1" data-name="Livello 1" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>'
            }, link: 'https://t.me/agrreader'
          },
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
      titleTemplate: "Material3. Concise. Graceful. RSS Reader",
      description: "简洁优美的Material You风格的RSS阅读器",
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
