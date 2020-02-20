<template>
  <div class="nav">
      <div class="arrow">
          <span class="iconfont iconjiantou2"></span>
      </div>
      <div class="title">
          {{title}}
      </div>
  </div>
</template>

<script>
export default {
    props:['title']

}
</script>

<style lang="less" scoped>
    .nav{
        display: flex;
        padding: 5.556vw 6.667vw;
        border-bottom: 1px solid #cccccc
    }
    .title{
        flex:1;
        text-align: center;
        position: relative;
        right:2.778vw;
        color: #333333;
        font-size: 3.889vw;
        font-weight: 700;
    }
    .arrow{
        color: #000;
    }
</style>