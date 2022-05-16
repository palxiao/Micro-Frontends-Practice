const microApps = [
    {
      name: 'micro_vue2',
      entry: '//localhost:8081/',
      activeRule: '/micro_vue2',
      container: '#subapp-viewport', // 子应用挂载的div
      props: {
        routerBase: '/micro_vue2', // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
      },
    },
    {
        name: 'micro_vue3',
        entry: '//localhost:8082/',
        activeRule: '/micro_vue3',
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
          routerBase: '/micro_vue3', // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        },
      },
      {
        name: 'micro_vue3_vite2',
        entry: '//localhost:8083/',
        activeRule: '/micro_vue3_vite2',
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
          routerBase: '/micro_vue3_vite2', // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        },
      },
    // {
    //   name: 'micro_react',
    //   entry: '//localhost:10100/',
    //   activeRule: '/micro_react',
    //   container: '#subapp-viewport', // 子应用挂载的div
    //   props: {
    //     routerBase: '/micro_react',
    //   },
    // },
  ]
  
  export default microApps