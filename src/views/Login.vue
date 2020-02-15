<template>
  <div class="main">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 3.渲染 -->
    <!-- type placeholder 传递属性 -->
    <authInput type="text" placeholder="用户名/邮箱" rule="^.{4,16}$" errMsg="请输入正确的用户名"></authInput>

    <authInput type="password" placeholder="密码" rule="^[a-zA-Z0-9]{6,18}$" errMsg="请输入正确的密码"></authInput>

    <pageBtn 
      btnText="登录"
      @clickBtn='login'
    ></pageBtn>
  </div>
</template>

<script>
// 1.引入单文件组件 import authInput引入组件对象
import authInput from "@/components/AuthInput.vue";
import pageBtn from "../components/pageBtn.vue";

export default {
  // 2.注册子组件
  components: {
    // Key是组件名 value 是组件对象 同名可缩写
    authInput,
    pageBtn
  },
  methods: {
    login(){
      console.log('父组件监听到了子组件传递过来的事件')
    }
  },
};
</script>

<style lang='less'>
.closeBtn {
  padding: 6.389vw;
  span {
    font-size: 7.778vw;
    color: #0078d7;
  }
}
.logo {
  text-align: center;
  span {
    margin-bottom: 24px;
    font-size: 35vw;
    color: #ff5c67;
  }
}
body {
  background-color: #f2f2f2;
}
</style>