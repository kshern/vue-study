import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {create} from '@/utils/create'
<<<<<<< HEAD
import Notice from '@/components/Notice'
=======

// import router from './router'
import router from './krouter'

// import store from './store'
import store from './kstore'
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
<<<<<<< HEAD
Vue.prototype.$notice = (opts) => {
  const comp = create(Notice, opts)
  comp.show()
  return comp
}
=======
Vue.prototype.$create = create
>>>>>>> e386e0991366b2ca1d43723566813dfa55462fa2

// new Vue结果是根实例  $root
// App是根组件  $children[0]
// 选项为什么要放进去
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
