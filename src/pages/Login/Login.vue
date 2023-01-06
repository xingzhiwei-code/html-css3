<template>
  <div class="wrapper">
    <div class="container">
      <div class="drop">
        <div class="content">
          <h2>Sign In</h2>
          <form action="#">
            <div class="inputBox">
              <input type="text" placeholder="Username" v-model="submitForm.userName" />
            </div>
            <div class="inputBox">
              <input type="text" placeholder="Password" v-model="submitForm.passWord" />
            </div>
            <div class="inputBox">
              <input type="submit" value="LOGIN" @click="handleSubmit" />
            </div>
          </form>
        </div>
      </div>
      <!-- 登录之外操作 -->
      <a href="#" class="btns">Forget Password</a>
      <a href="#" class="btns signup">Signup</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { LoginForm } from "@/hooks/verification";
import { routerJump } from "@/utils/utils";

const submitForm = ref<LoginForm>({
  userName: "admin",
  passWord: "123456",
});

const handleSubmit = () => {
  if (submitForm.value.userName === "admin" && submitForm.value.passWord === "123456") {
    routerJump("/show");
  } else {
    alert("用户名或密码错误！");
  }
};
</script>

<style lang="less" scoped></style>
