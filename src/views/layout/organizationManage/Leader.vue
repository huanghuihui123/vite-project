<script setup lang="ts">
import { useRouter, Router } from 'vue-router'

const router: Router = useRouter()

interface tableItem {
    id: number
    url: string
    position: string
    duty: string
}

const tableData: tableItem[] = [
    {
        id: 1,
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        position: '党委书记、局长',
        duty: '负责党务、政务全面工作'
    },
    {
        id: 2,
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        position: '综合科科长',
        duty: '负责党务日常工作，分管党建、组织、宣传、纪检监察、统战、老干部等工作，分管党办'
    }
]

const onAdd = () => {
    console.log('add!')
    router.push('/addLeader')
}

const handleClickDelete = (index: number, row: tableItem) => {
    console.log('handleClickDelete!', index)
    console.log('handleClickDelete!', row)
}
</script>

<template>
    <div :class="$style.page">
        <el-button :class="$style.add" type="primary" @click="onAdd">新增</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="照片">
                <template #default="scope">
                    <div :class="$style.avatar">
                        <el-image style="width: 100%; height: 100%" :src="scope.row.url" lazy />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="position" label="职位" />
            <el-table-column prop="duty" label="职责" />
            <el-table-column label="操作" width="120">
                <template #default="scope">
                    <el-button
                        type="text"
                        size="small"
                        @click="handleClickDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="scss" module>
.page {
    padding: 40px;
    text-align: right;
}
.add {
    margin-bottom: 20px;
}
.avatar {
    width: 100px;
    height: 100px;
}
</style>
