<template>
  <div class="inputBox">
    <!-- 前面是input属性: 后面是传进来绑定的数据  v:bind -->
    <!-- 根据布尔值动态添加class可以使用对象的形式声明 -->
    <!-- key是准备添加的class,value是判断是否添加的布尔值 -->
    <input
      :type="type"
      :placeholder="placeholder"
      @blur="errAlert"
      @input="testVlaue"
      :class="{
      error:!isValid,
      success:isValid
      
    }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: false
    };
  },
  // export default 的用法：相当于提供一个接口给外界，让其他文件通过 import 来引入使用。
  props: ["type", "placeholder", "rule", "errMsg"],
  methods: {
    testVlaue(event) {
      const regExp = new RegExp(this.rule);
      // console.log("输入框的值发生了变化", event.target.value);
      this.isValid = regExp.test(event.target.value);
      // console.log(this.isValid);
      // 第二个参数就是要传递的数据,可以被父组件接收到
      this.$emit('changeVlaue',event.target.value)
    },
    errAlert() {
      if (!this.isValid) {
        // alert(this.errMsg);
        this.$toast(this.errMsg)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.inputBox {
  padding: 5.556vw;
  padding-top: 0;
  margin-bottom: -8px;
  input {
    width: 100%;
    height: 10.556vw;
    border: 1px solid #666;
    background: #fff;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .error {
    border-color: red;
  }
  .success {
    border-color: #000;
  }
}
</style>
