<template>
  <div>
<<<<<<< HEAD
    <!-- 管理数据：实现双绑 -->
    <!-- :value, @input -->
    <input :type="type" :value="value" @input="onInput"
      v-bind="$attrs">
=======
    <!-- 双向数据绑定：@input, :value -->
    <input type="type" :value="value" @input="onInput" v-bind="$attrs">
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
  </div>
</template>

<script>
  export default {
<<<<<<< HEAD
    inheritAttrs: false , // 关闭特性继承
=======
    inheritAttrs: false,
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
<<<<<<< HEAD
      onInput(e) {
        this.$emit('input', e.target.value)

        // 值发生变化的时候就是需要校验的时候
        this.$parent.$emit('validate')
      }
    },
  }
</script>

<style scoped>
=======
        onInput(e) {
          this.$emit('input', e.target.value)

          // 实时校验，通知父组件
          this.$parent.$emit('validate')
        }
      },
  }
</script>

<style lang="scss" scoped>
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2

</style>