export default {
  title: '我的技術筆記',
  description: '資料分析與自動化實作紀錄',
  base: '/vitepress-blog/', // repo名稱
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '技術文章', link: '/posts/第一篇文章' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '技術文章',
          items: [
            { text: '第一篇文章', link: '/posts/第一篇文章' }
          ]
        }
      ]
    }
  }
}
