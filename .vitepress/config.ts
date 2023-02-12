import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from './theme/lib'
import baseConfig from './theme/lib/vitepress/config/baseConfig'
import { headerPlugin } from './headerMdPlugin'

const nav = [

  {
    text: '卷集',
    activeMatch: `^/(guide|style-guide|cookbook|examples|cryptocurrency)/`,
    items: [
      { text: '💰  加密货币', link: '/cryptocurrency/money' },
      { text: '🚚  工具使用', link: '/tools/echarts' },
      { text: '💡  Idea日志 ', link: '/log/敏捷项目管理' },
    ]
  },
  {
    text: '笔记',
    activeMatch: `^/note/`,
    link: '/note/cert'
  },
  {
    text: '作品集',
    activeMatch: `^/products/`,
    items: [
      {
        text: '代表作',
        items: [
          { text: 'Gettr', link: '/products/gettr' },
          { text: '叮铃医生', link: '/products/doctor' },

        ]
      },
      {
        text: '商业作品',
        items: [
          {
            text: 'Fas基金研究平台',
            link: '/products/fas'
          },
          { text: '币傲交易所', link: '/products/btcalory' },
          {
            text: 'Open Alpha ',
            link: '/products/openalpha'
          },
          { text: '基金大V入驻小程序', link: '/products/bigv' },
          { text: '净值预估', link: '/products/valuation' }
        ]
      },
      {
        text: '个人作品',
        items: [
          {
            text: 'Wall Paper',
            link: '/products/wallpaper'
          },
          { text: 'Note Music', link: '/products/notemusic' },
          { text: '优惠券小程序', link: '/products/coupon' },
        ]
      },
    ]
  },
  // {
  //   text: '我',
  //   activeMatch: `^/about/`,
  //   items: [
  //     { text: 'FAQ', link: '/about/faq' },
  //     { text: 'Team', link: '/about/team' },
  //     { text: 'Releases', link: '/about/releases' },
  //     {
  //       text: 'Community Guide',
  //       link: '/about/community-guide'
  //     },
  //     { text: 'Code of Conduct', link: '/about/coc' },
  //     {
  //       text: 'The Documentary',
  //       link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
  //     }
  //   ]
  // },
]

export const sidebar = {
  '/log/': [{
    text: '开发日志',
    items: [
      { text: '西筹FAS平台', link: '/log/西筹FAS平台' },
      { text: '西筹数据平台', link: '/log/西筹数据平台' },
      { text: '周六特色大排档小程序', link: '/log/周六特色大排档小程序' },
      { text: '投研系统数据可视化', link: '/log/tableAU项目' },
    ]
  }, {
    text: 'PMP',
    items: [
      { text: '敏捷项目管理', link: '/log/敏捷项目管理' },
    ]
  }],
  '/cryptocurrency/': [{
    text: '基础',
    items: [
      { text: '钱', link: '/cryptocurrency/money' },
      {
        text: '流动性',
        link: '/cryptocurrency/流动性'
      }, {
        text: '稳定币',
        link: '/cryptocurrency/稳定币'
      }, {
        text: '做市',
        link: '/cryptocurrency/做市'
      }, {
        text: 'ETF',
        link: '/cryptocurrency/ETF'
      }, {
        text: 'Uniswap',
        link: '/cryptocurrency/Uniswap'
      }
      , {
        text: '期货',
        link: '/cryptocurrency/期货'
      }
      , {
        text: '混合保证金',
        link: '/cryptocurrency/混合保证金'
      }
      , {
        text: '反向合约',
        link: '/cryptocurrency/反向合约'
      }
      , {
        text: '永续合约',
        link: '/cryptocurrency/永续合约'
      }
    ]
  },
  {
    text: '杂谈',
    items: [
      {
        text: '比特币十年回顾',
        link: '/cryptocurrency/bitcoin-ten-years'
      },
      { text: '价值千万的炒币经验', link: '/cryptocurrency/sell-buy-express' },
      {
        text: '奶的底层逻辑就是奶',
        link: '/cryptocurrency/up'
      }
    ]
  }, {
    text: '公链可视化',
    items: [
      {
        text: '应用案例',
        link: '/cryptocurrency/web3应用'
      },
    ]
  }],
  '/tools/': [{
    text: '图表类',
    items: [
      { text: 'echarts', link: '/tools/echarts' },
    ]
  },
  {
    text: 'APP',
    items: [
      { text: '模拟器', link: '/tools/emulator' },
    ]
  },
  ],
  '/note/': [
    {
      text: '📚 使用指南',
      items: [
        { text: 'liunx 指南', link: '/note/Liunx常用命令' },
        { text: 'Https 配置指南', link: '/note/cert' },
        { text: 'SSH  配置指南', link: '/note/ssh' },
        { text: 'git 指南', link: '/note/git' },
        { text: 'Nginx 指南', link: '/note/nginx' },
        { text: 'Docker 指南', link: '/note/Docker指南' },
        { text: 'uWSGI 指南', link: '/note/uWSGI指南' },
        { text: 'MacOS 自带VPN链接公司网络', link: '/note/vpn' },
        { text: 'MacOS 邮箱教程', link: '/note/mac-bind-email' },
        { text: 'MacOS 定时任务指南', link: '/note/mac-launchctl-task' },
      ]
    },
    {
      text: '📚 代码规范',
      items: [
        { text: 'JS不优雅教程', link: '/note/js不优雅教程' },
        { text: 'JS优雅教程', link: '/note/js优雅教程' },
        // { text: 'MacOS 自带VPN链接公司网络', link: '/note/vpn' },
        // { text: 'MacOS 邮箱教程', link: '/note/mac-bind-email' },
        // { text: 'MacOS 定时任务指南', link: '/note/mac-launchctl-task' },
      ]
    }],
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'en-US',
  title: '笔记本 📚',
  description: '笔记本 📚',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@tigerzh' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
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
