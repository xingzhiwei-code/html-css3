<template>
  <div class="login-index">
    <div class="buble"></div>
    <!-- 登录页 -->
    <!-- <Login /> -->
    <!-- 注册页 -->
    <Signup />
  </div>
</template>

<script setup lang="ts">
import Login from "./Login.vue";
import Signup from "./Signup.vue";
import { bubleCreate } from "@/utils/buble";

onMounted(() => {
  setInterval(() => {
    bubleCreate();
  }, 1000);
});
</script>

<style lang="less">
@import "@/assets/css/login.less";
</style>
