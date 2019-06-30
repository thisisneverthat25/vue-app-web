<template>
  <div id="app">
    <HomeComp></HomeComp>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeComp from './components/HeadComp'

export default {
  name: 'App',
  components: {HomeComp}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
