<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
    title: '',
    time: '',
    content: ''
})

const onRelease = () => {
    console.log('Release!')
}

const onSave = () => {
    console.log('add!')
    router.push('/addNotice')
}
</script>

<template>
    <el-form :model="formData" :class="$style.form">
        <el-form-item label="通知标题">
            <el-input v-model="formData.title" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="展示时长">
            <el-input v-model="formData.time" placeholder="Approved by" />
        </el-form-item>
        <el-form-item>
            <el-input
                type="textarea"
                :rows="10"
                v-model="formData.content"
                placeholder="Approved by"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" plain @click="onSave">存为草稿</el-button>
            <el-button type="primary" @click="onRelease">立即发布</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" module>
.form {
    padding: 30px 80px;
}
</style>
