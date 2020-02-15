<template>
  <div>
    <button class="btn" @click="sonclick">
        {{btnText}}
    </button>
  </div>
</template>

<script>
export default {
  props: ['btnText'],
  methods: {
      sonclick(){
          console.log('子组件被点击')
          this.$emit('clickBtn')
      }
  },
};
</script>

<style lang="less" scoped>
div {
  text-align: center;
}
.btn {
  width: 92.222vw;
  height: 13.333vw;
  background-color: #1877f2;
  border-radius: 2.778vw;
  border: none;
  font-size: 5vw;
  font-weight: 700;
  color: #eeeeee;
  margin-top: 20px;
}
</style>