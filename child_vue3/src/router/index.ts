/*
 * @Author: ShawnPhang
 * @Date: 2022-05-15 15:15:38
 * @Description:
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-15 15:20:36
 * @site: book.palxp.com
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// export default router
export { routes }
