<template>
  <div class="css-container">
    <div class="size1">
      <div class="height36">
        <div class="loc-mc-box">
          <p class="bnj-txt txt-up">百大</p>
          <img src="../../assets/my-logo.png" alt="menuName" class="bnj-gif">
          <p class="bnj-txt txt-down">百大</p>
        </div>
      </div>
    </div>
    <!-- 心跳的效果 -->
    <div class="size1">
      <div class="height36 heartbeat">
        心跳
      </div>
    </div>
    <!-- 跳动的点 -->
    <div class="size1">
      <div class="dot-flashing"></div>
    </div>
    <div class="size1">
      <div class="dot-carousel"></div>
    </div>
    <div class="size1">
      <div class="dot-spin"></div>
    </div>
    <div class="size1">
      <div class="dot-bouncing"></div>
    </div>
    <div class="size1">
      <div class="dot-rolling"></div>
    </div>
    <!-- 抖动的猴子 -->
    <div class="size1 positionR">
      <i class="preview-item big transp shake-hard shake-constant shake-constant--hover" id="pr2">
        <span class="preview-icon">🙈</span>
      </i>
    </div>
    <div class="size1 positionR">
      <i class="preview-item big transp shake-constant shake-constant--hover shake-vertical" id="pr2">
        <span class="preview-icon">🙈</span>
      </i>
    </div>
    <div class="size1 positionR">
        <span class="rshare-qzone"></span>
    </div>
    <div class="size1 positionR">
        <a href="#" class="hvr-bubble-top">Bubble Top</a>
    </div>
    <div class="size1 positionR">
        <a href="#" class="hvr-bubble-float-top">Bubble Float Top</a>
    </div>
    <div class="size1 positionR">
        <a href="#" class="hvr-curl-top-left">Curl Top Left</a>
    </div>
    <div class="size1 relative">
        <div class="cloud"></div>
    </div>
    <div class="size1 tt12 relative">
        <div class="flower">
						<div class="flower-top">
							<p></p>
							<p></p>
							<p></p>
							<p></p>
						</div>
						<div class="flower-head"></div>
					</div>
    </div>
    <div class="size1 tt13 relative">
        <div class="bee">
						<img src="@/assets/been.jpg"/>
					</div>
    </div>
    <div class="size1 tt14 relative">
        <i class="icon"></i>
    </div>
    <div class="size1 tt15 relative overflow-hid">
          <div class="pin"></div>
          <div class="pulse"></div>
          <audio controls="controls" style="display: none;"></audio></body>
    </div>
    <div class="size1 tt16 relative">
          <img class="mike" src="https://treehouse-code-samples.s3.amazonaws.com/CSS-DD/codepen/stage-12/mike.png"/>
          <div class="boat">
            <img src="https://treehouse-code-samples.s3.amazonaws.com/CSS-DD/codepen/stage-12/boat.png" alt="tugboat">
          </div>
    </div>
    <div class="size1 tt17 relative">
      <!-- https://codepen.io/theigmo87/pen/cwHyK -->
          <input type="checkbox" id="cbtest" />
          <label for="cbtest" class="check-box"></label>
    </div>
    <div class="size1 tt18 relative">
     radial-gradient() 函数用径向渐变创建 "图像"。
     farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
    </div>
    <div class="size1 tt19 relative">
      <i class="iconfont icon-jiantou-copy"></i>
    </div>
    <div class="size1 tt20 relative">
      <i></i>
    </div>
    <div class="size1 tt21 relative">
      <a>按钮</a>
    </div>
    <div class="size1 tt22 relative">
      <p>弹窗第一次打开效果</p>
      <img src="../../assets/dialog-bg1.png" />
    </div>
    <div class="size1 tt23 relative">
      <span>立减4元</span>
    </div>
    <div class="size1 tt24 relative" :class="[foldFlag?'fold':'']">
      <i class="jdrank_nav_arrow" @click="fold()"></i>
    </div>
    <div class="size1 tt25 relative">
      <img src="../../assets/zp_small.gif" />
    </div>
    <div class="size1 tt26 relative">
      <div class="now-buy-btn">立即抢购<div class="_4Y0Qtm_k"></div></div>
    </div>
    <div class="size1 tt27 relative">
      <img src="../../assets/love.png"/>
    </div>
    <div class="size1 tt28 relative">
      <img src="../../assets/water.png"/>
    </div>
    <div class="size1 tt29 relative">
      <div class="water-wrap">
        <div class="collect-bean">
          <div class="abs-bean ani1"></div>
          <div class="abs-bean ani2"></div>
          <div class="abs-bean ani3"></div>
          <div class="abs-bean ani4"></div>
          <div class="abs-bean ani5"></div>
        </div>
        <div>
          <div class="water-wave">
            <div class="value">74</div>
          </div>
        </div>
      </div>
    </div>
    <div class="size1 tt30 relative">
      <img src="../../assets/hb.png"/>
    </div>
    <div class="size1 tt31 relative">
      <img src="../../assets/light.png"/>
    </div>
    <div class="size1 tt32 relative">
      <img src="../../assets/home_guide_flash.png" class="img1"/>
      <img src="../../assets/home_guide_finger.png" class="img2"/>
    </div>
    <div class="size1 tt33 relative">
      <div class="img-box">
        <div class="img1"><img src="../../assets/goods.png"/></div>
        <div class="img2"><img src="../../assets/goods2.png"/></div>
      </div>
    </div>
    <div class="size1 tt34 relative">
      <div class="all-wrap">
        <div class="all">
          <div class="yarn"></div>
        </div>
      </div>
    </div>
    <div class="size1 tt35 relative">
      <div class="heart"></div>
    </div>
    <div class="size1 tt36 relative">
      <div class="star"></div>
    </div>
    <div class="size1 tt37 relative">
      <img src="../../assets/hb2.png"/>
    </div>
    <div class="size1 tt38 relative">
      <img src="../../assets/lq.png" class="lq"/>
      <img src="../../assets/finger2.png" class="finger2"/>
    </div>
    <div class="size1 tt39 relative">
      <img src="../../assets/apple.png" class="apple"/>
    </div>
    <div class="size1 tt40 relative">
      <div class="relative btn" >
        <img src="../../assets/btn.png"/>
        <div class="point-box">
          <div class="_2JdrB1OO"></div>
        </div>
      </div>
    </div>
    <div class="size1 tt41 relative">
      <div class="door">
          <div class="left"></div>
          <div class="right"></div>
      </div>
    </div>
    <div class="size1 tt42 relative">
      <img src="../../assets/rocket.png"/>
    </div>
    <div class="size1 tt43 relative">
      <span class="loader-inner ball-scale-ripple">
          <span></span>
      </span>
    </div>
    <div class="size1 tt44 relative">
      <ul class="slider">
        <li class="slider-item slider-item0">
          <img src="../../assets/live-1.png" data-mst-type="img" alt="图片" lazy="loaded" style="">
        </li>
        <li class="slider-item slider-item1">
          <img src="../../assets/live-2.png" data-mst-type="img" alt="图片"  lazy="loaded" style="">
        </li>
        <li class="slider-item slider-item2">
          <img src="../../assets/live-3.png" data-mst-type="img" alt="图片" lazy="loaded" style="">
        </li>
        <li class="slider-item slider-item3">
          <img src="../../assets/live-4.png" data-mst-type="img" alt="图片" lazy="loaded" style="">
        </li>
        <li class="slider-item slider-item4">
          <img src="../../assets/live-5.png" data-mst-type="img" alt="图片" lazy="loaded" style="">
        </li>
        <li class="slider-item slider-item5">
          <img src="../../assets/live-6.png" data-mst-type="img" alt="图片" lazy="loaded" style="">
        </li>
      </ul>
      <img src="../../assets/live.png" class="live-icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "cssPage",
  data() {
    return {
      foldFlag:false
    };
  },
  components: {

  },
  mounted() {
  },
  methods: {
      fold() {
        this.foldFlag = !this.foldFlag
      }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/color.scss';
@import '@/assets/css/animation.scss';
  @-moz-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 50px; }
  }
  @-webkit-keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 50px; }
  }
  @keyframes dothabottomcheck{
      0% { height: 0; }
      100% { height: 50px;  }
  }
  @keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 120px; }
  }
  @-webkit-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 120px; }
  }
  @-moz-keyframes dothatopcheck{
      0% { height: 0; }
      50% { height: 0; }
      100% { height: 120px; }
  }
