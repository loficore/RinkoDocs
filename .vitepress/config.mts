import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/RinkoDocs/',
  cleanUrls: false,
  
  title: "RinkoDocs",
  description: "The docs for Rinko!",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/api-guide/quick-api-intro' },
      { text: 'API调用指南', link: '/api-guide/api-guide' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
{ text: '快速开始', link: '/api-guide/quick-api-intro' },
          { text: '令牌管理', link: '/token-management-instructions' },
          { text: '分组机制', link: '/group' },
          { text: '充值指南', link: '/recharge' },
          { text: '联系我们', link: '/contact-us' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API调用指南', link: '/api-guide/api-guide' },
          { text: '简要介绍', link: '/api-guide/quick-api-intro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
