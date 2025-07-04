<template>
  <div class="login-container">
    <!-- 背景装饰元素 -->
    <div class="decoration-circle circle-1"></div>
    <div class="decoration-circle circle-2"></div>
    
    <!-- 登录卡片 -->
    <van-cell-group inset class="login-card">
      <div class="login-header">
        <van-image
          width="80"
          height="80"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          round
        />
        <h2>欢迎回来</h2>
        <p>请输入您的账号密码登录系统</p>
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="账号"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请填写账号' }]"
            left-icon="user-o"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            left-icon="lock"
          />
        </van-cell-group>

        <div style="margin: 16px;">
          <van-button 
            round 
            block 
            type="primary" 
            native-type="submit"
            :loading="loading"
          >
            登录
          </van-button>
        </div>
      </van-form>

      <div class="login-footer">
        <van-divider>其他登录方式</van-divider>
        <div class="social-login">
          <van-icon name="wechat" color="#07C160" size="24" />
          <van-icon name="alipay" color="#1677FF" size="24" />
          <van-icon name="weibo" color="#FF2442" size="24" />
        </div>
      </div>
    </van-cell-group>
    
    <!-- 版权信息 -->
    <div class="copyright">© 2024 个人项目</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const loading = ref(false);

// 固定账号密码
const fixedAccount = {
  username: 'zhaoxx',
  password: '123456'
};

const onSubmit = () => {
  loading.value = true;
  setTimeout(() => {
    if (username.value === fixedAccount.username && password.value === fixedAccount.password) {
      // 登录成功时记录当前时间戳（毫秒）
      const authData = {
        isAuthenticated: true,
        timestamp: Date.now()
      };
      localStorage.setItem('authData', JSON.stringify(authData));
      showToast('登录成功');
      router.push('/Home');
    } else {
      showToast('账号或密码错误');
    }
    loading.value = false;
  }, 1000);
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  filter: blur(30px);
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  left: -50px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.circle-2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  right: -100px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}

.login-card {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.login-header {
  text-align: center;
  padding: 30px 20px 20px;
}

.login-header h2 {
  margin: 15px 0 5px;
  color: #333;
  font-size: 22px;
}

.login-header p {
  margin: 0;
  color: #999;
  font-size: 14px;
}

.login-footer {
  padding: 0 20px 20px;
  text-align: center;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.copyright {
  margin-top: 20px;
  color: #999;
  font-size: 12px;
  text-align: center;
  position: relative;
  z-index: 1;
}
</style>