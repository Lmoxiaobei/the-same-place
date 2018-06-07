<template>
  <div class="hello">
<mt-swipe class="qimg" :auto="0" :show-indicators="false" :continuous="false">
  <mt-swipe-item><img src="../assets/1.png" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../assets/2.png" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../assets/3.png" alt=""></mt-swipe-item>
  <mt-swipe-item><router-link to="/denglu"><img src="../assets/4.png" alt=""></router-link></mt-swipe-item>
</mt-swipe>
  <!-- <router-link to="/shouye"><button class="tiao">跳过</button></router-link> -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'HelloWorld',
  components: {
    Swipe,
    SwipeItem
  }
}
</script>

<style scoped>
.hello {
  width: 100vw;
  height: 100vh;
}
.qimg img {
  width: 100%;
  height: 100%;
}
.tiao {
  width: 40px;
  height: 20px;
  z-index: 99;
  font-size: 10px;
  color: #fff;
  position: absolute;
  left: 260px;
  top: 22px;
  border-radius: 30px;
  outline: 0;
  opacity: 0.5;
  border: 1px solid #fff;
}
</style>
