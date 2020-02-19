import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
Vue.prototype.$axios = axios;

//引入组件库
import Vant from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';

// 全局前置路由守卫
// to 跳转的页面 from 页面跳转来源
router.beforeEach((to, from, next) => {
  // console.log('拦截路由跳转');
  const token = localStorage.getItem('token')
  
  const AuthPage = [
    '/profile',
    '/editprofile',
  ]
  // 查找 to.path 存在于数组的索引上,如不存在返回-1
  if (AuthPage.indexOf(to.path)>-1) {
    if (token) {
      return next()

    } else {
      return router.replace({
        path: '/login'
      })
    }

  }
  next();
})




// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'
import { Toast } from 'vant'; /* 单独引入一个组件 */
Vue.use(Toast);
// 拦截器设置
axios.interceptors.response.use(res => {
  const { statusCode, message } = res.data;
  const errorRegexp = /^4\d\d$/

  if (statusCode && errorRegexp.test(statusCode)) {
    Toast.fail(message || '系统错误');
  }
  if (message === "用户信息验证失败") {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')

    router.push({
      path:"/login"
    });
}
  // 先拦截 再返回响应数据
  return res;
})




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
