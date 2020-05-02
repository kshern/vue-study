<template>
  <div>
<<<<<<< HEAD
    <!-- 容器：存放所有表单项 -->
    <!-- 存储值载体：保存大家数据和校验规则 -->
=======
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
    <slot></slot>
  </div>
</template>

<script>
<<<<<<< HEAD
// 我们平时写的组件是一个组件配置对象
export default {
  provide() {
    return {
      // 直接把当前组件实例传递下去
      // 传递下去的对象是响应式的则还可以响应式
=======
export default {
  provide() {
    return {
      // 将表单实例直接传递给后代
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
      form: this
    };
  },
  props: {
<<<<<<< HEAD
    // 数据模型
=======
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate(cb) {
<<<<<<< HEAD
      // 遍历肚子里面的所有FormItem，执行他们的validate方法
      // 全部通过才算通过
      // tasks是校验结果的Promise组成的数组
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      // 统一判断
=======
      // 全局校验

      // 1.遍历所有FormItem，执行他们的validate方法
      // tasks是Promise数组
      const tasks = this.$children
        .filter(item => {
          return item.prop;
        })
        .map(item => item.validate());

>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped>
</style>