@keyframes piggyFingerFlash {
    0% {
        opacity: 0
    }

    66.66% {
        opacity: 1
    }

    to {
        opacity: 1
    }
}
@keyframes piggyFingerIcon {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        -webkit-transform: translate3d(.1rem,.1rem,0);
        transform: translate3d(.1rem,.1rem,0)
    }
}
@keyframes animateCls_ltart_1630028639150_A{
  0.00%{ transform:scaleX(0);opacity:0 }
  40.38%{ transform:scaleX(0);opacity:0 }
  45.19%{ transform:scaleX(0);opacity:0 }
  50.00%{ transform:scaleX(1);opacity:1 }
  90.38%{ transform:scaleX(1);opacity:1 }
  95.19%{ transform:scaleX(0);opacity:0 }
  100.00%{ transform:scaleX(0);opacity:0 }
}
@keyframes animateCls_ltart_1630028639154_A{
  0.00%{ transform:scaleX(1);opacity:1 }
  40.38%{ transform:scaleX(1);opacity:1 }
  45.19%{ transform:scaleX(0);opacity:0 }
  50.00%{ transform:scaleX(0);opacity:0 }
  90.38%{ transform:scaleX(0);opacity:0 }
  95.19%{ transform:scaleX(0);opacity:0 }
  100.00%{ transform:scaleX(1);opacity:1 }
}
@keyframes bob {
  0% {
    transform: translateY(6px);
  }
  6.25% {
    transform: translateY(-6px);
  }
  12.5% {
    transform: translateY(6px);
  }
  18.75% {
    transform: translateY(-6px);
  }
  25% {
    transform: translateY(6px);
  }
  31.25% {
    transform: translateY(-6px);
  }
  37.5% {
    transform: translateY(6px);
  }
  43.75% {
    transform: translateY(-6px);
  }
  50% {
    transform: translateY(6px);
  }
  56.25% {
    transform: translateY(-6px);
  }
  62.5% {
    transform: translateY(6px);
  }
  68.75% {
    transform: translateY(-6px);
  }
  75% {
    transform: translateY(6px);
  }
  81.25% {
    transform: translateY(-6px);
  }
  87.5% {
    transform: translateY(6px);
  }
  93.75% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(6px);
  }
}
@keyframes swing {
  0% {
    transform: rotate(5deg);
  }
  12.5% {
    transform: rotate(-10deg);
  }
  25% {
    transform: rotate(10deg);
  }
  37.5% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(23deg);
  }
  62.5% {
    transform: rotate(-23deg);
  }
  75% {
    transform: rotate(15deg);
  }
  87.5% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
