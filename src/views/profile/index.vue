<template>
  <div class="main" v-if="userData">
    <div class="profileTop">
        <img v-if="userData.head_img" :src="$axios.defaults.baseURL+userData.head_img" alt="" class="picture">
        <img v-else src="@/assets/moren.jpg" alt="" class="picture">
      <div class="profilemid">
        <div class="name">
          <span v-if="userData.gender == 1" class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span>
          {{userData.nickname}}
        </div>
        <div class="date">{{(''+userData.create_date).split("T")[0]}}</div>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <div class="ListVue">
      <TabBar leftText="我的关注" rightText="关注的用户"></TabBar>

      <TabBar leftText="我的跟帖" rightText="跟帖/回复"></TabBar>

      <TabBar leftText="我的收藏" rightText="文字/视频"></TabBar>

      <TabBar leftText="设置" rightText></TabBar>

      <button @click='logout'>退出登录</button>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import { get } from "http";

export default {
  components: {
    TabBar
  },
  data() {
    return {
      userData: {}
    };
  },
  methods: {
      logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        // replace会替换最后的路由
        this.$router.replace({
            path:'/login'
        })
      }
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res.data);
      const { data } = res.data;
      if (data) {
        this.userData = data;
      }
    });
  }
};
</script>

<style lang='less' scoped>
.profileTop {
  display: flex;
  padding: 8.333vw;
  padding-right: 6.667vw;
  background-color: #f2f2f2;
  border-bottom: 8px solid #e4e4e4;
  .picture {
    width: 19.444vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .profilemid {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 6.667vw;
    .name {
      .iconxingbienv {
        color: #f23dbc;
      }
      .iconxingbienan {
        color: #86b5d8;
      }
    }
    .date {
      color: #a0a0a0;
    }
  }
  .arrow {
    display: flex;
    align-items: center;
  }
}
</style>