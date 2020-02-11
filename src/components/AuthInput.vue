<template>
  <div class="inputBox">
    <input type="text" placeholder="账户名/邮箱" />

    <input type="text" placeholder="密码" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.inputBox {
  padding: 20px;
  input {
    width: 100%;
    height: 10.556vw;
    border: 1px solid #666;
    padding: 10px;
    background: #fff;
    // outline: none;
    box-sizing: border-box;
    border-radius: 5px;
  }
}
</style>