@keyframes beat {
    0% {
        transform: translate(580%,-20%) rotate(45deg)scale(1.2)
    }

    10% {
        transform: translate(580%,-20%) rotate(45deg)scale(1.3)
    }

    20% {
        transform: translate(580%,-20%) rotate(45deg)scale(1.4)
    }
}
@keyframes twinkle2 {
    0% {
        -webkit-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0)
    }

    50% {
        -webkit-transform: rotate(540deg) scale(1.2);
        transform: rotate(540deg) scale(1.2)
    }

    100% {
        -webkit-transform: rotate(1080deg) scale(0);
        transform: rotate(1080deg) scale(0)
    }
}
@keyframes hob_shake {
    15%, 45%{
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
        transform-origin: 50% 100%; 
    }
    30%{
        -webkit-transform: rotate(-3deg);
        transform: rotate(-3deg);
        transform-origin: 50% 100%;
    }
    60% ,100%{
    	-webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        transform-origin: 50% 100%;
    }
}
.tt44 {
  align-items: end !important;
  .live-icon {
    width: 34px;
  }
  ul {
    list-style: none;
    position: absolute;
    bottom: 20%;
  }
  .slider-item {
    width: 0;
    position: absolute;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    img {
      width: 100%;
    }
  }
  .slider-item0 {
    webkit-animation-delay: -3.5s;
    animation-delay: -3.5s;
    -webkit-animation-name: startLeft;
    animation-name: startLeft;
    img {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
  }
  .slider-item1 {
    -webkit-animation-delay: -2.5s;
    animation-delay: -2.5s;
    -webkit-animation-name: startRight;
    animation-name: startRight;
    img {
      -webkit-transform: rotate(40deg);
      transform: rotate(40deg);
    }
  }
  .slider-item2 {
    -webkit-animation-delay: -2s;
    animation-delay: -2s;
    -webkit-animation-name: startRight;
    animation-name: startRight;
    img {
      -webkit-transform: rotate(-30deg);
      transform: rotate(-30deg);
    }
  }
  .slider-item3 {
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
    -webkit-animation-name: startLeft;
    animation-name: startLeft;
    img {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }
  }
  .slider-item4 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
      -webkit-animation-name: startLeft;
      animation-name: startLeft;
    img {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
  }
  .slider-item5 {
    -webkit-animation-delay: -.5s;
    animation-delay: -.5s;
    -webkit-animation-name: startRight;
    animation-name: startRight;
    img {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
    }
  }
}
.tt43 {
.ball-scale-ripple {
  span {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    height: 50px;
    width: 50px;
    display: inline-block;
    border-radius: 100%;
    border: 2px solid pink;
    -webkit-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8);
    animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8); 
    }
  }
}
.tt42 {
  img {
    width: 82px;
    animation: flight 3s ease-in-out 0s infinite alternate none;
    -webkit-animation: flight 3s ease-in-out 0s infinite alternate none;
  }
}
.tt41 {
  .door {
    width: 150px;
    height: 150px;
    margin: 100px auto;
    border: 1px solid gray;
    perspective: 500px;
    background-color:pink;
    position: relative;
    div {
      box-sizing: border-box;
      border: 1px solid black;
    }
    .left,.right {
        float: left;
        width: 50%;
        height: 100%;
        background-color: brown;
        transition: 1s;
        position: relative;
        opacity: 1;
    }
    .left{
        transform-origin: left center;
        &:before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-10px);
            border: 1px solid whitesmoke;
            right: 0;
        }
    }
    .right{
        transform-origin: right center;
        &:before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-10px);
            border: 1px solid whitesmoke;
            left: 0;
        }
    }
    &:hover .left {
        transform: rotateY(-130deg);
        // opacity: 0;
    }
    &:hover .right {
        transform: rotateY(130deg);
        // opacity: 0;
    }
  }
}
.tt40 {
  .btn {
    width: 80%;
  }
  .point-box {
    height: 86%;
    width: 80%;
    overflow: hidden;
    position: absolute;
    top: 7%;
    left: 10%;
  }
  ._2JdrB1OO {
    width: 100%;
    height: 734px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 734px;
    animation-fill-mode: forwards;
    background-image: url(../../assets/point.png);
    -webkit-animation: _3e3H9AGX 1s steps(7) infinite;
    animation: _3e3H9AGX 1s steps(7) infinite;
  }
}
.tt39 {
  .apple {
    width: 42%;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-animation: _1Ct4LnY 4s linear infinite;
    animation: _1Ct4LnY 4s linear infinite;
  }
}
.tt38 {
  .lq {
      width: 42%;
      -webkit-animation: _2m2BE .8s ease-out infinite;
      animation: _2m2BE .8s ease-out infinite;
  }
  .finger2 {
    width: 18%;
    position: absolute;
    right: 28%;
    bottom: 20%;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-transform-origin: 90% 90%;
    transform-origin: 90% 90%;
    -webkit-animation-name: finger-moving-animation;
    animation-name: finger-moving-animation
  }
}
.tt37 {
  img {
    width: 64px;
    animation: hob_shake 1s infinite;
  }
}
.tt36 {
  background-color: pink !important;
  .star {
    position: absolute;
    right: 46%;
    top: 41%;
    height: 18px;
    width: 18px;
    background: #fff;
    -webkit-clip-path: polygon(20% 87%,50% 66%,80% 87%,67% 54%,96% 35%,60% 35%,50% 5%,40% 35%,4% 35%,33% 54%);
    clip-path: polygon(20% 87%,50% 66%,80% 87%,67% 54%,96% 35%,60% 35%,50% 5%,40% 35%,4% 35%,33% 54%);
    -webkit-animation: twinkle2 2s infinite;
    animation: twinkle2 2s infinite;
  }
}
.tt35 {
  .heart {
      width: 32px;
      height: 32px;
      background-color: #ff3838;
      transform: translate(580%,-20%) rotate(45deg);
      animation: beat 1s linear infinite;
          position: absolute;
      left: -82px;
  }

  .heart:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FF3838;
      border-radius: 50px;
      transform: translateY(-50%)
  }

  .heart:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FF3838;
      border-radius: 50px;
      transform: translateX(-50%)
  }
}
.tt34 {
  background-color: black !important;
  position: relative;
  overflow: hidden;
  .all-wrap {
    position: absolute;
    top:-6px;
    -webkit-animation: bob 7s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
    animation: bob 7s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
  }
  .all {
    position: absolute;
    width: 40px;
    height: 40px;
    // transform-origin: center -20rem;
    // -webkit-animation: swing 7s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
    // animation: swing 7s cubic-bezier(0.5, 0, 0.5, 1) infinite both;
    &:before {
      position: absolute;
      height: 60px;
      width: 2px;
      background-color: #DB242A;
      left: 46%;
      content:'';
      top:0;
    }
    .yarn {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: radial-gradient(circle at top left, #e97c7f, #DB242A 50%, #af1d22);
      top: 50px;
      margin-left: -6px;
    }
  }
}
.tt33 {
  .img-box {
    position: relative;
    width:100px;
    height: 100px;
    div {
      left: 0;
      top:0;
      position: absolute;
      height: 100px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .img1 {
    animation: animateCls_ltart_1630028639150_A 5200ms linear 0ms infinite;
  }
  .img2 {
    animation: animateCls_ltart_1630028639154_A 5200ms linear 0ms infinite;
  }
}
.tt32 {
    background-color: #2d9ee0 !important;
    img {
      width:30%;
    }
    .img1 {
      animation: piggyFingerFlash .5s ease-in-out 0s infinite;
      margin-bottom: 30%;
      margin-right: -14%;
    }
    .img2 {
      animation: piggyFingerIcon .5s ease-in-out 0s infinite;
    }
}
@keyframes treasure-box-light {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
.tt31 {
  img {
    width: 100%;
    -webkit-animation: treasure-box-light 12s linear infinite;
    animation: treasure-box-light 12s linear infinite;
  }
}
.tt30 {
  img {
    width: 24px;
    -webkit-animation: rotateRedPacket-jsx-3107098372 2s steps(1) 0s infinite normal none;
    animation: rotateRedPacket-jsx-3107098372 2s steps(1) 0s infinite normal none;
  }
}
@keyframes rotateRedPacket-jsx-3107098372 {
  0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }

  2% {
      -webkit-transform: rotate(-6.5deg);
      -ms-transform: rotate(-6.5deg);
      transform: rotate(-6.5deg);
  }

  4% {
      -webkit-transform: rotate(-13deg);
      -ms-transform: rotate(-13deg);
      transform: rotate(-13deg);
  }

  6% {
      -webkit-transform: rotate(-7.8deg);
      -ms-transform: rotate(-7.8deg);
      transform: rotate(-7.8deg);
  }

  8% {
      -webkit-transform: rotate(-2.6deg);
      -ms-transform: rotate(-2.6deg);
      transform: rotate(-2.6deg);
  }

  10% {
      -webkit-transform: rotate(2.6deg);
      -ms-transform: rotate(2.6deg);
      transform: rotate(2.6deg);
  }

  12% {
      -webkit-transform: rotate(7.8deg);
      -ms-transform: rotate(7.8deg);
      transform: rotate(7.8deg);
  }

  14% {
      -webkit-transform: rotate(13deg);
      -ms-transform: rotate(13deg);
      transform: rotate(13deg);
  }

  16% {
      -webkit-transform: rotate(7.8deg);
      -ms-transform: rotate(7.8deg);
      transform: rotate(7.8deg);
  }

  18% {
      -webkit-transform: rotate(2.6deg);
      -ms-transform: rotate(2.6deg);
      transform: rotate(2.6deg);
  }

  20% {
      -webkit-transform: rotate(-2.6deg);
      -ms-transform: rotate(-2.6deg);
      transform: rotate(-2.6deg);
  }

  22% {
      -webkit-transform: rotate(-7.8deg);
      -ms-transform: rotate(-7.8deg);
      transform: rotate(-7.8deg);
  }

  24% {
      -webkit-transform: rotate(-13deg);
      -ms-transform: rotate(-13deg);
      transform: rotate(-13deg);
  }

  26% {
      -webkit-transform: rotate(-8.67deg);
      -ms-transform: rotate(-8.67deg);
      transform: rotate(-8.67deg);
  }

  28% {
      -webkit-transform: rotate(-4.33deg);
      -ms-transform: rotate(-4.33deg);
      transform: rotate(-4.33deg);
  }

  30% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }

  100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }
}
.tt29 {
  .water-wrap {
    position: relative;
  }
  .collect-bean {
    width: 100%;
    height: 68px;
    position: absolute;
    top: -52px;
    left:10px;
    .abs-bean {
      border: 1px solid #16e3e8;
      border-radius: 50%
    }
    .ani1 {
        width: 8px;
        height: 8px;
        box-shadow: inset 0 0 2px #16e3e8;
        -webkit-animation: slideInDown1 1.5s linear infinite;
        animation: slideInDown1 1.5s linear infinite;
    }
    .ani2{
        width: 10px;
        height: 10px;
        box-shadow: inset 0 0 4px #16e3e8;
        margin-left:37px;
        margin-top: -1px;
        -webkit-animation: slideInDown2 1.3s linear infinite;
        animation: slideInDown2 1.3s linear infinite
    }
    .ani3{
      width:14px;
      height: 14px;
      box-shadow: inset 0 0 1px #16e3e8;
      margin-left: 10px;
      margin-top: -26px;
      -webkit-animation: slideInDown3 1.7s linear infinite;
      animation: slideInDown3 1.7s linear infinite
    }
    .ani4 {
       width: 13px;
      height: 13px;
      -webkit-box-shadow: inset 0 0 4px #16e3e8;
      box-shadow: inset 0 0 4px #16e3e8;
      margin-left: 14px;
      margin-top: 3px;
      -webkit-animation: slideInDown4-data-v-6a0dcf10 1.6s linear infinite;
      animation: slideInDown4-data-v-6a0dcf10 1.6s linear infinite;
    }
    .ani5 {
        width: 11px;
      height: 11px;
      -webkit-box-shadow: inset 0 0 8px #16e3e8;
      box-shadow: inset 0 0 4px #16e3e8;
      margin-left: 29px;
      margin-top: -10px;
      -webkit-animation: slideInDown5-data-v-6a0dcf10 1.8s linear infinite;
      animation: slideInDown5-data-v-6a0dcf10 1.8s linear infinite;
    }
  }
  .water-wave {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    overflow: hidden;
    .value {
      width: 100%;
      height: 100%;
      position: absolute;
      background: url('../../assets/qiu.png') no-repeat;
      background-size: 100% 100%;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      font-size:12px;
      font-family: PingFangSC-Medium;
      text-align: center;
      color: #fff;
      line-height: 52px;
      // line-height: 4.53vw;
      // padding-top: 4.53vw;
    }
  }
}
@keyframes slideInDown1 {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        visibility: visible
    }

    to {
        -webkit-transform: translate3d(0,50px,0);
        transform: translate3d(0,50px,0)
    }
}
@keyframes slideInDown2 {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        visibility: visible
    }

    to {
        -webkit-transform: translate3d(0,50px,0);
        transform: translate3d(0,50px,0)
    }
}
@keyframes slideInDown3 {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        visibility: visible
    }

    to {
        -webkit-transform: translate3d(0,50px,0);
        transform: translate3d(0,50px,0)
    }
}
@keyframes slideInDown4 {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        visibility: visible
    }

    to {
        -webkit-transform: translate3d(0,50px,0);
        transform: translate3d(0,50px,0)
    }
}
@keyframes slideInDown5 {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        visibility: visible
    }

    to {
        -webkit-transform: translate3d(0,50px,0);
        transform: translate3d(0,50px,0)
    }
}
.tt28 {
  background-color: palegoldenrod !important;
  img {
    animation: upAndDown 1.5s linear infinite alternate;
  }
}
@keyframes upAndDown {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    to {
        -webkit-transform: translateY(-14%);
        transform: translateY(-14%)
    }
}
.tt27 {
  img {
    width:30%;
    transform-origin: center bottom;
    -webkit-animation: of_D4HAg 2.4s infinite;
    animation: of_D4HAg 2.4s infinite;
  }
}
@keyframes of_D4HAg {
   0% {
       -webkit-transform: scale(1) rotate(0);
       transform: scale(1) rotate(0)
   }
 
   8% {
       -webkit-transform: scale(.7) rotate(0);
       transform: scale(.7) rotate(0)
   }
 
   20% {
       -webkit-transform: scale(.81) rotate(-15deg);
       transform: scale(.81) rotate(-15deg)
   }
 
   36% {
       -webkit-transform: scale(.96) rotate(5deg);
       transform: scale(.96) rotate(5deg)
   }
 
   40% {
       -webkit-transform: scale(1) rotate(0);
       transform: scale(1) rotate(0)
   }
 }
