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
        <el-header :class="$style.header">工信局信息管理系统</el-header>
        <el-main :class="$style.main">
            <el-menu
                router
                :default-active="defaultActive"
                :unique-opened="true"
                :class="$style.menu"
            >
                <el-sub-menu index="/noticeManage">
                    <template #title>
                        <span>公告管理</span>
                    </template>
                    <el-menu-item index="/privateNotice">内部公告</el-menu-item>
                    <el-menu-item index="/publicNotice">外部公告</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/organizationManage">
                    <template #title>
                        <span>机构管理</span>
                    </template>
                    <el-menu-item index="/introduce">机构概况</el-menu-item>
                    <el-menu-item index="/leader">机构领导</el-menu-item>
                    <el-menu-item index="/inside">内设机构</el-menu-item>
                    <el-menu-item index="/directlyUnder">直属概况</el-menu-item>
                    <el-menu-item index="/staff">机构员工</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/QAManage">
                    <template #title>
                        <span>QA管理</span>
                    </template>
                    <el-menu-item index="/consult">咨询公告</el-menu-item>
                    <el-menu-item index="/news">消息公告</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/propertyManage">
                    <!-- <el-icon>
                        <icon-menu />
                    </el-icon> -->
                    <span>资产管理</span>
                </el-menu-item>
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
    display: flex;
    align-items: center;
    height: 80px;
    color: #fff;
    background-color: rgba(0, 0, 128, 1);
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
    margin: 15px;
    background-color: #fff;
}
</style>
