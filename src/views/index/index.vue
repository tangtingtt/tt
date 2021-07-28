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
      </div>
      <div class="right-slide" id="review_box" @mouseleave="scroll()" @mouseover="stop()">
        <ul id="comment1">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
        <ul id="comment2"></ul>
      </div>
    </div>
    <div class="second-div">
      <p class="second-div-title">图片裁剪</p>
      <div class="test test1">
					<vueCropper
						ref="cropper"
						:img="option.img"
						:outputSize="option.size"
						:outputType="option.outputType"
						:info="true"
						:full="option.full"
						:canMove="option.canMove"
						:canMoveBox="option.canMoveBox"
						:fixedBox="option.fixedBox"
						:original="option.original"
						:autoCrop="option.autoCrop"
						:autoCropWidth="option.autoCropWidth"
						:autoCropHeight="option.autoCropHeight"
						:centerBox="option.centerBox"
						:high="option.high"
						:infoTrue="option.infoTrue"
						@realTime="realTime"
						@imgLoad="imgLoad"
						@cropMoving="cropMoving"
						:enlarge="option.enlarge"
					></vueCropper>
				</div>
        <div class="test-button">
					<button @click="changeImg" class="btn">切换图片</button>
					<!-- <button @click="startCrop" v-if="!crap" class="btn">start</button>
					<button @click="stopCrop" v-else class="btn">stop</button>
					<button @click="clearCrop" class="btn">clear</button>
					<button @click="refreshCrop" class="btn">refresh</button>
					<button @click="changeScale(1)" class="btn">+</button>
					<button @click="changeScale(-1)" class="btn">-</button>
					<button @click="rotateLeft" class="btn">rotateLeft</button>
					<button @click="rotateRight" class="btn">rotateRight</button>
					<button @click="finish('base64')" class="btn">preview(base64)</button>
					<button @click="finish('blob')" class="btn">preview(blob)</button> -->
					<a @click="down('base64')" class="btn">下载图片(base64)</a>
					<a @click="down('blob')" class="btn">下载图片(blob)</a>
					<a :href="downImg" download="demo.png" ref="downloadDom"></a>
				</div>

        <div class="inline-block vertical-align-top">
          <p>截图框大小</p>
					<div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden',
							'margin': '5px'}">
						<div :style="previews.div">
							<img :src="previews.url" :style="previews.img">
						</div>
					</div>
				</div>
        <div class="inline-block vertical-align-top">
					<p>中等大小</p>
					<div :style="previewStyle1"> 
						<div :style="previews.div">
							<img :src="previews.url" :style="previews.img">
						</div>
					</div>
        </div>
        <div class="inline-block vertical-align-top">
					<p>迷你大小</p>
					<div :style="previewStyle2"> 
						<div :style="previews.div">
							<img :src="previews.url" :style="previews.img">
						</div>
					</div>
        </div>
    </div>
    <div class="third-div">
      <div id="fingerPic">
      </div>
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
import { VueCropper } from 'vue-cropper'
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
      timer: null,
      lists: [
        {
          img: "https://avatars2.githubusercontent.com/u/15681693?s=460&v=4"
        },
        {
          img: "http://cdn.xyxiao.cn/Landscape_2.jpg"
        }
      ],
      model: false,
      modelSrc: "",
      crap: false,
      previews: {},
      option: {
        img: "https://img0.baidu.com/it/u=3870964477,3746012709&fm=26&fmt=auto&gp=0.jpg",
        size: 1,
        full: false,
        outputType: "png",
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 150,
        centerBox: false,
        high: false,
        cropData: {},
				enlarge: 1,
        mode: 'contain',
        maxImgSize: 3000,
        limitMinSize: [100, 120]
      },
      downImg: "#",
      previewStyle1: {},
      previewStyle2: {},
    };
  },
  components: {
    aplayer,
    VueCropper
  },
  mounted() {
    this.roll()
    let that = this;
      let element = document.getElementById("fingerPic");
      this.af = new AlloyFinger(element, {
        rotate: function (evt) {
          console.log("实现旋转");
        },
        pinch: function (evt) {
          console.log("实现缩放");
        },
        pressMove: function (evt) {
          console.log("实现移动");
        },
        tap: function (evt) {
          console.log("单击");
          //点按触发
        },
        doubleTap: function (e) {
          console.log("双击");
          //双击屏幕触发
        },
        longTap: function (e) {
          console.log("长按");
          //长按屏幕750ms触发
        },
        swipe: function (e) {
          //e.direction代表滑动的方向
          console.log("swipe" + e.direction);
        },
      })
  },
  methods: {
  
    down(type) {
      // event.preventDefault()
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          this.downImg = window.URL.createObjectURL(data);
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "demo.png");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.downImg = data;
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "demo.png");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      }
    },
    finish(type) {
      // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          var img = window.URL.createObjectURL(data);
          this.model = true;
          this.modelSrc = img;
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.model = true;
          this.modelSrc = data;
        });
      }
    },
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    startCrop() {
      // start
      this.crap = true;
      this.$refs.cropper.startCrop();
    },
    stopCrop() {
      //  stop
      this.crap = false;
      this.$refs.cropper.stopCrop();
    },
    clearCrop() {
      // clear
      this.$refs.cropper.clearCrop();
    },
    refreshCrop() {
      // clear
      this.$refs.cropper.refresh();
    },
    changeImg() {
      this.option.img = this.lists[0].img;
    },
    cropMoving(data) {
      this.option.cropData = data;
    },
    imgLoad(msg) {
      console.log(msg);
    },
    // 实时预览函数
    realTime(data) {
      var previews = data;
      var h = 0.5;
      var w = 0.2;
      this.previewStyle1 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: h
      };
      this.previewStyle2 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: w
      };
      this.previewStyle3 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: (100 / previews.w)
      };
      this.previewStyle4 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: (100 / previews.h)        
      };
			this.previews = data;
    },
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
.cropper-content{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .cropper-box{
    flex: 1;
    width: 100%;
    .cropper{
      width: auto;
      height: 300px;
    }
  }

  .show-preview{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    .preview{
      overflow: hidden;
      border:1px solid #67c23a;
      background: #cccccc;
    }
  }
}
.footer-btn{
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .scope-btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding-right: 10px;
  }
  .upload-btn{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  .btn {
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    margin-right: 10px;
  }
}
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
  .second-div-title {
    color: #81c0a1;
    font-size: 18px;
    font-weight: bold;
  }
  .test {
      height: 300px;
  }
  .show-preview {
    display: inline-block;
  }
  .test-button {
    margin-top: 10px;
    button {
        background-color: #81c0a1;
        border-color: #81c0a1;
        color: #fff;
        line-height: 25px;
        border-radius: 7px;
    }
    a {
      color: #81c0a1;
      font-size: 13px;
      margin: 9px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
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