.tt26 {
  .now-buy-btn {
    background: #F34A30;
    border-radius: 19px;
    color: #fff;
    width: 40%;
    font-size: 14px;
    line-height: 24px;
    margin: 0 auto;
    position: relative;
  }
  ._4Y0Qtm_k {
    position: absolute;
    left: -4px;
    top: 0;
    width: 20px;
    height: 100%;
    background: url("../../assets/btn-line.png") no-repeat;
    background-size: 100% 100%;
    -webkit-animation-duration: 1.5s;
            animation-duration: 1.5s;
    -webkit-animation-name: _32OZEz0v;
            animation-name: _32OZEz0v;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
}
@keyframes _32OZEz0v {
   0% {
      left: -4px;
    }
  
    40% {
      left: 100%;
    }
  
    100% {
      left: 100%;
    }
 }
.tt25 {
  img {
    animation:finalhbshake;
    -webkit-animation:finalhbshake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    width:55px;
	  border-radius:5px;
  }
}
@keyframes finalhbshake{
    0%{transform:rotate(0deg)}
    20%{transform:rotate(30deg)}
    40%{transform:rotate(-30deg)}
    60%{transform:rotate(0deg)}
    100%{transform:rotate(0deg)}
}
@-webkit-keyframes finalhbshake{
    0%{transform:rotate(0deg)}
    20%{transform:rotate(30deg)}
    40%{transform:rotate(-30deg)}
    60%{transform:rotate(0deg)}
    100%{transform:rotate(0deg)}
}
.tt24 {
  .jdrank_nav_arrow {
      position: absolute;
      top: 39%;
      right: 42%;
      width: 38px;
      height: 34px;
      background-color: #fff;
      z-index: 2;
      &:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-top: 1px solid #666;
        border-left: 1px solid #666;
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6px;
        margin-left: -4px;
        -webkit-transition: -webkit-transform .5s ease-in-out;
        transition: -webkit-transform .5s ease-in-out;
        transition: transform .5s ease-in-out;
        transition: transform .5s ease-in-out,-webkit-transform .5s ease-in-out;
    }
  }
}
.fold {
  .jdrank_nav_arrow {
    &:after {
      -webkit-transform: rotate(45deg) translate(2px,3px);
      transform: rotate(45deg) translate(2px,3px);
    }
  }
}
.tt23 {
  span {
    height: 20px;
    padding: 0 6px;
    background: linear-gradient(126deg, #ff5b3e, #ff0707);
    border-radius: 8px 8px 8px 1px;
    font-size: 14px;
    color: #fff;
    line-height: 20px;
    transform-origin: left bottom;
    -webkit-animation: of_D4HAg 2.4s infinite;
    animation: of_D4HAg 2.4s infinite;
  }
}
@keyframes of_D4HAg {
  0% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0)
  }

  8% {
      -webkit-transform: scale(.7) rotate(0);
      transform: scale(.7) rotate(0)
  }

  20% {
      -webkit-transform: scale(.81) rotate(-15deg);
      transform: scale(.81) rotate(-15deg)
  }

  36% {
      -webkit-transform: scale(.96) rotate(5deg);
      transform: scale(.96) rotate(5deg)
  }

  40% {
      -webkit-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0)
  }
}
.tt22 {
  img {
    width: 50%;
    display: inline-block;
    -webkit-animation: _2-3BqKpw .2s;
    animation: _2-3BqKpw .2s;
  }
}
@keyframes _2-3BqKpw{
   0% {
      -webkit-transform: scale(.6);
      transform: scale(.6);
      opacity: .5;
  }
  100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
  }
}
.tt21 {
  a {
    border: 1px solid #2dc7af;
    background: #1fb29c;
    background-image: -o-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%, #1fb29c 100%);
    background-image: -moz-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%, #1fb29c 100%);
    background-image: -webkit-linear-gradient(0deg, #1fb29c 0%, #81D6A5 50%, #1fb29c 100%);
    background-image: -ms-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%, #1fb29c 100%);
    background-image: linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%, #1fb29c 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1fb29c', endColorstr='#81d6a5', GradientType=1);
    background-size: 200% 100% !important;
    background-position: 0% 50%;
    margin: 0 auto 15px;
    display: block;
    width: 168px;
    height: 42px;
    border: none;
    border-radius: 21px;
    line-height: 42px;
    text-align: center;
    font-size: 16px;
    color: #000000;
    letter-spacing: 4px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:before {
      width: 200%;
      opacity: 1;
      transition: none;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 0 30px 0 0;
      height: 100%;
      background: #1fb29c;
      background-image: -o-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%,#1fb29c 100%);
      background-image: -moz-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%,#1fb29c 100%);
      background-image: -webkit-linear-gradient(0deg, #1fb29c 0%, #81D6A5 50%,#1fb29c 100%);
      background-image: -ms-linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%,#1fb29c 100%);
      background-image: linear-gradient(90deg, #1fb29c 0%, #81D6A5 50%,#1fb29c 100%);
      background-size: 200% 100% !important;
      background-position: 0% 50%;
      animation: slide 1.5s forwards linear alternate-reverse infinite;
      transition: .3s linear;
    }
  }
}
@keyframes slide{
    from{
        background-position: 0% 100%;
    }
    to{
        background-position: 100% 100%;
    }
}
.tt20 {
  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(243,127,98,1);
    background: linear-gradient(45deg,rgba(243,127,98,1) 29%,rgba(247,162,107,1) 100%);
    background: -webkit-linear-gradient(-45deg,rgba(243,127,98,1) 29%,rgba(247,162,107,1) 100%);
    background: -moz-linear-gradient(45deg,rgba(243,127,98,1) 29%,rgba(247,162,107,1) 100%);
    background: -ms-linear-gradient(45deg,rgba(243,127,98,1) 29%,rgba(247,162,107,1) 100%);
    animation: twinkle .6s ease-in-out infinite alternate;
    -webkit-animation: twinkle .6s ease-in-out infinite alternate;
    -moz-animation: twinkle .6s ease-in-out infinite alternate;
    -o-animation: twinkle .6s ease-in-out infinite alternate
  }
}
@keyframes twinkle {
    0% {
        transform: scale(1);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1)
    }

    100% {
        transform: scale(1.6);
        -webkit-transform: scale(1.6);
        -ms-transform: scale(1.6);
        -o-transform: scale(1.6)
    }
}
.tt19 {
  i {
    font-size: 24px;
    color: #1296db;
    animation: up-to-down2 1s ease-in-out infinite alternate;
  }
}
@keyframes up-to-down2 {
    0% {
        transform: translateY(40px);
        -webkit-transform: translateY(40px);
        -ms-transform: translateY(40px);
        -o-transform: translateY(40px)
    }

    100% {
        transform: translateY(0px);
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -o-transform: translateY(0px)
    }
}
.tt18 {
  // background-image: radial-gradient(farthest-side,rgba(0,255,255,1) 0,rgba(0,0,231,1) 60%,rgba(231,231,0,1) 100%);
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(farthest-side,rgba(231,231,231,0) 0,rgba(231,231,231,0) 60%,rgba(231,231,231,1) 100%);
    pointer-events: none;
    z-index: 2;
  }
 
}
.tt17 {
  input[type=checkbox]{
      display:none;
  }

.check-box {
    height: 100px;
    width: 100px;
    background-color: transparent;
    border: 10px solid $unchecked-color;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor:pointer;

    &:before, &:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        height: 0;
        width: 20px;
        background-color: $checked-color;
        display: inline-block;
        -moz-transform-origin: left top;
        -ms-transform-origin: left top;
        -o-transform-origin: left top;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        border-radius: 5px;
        content: ' ';
        -webkit-transition: opacity ease .5;
        -moz-transition: opacity ease .5;
        transition: opacity ease .5;
    }

    &:before {
        top:72px;
        left: 41px;
        // box-shadow: 0 0 0 $checkbox-height * .05 $background-color;
        -moz-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    &:after {
        top: 37px;
        left: 5px;
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
}

input[type=checkbox]:checked + .check-box,
.check-box.checked{
    border-color:$checked-color;
    
    &:after{
        height: 50px;
        -moz-animation: dothabottomcheck 0.2s ease 0s forwards;
        -o-animation: dothabottomcheck 0.2s ease 0s forwards;
        -webkit-animation: dothabottomcheck 0.2s ease 0s forwards;
        animation: dothabottomcheck 0.2s ease 0s forwards;
    }
     
    &:before{
        height: 120px;
        -moz-animation: dothatopcheck 0.4s ease 0s forwards;
        -o-animation: dothatopcheck 0.4s ease 0s forwards;
        -webkit-animation: dothatopcheck 0.4s ease 0s forwards;
        animation: dothatopcheck 0.4s ease 0s forwards;
    }
}
}
.tt16 {
  background-color: $color-bule !important;
  .mike {
    -webkit-animation: mike-move 6s 6s ease-out forwards, mike-float 3.2s infinite;
    animation: mike-move 6s 6s ease-out forwards, mike-float 3.2s infinite;
    width: 100px;
  }
  .boat {
    -webkit-animation: rock-boat 3s ease-in-out infinite;
    animation: rock-boat 3s ease-in-out infinite;
    img {
      width:100%;
    }
    &:after {
          content: "";
          display: block;
          width: 50px;
          height: 50px;
          background: url(https://treehouse-code-samples.s3.amazonaws.com/CSS-DD/codepen/stage-12/steam.png) no-repeat;
          background-size: 50px;
          position: absolute;
          top: -32%;
          left: -7%;
          opacity: 0;
    }
  }
  .boat::after {
    -webkit-animation: steam 4s 2s infinite;
    animation: steam 4s 2s infinite;
  }
}
@-webkit-keyframes rock-boat {
	50%  { -webkit-transform: rotate(-5deg) translateY(-10px); }
}
@keyframes rock-boat {
	50%  { -webkit-transform: rotate(-5deg) translateY(-10px); }
}
@-webkit-keyframes steam {
	40%,
	60%  { opacity: .9; }
	100% { -webkit-transform: translate(-15%, -35%) rotateZ(20deg); }
}
@keyframes steam {
  40%,
  60%  { opacity: .9; }
	100% { -webkit-transform: translate(-15%, -35%) rotateZ(20deg); }
}
@-webkit-keyframes mike-move {
	100% { left: 12%; }
}
@keyframes mike-move {
	100% { left: 12%; }
}
@-webkit-keyframes mike-float {
	50% { -webkit-transform: rotateZ(5deg) translateY(-5px); }
}
@keyframes mike-float {
	50% { -webkit-transform: rotateZ(5deg) translateY(-5px); }
}
.tt15 {
  .pin {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #89849b;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
    animation-name: bounce;
    animation-fill-mode: both;
    animation-duration: 1s;
    &:after {
      content: '';
      width: 14px;
      height: 14px;
      margin: 8px 0 0 8px;
      background: #2F2F2F;
      position: absolute;
      border-radius: 50%;
      left: 0;
    }
  }
.pulse {
  background: rgba(0,0,0,0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position:absolute;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -12px;
  transform:rotateX(55deg);
  z-index: 2;
  &:after {
    content: "";
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    margin:-13px 0 0 -20px;
    animation:pulsate 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 0.0;
    box-shadow: 0 0 1px 2px #89849b;
    animation-delay: 1.1s;
  }
}
}
 

@keyframes pulsate {
  0%{
    transform: scale(0.1, 0.1);
    opacity: 0.0;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
    
}
@keyframes bounce {
  0%{
    opacity: 0;
    transform: translateY(-200px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    transform: translateY(30px) rotate(-45deg);
  }
    
  80% {
    transform: translateY(-10px) rotate(-45deg);
  }
    
  100% {
    transform: translateY(0) rotate(-45deg);
  }
    
}

.tt14 {
  .icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAH4ElEQVR4Xu1ce2yTVRT/nbbbGFvXwphzjLUTEIy8FEY0ihBRY4jrlOAjokZGlEAgoig+YiJqYnwBioFI0DCMTuMryDpCjIoBh9EIKI8ZmTzW4phzjK1sc3Rre8z31Y21/dp+322btdr7V5Peex6/e86595577kdIcOPmeQVwG2aDMAmgCQBPBJAPghEMo8ye0AlGJ4A2gI4B3ABGPbI8e6loV2uCRQwgT4lgxo7bZoBoIRi3AJgMkCAfZgBHQfgKzB+SdeeBRMg7mKagoKFi8W8VRgzHEoArwZI1JKAR6gGqwt/YQlfUSBYV9xYzINx+hxnnPSsBPALQyLhLqEiQzwF4C3mGDTTii4548hQGhBmE07YH4ePXQFQQT6FU02JuhY6eRIn9PSJI7hVzEwKEnXeMA7zbwJgVswTxIECoA/SLyPLFiVjJaQaEHRV3Ab53ADLFyjy+49kFvf4hGrPjs1joqgbE7yLlrwO0CtLvZGyy2/B6lNSuFnUhVYoxz8iAs7gK4PuSEYdQmagarU2VVHagT6u8UQHxgzF6O4DbtBIf4v47YTkzn0gbKBEBkd3EWfF+6lhG8BRQNSw1D2hxn8iAOMvXgunxIZ7p2NgTryNL7RNqiYQFRF5NiD9O2gCqXkMG0z1krflUzRBFQOR9BnsOJN/SqkYlpT7sAhlmqNmnhADy7w50b9JsukQxCAknqEOJfXa0eBIKiLO8Ekxb4yVHUtEhXkyW2qpIMgUAIh/UXJ6GITubJBo96exjMkyIdCAMBMRRvgag5xMt19DS5+fJWvtCOBkGAJHzGdm+Rq1HeGbG93Xn4fEwymYakZOrT6i+3V1e7P+pEwYD4bpZeSDNuSc+hx5dabh8ykVAnBWPg3mtVm321bmweWOzPEwScnpZLmbPMWHK1Bzo9FE3wqrY+byMI4e7sXePCwf3d8ngS23ZiiJcN0vgjEn0BFlq1ikxvwiIw1YP4EpVEg7qtO87FzZv8gMyuJnNelx/gwk3zDGheEyWVrJy/6Y/3PhujwsSj44ObwiNpcuLZB6aG6GeLPbJYQGRc6DQ7ddMGIDkMnu/dWH3Nx04eeKCIomx44bhxrlmzJlrimriEr09u134dndkenNvMmP2jdHphdfJV6aUo5UthJ3l68C0SgSQwWOizeiSZUWyxURqkkVseTsxFhfAl3g9WWpDjiV+QBzlhwGa8r8CBHyErLVTg3Um+d6kV98ielWQui7DjExvYfC9D3GjbQEIwmm3lAyq/WbBuJNK7Z8PthJih+05AGE3KtHc6Ps6F95OtWX3olJryGp/MRCQRls1CAujKR7u/9TbmAWoX03WmvuDLeQnAGWigKT4uP1ktc8MBuQUgNIUV0xU/Eay2i8LBMRpawVjlCjFlB5HOEsWe8CtoxRUpe2l2N46pdGQhXeT1T4s2GXSgAxChDjtMiEucxJAQGBR4wmHfu7C1nf/xLk2j5ruCeszMt+AxQ9dimlX54rwOEVW+9i4LLsrlx8fcjD6FZFA2bBpvAggSstuxQciN3OL7vsN3tAUhYhQMY/R64Ft1VcI0CHFjZnQ1n1JZQN6enwCQsR/SHa2DluqJogQVty6Cx3unnzsJJqbe0WEiPuYoqJMvPZGQChQx0PxcCd4/H/95dM4fKhbHeME95o6LQernynRyCXM8V+iIpIg+uzjVuzY3qZJCENGJnKMeRg2PAcZWVnQ6w3yeK/Xgz63Gxf+7kZ353l4+rRZ3u3z83HnPVrL3MIkiGRABFKI9Ue68cpLp1UBkpGZhREFhcjOyVWVU+3p7kJ7awv6et2q6D/9bAkmTclR1XegU+QUovYks9fLWLH0OLo6Iy81pvwCmPMLogIRrI2UVuhoa4WrLXIhc65Rj42bx0Ov+cojQpLZbyW2o1oLbj/56C/Yd0glo8pt1KXFyDWZtc1cUO8uVwfO/tkUlobt9pG4+95LtPGIdg3hB0T7RZXL5cHqR08qLr8Fo0vkeBGPJsWV1jOh7iktt2vfHIs8kz8WqW6qLqoErzK//rId71W1BMgiucmIURpnLYo27Wf/CnGfBysLcfOtI1Tj4O+o8ipT7ipw2S2V52/a0IQff/CXnmcOy0aR5TLNMSOaVlJMaXaeQu+FHrnrNdcasXxlscCzApWX3TIgguUQfX0+vLW+Cb/83I3RpeOQmRWQYoimq+r/e90XcKbxBK66OgePrCpGRoZO9Vi/cWgsh/DHEtsiMCIWlShJIa062z/vxKF6rSasTadpk9oxf4FRYFWR3+VUksW+LRLHuJdUNTqAXbt0ONMcn5v/fuFHFzHmzfOh1KoNwIHeUj28SEmV30piK7qT4srvxwkHDwLHGnTwCKZMDAZg4gQfpk8HLh/PAvGiH44Yiu4GSMSpLLOvD3A4gNN/EFpaCB0dwPlOwO2mAaAkxbOyGHlGwGwGCgsZJWMYViuQkSFoEf3DpPr3WMsyB0BJF+4Gzka6tFvBOtPF/2FBSbHnIZamSq0vISTVVa+N6QdEYYJ7Uj8xg+5htUX+4dYu1RYymED6EaJiXJHf4C2CD68OWSm4/EwVT6Gkdlu0on61uxkhCwmwlvRDZmWsB566My8WKQBWOYO/gmhrUj91V1Ik/TGECNMb8LkMxkQQpCu2USDkBn0uowvAWTAaQDj2n/pchkrzT8puMQfVpNQqBqHSgASBlwYkCJB/AL/wlXKBY3gjAAAAAElFTkSuQmCC) no-repeat;
    width: 24px;
    height: 24px;
    background-size: 24px!important;
    &:hover {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-transition: all .2s linear 0s;
      transition: all .2s linear 0s;
    }
  }
}
.tt13 {
  .bee {
      width: 22%;
      height: auto;
      img {
          width: 100%;
      }
      will-change: transform;
      animation: bee1 6s ease-in infinite;
      -webkit-animation: bee1 6s ease-in infinite;
  }
}
@keyframes bee1{0%{transform:rotateY(0deg) translate3d(0,0,0)}
25%{transform:rotateY(0deg) translate3d(50%,100%,0)}
49.9%{transform:rotateY(0deg) translate3d(100%,0,0)}
50%{transform:rotateY(180deg) translate3d(-100%,0,0)}
75%{transform:rotateY(180deg) translate3d(-50%,-100%,0)}
99.9%{transform:rotateY(180deg) translate3d(0,0,0)}
100%{transform:rotateY(0deg) translate3d(0,0,0)}}
@-webkit-keyframes bee1{0%{transform:rotateY(0deg) translate3d(0,0,0)}
25%{transform:rotateY(0deg) translate3d(50%,100%,0)}
49.9%{transform:rotateY(0deg) translate3d(100%,0,0)}
50%{transform:rotateY(180deg) translate3d(-100%,0,0)}
75%{transform:rotateY(180deg) translate3d(-50%,-100%,0)}
99.9%{transform:rotateY(180deg) translate3d(0,0,0)}
100%{transform:rotateY(0deg) translate3d(0,0,0)}}
.tt12 {
  .flower {
    width: 2rem;
    height: 4rem;
    top: 29%;
    left: 39%;
    -webkit-animation: rock-data-v-6a0dcf10 3s ease-in infinite;
    animation: rock-data-v-6a0dcf10 3s ease-in infinite;
    position: absolute;
  }
  .flower>div {
      position: absolute;
  }
  .flower-top {
      left: 0;
      width: 2rem;
      height: 2rem;
      z-index: 2;
  }
  .flower-top::before {
    width: .5rem;
    height: .5rem;
    background-color: #fae134;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin: -.25rem 0 0 -.25rem;
    z-index: 20;
    content: '';
    position: absolute;
}
  .flower-top p {
      position: absolute;
      top: 50%;
      margin-top: -.15rem;
      width: 2rem;
      height: .3rem;
      background-color: palegreen;
      border-radius: .4rem;
  }
  .flower-top p:nth-child(2) {
      transform: rotate(45deg);
      transform-origin: 50% 50%;
  }
  .flower-top p:nth-child(3) {
      transform: rotate(90deg);
      transform-origin: 50% 50%;
  }
  .flower-top p:nth-child(4) {
      transform: rotate(135deg);
      transform-origin: 50% 50%;
  }
    .flower-head {
      bottom: 0;
      left: 10%;
      width: 1rem;
      height: 3rem;
      border: 3px solid #60ae34;
      border-radius: 100% 0 0 100%/50%;
      border-right: none;
  }
  .flower-head:before {
      bottom: 1.3rem;
      left: 0;
      width: 0;
      height: 0;
      border-left: .3rem solid transparent;
      border-right: 0 solid transparent;
      border-bottom: .4rem solid #64b033;
      transform: skewX(-45deg);
      content: '';
      position: absolute;
  }
  .flower-head:after {
      bottom: 1rem;
      left: -.55rem;
      width: 0;
      height: 0;
      border-left: .25rem solid transparent;
      border-right: 0 solid transparent;
      border-bottom: .7rem solid #64b033;
      transform: skewX(45deg);
      content: '';
      position: absolute;
  }
}
@keyframes rock{0%{transform:rotate(-5deg) translate3d(0,0,0)}
50%{transform:rotate(5deg) translate3d(30%,0,0)}
100%{transform:rotate(-5deg) translate3d(0,0,0)}}
@-webkit-keyframes rock{0%{transform:rotate(-5deg) translate3d(0,0,0)}
50%{transform:rotate(5deg) translate3d(30%,0,0)}
100%{transform:rotate(-5deg) translate3d(0,0,0)}}
.cloud {
  width: 140px;
  height: 1.85rem;
  background: palevioletred;
  border-radius: 3.15rem;
  position: absolute;
  top: 6.25rem;
  right: 2.5rem;
  -webkit-animation: moving-cloud 3s ease infinite;
  animation: moving-cloud 3s ease infinite;
}

.cloud::before {
  width: 3.75rem;
  height: 3.75rem;
  background: palevioletred;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -2.5rem;
  left: 1.25rem;
}

.cloud::after {
  width: 3.15rem;
  height: 3.15rem;
  background: palevioletred;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -1.85rem;
  right: 1.55rem;
}
@-webkit-keyframes moving-cloud {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30%);
  }
}
@keyframes moving-cloud {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30%);
  }
}

