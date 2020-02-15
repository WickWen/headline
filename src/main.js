import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
// 绑定到原型
Vue.prototype.$axios = axios;

//引入组件库
import Vant from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
