import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yzy-Element",
  description: "高仿 ElementPlus 组件",
  // 防止托管到github上样式加载不出的问题
  base: "/yzy-element/",
  // 明暗主题开关
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-started' },
      { text: '组件', link: '/components/button' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/get-started' }
        ]
      }, {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button 按钮', link: 'components/button' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yzykzy/yzy-element' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
})
