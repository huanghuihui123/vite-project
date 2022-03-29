<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

const router = useRouter()

const formData = reactive({
    user: '',
    region: '',
    currentPage: 1,
    pageSize: 20
})

const tableData = [
    {
        title: '关于某某工作通知！',
        date: '2016-05-03',
        name: 'Tom',
        status: 0
    },
    {
        title: '关于某某工作通知！',
        date: '2016-05-02',
        name: 'Tom',
        status: 1
    },
    {
        title: '关于某某工作通知！',
        date: '2016-05-04',
        name: 'Tom',
        status: 2
    },
    {
        title: '关于某某工作通知！',
        date: '2016-05-01',
        name: 'Tom',
        status: 1
    },
    {
        title: '关于某某工作通知！',
        date: '2016-05-20',
        name: 'Tom',
        status: 1
    }
]
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const dialogVisible = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
    formData.currentPage = val
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
    formData.pageSize = val
}

const onSubmit = () => {
    console.log('submit!')
}

const onAdd = () => {
    console.log('add!')
    router.push('/addNotice')
}

const handleClickDetail = (index: number, row: any) => {
    console.log('handleClickDetail!', index)
    console.log('handleClickDetail!', row)
}

const handleClickDelete = (index: number, row: any) => {
    console.log('handleClickDelete!', index)
    console.log('handleClickDelete!', row)
    dialogVisible.value = true
}

const handleCloseDialog = () => {
    dialogVisible.value = false
}
</script>

<template>
    <div :class="$style.page">
        <el-form :inline="true" :model="formData">
            <el-form-item>
                <el-input v-model="formData.user" placeholder="Approved by" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formData.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAdd">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="标题" />
            <el-table-column prop="date" label="创建时间" />
            <el-table-column prop="name" label="创建人" />
            <el-table-column label="状态">
                <template #default="scope">
                    <span style="color: orange" v-if="scope.row.status === 0">待发布</span>
                    <span style="color: blue" v-else-if="scope.row.status === 1">已发布</span>
                    <span style="color: red" v-else="scope.row.status === 0">已关闭</span>
                </template>
            </el-table-column>
            <el-table-column label="Operations" width="120">
                <template #default="scope">
                    <el-button
                        type="text"
                        size="small"
                        @click="handleClickDetail(scope.$index, scope.row)"
                        >查看</el-button
                    >
                    <el-button
                        type="text"
                        size="small"
                        @click="handleClickDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            :class="$style.pagination"
            v-model:currentPage="formData.currentPage"
            v-model:page-size="formData.pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="36"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
    <el-dialog v-model="dialogVisible" width="30%" center :before-close="handleCloseDialog">
        <span>确定删除吗？</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" module>
.page {
    padding: 40px;
}

.pagination {
    margin-top: 40px;
}
</style>
