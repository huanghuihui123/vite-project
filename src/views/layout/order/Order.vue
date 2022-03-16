<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string>('home page')
</script>

<template>
    <div class="page">{{ msg }}</div>
</template>

<style lang="scss" scoped>
.page {
    color: #098709;
}
</style>
