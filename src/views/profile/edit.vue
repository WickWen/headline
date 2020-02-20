<template>
  <div v-if="userData">
    <Header title="编辑资料"></Header>
    <div class="Avatar">
      <img
        v-if="userData.head_img"
        :src="$axios.defaults.baseURL+userData.head_img"
        alt
        class="icon"
      />
      <img v-else src="@/assets/moren.jpg" alt class="icon" />
    </div>
    <TabBar 
    leftText="昵称" 
    :rightText="userData.nickname"
    @handleClick='isshowNickname = true' 
    ></TabBar>
   <!-- 直接添加到监听事件 -->

    <TabBar 
    leftText="密码" 
    rightText="******"
    @handleClick='isshowPassword = true'
    ></TabBar>

    <TabBar 
    leftText="性别" 
    :rightText="userData.gender==1?'男':'女'"
    ></TabBar>

    <van-dialog 
    v-model="isshowNickname" 
    title="修改昵称" 
    show-cancel-button>
      <van-field v-model="nickname" placeholder="请输入昵称" />
    </van-dialog>

    <van-dialog 
    v-model="isshowPassword" 
    title="修改密码" 
    show-cancel-button>
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-dialog>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TabBar from "@/components/TabBar.vue";
export default {
  components: {
    Header,
    TabBar
  },
  data() {
    return {
      userData: null,
      isshowNickname: false,
      isshowPassword: false,
      nickname:'',
      password:''
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      const { data } = res.data;
      if (data) {
        this.userData = data;
      }
    });
  },
  methods: {
    //   可优化
    //   showNickname(){
    //       this.isshowNickname = true;
    //   }
  },
};
</script>

<style lang="less" scoped>
.Avatar {
  padding: 6.667vw 0;
  text-align: center;
  .icon {
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
  }
}
</style>