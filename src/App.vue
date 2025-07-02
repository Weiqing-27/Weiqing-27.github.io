<template>
  <router-view />
  <div class="home">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">指令</van-tabbar-item>
      <van-tabbar-item icon="search" to="/calculator">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";

const active = ref(0);
</script>

<style>
/* 全局样式 */
.van-tabbar-item--active {
  color: #1989fa !important; /* 蓝色，可修改为其他颜色 */
}
</style>