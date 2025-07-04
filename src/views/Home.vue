<template>
  <div class="ma-24 gray-a">
    <div class="shadow-box pa-10 flex justify-between align-center">
      <div>
        <van-image
          round
          fit="cover"
          width="8rem"
          height="8rem"
          @click="showImage(0)"
          :src="imageList[0].url"
        />
      </div>
      <div class="flex flex-direction">
        <div>和昕昕在一起的</div>
        <div class="mt-10 color-red">{{ formattedTime }}</div>
      </div>
    </div>
    <div v-for="(row, rowIndex) in imageGrid" :key="rowIndex" class="flex justify-between ">
      <div 
        v-for="(item, colIndex) in row" 
        :key="item.id"
        class="pa-10 mt-10 mb-30 shadow-box1 radius-10 w-50 flex align-center flex-direction mr-10 image-container"
      >
        <van-image
          lazy-load
          fit="cover"
          width="8rem"
          height="8rem"
          @click="showImage(item.id)"
          :src="item.url"
        />
        <div class="flex justify-center">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Cell as VanCell, Image as VanImage } from "vant";
import { showImagePreview } from "vant";

// 导入所有图片资源
import touxiang from "@/assets/images/touxiang.jpg";
import baimashi from "@/assets/images/baimashi.jpg";
import baimashi2 from "@/assets/images/baimashi-2.jpg";
import baimashi3 from "@/assets/images/baimashi-3.jpg";
import baimashi4 from "@/assets/images/baimashi-4.jpg";
import dianyinyuan from "@/assets/images/dianyinyuan.jpg";
import diyicidengshan from "@/assets/images/diyicidengshan.jpg";
import gaoguai1 from "@/assets/images/gaoguai1.jpg";
import gaoguai2 from "@/assets/images/gaoguai-2.jpg";
import guangshagnchang from "@/assets/images/guangshagnchang.jpg";

// 图片数据列表
const imageList = ref([
{ id: 0, url: touxiang, title: "官宣！这张合照藏着心动密码", isRounded: true },
{ id: 1, url: touxiang, title: "第一束花：她脸红得比花瓣还甜", isRounded: false },
{ id: 2, url: baimashi, title: "小美的独家镜头：被抓拍的绝妙瞬间", isRounded: false },
{ id: 3, url: baimashi2, title: "小美的独家镜头：在看什么", isRounded: false },
{ id: 4, url: baimashi3, title: "远游：导航说向左，她偏要往右拐", isRounded: false },
{ id: 5, url: baimashi4, title: "见面：阳光、美丽的你", isRounded: false },
{ id: 6, url: dianyinyuan, title: "第一次去看电影", isRounded: false },
{ id: 7, url: diyicidengshan, title: "爬山时她把“加油”喊成了“救命”", isRounded: false },
{ id: 8, url: gaoguai1, title: "她学小猫叫被路人听到", isRounded: false },
{ id: 9, url: gaoguai2, title: "谁更怪怪的", isRounded: false },
{ id: 10, url: guangshagnchang, title: "在广场跟着大妈跳了半支舞", isRounded: false }
]);

// 生成图片网格数据（每行2个图片）
const imageGrid = ref([]);
const generateImageGrid = () => {
  const grid = [];
  const itemsPerRow = 2;
  for (let i = 1; i < imageList.value.length; i += itemsPerRow) {
    const row = [];
    for (let j = 0; j < itemsPerRow && i + j < imageList.value.length; j++) {
      row.push(imageList.value[i + j]);
    }
    grid.push(row);
  }
  imageGrid.value = grid;
};

// 初始化图片网格
generateImageGrid();

const startDate = new Date(2024, 1, 23); // 2024年2月23日
const timer = ref(null);
const isRunning = ref(false);
const elapsedTime = ref(0);
const formattedTime = ref("00:00:00.000");

const calculateTime = () => {
  const now = new Date();
  elapsedTime.value = now - startDate;

  // 计算天、小时、分钟、秒
  const days = Math.floor(elapsedTime.value / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (elapsedTime.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (elapsedTime.value % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((elapsedTime.value % (1000 * 60)) / 1000);

  formattedTime.value = `${days}天 ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
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
  formattedTime.value = "00:00:00.000";
};

// 预览图片
const showImage = (index) => {
  showImagePreview({
    images: imageList.value.map(item => item.url),
    startPosition: index,
    showIndex: true,
    loop: true,
    closeable: true
  });
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<style scoped>
.shadow-box {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(90deg, #fce7f3 0%, #f3e8ff 100%);
  border-radius: 10px;
}
.shadow-box1 {
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}
.shadow-box1:hover {
  transform: translateY(-5px);
}
.van-cell {
  background: none !important;
}
:deep(.van-cell__value) {
  font-size: 1rem;
  color: #ec4899 !important;
  font-weight: bold;
}
.radius-5 {
  border-radius: 5px;
}
.image-container {
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-red {
  color: #ec4899;
}
</style>
  