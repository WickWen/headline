<template>
  <div>
    这里是首页
    <br />
    <router-link to="/login">登录页</router-link>
    <br />
    <router-link to="/register">注册页</router-link>
    <br />
    <router-link to="/profile">个人中心页</router-link>
    <br>
    <button @click='logout'>退出登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  }
};
</script>

<style>
</style>