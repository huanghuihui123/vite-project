<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const tableData = [
    {
        name: '综合管理部',
        count: '10',
        duty: '负责党务、政务全面工作'
    },
    {
        name: '投资规划部',
        count: '5',
        duty: '负责党务日常工作，分管党建、组织、宣传、纪检监察、统战、老干部等工作，分管党办'
    }
]

const onAdd = () => {
    console.log('add!')
    router.push('/addLeader')
}

const handleClickDelete = (index: number, row: any) => {
    console.log('handleClickDelete!', index)
    console.log('handleClickDelete!', row)
}
</script>

<template>
    <div :class="$style.page">
        <el-button :class="$style.add" type="primary" @click="onAdd">新增</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="机构名称"> </el-table-column>
            <el-table-column prop="count" label="人数" />
            <el-table-column prop="duty" label="主要工作" />
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
