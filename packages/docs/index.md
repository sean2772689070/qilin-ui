---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '启林-UI'
  text: '基于 Vue3 开发'
  tagline: 西兰卡普风格的组件库
  image:
    light:
      src: '/logo.png'
      alt: 'QiLin Logo'
      css: 'display: block;'
    dark:
      src: '/logo-dark.png'
      alt: 'QiLin Logo Dark'
      css: 'display: none;'
  css: |
    @media (prefers-color-scheme: dark) {
      .hero-image-light {
        display: none;
      }
      .hero-image-dark {
        display: block;
      }
    }
  actions:
    - theme: brand
      text: 🚀开始
      link: /guide/installation
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/sean2772689070

features:
  - icon: 🌟
    title: 灵活的组件结构
    details: 提供高度可定制的组件选项，轻松适应不同的项目需求。
  - icon: 🎨
    title: 丰富的视觉风格
    details: 包含多种预设主题，支持深色模式，让界面设计更加多元化。
  - icon: ⚙️
    title: 易于集成
    details: 与现代前端框架无缝集成，如Vue.js等。
  - icon: 🚀
    title: 高性能动画
    details: 利用CSS3和JavaScript提供流畅的动画效果，增强用户体验。
  - icon: 📱
    title: 完美响应式
    details: 所有组件均经过响应式设计，确保在各种设备上的兼容性和表现。
  - icon: 🛡️
    title: 稳定性与安全
    details: 通过严格的测试保证组件库的稳定性，确保代码安全可靠。
---
