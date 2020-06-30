<template>
  <div class="index-container">
    <div class="header-container">
      <div class="header-container-box max-width flex-block margin-auto">
        <div>
          <img src="../assets/my-logo.png" class="index-logo">
        </div>
        <div>
          <div v-for="(item,index) in headerList" :key="index" class="header-container-item inline-block">{{item.name}}</div>
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
        {name: '首页'},
        {name: 'CSS效果'},
        {name: 'swiprt效果'},
        {name: '博客'},
        {name: '关于我'}
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
}
.header-container-box {
  justify-content: space-between;
  align-items: center;
}
.header-container-item {
  cursor: pointer;
  color: pink;
  margin-left: 30px;
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
</style>
