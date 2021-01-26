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
        <worldCloud></worldCloud>
      </div>
      <div class="right-slide" id="review_box" @mouseleave="scroll()" @mouseover="stop()">
        <ul id="comment1">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
        <ul id="comment2"></ul>
      </div>
    </div>
    <div class="second-div">
      
    </div>
    <div class="aplayer-div">
      <div style="width: 280px">
        <aplayer :music="videoUpload.music"></aplayer>
      </div>
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
        // progress: false,
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
      list: [
        'Vue列表渲染',
        'SpringMVC中RequestMapping注解【作用、出现的位置、属性】',
        '解决iframe跨域跟父级进行通讯问题【postMessage】 重点是跨域进行通讯！ ',
        '滑动翻页效果实现和移动端click事件问题',
        '寒假学习的第二周 ',
        'Vscode中使用Git可视化面板管理代码仓库 - 视频教程',
        '计算器项目'
      ],
      timer: null
    };
  },
  components: {
    aplayer,
    worldCloud,
  },
  mounted() {
    this.roll()
  },
  methods: {
    roll(t) {
      var ul1 = document.getElementById("comment1");
      var ul2 = document.getElementById("comment2");
      var ulbox = document.getElementById("review_box");
      ul2.innerHTML = ul1.innerHTML;
      ulbox.scrollTop = 0; // 开始无滚动时设为0
      this.timer = setInterval(this.rollStart, 80); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    },
    stop() {
      clearInterval(this.timer)
    },
    scroll() {
      this.timer = setInterval(this.rollStart, 80);
    },
    // 开始滚动函数
    rollStart() {
      // 上面声明的DOM对象为局部对象需要再次声明
      var ul1 = document.getElementById("comment1");
      var ul2 = document.getElementById("comment2");
      var ulbox = document.getElementById("review_box");
      // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
      if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
      } else {
        ulbox.scrollTop++;
      }
    }
  },
  destroyed() {
    clearInterval(this.timer)
  }
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
}
.first-div .right-slide {
    display: inline-block;
    width: 800px;
    height: 252px;
    overflow: hidden;
}
.first-div .right-slide ul {
  margin: 0px;
}
.first-div .right-slide li {
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
}
.first-div .right-slide li {
  &:hover {
    color: pink;
  }
}
.second-div {
  border: 2px solid #81c0a1;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 0 8px;
  height: 240px;
  background: url(/static/img/2.4def7a7.jpg) 0 220px no-repeat;
}
.aplayer-div {
  position: fixed;
  bottom: 6px;
  left: 6px;
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
</style>
