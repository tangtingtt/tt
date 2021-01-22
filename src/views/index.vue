<template>
  <div class="index-container">
    <div class="header-container">
      <div class="header-container-box flex-block margin-auto">
        <div>
          <img src="../assets/my-logo.png" class="index-logo">
          <span class="my-face">喵~ ＞▽＜</span>
        </div>
        <div>
          <div 
            v-for="(item,index) in headerList"
            :key="index"
            :class="item.code==$route.meta.activeMenu?'header-container-item-active':'header-container-item'"
            class="inline-block"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      headerList: [
        {name: '首页',code:'index'},
        {name: 'CSS效果',code:'css'},
        // {name: 'swiprt效果'},
        // {name: '博客',code:'index'},
        {name: '关于我',code:'about'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
    height: 60px;
    box-shadow: 0px 2px 5px #f3f3f3;
    background-color: #fff;
}
.header-container-box {
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.header-container-item,.header-container-item-active {
  cursor: pointer;
  color: pink;
  padding: 10px 30px;
  position: relative;
}
.header-container-item:before {
    position: absolute;
    right: 50%;
    bottom: 0px;
    width: 0;
    height: 2px;
    content: "";
    -webkit-transition: width .2s ease-out;
    transition: width .2s ease-out;
    background: currentColor;
}
.header-container-item:after {
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0;
    height: 2px;
    content: "";
    -webkit-transition: width .2s ease-out;
    transition: width .2s ease-out;
    background: currentColor;
}
.header-container-item:hover:after, .header-container-item:hover:before {
  width: 20%;
}
.header-container-item-active:before {
    position: absolute;
    right: 40%;
    bottom: 0px;
    width: 20%;
    height: 2px;
    content: "";
    background: currentColor;
}
.main-container {
  margin: 50px 60px;
}
.my-face {
    -webkit-animation: haha 5s infinite ease-in-out;
    animation: haha 5s infinite ease-in-out;
    display: inline-block;
    margin: 0 5px;
    vertical-align: top;
    margin-top: 18px;
}
@-webkit-keyframes haha {
    2%, 24%, 80% {
        -webkit-transform: translate(0, 1.5px) rotate(1.5deg);
        transform: translate(0, 1.5px) rotate(1.5deg)
    }
    4%, 68%, 98% {
        -webkit-transform: translate(0, -1.5px) rotate(-.5deg);
        transform: translate(0, -1.5px) rotate(-.5deg)
    }
    38%, 6% {
        -webkit-transform: translate(0, 1.5px) rotate(-1.5deg);
        transform: translate(0, 1.5px) rotate(-1.5deg)
    }
    8%, 86% {
        -webkit-transform: translate(0, -1.5px) rotate(-1.5deg);
        transform: translate(0, -1.5px) rotate(-1.5deg)
    }
    10%, 72% {
        -webkit-transform: translate(0, 2.5px) rotate(1.5deg);
        transform: translate(0, 2.5px) rotate(1.5deg)
    }
    12%, 64%, 78%, 96% {
        -webkit-transform: translate(0, -.5px) rotate(1.5deg);
        transform: translate(0, -.5px) rotate(1.5deg)
    }
    14%, 54% {
        -webkit-transform: translate(0, -1.5px) rotate(1.5deg);
        transform: translate(0, -1.5px) rotate(1.5deg)
    }
    16% {
        -webkit-transform: translate(0, -.5px) rotate(-1.5deg);
        transform: translate(0, -.5px) rotate(-1.5deg)
    }
    18%, 22% {
        -webkit-transform: translate(0, .5px) rotate(-1.5deg);
        transform: translate(0, .5px) rotate(-1.5deg)
    }
    20%, 36%, 46% {
        -webkit-transform: translate(0, -1.5px) rotate(2.5deg);
        transform: translate(0, -1.5px) rotate(2.5deg)
    }
    26%, 50% {
        -webkit-transform: translate(0, .5px) rotate(.5deg);
        transform: translate(0, .5px) rotate(.5deg)
    }
    28% {
        -webkit-transform: translate(0, .5px) rotate(1.5deg);
        transform: translate(0, .5px) rotate(1.5deg)
    }
    30%, 40%, 62%, 76%, 88% {
        -webkit-transform: translate(0, -.5px) rotate(2.5deg);
        transform: translate(0, -.5px) rotate(2.5deg)
    }
    32%, 34%, 66% {
        -webkit-transform: translate(0, 1.5px) rotate(-.5deg);
        transform: translate(0, 1.5px) rotate(-.5deg)
    }
    42% {
        -webkit-transform: translate(0, 2.5px) rotate(-1.5deg);
        transform: translate(0, 2.5px) rotate(-1.5deg)
    }
    44%, 70% {
        -webkit-transform: translate(0, 1.5px) rotate(.5deg);
        transform: translate(0, 1.5px) rotate(.5deg)
    }
    48%, 74%, 82% {
        -webkit-transform: translate(0, -.5px) rotate(.5deg);
        transform: translate(0, -.5px) rotate(.5deg)
    }
    52%, 56%, 60% {
        -webkit-transform: translate(0, 2.5px) rotate(2.5deg);
        transform: translate(0, 2.5px) rotate(2.5deg)
    }
    58% {
        -webkit-transform: translate(0, .5px) rotate(2.5deg);
        transform: translate(0, .5px) rotate(2.5deg)
    }
    84% {
        -webkit-transform: translate(0, 1.5px) rotate(2.5deg);
        transform: translate(0, 1.5px) rotate(2.5deg)
    }
    90% {
        -webkit-transform: translate(0, 2.5px) rotate(-.5deg);
        transform: translate(0, 2.5px) rotate(-.5deg)
    }
    92% {
        -webkit-transform: translate(0, .5px) rotate(-.5deg);
        transform: translate(0, .5px) rotate(-.5deg)
    }
    94% {
        -webkit-transform: translate(0, 2.5px) rotate(.5deg);
        transform: translate(0, 2.5px) rotate(.5deg)
    }
    0%, 100% {
        -webkit-transform: translate(0, 0) rotate(0);
        transform: translate(0, 0) rotate(0)
    }
}

@keyframes haha {
    2%, 24%, 80% {
        -webkit-transform: translate(0, 1.5px) rotate(1.5deg);
        transform: translate(0, 1.5px) rotate(1.5deg)
    }
    4%, 68%, 98% {
        -webkit-transform: translate(0, -1.5px) rotate(-.5deg);
        transform: translate(0, -1.5px) rotate(-.5deg)
    }
    38%, 6% {
        -webkit-transform: translate(0, 1.5px) rotate(-1.5deg);
        transform: translate(0, 1.5px) rotate(-1.5deg)
    }
    8%, 86% {
        -webkit-transform: translate(0, -1.5px) rotate(-1.5deg);
        transform: translate(0, -1.5px) rotate(-1.5deg)
    }
    10%, 72% {
        -webkit-transform: translate(0, 2.5px) rotate(1.5deg);
        transform: translate(0, 2.5px) rotate(1.5deg)
    }
    12%, 64%, 78%, 96% {
        -webkit-transform: translate(0, -.5px) rotate(1.5deg);
        transform: translate(0, -.5px) rotate(1.5deg)
    }
    14%, 54% {
        -webkit-transform: translate(0, -1.5px) rotate(1.5deg);
        transform: translate(0, -1.5px) rotate(1.5deg)
    }
    16% {
        -webkit-transform: translate(0, -.5px) rotate(-1.5deg);
        transform: translate(0, -.5px) rotate(-1.5deg)
    }
    18%, 22% {
        -webkit-transform: translate(0, .5px) rotate(-1.5deg);
        transform: translate(0, .5px) rotate(-1.5deg)
    }
    20%, 36%, 46% {
        -webkit-transform: translate(0, -1.5px) rotate(2.5deg);
        transform: translate(0, -1.5px) rotate(2.5deg)
    }
    26%, 50% {
        -webkit-transform: translate(0, .5px) rotate(.5deg);
        transform: translate(0, .5px) rotate(.5deg)
    }
    28% {
        -webkit-transform: translate(0, .5px) rotate(1.5deg);
        transform: translate(0, .5px) rotate(1.5deg)
    }
    30%, 40%, 62%, 76%, 88% {
        -webkit-transform: translate(0, -.5px) rotate(2.5deg);
        transform: translate(0, -.5px) rotate(2.5deg)
    }
    32%, 34%, 66% {
        -webkit-transform: translate(0, 1.5px) rotate(-.5deg);
        transform: translate(0, 1.5px) rotate(-.5deg)
    }
    42% {
        -webkit-transform: translate(0, 2.5px) rotate(-1.5deg);
        transform: translate(0, 2.5px) rotate(-1.5deg)
    }
    44%, 70% {
        -webkit-transform: translate(0, 1.5px) rotate(.5deg);
        transform: translate(0, 1.5px) rotate(.5deg)
    }
    48%, 74%, 82% {
        -webkit-transform: translate(0, -.5px) rotate(.5deg);
        transform: translate(0, -.5px) rotate(.5deg)
    }
    52%, 56%, 60% {
        -webkit-transform: translate(0, 2.5px) rotate(2.5deg);
        transform: translate(0, 2.5px) rotate(2.5deg)
    }
    58% {
        -webkit-transform: translate(0, .5px) rotate(2.5deg);
        transform: translate(0, .5px) rotate(2.5deg)
    }
    84% {
        -webkit-transform: translate(0, 1.5px) rotate(2.5deg);
        transform: translate(0, 1.5px) rotate(2.5deg)
    }
    90% {
        -webkit-transform: translate(0, 2.5px) rotate(-.5deg);
        transform: translate(0, 2.5px) rotate(-.5deg)
    }
    92% {
        -webkit-transform: translate(0, .5px) rotate(-.5deg);
        transform: translate(0, .5px) rotate(-.5deg)
    }
    94% {
        -webkit-transform: translate(0, 2.5px) rotate(.5deg);
        transform: translate(0, 2.5px) rotate(.5deg)
    }
    0%, 100% {
        -webkit-transform: translate(0, 0) rotate(0);
        transform: translate(0, 0) rotate(0)
    }
}
</style>