.size1 {
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, .1), 0 0 0 1px #f0f2f7;
  padding: 20px;
  margin: 24px;
  background-color: #fff;
  width: 200px;
  height: 150px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
}
.loc-mc-box {
    width: 54px;
    height: 108px;
    overflow: hidden;
    position: relative;
    animation: locmoveclipslider 10s infinite ease-out;
    animation-delay: 1.5s;
}
.loc-mc-box .txt-up {
    position: absolute;
    left: 0;
    top: 0;
}
.loc-mc-box .bnj-gif {
    position: absolute;
    left: 0;
    top: 36px;
    width: 54px;
    height: 36px;
    transform: translateZ(0);
}
.loc-mc-box .txt-down {
    position: absolute;
    left: 0;
    top: 72px;
}
.loc-mc-box .bnj-txt {
    line-height: 36px;
    height: 36px;
    text-align: center;
    width: 100%;
    margin: 0px;
}
@keyframes locmoveclipslider {
  0% {
      transform: translateY(0);
  }
  5% {
      transform: translateY(-36px);
  }
  50% {
      transform: translateY(-36px);
  }
  55% {
      transform: translateY(-72px);
  }
  100% {
      transform: translateY(-72px);
  }
}
.height36 {
  height: 36px;
  overflow: hidden;
}
.heartbeat {
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
    font-size: 16px;
    line-height: 36px;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-1-26 15:39:53
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
/**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */
.dot-flashing {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: .5s;
}

.dot-flashing::before, .dot-flashing::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-flashing::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}

