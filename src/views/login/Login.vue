<script setup lang="ts">
import { reactive, ref, onBeforeMount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { ElForm } from 'element-plus'

// InstanceType<T>：获取构造函数类型的实例类型
type FormInstance = InstanceType<typeof ElForm>

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    account: '',
    password: ''
})
const accountAutofocus = ref<boolean>(true)
const passwordAutofocus = ref<boolean>(false)
const checked = ref<boolean>(false)
const rules = reactive({
    account: [
        {
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        },
        {
            min: 6,
            max: 13,
            message: '密码长度不能少于6~13字符',
            trigger: 'blur'
        }
    ]
})

console.log('rules', rules)

onBeforeMount(() => {
    console.log('onBeforeMount: 挂载前')
    ruleForm.account = localStorage.getItem('account') || ''
    if (ruleForm.account) {
        accountAutofocus.value = false
        passwordAutofocus.value = true
    }
})

onMounted(() => {
    console.log('onMounted: 挂载后')
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            const formData = { ...ruleForm }
            if (checked.value) {
                localStorage.setItem('account', formData.account)
            }
            localStorage.setItem('token', 'token123456')
            router.replace('/home')
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<template>
    <div :class="$style.login">
        <div :class="$style.loginForm">
            <h2 :class="$style.title">管理后台</h2>
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                size="large"
                :hide-required-asterisk="true"
            >
                <el-form-item label="账号：" prop="account">
                    <el-input
                        v-model="ruleForm.account"
                        clearable
                        size="large"
                        :autofocus="accountAutofocus"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        show-password
                        clearable
                        size="large"
                        :autofocus="passwordAutofocus"
                    ></el-input>
                </el-form-item>
                <el-form-item class="special">
                    <el-checkbox v-model="checked" label="记住账号" size="large"></el-checkbox>
                    <router-link :class="$style.forgetPassword" to="/home">忘记密码?</router-link>
                </el-form-item>
                <el-form-item>
                    <el-button
                        :class="$style.submit"
                        type="primary"
                        round
                        size="large"
                        @click="submitForm(ruleFormRef)"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss" module>
@import '../../styles/common.scss';
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/img/login-bg.png') no-repeat;
}

.loginForm {
    width: 430px;
    height: 360px;
    padding: 34px 40px 40px;
    border-radius: 8px;
    background-color: #fff;

    > .title {
        height: 28px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #2d2d2d;
        line-height: 28px;
        text-align: center;
        margin-bottom: 34px;
    }
}

.special {
    justify-content: space-between;
}

.forgetPassword {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    &:hover {
        color: $primary-color;
    }
}

.submit {
    width: 100%;
    // height: 44px;
}
</style>
