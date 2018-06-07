<template>
  <div class="footer">
    <div>
      <img src="../assets/9.png" alt="">
    </div>
    <div>
      <img src="../assets/11.png" alt="">
    </div>
    <div>
    <img style='footer1' src="../assets/12.png" alt="">
    </div>
    <div>
      <img src="../assets/14.png" alt="">
    </div>
    <div>
      <img src="../assets/16.png" alt="">
    </div>

    

  </div>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style scoped>
img {
  width: 70%;
  margin-left: 20%;
  
  
}
.footer {
  display: flex;
  justify-content: space-around;
}
.footer1 {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