.dot-flashing::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}

@keyframes dot-flashing {
  0% {
    background-color: #9880ff;
  }
  50%,
  100% {
    background-color: #ebe6ff;
  }
}
/**
 * ==============================================
 * Dot Carousel
 * ==============================================
 */
.dot-carousel {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
  animation: dot-carousel 1.5s infinite linear;
}

@keyframes dot-carousel {
  0% {
    box-shadow: 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff;
  }
  50% {
    box-shadow: 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff;
  }
  100% {
    box-shadow: 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff;
  }
}
/**
 * ==============================================
 * Dot Spin
 * ==============================================
 */
.dot-spin {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dot-spin 1.5s infinite linear;
}

@keyframes dot-spin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
  }
  75% {
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
  }
  87.5% {
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #9880ff;
  }
}
/**
 * ==============================================
 * Experiment: Emoji
 * Dot Bouncing
 * ==============================================
 */
.dot-bouncing {
  position: relative;
  height: 10px;
  font-size: 10px;
}

.dot-bouncing::before {
  content: '⚽🏀🏐';
  display: inline-block;
  position: relative;
  animation: dot-bouncing 1s infinite;
}

@keyframes dot-bouncing {
  0% {
    top: -20px;
    animation-timing-function: ease-in;
  }
  34% {
    transform: scale(1, 1);
  }
  35% {
    top: 20px;
    animation-timing-function: ease-out;
    transform: scale(1.5, 0.5);
  }
  45% {
    transform: scale(1, 1);
  }
  90% {
    top: -20px;
  }
  100% {
    top: -20px;
  }
}
/**
 * ==============================================
 * Experiment: Emoji
 * Dot Rolling
 * ==============================================
 */
