<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'

import { ElMessage, UploadProps } from 'element-plus'

interface FormData {
    imageUrl: string
    time: string
    content: string
}

const router = useRouter()

const formData: FormData = reactive({
    imageUrl: '',
    time: '',
    content: ''
})

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    formData.imageUrl = URL.createObjectURL(uploadFile.raw!)
    console.log('handleAvatarSuccess', response)
    console.log('handleAvatarSuccess', uploadFile)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}

const onSave = () => {
    console.log('add!')
    router.push('/addNotice')
}
</script>

<template>
    <el-form :model="formData" :class="$style.form">
        <el-form-item label="图片">
            <el-upload
                :class="$style.avatarUploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
                <img v-if="formData.imageUrl" :src="formData.imageUrl" :class="$style.avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </el-form-item>
        <el-form-item label="职位">
            <el-input v-model="formData.time" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="职责">
            <el-input
                type="textarea"
                :rows="10"
                v-model="formData.content"
                placeholder="Approved by"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSave">确定</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" module>
.form {
    padding: 30px 80px;
}

.avatarUploader {
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    :global {
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }
        .el-upload:hover {
            border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            text-align: center;
        }
    }
}
</style>
