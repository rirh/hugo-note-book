const fs = require('fs')
const child_process = require('child_process')
const data = require('./.vitepress/dist/hashmap.json')
const envPath = `${__dirname}/.env`
const configPath = `${__dirname}/config.json`

const urls = Object.keys(data).map((key) => {
  const url = key.split('_').join('/').split('md').join('html')
  return `https://doc.tigerzh.com/${url}`
})
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
config.start_urls = urls
fs.writeFileSync('config.json', JSON.stringify(config))
console.log(
  'algolia 爬虫命令执行完毕，请启动docker执行以下命令',
)
console.log(`docker run -it --env-file=${envPath} -e "CONFIG=$(cat ${configPath})" algolia/docsearch-scraper`)
