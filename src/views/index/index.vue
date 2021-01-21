<template>
  <div class="index-container">
    <div class="first-div">
      <div class="swiper-div left-slide">
        <el-carousel :interval="400000" type="card" height="200px">
          <el-carousel-item v-for="item in 3" :key="item">
            <div>
              毎日はもっと楽しくて、少し楽しくて、毎秒好きになる。
              <span
                class="icon iconfont icon-xianxingwaijiao"
                style="color: #1b7cb4"
              ></span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="center-slide">
        <div class="imgDiv inline-block positionR cursor">
          <span>解说</span>
          <img src="../../assets/1.png" class="index-logo" />
        </div>
      </div>
      <div class="right-slide">
        <div id="myChart" :style="{ width: '500px', height: '220px' }"></div>
      </div>
    </div>
    <div class="second-div">
      
    </div>
    <div class="third-div">
      <div style="width: 280px">
        <aplayer :music="videoUpload.music"></aplayer>
      </div>
    </div>
    <div class="four-div">
      <worldCloud></worldCloud>
    </div>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import worldCloud from "../../components/worldCloud";
export default {
  name: "FirstPage",
  data() {
    return {
      videoUpload: {
        //progress: false,
        // progressPercent: 0,
        // successPercent: 0,
        theme: "#ffc0cb",
        autoplay: true,
        repeat: "repeat-one", // 轮播模式。值可以是 'repeat-one'（单曲循环）'repeat-all'（列表循环）或者 'no-repeat'（不循环）。为了好记，还可以使用对应的 'music' 'list' 'none'
        mini: true, // 迷你模式
        float: true, // 浮动模式。你可以在页面上随意拖放你的播放器
        music: {
          // 当前播放的音乐
          title: "能够成家吗",
          author: "咖啡少年",
          url: "https://assets.smallsunnyfox.com/music/1.mp3",
          pic:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2366432289,1795558543&fm=26&gp=0.jpg", // 封面图片
        },
      },
      initDate: "这是首页",
    };
  },
  components: {
    aplayer,
    worldCloud,
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.first-div {
  height: 250px;
  margin: 24px auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
}
.first-div .left-slide {
  display: inline-block;
  float: left;
}
.first-div .right-slide {
  display: inline-block;
  float: right;
}
.second-div {
  border: 2px solid #81c0a1;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 0 8px;
  height: 240px;
  background: url(/static/img/2.4def7a7.jpg) 0 220px no-repeat;
}
.third-div {
  position: fixed;
  bottom: 6px;
  left: 6px;
}
.four-div {
  border: 2px solid pink;
  margin: 24px auto;
}
.swiper-div {
  width: 460px;
  height: 220px;
}
.el-carousel--horizontal {
  overflow-x: visible;
}
.el-carousel--horizontal button {
  background-color: #4aafe5;
  opacity: 0.24;
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
  border: 2px dashed #4aafe5;
  border-radius: 4px;
  background-color: #fff;
}
.el-carousel__item:nth-child(2n + 1) {
  border: 2px dashed #4aafe5;
  border-radius: 4px;
  background-color: #fff;
}
.el-carousel__item div {
  font-size: 14px;
  padding: 24px;
  color: #1b7cb4;
}
.center-slide .imgDiv span {
  position: absolute;
  left: 20px;
  text-align: center;
  font-size: 14px;
  top: -10px;
  width: 20px;
  background-color: #fff;
  padding: 16px 6px;
  border: 1px solid #d46ac8;
  transition: all 0.4s ease;
}
.center-slide .imgDiv:hover span {
  transform: translate(0, -10px);
}
</style>
