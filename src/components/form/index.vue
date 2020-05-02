<template>
  <div>
    <!-- <ElementTest></ElementTest> -->
<<<<<<< HEAD

    <!-- kkb 表单 -->
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
=======
    <!-- 设置数据模型和校验规则 -->
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
<<<<<<< HEAD
    <!-- <KInput :value="foo" @input="foo=$event"></KInput> -->
=======
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
  </div>
</template>

<script>
import ElementTest from "@/components/form/ElementTest.vue";
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
<<<<<<< HEAD

export default {
  data() {
    return {
      model: {
        username: 'tom',
        password: ''
      },
      rules: {
        username: [{required: true, message: '用户名为必填项'}],
        password: [{required: true, message: '密码为必填项'}]
      }
    };
  },
  components: {
    ElementTest,
    KInput,
    KFormItem,KForm
  },
  methods: {
    onLogin() {
      // 表单需要一个validate方法，他接受一个回调函数，传递校验整体结果
      this.$refs.form.validate(valid => {
        // if(valid) {
        //   alert('校验成功，登录！')
        // } else {
        //   alert('校验失败，请重试！')
        // }

        // 弹窗组件的使用
        // 弹窗组件本身应该挂载在body上
        this.$notice({
          title: '村长喊你来搬砖',
          message: valid ? '校验成功，登录！' : '校验失败，请重试！'
        })
=======
import Notice from '@/components/Notice.vue';

export default {
  components: {
    ElementTest,
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    onLogin() {
      // 全局校验
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          console.log('submit login!');
          
        }else {
          // alert('校验失败')
          this.$create(Notice, {
            title: '校验失败',
            message: '校验错误，请重试！',
            duration: 3000
          }).show()
        }
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
      })
    }
  },
};
</script>

<style scoped>
</style>