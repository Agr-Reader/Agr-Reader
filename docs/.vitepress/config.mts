import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Agr Reader",
  description: "Android端Material3风格的极简优美的RSS阅读器",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/navigation/index' },
      { text: '更新日志', link: '/changelog/index' }
    ],

    sidebar: {
      '/navigation/': [
        {
          text: '目录',
          items: [
            { text: '备份设置', link: '/navigation/webdav' },
            { text: '微信公众号RSS', link: '/navigation/wechat' },
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
