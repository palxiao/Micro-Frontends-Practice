
<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="layout-wrapper">
    <div @click="jumpTo('/micro_vue2')" class="btn">点击进入 Vue2 应用</div>
    <div @click="jumpTo('/micro_vue3')" class="btn">点击进入 Vue3 + Ts 应用</div>
    <div @click="jumpTo('/micro_vue3_vite2')" class="btn">
      点击进入 Vue3 + Ts + Vite2 应用
    </div>
    <div @click="jumpTo('/micro_react')" class="btn">点击进入 React 应用</div>
    
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    jumpTo(path) {
      history.pushState(null, null, path);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  cursor: pointer;
}
</style>
