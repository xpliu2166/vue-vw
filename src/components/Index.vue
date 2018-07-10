<template>
  <div class="globalBox">
    <div class="f_col f_r_cnt f_jc_cnt head">vw-layout布局测试</div>
    <div class="f_row">
      <div class="item">模块一</div>
      <div class="item">模块二</div>
      <div class="item">模块三</div>
    </div>
    <div class="banner">
      <img src="../common/img/banner.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .head{
    height:100px;
    background:#FFF;
    font-size:48px;
  }
  .item{
    flex:1;
    background:#DDF;
    color:#FFF;
    font-size:36px;
    margin:20px;
  }
  .banner{
    img{
      width:750px;
      height:340px;
      background:#F00;
    }
  }
</style>
