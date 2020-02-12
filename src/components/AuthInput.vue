<template>
  <div class="inputBox">
    <!-- 前面是input属性: 后面是传进来绑定的数据  v:bind -->
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  // export default 的用法：相当于提供一个接口给外界，让其他文件通过 import 来引入使用。
  props: ["type", "placeholder"]
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
}
</style>