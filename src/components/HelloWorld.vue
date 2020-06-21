<template>
  <div class="hello">
    <img src="../assets/logo.jpg" class="index-logo">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="goIndex">进入首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到我的世界'
    }
  },
  methods: {
    goIndex () {
      this.$router.push({ name: 'Index' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.index-logo {
  width: 200px;
  border-radius: 50%;
  height: 200px;
}
</style>
