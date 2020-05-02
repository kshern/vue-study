<template>
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @click="onClick"/>
    <HelloWorld msg="Welcome to Your Vue.js App" ref="hw2">
      <template v-slot:default>abc</template>
      <template v-slot:content="{baz}">content...{{baz}}</template>
    </HelloWorld> -->
    <!-- <communication></communication> -->
    <!-- <slot-example></slot-example> -->
    <!-- <form-example></form-example> -->
    <!-- <NodeTest></NodeTest> -->
    <!-- <tree-test></tree-test> -->
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
<<<<<<< HEAD
=======
import communication from '@/components/communication';
import SlotExample from '@/components/slots'
import FormExample from '@/components/form'
import TreeTest from '@/components/recursion';
import NodeTest from '@/components/recursion/NodeTest.vue';
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2

export default {
  name: 'app',
  provide() {
<<<<<<< HEAD
    return {
      foo: 'abc'
    }
  },
  components: {
    HelloWorld
  }
=======
    // 隔代传参，用法类似于data
    return {
      bar: 'barrrrrrrrr',
      app: this
    }
  },
  components: {
    HelloWorld,
    communication,
    SlotExample,
    FormExample,
    TreeTest,
    NodeTest
  },
  mounted () {
    // this.$children[0].xx = 'ooooooooxxxxxxxxx';
    // this.$refs.hw2.xx = 'blablabla'
  },
  methods: {
    onClick() {
      console.log('click me!!');
      
    }
  },
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
