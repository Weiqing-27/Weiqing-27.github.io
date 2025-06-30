<template>
  <div class="timer-container">
    <van-cell title="和昕昕在一起已经过去了" :value="formattedTime" />
  
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Cell as VanCell, Button as VanButton } from 'vant';

const startDate = new Date(2024, 1, 9); // 2024年2月9日(月份从0开始)
const timer = ref(null);
const isRunning = ref(false);
const elapsedTime = ref(0);
const formattedTime = ref('00:00:00.000');

const calculateTime = () => {
  const now = new Date();
  elapsedTime.value = now - startDate;
  
  // 计算天、小时、分钟、秒和毫秒
  const days = Math.floor(elapsedTime.value / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime.value % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime.value % (1000 * 60)) / 1000);
  const milliseconds = elapsedTime.value % 1000;
  
  formattedTime.value = `${days}天 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
};

const startTimer = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    timer.value = setInterval(calculateTime, 10);
  }
};

const stopTimer = () => {
  if (isRunning.value) {
    clearInterval(timer.value);
    isRunning.value = false;
  }
};

const resetTimer = () => {
  stopTimer();
  elapsedTime.value = 0;
  formattedTime.value = '00:00:00.000';
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<style scoped>
.timer-container {
  padding: 20px;
  text-align: center;
}
.van-button {
  margin: 10px 5px;
}
</style>
