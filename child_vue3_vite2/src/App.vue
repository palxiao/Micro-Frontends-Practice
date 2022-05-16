<!--
 * @Author: ShawnPhang
 * @Date: 2022-05-16 11:11:39
 * @Description:  
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-16 15:40:04
 * @site: book.palxp.com
-->
<template>
  <div>
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import logo from "./assets/logo.png";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup: () => {
    return {
      logo,
    };
  },
});
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
</style>