.dot-rolling {
  position: relative;
  height: 10px;
  font-size: 10px;
}

.dot-rolling::before {
  content: '⚽';
  display: inline-block;
  position: relative;
  transform: translateX(-25px);
  animation: dot-rolling 3s infinite;
}

@keyframes dot-rolling {
  0% {
    content: '⚽';
    transform: translateX(-25px) rotateZ(0deg);
  }
  16.667% {
    content: '⚽';
    transform: translateX(25px) rotateZ(720deg);
  }
  33.333% {
    content: '⚽';
    transform: translateX(-25px) rotateZ(0deg);
  }
  34.333% {
    content: '🏀';
    transform: translateX(-25px) rotateZ(0deg);
  }
  50% {
    content: '🏀';
    transform: translateX(25px) rotateZ(720deg);
  }
  66.667% {
    content: '🏀';
    transform: translateX(-25px) rotateZ(0deg);
  }
  67.667% {
    content: '🏐';
    transform: translateX(-25px) rotateZ(0deg);
  }
  83.333% {
    content: '🏐';
    transform: translateX(25px) rotateZ(720deg);
  }
  100% {
    content: '🏐';
    transform: translateX(-25px) rotateZ(0deg);
  }
}
.shake-hard.shake-constant {
    animation-name: shake-hard;
    animation-duration: 2200ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    .preview-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 70px;
        font-style: normal;
    }
}
.shake-constant.shake-constant--hover:hover {
    animation-play-state: paused;
}
@keyframes shake-hard {
    2% {
        transform: translate(7px, -4px) rotate(-.5deg)
    }

    4% {
        transform: translate(3px, 7px) rotate(2.5deg)
    }

    6% {
        transform: translate(3px, 8px) rotate(.5deg)
    }

    8% {
        transform: translate(-7px, 4px) rotate(1.5deg)
    }

    10% {
        transform: translate(6px, 10px) rotate(-.5deg)
    }

    12% {
        transform: translate(4px, 2px) rotate(-.5deg)
    }

    14% {
        transform: translate(-4px, 6px) rotate(3.5deg)
    }

    16% {
        transform: translate(1px, 5px) rotate(-1.5deg)
    }

    18% {
        transform: translate(3px, -7px) rotate(-2.5deg)
    }

    20% {
        transform: translate(-8px, -7px) rotate(.5deg)
    }

    22% {
        transform: translate(3px, -2px) rotate(-2.5deg)
    }

    24% {
        transform: translate(5px, -4px) rotate(1.5deg)
    }

    26% {
        transform: translate(-6px, -4px) rotate(-.5deg)
    }

    28% {
        transform: translate(1px, 0px) rotate(.5deg)
    }

    30% {
        transform: translate(-9px, -3px) rotate(3.5deg)
    }

    32% {
        transform: translate(3px, 6px) rotate(-1.5deg)
    }

    34% {
        transform: translate(-2px, -3px) rotate(-1.5deg)
    }

    36% {
        transform: translate(9px, -3px) rotate(-.5deg)
    }

    38% {
        transform: translate(9px, -9px) rotate(-1.5deg)
    }

    40% {
        transform: translate(8px, -7px) rotate(-2.5deg)
    }

    42% {
        transform: translate(-8px, -2px) rotate(2.5deg)
    }

    44% {
        transform: translate(-7px, 2px) rotate(-.5deg)
    }

    46% {
        transform: translate(-1px, 4px) rotate(3.5deg)
    }

    48% {
        transform: translate(3px, 1px) rotate(1.5deg)
    }

    50% {
        transform: translate(9px, -1px) rotate(2.5deg)
    }

    52% {
        transform: translate(-1px, 5px) rotate(-2.5deg)
    }

    54% {
        transform: translate(9px, -2px) rotate(.5deg)
    }

    56% {
        transform: translate(5px, -4px) rotate(-2.5deg)
    }

    58% {
        transform: translate(5px, -8px) rotate(-1.5deg)
    }

    60% {
        transform: translate(10px, 4px) rotate(1.5deg)
    }

    62% {
        transform: translate(-8px, 1px) rotate(-2.5deg)
    }

    64% {
        transform: translate(-9px, 6px) rotate(-1.5deg)
    }

    66% {
        transform: translate(-3px, 2px) rotate(.5deg)
    }

    68% {
        transform: translate(10px, 4px) rotate(.5deg)
    }

    70% {
        transform: translate(3px, -4px) rotate(-2.5deg)
    }

    72% {
        transform: translate(-5px, 10px) rotate(.5deg)
    }

    74% {
        transform: translate(1px, -7px) rotate(3.5deg)
    }

    76% {
        transform: translate(8px, -3px) rotate(-2.5deg)
    }

    78% {
        transform: translate(-8px, 2px) rotate(-.5deg)
    }

    80% {
        transform: translate(2px, 7px) rotate(-2.5deg)
    }

    82% {
        transform: translate(6px, -4px) rotate(1.5deg)
    }

    84% {
        transform: translate(3px, 2px) rotate(3.5deg)
    }

    86% {
        transform: translate(0px, -5px) rotate(-2.5deg)
    }

    88% {
        transform: translate(1px, -3px) rotate(2.5deg)
    }

    90% {
        transform: translate(-8px, -9px) rotate(2.5deg)
    }

    92% {
        transform: translate(-2px, 3px) rotate(2.5deg)
    }

    94% {
        transform: translate(-6px, 0px) rotate(-.5deg)
    }

    96% {
        transform: translate(-9px, 8px) rotate(1.5deg)
    }

    98% {
        transform: translate(9px, 4px) rotate(-1.5deg)
    }

    0%,100% {
        transform: translate(0, 0) rotate(0)
    }
}
.shake-vertical.shake-constant {
    animation-name: shake-vertical;
    animation-duration: 2200ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    .preview-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 70px;
        font-style: normal;
    }
}

