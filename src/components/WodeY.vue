<template>
  <div>
    <div class="zero">
      <div class="top">
        <router-link to="/wode">
          <Icon type="arrow-left-a"></Icon>
        </router-link>
        <span class="wo">我的一处</span>
        <span>添加一处</span>
      </div>
    </div>

    <div class="tu">
      <div class="tuq">
        <div class="tuw">
        <img src="http://img3.imgtn.bdimg.com/it/u=3315919876,2908129629&fm=27&gp=0.jpg" alt="">
        <span class="zi">一粒</span>
        </div>
        <div class="tuw">
        <img src="http://img3.imgtn.bdimg.com/it/u=2891329423,2114991114&fm=27&gp=0.jpg" alt="">
        <span class="zi">6/12</span>
        </div>
      </div>
      <!--  -->
      <div class="tuq">
        <div class="tuw">
        <img src="http://img5.imgtn.bdimg.com/it/u=2562342050,3051205111&fm=27&gp=0.jpg" alt="">
        <span class="zi">8/17</span>
        </div>
        <div class="tuw">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005577591,3898525808&fm=27&gp=0.jpg" alt="">
        <span class="zi">就想配图</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  name: 'WodeY',
  components: {
    Footer
  }
}
</script>

<style scoped>
a {
  color: #fff;
}
.zero {
  width: 100vw;
  margin: 0 auto;
  background: linear-gradient(rgb(173, 209, 252), rgb(183, 245, 222));
}
.top {
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.wo {
  margin-left: 36px;
}
img {
  width: 80%;
  height: 80%;
  /* margin-left: 10px; */
}
.tu {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  height: 79.5vh;
}
.tuq {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.tuw {
  display: flex;
  flex-direction: column;
}
.zi {
  margin-top: 10px;
  font-size: 16px;
}
</style>
