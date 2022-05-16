/*
 * @Author: ShawnPhang
 * @Date: 2022-05-15 15:15:38
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-16 13:52:23
 * @site: book.palxp.com
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import store from './store'
import './public-path'
const APP_NAME = require('../package.json').name

// let app = createApp(App)
let app: any = null

let router = null
function render(props: any) {
  app = createApp(App)
  const { container, routerBase } = props
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL),
    routes,
  })

  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log('bootstrap')
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  console.log('mount', props)
  render(props)
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log('unmount')
  app.unmount()
}
