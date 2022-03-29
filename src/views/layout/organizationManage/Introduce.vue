<script setup lang="ts">
import { ref } from 'vue'
const introduce = ref<string>('<p>introduce page</p>')
</script>

<template>
    <div :class="$style.page">
        <el-button type="primary">编辑</el-button>
        <div :class="$style.content" v-html="introduce" />
        <el-button type="primary">发布</el-button>
    </div>
</template>

<style lang="scss" module>
.page {
    padding: 40px;
    text-align: right;
}

.content {
    min-height: 500px;
    text-align: left;
    margin: 20px 0;
    background-color: #f5f5f5;
}
</style>
