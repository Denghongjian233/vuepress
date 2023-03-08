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
      { text: "前端进阶", link: "/docs/jinjie/" },
      // { text: "LeeCode", link: "/leeCode/" },
      // { text: "专栏", link: "/column/" },
      // { text: "时光轴", link: "/docs/timeaxle/" },
    ],
    sidebar: {
      '/docs/life/': [
        {
          title:'日志',
          collapsable: false,
          children:[
            {
              title:'3-02',
              path:'/docs/life/3-02'
            },
            {
              title:'3-03',
              path:'/docs/life/3-03'
            },
             {
              title:'3-06',
              path:'/docs/life/3-06'
            },
            {
              title:'3-07',
              path:'/docs/life/3-07'
            }, {
              title:'3-08',
              path:'/docs/life/3-08'
            },
          ]
        }
      ],
      '/docs/jinjie/': [
        {
          title:'前端进阶知识',
          collapsable: false,
          children:[
            {
              title:'PMP',
              path:'/docs/jinjie/PMP'
            },
            // {
            //   title:'3-03',
            //   path:'/docs/jinjie/3-03'
            // },
          ]
        }
      ],
      '/docs/JS/': [
        {
          title:'扎实的JS基础是每个前端吃饭的东西',
          collapsable: false,
          children:[
            {
              title:'数据类型',
              path:'/docs/JS/数据类型'
            },
            {
              title:'ES6',
              path:'/docs/JS/ES6'
            },
          ]
        }
      ],
      
    }
  },
};
