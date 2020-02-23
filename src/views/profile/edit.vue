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

    <van-uploader :after-read="afterRead" v-model="fileList" multiple />
    <!-- :before-read="beforeRead"  -->
    

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
      ],
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', 
        //   isImage: true,
        //   status: 'failed',
        //   message: '上传失败' }
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
    },
    // beforeRead(fileObj) {
    //   if (file.type !== 'image/jpeg/png') {    ??
    //     this.$toast.fail('请上传 jpg/png 格式图片');
    //     return false;
    //   }
    //   return true;
    // },
    afterRead(fileObj){
      console.log('图片读取完毕');
      console.log(fileObj.file);
      // 将图片转换成file作为键名的一个FormData 对象
      var formData = new FormData()
      // 接收的两个参数,第一个是字段名(地址),参考API文档 ,第二个这是文件本身
      formData.append('file',fileObj.file)    /* 数据处理完毕 */
      this.$axios({
        url:'/upload',
        method:'post',
        headers:{
          Authorization:localStorage.getItem('token')
        },
        data: formData

      }).then(res=>{
        console.log(res.data);
        const { data } = res.data;
        console.log(this.$axios.defaults.baseURL + data.url);
        
      })
      
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