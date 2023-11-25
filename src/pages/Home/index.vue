<template>
  <div><DynamicAntForm :on-finish="handleFinish" :form-items="formItems" /></div>
</template>

<script setup lang="ts">
import DynamicAntForm from "@/components/DynamicForm/DynamicAntForm.vue";
import formItems from "@/components/DynamicForm/FormItems";

const handleFinish = () => {};
</script>

<style lang="less" scoped></style>
