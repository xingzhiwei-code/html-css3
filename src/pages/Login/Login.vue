<template>
  <div class="container">
    <div class="drop">
      <div class="content">
        <h2>Sign In</h2>
        <form action="#">
          <div class="inputBox">
            <input type="text" placeholder="Username" />
          </div>
          <div class="inputBox">
            <input type="text" placeholder="Password" />
          </div>
          <div class="inputBox">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
    <!-- 登录之外操作 -->
    <a href="#" class="btns">Forget Password</a>
    <a href="#" class="btns signup">Signup</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import "@/assets/css/login.less";
</style>
