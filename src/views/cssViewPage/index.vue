<template>
  <div class="css-container">
    <div class="size1 inline-block">
      <div class="height36">
        <div class="loc-mc-box">
          <p class="bnj-txt txt-up">百大</p>
          <img src="../../assets/my-logo.png" alt="menuName" class="bnj-gif">
          <p class="bnj-txt txt-down">百大</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cssPage",
  data() {
    return {

    };
  },
  components: {

  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.size1 {
  border: 1px solid #e5e9ef;
  padding: 20px;
  margin: 24px;
  background-color: #fff;
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
</style>
