<template>
  <p>
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
  </p>
  <textarea cols="30" rows="10" v-model="text"></textarea>
  <ul>
    <li v-for="item in historyStr" :key="item.timestamp">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useRefHistory } from "@vueuse/core";

const text = ref("");
const { history: historyStr, undo, redo } = useRefHistory(text);
</script>

<style lang="less" scoped>
button {
  border: none;
  outline: none;
  margin-right: 10px;
  background-color: #008c8c;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
