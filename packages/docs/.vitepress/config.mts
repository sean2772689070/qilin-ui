import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '启林-UI',
  description: 'A VUE3 Component library',
  base: '/qilin-ui/',
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

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Button 按钮', link: '/component/button' }
          ]
        },
        // {
        //   text: 'Form 表单组件',
        //   items: [
        //     { text: 'Checkbox 多选框', link: '/component/checkbox'},
        //     { text: 'Switch 开关', link: '/component/switch'},
        //     { text: 'Input 输入框', link: '/component/input'}
        //   ]
        // },{
        //   text: 'Data 数据展示',
        //   items: [
        //     { text: 'Tree 虚拟化树形控件', link: '/component/tree'}
        //   ]
        // }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
