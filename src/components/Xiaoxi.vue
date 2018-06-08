<template>
  <div class="zero">
    <div class="top">
      <div class="zero1">
      <div class="topq">
        <span>动态</span>
        <span>聊天</span>
      </div>
      </div>
    <XiaoxiZhong />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import XiaoxiZhong from './XiaoxiZhong.vue'
export default {
  name: 'Xiaoxi',
  components: {
    Footer,
    XiaoxiZhong
  }
}
</script>

<style scoped>
.top {
  width: 100vw;
  height: 92vh;
}
.top span {
  font-size: 16px;
  color: #fff;
}
.zero1 {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/6.png');
}
.topq {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
}
</style>
