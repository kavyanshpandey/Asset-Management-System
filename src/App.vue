<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap');
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-top: 60px;
  color: #212f3d;
}
</style>
