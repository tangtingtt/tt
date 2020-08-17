<template>
  <div class="index-container">
    <div class="first-div">
        <div class="swiper-div">
        <el-carousel :interval="400000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
                <div>毎日はもっと楽しくて、少し楽しくて、毎秒好きになる。
                  <span class="icon iconfont icon-xianxingwaijiao" style="color: #1B7CB4;"></span>
                </div>
            </el-carousel-item>
        </el-carousel>
        </div>
    </div>
    <div class="second-div">
      <div class="imgDiv inline-block positionR cursor">
        <span>解说</span>
        <img src="../../assets/1.png" class="index-logo">
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
    box-shadow: -2px -2px 20px #f3f3f3;
    height: 250px;
    width: 1200px;
    margin: 24px auto;
    padding: 24px 24px 0;
    border-radius: 20px;
}
.second-div {
    width: 1160px;
    border: 2px solid #81c0a1;
    margin: 0 auto;
    margin-bottom: 60px;
    padding: 0 8px;
    height: 510px;
    background: url(/static/img/2.4def7a7.jpg) 0 220px no-repeat;
}
.swiper-div {
    width: 460px;
    height: 220px;
}
.el-carousel--horizontal {
  overflow-x: visible;
}
.el-carousel--horizontal button {
    background-color: #4AAFE5;
    opacity: .24;
    width: 8px !important;
    height: 8px;
    border-radius: 4px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
    border: 2px dashed #4AAFE5;
    border-radius: 4px;
    background-color: #fff;
}
.el-carousel__item:nth-child(2n+1) {
    border: 2px dashed #4AAFE5;
    border-radius: 4px;
    background-color: #fff;
}
.el-carousel__item div {
  font-size: 14px;
  padding: 24px;
  color: #1B7CB4;
}
.second-div .imgDiv span {
    position: absolute;
    left: 20px;
    text-align: center;
    font-size: 14px;
    top: -10px;
    width: 20px;
    background-color: #fff;
    padding: 16px 6px;
    border: 1px solid #d46ac8;
    transition: all .4s ease;
}
.second-div .imgDiv:hover span{
    transform: translate(0,-10px);
}
</style>
