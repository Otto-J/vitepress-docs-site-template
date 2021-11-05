const data = require('./data.json')
module.exports = {
  title: 'h1',
  description: 'h2',
  base: '/', // 请根据 readme 修改该参数
  lang: 'zh-CN',
  themeConfig: {
    repo: 'Otto-J/vitepress-docs-site-template', // 请修改此处指向
    docsDir: 'docs',

    sidebar: {
      '/': data,
    },
  },
}
