<template>
  <div class="home">
    <van-nav-bar title="首页" fixed placeholder />
    
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list>
        <van-cell v-for="item in 10" :key="item">
          <div class="product-card">
            <van-image width="100" height="100" src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" />
            <div class="info">
              <div class="title">商品标题 {{ item }}</div>
              <div class="price">¥{{ 99.8 + item }}</div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
    
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
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