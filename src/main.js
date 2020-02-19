import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
// 绑定到原型
Vue.prototype.$axios = axios;
// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'
import { Toast } from 'vant';
Vue.use(Toast);
// 拦截器设置
axios.interceptors.response.use(res => {
  const { statusCode, message } = res.data;
  const errorRegexp = /^4\d\d$/
  if (statusCode && errorRegexp.test(statusCode)) {
    Toast.fail(message || '系统错误');
  }
  // 先拦截 再返回响应数据
  return res;
})


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
