import Vue from 'vue'

<<<<<<< HEAD
// 可以动态创建组件实例并挂载至body
export function create(Component, props) {
  // 1.组件实例怎么创建？
  // 方式1：组件配置对象 =》 Ctor = Vue.extend(Component)变成构造函数
  // =》 new Ctor()
  let Ctor = Vue.extend(Component)
  const vm = new Ctor({
    propsData:props
  }).$mount()
  document.body.appendChild(vm.$el)
  vm.remove = () =>{
    document.body.removeChild(vm.$el)
  }
  return vm

  // 方式2：借鸡生蛋new Vue({render() {}}),在render中把Component作为根组件
  // const vm = new Vue({
  //   // h是createElement函数，它可以返回虚拟dom
  //   render(h) {
  //     console.log(h(Component,{props}));
      
  //     // 将Component作为根组件渲染出来
  //     // h(标签名称或组件配置对象，传递属性、事件等，孩子元素)
  //     return h(Component, {props})
  //   }
  // }).$mount() // 挂载是为了把虚拟dom变成真实dom
  // 不挂载就没有真实dom
  // 手动追加至body
  // 挂载之后$el可以访问到真实dom
  // document.body.appendChild(vm.$el)

  // console.log(vm.$children);
  
  // 实例
  // const comp = vm.$children[0]

  // // 淘汰机制
  // comp.remove = () => {
  //   // 删除dom
  //   document.body.removeChild(vm.$el)

  //   // 销毁组件
  //   vm.$destroy()
  // }

  // 返回Component组件实例
  // return comp
=======
// 创建一个create函数，可以动态生成组件实例，并且挂载至body上
// Component:是组件配置对象
export function create(Component, props) {
  // 借用Vue构造函数来动态生成这个组件实例
  const vm = new Vue({
    render(h) {
      // h是createElement别名，它可以返回一个虚拟dom，VNode
      return h(Component, {props})
    }
  })

  // 通过挂载得到真实dom
  vm.$mount()

  // 通过$el属性获取真实dom
  document.body.appendChild(vm.$el)

  // 组件实例返回
  const comp = vm.$children[0]

  // 销毁方法
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    comp.$destroy()
  }

  return comp
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2
}