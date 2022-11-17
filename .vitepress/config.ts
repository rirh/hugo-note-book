import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from './theme/lib'
import baseConfig from './theme/lib/vitepress/config/baseConfig'
import { headerPlugin } from './headerMdPlugin'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'en-US',
  title: '笔记本 📚',
  description: '笔记本 📚',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  head: [
  ],
  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'Notebook',
      appId: '3II0BF621L',
      apiKey: 'f0f82443dd1e3bb2738c4e904221fc97',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      // { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/AliMales/NoteBook' },
      // { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: 'vuejs/docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
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
