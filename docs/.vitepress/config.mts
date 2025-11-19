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
                { text: 'User Guide', link: '/navigation/how-to-use' },
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
          // {
          //   icon: {
          //     svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Livello_1" data-name="Livello 1" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>'
          //   }, link: 'https://t.me/agrreader'
          // },
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
                { text: '使用教程', link: '/zh/navigation/how-to-use' },
                { text: 'RSS服务接入教程', link: '/zh/navigation/rss-service' },
                { text: '订阅源设置', link: '/zh/navigation/feed-info' },
                { text: '备份设置', link: '/zh/navigation/webdav' },
                { text: '微信公众号RSS', link: '/zh/navigation/wechat' },
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Agr-Reader/Agr-Reader' },
          // {
          //   icon: {
          //     svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#FFC107" d="M17.5,44c-3.6,0-6.5-1.6-6.5-3.5s2.9-3.5,6.5-3.5s6.5,1.6,6.5,3.5S21.1,44,17.5,44z M37,40.5c0-1.9-2.9-3.5-6.5-3.5S24,38.6,24,40.5s2.9,3.5,6.5,3.5S37,42.4,37,40.5z"></path><path fill="#37474F" d="M37.2,22.2c-0.1-0.3-0.2-0.6-0.3-1c0.1-0.5,0.1-1,0.1-1.5c0-1.4-0.1-2.6-0.1-3.6C36.9,9.4,31.1,4,24,4S11,9.4,11,16.1c0,0.9,0,2.2,0,3.6c0,0.5,0,1,0.1,1.5c-0.1,0.3-0.2,0.6-0.3,1c-1.9,2.7-3.8,6-3.8,8.5C7,35.5,8.4,35,8.4,35c0.6,0,1.6-1,2.5-2.1C13,38.8,18,43,24,43s11-4.2,13.1-10.1C38,34,39,35,39.6,35c0,0,1.4,0.5,1.4-4.3C41,28.2,39.1,24.8,37.2,22.2z"></path><path fill="#ECEFF1" d="M14.7,23c-0.5,1.5-0.7,3.1-0.7,4.8C14,35.1,18.5,41,24,41s10-5.9,10-13.2c0-1.7-0.3-3.3-0.7-4.8H14.7z"></path><path fill="#FFF" d="M23,13.5c0,1.9-1.1,3.5-2.5,3.5S18,15.4,18,13.5s1.1-3.5,2.5-3.5S23,11.6,23,13.5z M27.5,10c-1.4,0-2.5,1.6-2.5,3.5s1.1,3.5,2.5,3.5s2.5-1.6,2.5-3.5S28.9,10,27.5,10z"></path><path fill="#37474F" d="M22,13.5c0,0.8-0.4,1.5-1,1.5s-1-0.7-1-1.5s0.4-1.5,1-1.5S22,12.7,22,13.5z M27,12c-0.6,0-1,0.7-1,1.5s0.4-0.5,1-0.5s1,1.3,1,0.5S27.6,12,27,12z"></path><path fill="#FFC107" d="M32,19.5c0,0.8-3.6,2.5-8,2.5s-8-1.7-8-2.5s3.6-1.5,8-1.5S32,18.7,32,19.5z"></path><path fill="#FF3D00" d="M38.7,21.2c-0.4-1.5-1-2.2-2.1-1.3c0,0-5.9,3.1-12.5,3.1v0.1l0-0.1c-6.6,0-12.5-3.1-12.5-3.1c-1.1-0.8-1.7-0.2-2.1,1.3c-0.4,1.5-0.7,2,0.7,2.8c0.1,0.1,1.4,0.8,3.4,1.7c-0.6,3.5-0.5,6.8-0.5,7c0.1,1.5,1.3,1.3,2.9,1.3c1.6-0.1,2.9,0,2.9-1.6c0-0.9,0-2.9,0.3-5c1.6,0.3,3.2,0.6,5,0.6l0,0v0c7.3,0,13.7-3.9,13.9-4C39.3,23.3,39,22.8,38.7,21.2z"></path><path fill="#DD2C00" d="M13.2,27.7c1.6,0.6,3.5,1.3,5.6,1.7c0-0.6,0.1-1.3,0.2-2c-2.1-0.5-4-1.1-5.5-1.7C13.4,26.4,13.3,27.1,13.2,27.7z"></path></svg>'
          //   },
          //    link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0Ldhq8TtMi0QQnGcQqQde50rPM9No5l3&authKey=hrkLB3QNfo5%2Fm6lhZSXrhy7qiEQ5Qc%2F6AS2hvwemksFg1fOeqaTvTxqD7OUYvNdy&noverify=0&group_code=721626283'
          // },
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
