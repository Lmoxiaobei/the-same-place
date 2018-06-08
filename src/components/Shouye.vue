<template>
 <div>
   <div class="top">
      <img class="tu" src="../assets/6.png" alt="">
      <img class="tuq" src="../assets/7.png" alt="">
    <div class="foot">
         <Foot />
    </div>
   </div>
   <Footer />
 </div>
</template>

<script>
import Foot from './Foot.vue'
import Footer from './Footer.vue'
export default {
  name: 'Shouye',
  components: {
    Foot,
    Footer
  }
}
</script>

<style scoped>
.tu {
  width: 100vw;
  height: 60px;
  display: block;
}
.tuq {
  width: 90vw;
  height: 20px;
  position: absolute;
  left: 14px;
  top: 20px;
}
.foot {
  height: 550px;
}
</style>
