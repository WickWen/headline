<template>
  <div v-if="userData">
    <Header title="编辑资料"></Header>
    <div class="Avatar">
      <img v-if="userData.head_img" :src="$axios.defaults.baseURL+userData.head_img" alt="" class="icon">
      <img v-else src="@/assets/moren.jpg" alt="" class="icon">
    </div>
    <TabBar leftText="昵称" :rightText="userData.nickname"></TabBar>

    <TabBar leftText="密码" rightText="******"></TabBar>

    <TabBar leftText="性别" :rightText="userData.gender==1?'男':'女'"></TabBar>
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
      userData: null
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
  }
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