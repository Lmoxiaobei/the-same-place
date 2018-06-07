<template>
 <div class="home">
    <router-link to="/shouye"><img class="tuuu" src="../assets/5.jpg" alt=""></router-link>
    <!-- <router-link to="/shouye"><button></button></router-link> -->
 </div>
</template>

<script>
export default {
  name: 'Denglu'
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.tuuu {
  width: 100%;
  height: 100%;
  display: block;
}
button {
  width: 176px;
  height: 29px;
  position: absolute;
  left: 73px;
  top: 317px;
  z-index: 99;
  border-radius: 30px;
  outline: 0;
  opacity: 0.5;
}
</style>
