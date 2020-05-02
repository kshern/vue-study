<template>
<<<<<<< HEAD
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 组件通信 -->
    <!-- <Communication></Communication> -->
    <!-- 表单 -->
    <FormExample></FormExample>
    <!-- 插槽 -->
    <!-- <SlotExample></SlotExample> -->
=======
  <div>
    <!-- store是哪来的，state是响应式的 -->
    <!-- Store类得有commit方法可以执行mutation -->
    <p @click="$store.commit('add')">{{$store.state.count}}</p>
    <p @click="$store.dispatch('asyncAdd')">async:{{$store.state.count}}</p>
    <!-- <p>{{$store.getters.doubleCount}}</p> -->

    <p>{{xx}}</p>
    <button @click="sayHi">say hi</button>
    <!-- $attrs -->
    <p v-on="$listeners">{{$attrs.msg}}</p>
    <!-- provide/inject -->
    <p>{{bar2}}</p>
    <p>{{app.$options.name}}</p>
    <!-- 插槽 -->
    <slot></slot>
    <div>
      <slot name="content" baz="content from child"></slot>
    </div>
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
  </div>
</template>

<script>
<<<<<<< HEAD
import Communication from '@/components/communication';
import FormExample from '@/components/form';
import SlotExample from '@/components/slots';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Communication,
    FormExample,
    SlotExample
  },
}
=======
  export default {
    inject: {
      bar2: 'bar',
      app: 'app'
    },
    data() {
      return {
        xx: 'xx',
        bar: 'my bar'
      }
    },
    mounted() {
      console.log(this.$store);
      
      setTimeout(() => {
        // this.$store.state = {}
        this.$store.state.count++
      }, 1000);
      
      // 监听事件
      this.$root.$on('foo', msg => {
        console.log(msg);
        
      })
    },
    methods: {
      sayHi() {
        // 派发者和监听者是同一个
        // this.$parent.$emit('foo', 'something from brother')
        this.$root.$emit('foo', 'something from brother')

      }
    },
  }
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
</script>

<style scoped>

</style>