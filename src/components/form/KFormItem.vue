<template>
  <div>
<<<<<<< HEAD
    <!-- label标签 -->
    <label v-if="label">{{label}}</label>
    <!-- 容器，放插槽 -->
    <slot></slot>
    <!-- 错误信息展示 -->
    <p v-if="error" class="error">{{error}}</p>
=======
    <!-- 1.label标签 -->
    <label v-if="label">{{label}}</label>
    <!-- 插槽 -->
    <slot></slot>
    <!-- 3.错误提示 -->
    <p v-if="error">{{error}}</p>
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
  </div>
</template>

<script>
<<<<<<< HEAD
  import Schema from 'async-validator'

  export default {
    inject: ['form'],
    data() {
      return {
        error: ''
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    mounted () {
      // 监听校验事件
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        // 执行校验
        // 1.获取值和校验规则
        const rules = this.form.rules[this.prop]
        const value = this.form.model[this.prop]

        // 2.执行校验：使用官方也使用的async-validator
        // 创建描述对象
        const descriptor = {[this.prop]:rules}
        // 创建校验器
        const validator = new Schema(descriptor)
        // 执行校验
        return validator.validate({[this.prop]:value}, errors => {
          // 如果errors存在，则说明校验失败
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    },
  }
</script>

<style scoped>
.error{
  color: red
}
=======
import Schema from "async-validator";

export default {
  inject: ["form"],
  data() {
    return {
      error: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String // 校验的字段名称
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 1.获取校验规则和值
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];

      // 2.获取校验器,Schema参数，key是校验字段名，值是校验规则
      const validator = new Schema({ [this.prop]: rules });

      // 3.执行校验, 参数1是校验目标
      // return new Promise((resolve, reject) => {
      //   validator.validate({ [this.prop]: value }, errors => {
      //     if (errors) {
      //       // 校验失败
      //       this.error = errors[0].message;
      //       reject()
      //     } else {
      //       // 校验通过
      //       this.error = "";
      //       resolve()
      //     }
      //   });
      // });
      // validate方法会返回一个Promise
      return validator.validate({ [this.prop]: value }, errors => {
          if (errors) {
            // 校验失败
            this.error = errors[0].message;
 
          } else {
            // 校验通过
            this.error = "";
 
          }
        });
    }
  }
};
</script>

<style scoped>
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
</style>