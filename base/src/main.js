
import Vue from 'vue'
import App from './App.vue'

import { registerMicroApps, start } from 'qiankun'
import appConfig from './micro_app'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  render: (h) => h(App),
}).$mount('#app')

// 注册子应用
registerMicroApps(appConfig, {
  beforeLoad: (app) => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterMount: [
    (app) => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    },
  ],
})
// 启动qiankun
start()
