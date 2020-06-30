<template>
  <div id="app">
    <router-view/>
    <vueToTop :top="50" :color="'#ffc0cb'" :type="4"></vueToTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.inline-block {
  display: inline-block;
}
.flex-block {
  display: flex;
}
.max-width {
  width: 1200px;
}
.margin-auto {
  margin: 0 auto;
}
</style>
