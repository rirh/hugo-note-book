import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import { siteIds, registerAnalytics, trackPageview } from './plugins/analytics'
// import { isInvalidRoute, redirect } from './plugins/redirect'
import './styles/custom.css'
import type { Theme } from 'vitepress'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
  },
}

export default theme
