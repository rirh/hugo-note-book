import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import banner from 'vite-plugin-banner'
import { resolve } from 'path'

import { headerPlugin } from './headerMdPlugin'
import head from './head'
import nav from './nav'
import sidebar from './sidebar'
import dayjs from 'dayjs'
import pkg from '../package.json'

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }
process.env.VITE_APP_BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '🏠',
  description:
    '笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。',
  srcDir: 'src',
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
      placeholder: '请输入关键词'
    },
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      // { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/hugozach' }
      // { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      pattern: 'https://github.com/hugozach/NoteBook/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    footer: {
      copyright: `Copyright © 2018-${new Date().getFullYear()} TigerZH 版权所有`
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
    },
    plugins: [
      banner({
        content: [
          `/**`,
          ` * name: ${pkg.name}`,
          ` * version: v${pkg.version}`,
          ` * description: ${pkg.description}`,
          ` * author: ${pkg.author}`,
          ` * homepage: ${pkg.homepage}`,
          ` */`
        ].join('\n'),
        outDir: resolve(__dirname, '../../dist'),
        debug: false
      })
    ]
  },

  vue: {
    reactivityTransform: true
  }
})
