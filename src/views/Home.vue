<template>
  <div class="home">
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="pages/calculator">游戏</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const refreshing = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    refreshing.value = false
    alert('刷新成功')
  }, 1000)
}
</script>

<style scoped>
.product-card {
  display: flex;
  padding: 10px 0;
}
.info {
  padding-left: 15px;
}
.title {
  font-size: 16px;
  margin-bottom: 10px;
}
.price {
  color: #f44;
  font-weight: bold;
}
</style>