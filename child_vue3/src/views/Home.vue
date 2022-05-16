<!--
 * @Author: ShawnPhang
 * @Date: 2022-05-15 15:15:38
 * @Description:  
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2022-05-16 13:53:53
 * @site: book.palxp.com
-->
<template>
  <div class="home">
    <img alt="Vue logo" :src="require('../assets/logo.png')">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
