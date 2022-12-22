import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import { headerPlugin } from './headerMdPlugin'
import head from './head'
import nav from './nav'
import sidebar from './sidebar'
import dayjs from 'dayjs'
// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }
process.env.VITE_APP_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')

export default defineConfig({
  lang: 'zh-CN',
  title: '🏠',
  description: '笔记本 📚',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  head,
  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,
    outline: 'deep',
    outlineTitle: '目录',
    algolia: {
      indexName: 'article',
      appId: 'MDH54K1FJG',
      apiKey: '2651a6fb85dcb86beafa3e76ba3dcf99',
    },
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      // { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/AliMales' }
      // { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      pattern: 'https://github.com/AliMales/NoteBook/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: `Copyright © 2018-${new Date().getFullYear()} TigerZH`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
