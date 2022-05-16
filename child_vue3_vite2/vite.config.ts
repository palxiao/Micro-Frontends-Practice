/*
 * @Author: ShawnPhang
 * @Date: 2022-05-16 11:11:39
 * @Description:  
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-16 11:12:24
 * @site: book.palxp.com
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import { resolve  } from 'path';
export default ({ mode }) => {
  const __DEV__ = mode === 'development'
  return defineConfig({
    alias: {
      '@': resolve('src'),
    },
    server: {
      port: 8083,
      origin: '//localhost:8083'
    },
    base: __DEV__ ? '/' : '//localhost:8083',
    plugins: [ vue(),
      qiankun('sub-vite2-vue3', {
        useDevMode: true
    })],
  })
}