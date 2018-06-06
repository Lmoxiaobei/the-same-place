<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
.app {
  width: 100vw;
  height: 100vh;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
