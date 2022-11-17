
export default [
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