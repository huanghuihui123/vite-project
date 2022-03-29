<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string>('DirectlyUnder page')
</script>

<template>
    <div class="page">{{ msg }}</div>
</template>

<style lang="scss" module>
.page {
    color: #098709;
}
</style>
