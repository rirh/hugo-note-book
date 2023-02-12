export default {
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
                { text: '前端工程化', link: '/note/前端工程化' },
                { text: '工程化指南', link: '/note/工程化指南' },
                { text: 'npm 插件开发指南', link: '/note/插件开发指南' },
                { text: 'TyepScript指南', link: '/note/TyepScript指南' },
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