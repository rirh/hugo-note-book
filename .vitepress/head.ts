import fs from 'fs'
import path from 'path'

export default [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    
    [
        'meta',
        {
            name: 'twitter:image',
            content: 'https://vuejs.org/images/logo.png'
        }
    ],
    [
        'link',
        {
            rel: 'preconnect',
            href: 'https://sponsors.vuejs.org'
        }
    ],
    [
        'script',
        {},
        fs.readFileSync(
            path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
            'utf-8'
        )
    ],
    [
        'script',
        {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'XNOLWPLB',
            'data-spa': 'auto',
            defer: ''
        }
    ]
] as any