<template>
  <router-view />
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/Home">指令</van-tabbar-item>
    <van-tabbar-item icon="search" to="/calculator">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/pages/game">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { showToast } from "vant";

const remainingTime = ref("");

const checkAuthTime = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if (authData) {
    const elapsed = Date.now() - authData.timestamp;
    const remaining = 3600000 - elapsed;
    const minutes = Math.floor((remaining % 3600000) / 60000);
    remainingTime.value = `登录状态剩余: ${minutes}分钟`;

    // 最后5分钟提示
    if (remaining < 300000) {
      showToast(`登录即将过期，还剩${minutes}分钟`);
    }
  }
};
const active = ref(0);

onMounted(() => {
  checkAuthTime();
  // 每分钟检查一次
  setInterval(checkAuthTime, 60000);
});
</script>

<style>
/* 全局样式 */
.van-tabbar-item--active {
  color: #1989fa !important; /* 蓝色，可修改为其他颜色 */
}
.van-tabbar {
  height: 100px !important;
}

</style>