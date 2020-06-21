<template>
  <div id="app">
    <img src="./assets/logo.jpg" class="index-logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.index-logo {
  width: 200px;
  border-radius: 50%;
  height: 200px;
}
</style>
