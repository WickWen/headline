<template>
  <div class="main">
      <div class="profileTop">
          <img src="https://imgsa.baidu.com/forum/w%3D580/sign=a64f6fe4721ed21b79c92eed9d6fddae/75e6e61190ef76c68634053d9216fdfaae5167f9.jpg" alt="" class="picture">
          <div class="profilemid">
              <div class="name">
                <span class="iconfont iconxingbienv"></span>
                  丸子妹
              </div>
              <div class="date">2020-2-11</div>
          </div>
          <div class="arrow">
              <span class="iconfont iconjiantou1"></span>
          </div>
      </div>
      <div class="List"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.profileTop{
    display: flex;
    padding: 8.333vw;
    padding-right: 6.667vw;
    background-color: #f2f2f2;
    border-bottom: 8px solid #e4e4e4;
    .picture{
        width: 19.444vw;
        border-radius: 50%;
    }
    .profilemid{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 6.667vw;
        .name{
            .iconxingbienv{
                color: #f23dbc;
            }

        }
        .date{
            color:#a0a0a0;
        }
    }
    .arrow{
        display: flex;
        align-items: center;
    }
}
</style>