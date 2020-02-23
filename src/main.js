// 脚手架引入基本配置
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入 axios ajax库进行配置
import axios from "axios";
Vue.prototype.$axios = axios;
// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'

//引入组件库并配置 (全局引入)
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';
// 局部引入
import { Toast } from 'vant'; 


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
      return router.push({
        path: '/login'
      }).catch(err => {
        // 这里捕获错误,前端就不会显示
      })
    }

  }
  next();
})

// 设置请求拦截器
axios.interceptors.request.use(config => {
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config;
})

// 设置响应拦截器
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
// 脚手架创建vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
