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
    <authInput
      type="text"
      placeholder="用户名/邮箱"
      rule="^.{4,16}$"
      errMsg="请输入正确的用户名"
      @changeVlaue="setUsername"
    ></authInput>

    <authInput
      type="password"
      placeholder="密码"
      rule="^.{3,18}$"
      errMsg="请输入正确的密码"
      @changeVlaue="setPassword"
    ></authInput>

    <pageBtn btnText="登录" @clickBtn="login"></pageBtn>
  </div>
</template>

<script>
// 1.引入单文件组件 import authInput引入组件对象
import authInput from "@/components/AuthInput.vue";
import pageBtn from "../components/pageBtn.vue";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  // 2.注册子组件
  components: {
    // Key是组件名 value 是组件对象 同名可缩写
    authInput,
    pageBtn
  },
  methods: {
    setUsername(username) {
      // console.log('父组件接收到了数据,先存在自己的data当中')
      this.username = username;
    },
    setPassword(password) {
      this.password = password;
    },
    login() {
      console.log("父组件监听到了子组件传递过来的事件");
      if (!this.username || !this.password) {
        this.$toast("你的用户名或密码不正确,请重新输入");
        return;
      }

      this.$axios({
        url: "http://127.0.0.1:3000/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          const { statusCode, message } = res.data;
          if (statusCode) {
            this.$toast.fail(message);
          } else {
            this.$toast.success(message);
          }
        })
        .catch(err => {
          // 这里做一个防御性编程
          this.$toast.fail("系统错误");
        });
    }
  }
};
</script>

<style lang='less' scoped>
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