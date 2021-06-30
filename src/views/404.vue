<template>
  <div class="error-404-container">
    <i class="iconfont icon-icon-test"></i>
    <span class="my-face">喵~ ,页面找不到了~</span>
  </div>
</template>

<script>
export default {
  name: 'Error404Page',
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-404-container {
    text-align: center;
    height: 100vh;
    line-height: 100vh;
    position: relative;
    overflow: hidden;
    i {
        font-size: 64px;
        color: #dc687d;
    }
    span {
        position: absolute;
        top: 0;
        left: 53%;
        background: url(https://csdnimg.cn/release/cmsfe/public/img/bg_4.7edee38c.png) 50%;
        background-size: contain;
        -webkit-animation: move-data-v-66eae39e-data-v-6b3aeb0e 4s 1s infinite;
        animation: move-data-v-66eae39e-data-v-6b3aeb0e 4s 1s infinite;
    }
}
@-webkit-keyframes move-data-v-66eae39e {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    50% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes move-data-v-66eae39e {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    50% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}
</style>