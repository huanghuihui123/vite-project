<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const defaultActive = ref<string>('/home')

onMounted(() => {
    console.log(useRoute())
    const { path } = useRoute()
    defaultActive.value = path
})
</script>

<template>
    <el-container :class="$style.container">
        <el-header :class="$style.header">222222</el-header>
        <el-main :class="$style.main">
            <el-menu router :default-active="defaultActive" :class="$style.menu">
                <el-menu-item index="/home">
                    <span>首页</span>
                </el-menu-item>
                <el-menu-item index="/order">
                    <span>订单管理</span>
                </el-menu-item>
                <el-sub-menu index="/goods">
                    <template #title>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="/category">商品分类</el-menu-item>
                    <el-menu-item index="/goods">商品列表</el-menu-item>
                </el-sub-menu>
            </el-menu>
            <div :class="$style.content">
                <router-view />
            </div>
        </el-main>
    </el-container>
</template>

<style lang="scss" module>
.container {
    height: 100%;
    background: #f5f5f5;
}

.header {
    height: 80px;
    background-color: #0094ff;
}

.main {
    flex: 1;
    display: flex;
    padding: 0;
}

.menu {
    width: 250px;
    // background-color: #545c64;
}

.content {
    flex: 1;
    overflow: auto;
    margin: 10px;
    background-color: #fff;
}
</style>
