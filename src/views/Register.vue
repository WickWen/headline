<template>
  <div>
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <!-- 渲染 -->
    <authInput 
      type="text" 
      placeholder="用户名/手机号码" 
      rule="^\d{6,11}$" 
      errMsg="请输入正确的用户名/手机号"
      @changeVlaue='setUsername'
    ></authInput>

    <authInput 
      type="text" 
      placeholder="昵称" 
      rule=".{3,18}$" 
      errMsg="请输入合法信息"
      @changeVlaue="setNickname"
    ></authInput>

    <authInput 
      type="password" 
      placeholder="密码" 
      rule="^.{3,18}$" 
      errMsg="请输入正确的密码"
      @changeVlaue="setPassword"
    ></authInput>

    <pageBtn
      btnText='注册'
      @clickBtn="register"
    ></pageBtn>
  </div>
</template>

<script>
// 引入
import authInput from "@/components/AuthInput.vue";
import pageBtn from "../components/pageBtn.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  // 注册
  components: {
    authInput,
    pageBtn
  },
  methods: {
    setUsername(username) {
      this.username = username;
    },
    setPassword(password) {
      this.password = password;
    },
    setNickname(nickname) {
      this.nickname = nickname;
    },
    register(){
      if (!this.username || !this.password || !this.nickname) {
        this.$toast("请输入完整信息");
        return;
      }

      this.$axios({
        url:"/register",
        method:'post',
        data:{
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res=>{
        const { statusCode, message } = res.data;
          if (!statusCode) {
            this.$toast.success(message);
          } 
      }).catch(err=>{
        this.$toast.fail("系统错误");
      })

    }
    
  }
};
</script>

<style lang="less" scoped>
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
</style>