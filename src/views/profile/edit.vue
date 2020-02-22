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
    @handleClick='showGender = true'
    ></TabBar>

    <van-action-sheet 
    v-model="showGender" 
    :actions="actions" 
    @select="onSelect" 
    cancel-text="取消"
    close-on-click-action/>

    <van-dialog 
    v-model="isshowNickname" 
    title="修改昵称" 
    show-cancel-button
    @confirm='UserProfile({nickname:nickname})'>
      <van-field v-model="nickname" placeholder="请输入昵称" />
    </van-dialog>

    <van-dialog 
    v-model="isshowPassword" 
    title="修改密码" 
    show-cancel-button
    @confirm='UserProfile({password:password})'>
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
      showGender: false,
      nickname:'',
      password:'',
      actions:[
        {
          name: '男', color: '#00ade9'
        },
        {
          name: '女', color: '#e50053'
        }
      ]
    };
  },
  mounted() {
    // 1.页面挂载完毕, 第一次渲染
    this.loadPage()
  },
  methods: {
    loadPage(){
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
    })

    },
    UserProfile(newData){
      this.$axios({
        url:'/user_update/'+localStorage.getItem('userId'),
        method:'post',
        data: newData,
        headers:{
          Authorization:localStorage.getItem('token')
        }
      }).then(res=>{
        console.log(res);
        // 2.每当修改资料之后都要重新加载数据
        this.loadPage();       
      })
    },
    onSelect(item) {
      this.UserProfile({
        gender: item.name == '男'? 1 :0
      })
      // this.showGender = false ;
      // 可以通过 close-on-click-action 属性开启自动收起
    }
  }
    //   可优化
    //   showNickname(){
    //       this.isshowNickname = true;
    //   }
  
}
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