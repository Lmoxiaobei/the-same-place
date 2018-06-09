<template>
  <div class="zero">
    <div class="top">
      <div class="zero1">
        <div class="topq">
        <span v-for="t in tocList" :key="t.id">
          <router-link :to="`/Huati/${t.id}`">
              {{ t.text }}
          </router-link>
          </span>
        </div>
      </div>
      <HuatiC />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import HuatiC from './HuatiC.vue'
import { tocArray } from '../constants/Huati.js'
export default {
  name: 'Huati',
  components: {
    Footer,
    HuatiC
  },
  computed: {
    tocList: function() {
      return tocArray
    }
  }
}
</script>

<style scoped>
a {
  color: #fff;
  font-size: 16px;
}
.top {
  width: 100vw;
  height: 91.5vh;
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
.yanse {
  color: #fff;
  font-size: 16px;
}
</style>
