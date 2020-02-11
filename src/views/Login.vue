<template>
  <div class="main">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 3.渲染 -->
    <authInput></authInput>
  </div>
</template>

<script>
// 1.引入单文件组件 import authInput引入组件对象
import authInput from "@/components/AuthInput.vue";
export default {
  // 2.注册子组件
  components: {
    authInput
    // Key是组件名 value 是组件对象 同名可缩写
  }
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
    font-size: 35vw;
    color: #ff5c67;
  }
}
.main {
  background-color: #f2f2f2;
}
</style>