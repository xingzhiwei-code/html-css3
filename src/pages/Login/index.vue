<template>
  <div class="login-index">
    <div class="buble"></div>
    <!-- 登录页 -->
    <Login v-if="switchPage === 'login'" />
    <!-- 注册页 -->
    <Signup v-if="switchPage === 'signup'" />
  </div>
</template>

<script setup lang="ts">
import Login from "./Login.vue";
import Signup from "./Signup.vue";
import { bubleCreate } from "@/utils/buble";

const switchPage = ref<string>("login");

const timer = ref<any>(null);

onMounted(() => {
  timer.value = setInterval(() => {
    bubleCreate();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<style lang="less">
@import "@/assets/css/login.less";
</style>
