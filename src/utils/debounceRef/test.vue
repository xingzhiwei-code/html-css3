<template>
  <div class="container">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { debounceRef } from './debounceRef';
const text = regf("", 500);
</script>

<style lang="less"></style>
