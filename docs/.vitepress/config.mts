import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "Copplay Temple",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: "示例程序",
  themeConfig: {
    logo: '/favicon.ico',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '系统演示', link: '/show' }
    ],
    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/copplay/copplay-temple' },
      { icon: 'github', link: 'https://gitee.com/copplay/copplay-temple' }
    ],
    footer: {
      message: '内容遵循 MIT 协议。',
      copyright: 'Copyright © 2025-Copplay'
    }
  }
};

const vitePressSidebarOptions = [
{
  documentRootPath: 'docs',
  scanStartPath: 'code',
  basePath: '/code/',
  resolvePath: '/code/',
  useTitleFromFileHeading: true,
  collapsed: true,
},
{
  documentRootPath: 'docs',
  scanStartPath: 'java',
  basePath: '/java/',
  resolvePath: '/java/',
  useTitleFromFileHeading: true
},
{
  documentRootPath: 'docs',
  scanStartPath: 'web',
  basePath: '/web/',
  resolvePath: '/web/',
  useTitleFromFileHeading: true
}
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
