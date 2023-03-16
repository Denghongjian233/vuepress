module.exports = {
  title: "小健的日常学习",
  description: "没有神的光环、你我生而平凡",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
  base: "/vuepress/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: "首页", link: "/" },
      { text: "碎碎念", link: "/docs/life/" },
      { text: "JS基础", link: "/docs/JS/" },
      { text: "框架", link: "/docs/kuangjia/" },
      { text: "前端工程化", link: "/docs/jinjie/" },
      { text: "手写代码", link: "/docs/shoucuo/" },
      // { text: "时光轴", link: "/docs/timeaxle/" },
    ],
    sidebar: {
      '/docs/life/': [
        {
          title: '日志',
          collapsable: false,
          children: [
            {
              title: '3-02',
              path: '/docs/life/3-02'
            },
            {
              title: '3-03',
              path: '/docs/life/3-03'
            },
            {
              title: '3-06',
              path: '/docs/life/3-06'
            },
            {
              title: '3-07',
              path: '/docs/life/3-07'
            },
            {
              title: '3-08',
              path: '/docs/life/3-08'
            },
            {
              title: '3-09',
              path: '/docs/life/3-09'
            },
            {
              title: '3-10',
              path: '/docs/life/3-10'
            },
            {
              title: '3-13',
              path: '/docs/life/3-13'
            },
            {
              title: '3-14',
              path: '/docs/life/3-14'
            },
            {
              title: '3-15',
              path: '/docs/life/3-15'
            },
            {
              title: '3-16',
              path: '/docs/life/3-16'
            },
          ]
        }
      ],
      '/docs/jinjie/': [
        {
          title: '前端工程化',
          collapsable: false,
          children: [
            {
              title: 'PMP',
              path: '/docs/jinjie/PMP'
            },
          ]
        }
      ],
      '/docs/JS/': [
        {
          title: 'JS八股',
          collapsable: false,
          children: [
            {
              title: '数据类型',
              path: '/docs/JS/数据类型'
            },
            {
              title: 'ES6',
              path: '/docs/JS/ES6'
            },
            {
              title: '闭包',
              path: '/docs/JS/闭包'
            },
            {
              title: '对象方法',
              path: '/docs/JS/对象方法'
            },
            {
              title: '防抖节流',
              path: '/docs/JS/防抖节流'
            },
            {
              title: '服务端渲染',
              path: '/docs/JS/服务端渲染'
            },
            {
              title: '宏任务与微任务',
              path: '/docs/JS/宏任务与微任务'
            },
            {
              title: '箭头函数',
              path: '/docs/JS/箭头函数'
            },
            {
              title: '跨域',
              path: '/docs/JS/跨域'
            },
            {
              title: '面向对象',
              path: '/docs/JS/面向对象'
            },
            {
              title: '设计者模式',
              path: '/docs/JS/设计者模式'
            },
            {
              title: '十万数据',
              path: '/docs/JS/十万数据'
            },
            {
              title: '数组方法',
              path: '/docs/JS/数组方法'
            },
            {
              title: '图片懒加载',
              path: '/docs/JS/图片懒加载'
            },
            {
              title: '移动端300ms',
              path: '/docs/JS/移动端300ms'
            },
            {
              title: '异步解决',
              path: '/docs/JS/异步解决'
            },
            {
              title: '原型链',
              path: '/docs/JS/原型链'
            },
            {
              title: '作用域链',
              path: '/docs/JS/作用域链'
            },
            {
              title: 'CommonJs和RequireJs',
              path: '/docs/JS/CommonJs和RequireJs'
            },
            {
              title: 'cookie',
              path: '/docs/JS/cookie'
            },
            {
              title: 'proxy',
              path: '/docs/JS/proxy'
            },
            {
              title: 'this指向',
              path: '/docs/JS/this指向'
            },
            {
              title: 'websocket',
              path: '/docs/JS/websocket'
            },
          ]
        }
      ],
      '/docs/shoucuo/': [
        {
          title: '手写代码',
          collapsable: false,
          children: [
            {
              title: 'intance of',
              path: '/docs/shoucuo/intance'
            },
            {
              title: '是不是空对象',
              path: '/docs/shoucuo/isObj'
            },
            {
              title: '手写callapplybind',
              path: '/docs/shoucuo/call'
            },
          ]
        }
      ],
      '/docs/kuangjia/': [
        {
          title: '手写代码',
          collapsable: false,
          children: [
            {
              title: '基础',
              path: '/docs/kuangjia/jichu'
            },
            {
              title: '组件通信',
              path: '/docs/kuangjia/组件通信'
            },
            {
              title: 'vue3与虚拟dom',
              path: '/docs/kuangjia/vue3与虚拟dom'
            },
           
          ]
        }
      ],
    }
  },
};
