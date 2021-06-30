<template>
  <div class="hello">
    <img src="../assets/logo.jpg" class="index-logo">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="goIndex">进入系统</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎访问'
    }
  },
  methods: {
    goIndex () {
      this.$router.push({ name: 'FirstPage' })
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
.hello {
  margin-top: calc(50vh - 200px);
  text-align: center;
}
</style>
