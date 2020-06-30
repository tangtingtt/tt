<template>
  <div class="index-container">
    <div class="first-div">
        <div class="swiper-div">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
                这里放个人介绍
            </el-carousel-item>
        </el-carousel>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data () {
    return {
      initDate: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first-div {
    background-color: #34B3D6;
    height: 600px;
    width: 1200px;
    margin: 24px auto;
    padding: 24px 0;
    border-radius: 20px;
}
.swiper-div {
    width: 400px;
    height: 220px;
    margin: 24px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
