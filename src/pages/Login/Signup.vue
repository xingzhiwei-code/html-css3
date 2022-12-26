<template>
  <div class="wrapper">
    <div class="container">
      <div class="drop">
        <div class="content">
          <h2>Sign Up</h2>
          <form action="#">
            <div class="inputBox">
              <input type="text" placeholder="Phone or Email" @input="checkMobileVal" v-model="submit.userName" />
            </div>
            <div class="inputBox">
              <input type="text" placeholder="Password" v-model="submit.passWord" />
            </div>
            <div class="verification">
              <div class="inputBox code">
                <input type="text" placeholder="Code" v-model="submit.verification" />
              </div>
              <div class="code-button">
                <button :disabled="disabledBtn" @click="sendSmCode">
                  {{ currentStatus ? sendText : `${currentTime}${updateText}` }}
                </button>
              </div>
            </div>
            <div class="inputBox">
              <input type="submit" value="SIGNUP" />
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
import { useVerification } from "@/hooks/verification";

const { sendText, updateText, disabledBtn, currentStatus, currentTime, submit, sendSmCode, checkMobileVal } = useVerification();
</script>

<style lang="less" scoped>
.drop {
  width: 40rem !important;
  height: 40rem !important;
}
.verification {
  display: flex;
  width: 90%;
  .code-button {
    width: 50%;
    button {
      display: inline-block;
      width: 100%;
      height: 100%;
      box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1), inset -2px -5px 10px rgba(255, 255, 255, 1), 15px 15px 10px rgba(0, 0, 0, 0.05),
        15px 10px 15px rgba(0, 0, 0, 0.05);
      border-radius: 0 2.5rem 2.5rem 0;
      border: none;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.5);
      cursor: pointer;

      &[disabled] {
        cursor: not-allowed;
      }

      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 65%;
        height: 5px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
      }
    }
  }
}
</style>