@keyframes shake-vertical {
    2% {
        transform: translate(0, -9px) rotate(0)
    }

    4% {
        transform: translate(0, 0px) rotate(0)
    }

    6% {
        transform: translate(0, 4px) rotate(0)
    }

    8% {
        transform: translate(0, 4px) rotate(0)
    }

    10% {
        transform: translate(0, 0px) rotate(0)
    }

    12% {
        transform: translate(0, -4px) rotate(0)
    }

    14% {
        transform: translate(0, 8px) rotate(0)
    }

    16% {
        transform: translate(0, 8px) rotate(0)
    }

    18% {
        transform: translate(0, 4px) rotate(0)
    }

    20% {
        transform: translate(0, -5px) rotate(0)
    }

    22% {
        transform: translate(0, -8px) rotate(0)
    }

    24% {
        transform: translate(0, -4px) rotate(0)
    }

    26% {
        transform: translate(0, -9px) rotate(0)
    }

    28% {
        transform: translate(0, -3px) rotate(0)
    }

    30% {
        transform: translate(0, -9px) rotate(0)
    }

    32% {
        transform: translate(0, 8px) rotate(0)
    }

    34% {
        transform: translate(0, -6px) rotate(0)
    }

    36% {
        transform: translate(0, -7px) rotate(0)
    }

    38% {
        transform: translate(0, -7px) rotate(0)
    }

    40% {
        transform: translate(0, 1px) rotate(0)
    }

    42% {
        transform: translate(0, -7px) rotate(0)
    }

    44% {
        transform: translate(0, 0px) rotate(0)
    }

    46% {
        transform: translate(0, 10px) rotate(0)
    }

    48% {
        transform: translate(0, 1px) rotate(0)
    }

    50% {
        transform: translate(0, 7px) rotate(0)
    }

    52% {
        transform: translate(0, -6px) rotate(0)
    }

    54% {
        transform: translate(0, 9px) rotate(0)
    }

    56% {
        transform: translate(0, 8px) rotate(0)
    }

    58% {
        transform: translate(0, 10px) rotate(0)
    }

    60% {
        transform: translate(0, 8px) rotate(0)
    }

    62% {
        transform: translate(0, -3px) rotate(0)
    }

    64% {
        transform: translate(0, 4px) rotate(0)
    }

    66% {
        transform: translate(0, -8px) rotate(0)
    }

    68% {
        transform: translate(0, -6px) rotate(0)
    }

    70% {
        transform: translate(0, -8px) rotate(0)
    }

    72% {
        transform: translate(0, 7px) rotate(0)
    }

    74% {
        transform: translate(0, 7px) rotate(0)
    }

    76% {
        transform: translate(0, -6px) rotate(0)
    }

    78% {
        transform: translate(0, -8px) rotate(0)
    }

    80% {
        transform: translate(0, -6px) rotate(0)
    }

    82% {
        transform: translate(0, -1px) rotate(0)
    }

    84% {
        transform: translate(0, 10px) rotate(0)
    }

    86% {
        transform: translate(0, 10px) rotate(0)
    }

    88% {
        transform: translate(0, -8px) rotate(0)
    }

    90% {
        transform: translate(0, 1px) rotate(0)
    }

    92% {
        transform: translate(0, 9px) rotate(0)
    }

    94% {
        transform: translate(0, 4px) rotate(0)
    }

    96% {
        transform: translate(0, 1px) rotate(0)
    }

    98% {
        transform: translate(0, 7px) rotate(0)
    }

    0%,100% {
        transform: translate(0, 0) rotate(0)
    }
}
.rshare-qzone {
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ffffff;
    background-image: url('https://img.jbzj.com/skin/2018/images/share-icons.png');
    background-repeat: no-repeat;
    background-position: -3px -50px;
    border: 1px solid red;
    line-height: 36px;
    transition: .4s;
    -webkit-transition: .4s;
    &:hover {
      background-color: #ffa709;
      background-position: -48px -50px;
    }
}
.hvr-bubble-top {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
}
[class^="hvr-"] {
    margin: .4em;
    padding: 1em;
    cursor: pointer;
    background: #e1e1e1;
    text-decoration: none;
    color: #666;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
.hvr-bubble-top:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: 0;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e1e1e1 transparent;
}
.hvr-bubble-float-top {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
.hvr-bubble-float-top:before {
    position: absolute;
    z-index: -1;
    content: '';
    left: calc(50% - 10px);
    top: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e1e1e1 transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
.hvr-curl-top-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
}
.hvr-curl-top-left:before {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: white;
    background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');
    z-index: 1000;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: width, height;
    transition-property: width, height;
}
.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {
    width: 25px;
    height: 25px;
}
.hvr-curl-top-left:before {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: white;
    background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');
    z-index: 1000;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: width, height;
    transition-property: width, height;
}
</style>
