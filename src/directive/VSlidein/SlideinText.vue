<template>
    <div class="container">
        <div v-slide-in v-for="n in 10" :key="n" class="item">{{ n }}</div>
    </div>
</template>

<script setup lang='ts'>
    
</script>

<style lang='less' scoped>
    @base-color: #008c8c;
    .container {
        width: 100%;
        .item {
            width: 50%;
            height: 300px;
            color: white;
            background-color: @base-color;
            text-align: center;
            line-height: 300px;
            font-size: 40px;
            margin: 20px auto;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.4);
        }
    }
</style>