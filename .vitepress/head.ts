import fs from 'fs'
import path from 'path'

export default [
  [
    'link',
    {
      rel: 'icon',
      href: 'https://image-host-1257416358.cos.accelerate.myqcloud.com/image/32x32.png'
    }
  ],
  ['meta', { name: 'theme-color', content: '#3c8772' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],
  ['meta', { name: 'twitter:site', content: '@zh_tiger' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  [
    'meta',
    {
      name: 'twitter:image',
      content:
        'https://image-host-1257416358.cos.accelerate.myqcloud.com/image/32x32.png'
    }
  ],
  [
    'link',
    {
      rel: 'preconnect',
      href: 'https://doc.tigerzh.com'
    }
  ],
  [
    'script',
    {},
    fs.readFileSync(path.resolve(__dirname, './scripts/index.js'), 'utf-8')
  ]
] as any
