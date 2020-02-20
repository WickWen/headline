<template>
  <div class="Listmain" @click="handleClick">
      <div class="leftText">
        {{leftText}}
      </div>
      <div class="rightText">
        {{rightText}}
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {
  props:['leftText','rightText'],
  methods: {
    handleClick(){
      console.log('点击长条组件触发事件')
      this.$emit('handleClick')

    }
  }
}
</script>

<style lang="less" scoped>
.Listmain{
  display: flex;
  padding: 6.667vw;
  border-bottom: 1px solid #eeeeee;
  padding-left: 0;
  margin-left: 6.667vw;
  .rightText{
    display: flex;
    flex: 1;
    padding-right: 2.778vw;
    font-size: 3.889vw;
    color: #afafaf;
    align-items: center;
    justify-content: flex-end;
    
  }
  .arrow{
    color: #afafaf;
  }
}
</style>