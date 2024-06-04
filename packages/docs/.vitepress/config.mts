import { defineConfig } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '启林-UI',
  description: 'A VUE3 Component library',
  base: '/qilin-ui/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: 'docs/public/favicon.ico' }] // 将favicon.ico放在public文件夹中
  ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网页',
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License. (dev)',
      copyright: 'Copyright (c) 2024-present Qi Lin'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: 'Basic 基础组件',
          collapsed: false,
          items: [
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Button 按钮', link: '/component/button' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown:{
    config(md){
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
});
