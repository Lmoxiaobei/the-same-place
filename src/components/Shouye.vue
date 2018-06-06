<template>
 <div>
   <img class="tu" src="../assets/6.png" alt="">
   <img class="tuq" src="../assets/7.png" alt="">
   <Foot />
 </div>
</template>

<script>
import Foot from './Foot.vue'
export default {
  name: 'Shouye',
  components: {
    Foot
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
</style>
