<template>
  <div >
    <div class="zero">
      <div class="top">
        <span>添加好友</span>
        <span>我</span>
        <span>设置</span>
      </div>
      <div class="qqq">
        <Avatar src="https://i2.hdslb.com/bfs/archive/007259a9d8353307c99133bb1e41e5d6d9f07d4f.jpg@160w_100h.webp" />
        <div class="www">
          <span class="wwwq">四万温泉</span>
          <span>简介:正在努力变得更好</span>
            <p class="response" v-show="!showCommentInput" @click="showCommentInput = !showCommentInput">未签到</p>
            <p class="response" v-show="showCommentInput"  @click="showCommentInput = !showCommentInput">已签到</p>
            </div>
          </div>
          <div class="fenxiang">
            <div class="fen">
              <span>839</span>
              <span>我的回信</span>
            </div>
            <div class="fen">
              <span>237</span>
              <span>我关注的人</span>
            </div>
            <div class="fen">
              <span>129</span>
              <span>关注我的人</span>
            </div>
         </div>
    </div>
    <div class="zhong">
      <div class="zhongZ">
        <div class="yichu">
          <span>我的一处</span>
          <Button class="bt"><Icon type="more"></Icon></Button>
        </div>
        <div class="tu">
          <div>
          <img src="http://img3.imgtn.bdimg.com/it/u=3315919876,2908129629&fm=27&gp=0.jpg" alt="">
          <span>一粒</span>
          </div>
          <div>

          <img src="http://img3.imgtn.bdimg.com/it/u=2891329423,2114991114&fm=27&gp=0.jpg" alt="">
          <span>6/12</span>
          </div>

          <div>
          <img src="http://img5.imgtn.bdimg.com/it/u=2562342050,3051205111&fm=27&gp=0.jpg" alt="">
          <span>8/17</span>
          </div>
        </div>
      </div>

      <div class="di">
        <div class='diq'>
          <div class='diw'>
            <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#d9d919" d="M752 939.2c-9.6 0-20.8-3.2-30.4-8l-208-104-209.6 104c-20.8 11.2-48 9.6-67.2-4.8-19.2-14.4-30.4-40-25.6-64l43.2-224L89.6 484.8C72 467.2 65.6 440 72 417.6c8-24 27.2-41.6 52.8-44.8l228.8-41.6 102.4-208c11.2-22.4 33.6-36.8 57.6-36.8s48 14.4 57.6 36.8l102.4 208 228.8 40c24 3.2 44.8 20.8 51.2 44.8 8 24 1.6 49.6-16 67.2L772.8 638.4l41.6 224c4.8 25.6-6.4 49.6-25.6 64-9.6 8-22.4 12.8-36.8 12.8z"  /></svg>
            <span class="dit">收藏</span>
            <span class="dir">文章 歌曲 精彩回答都在这里</span>
          </div>
          <div class='die'>
            <span>32</span>
            <span>></span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="di">
        <div class='diq'>
          <div class='diw'>
            <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#70dbdb" d="M256 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0ZM512 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0ZM704.256 0 319.744 0C142.976 0 0 143.232 0 320.704l0 142.592c0 162.304 133.76 289.408 256 304.768L256 960l320-191.936 128.256 0c176.768 0 319.744-127.296 319.744-304.768L1024 320.704C1024 143.616 880.896 0 704.256 0zM960 448c0 142.144-114.304 256-255.744 256L576 704l-256.256 150.016L319.744 704 288 704C160.704 688.192 64 577.92 64 448L64 320.704C64 178.56 178.304 64 319.744 64l384.576 0C845.504 64 960 178.88 960 320.704L960 448zM768 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z" /></svg>
            <span class="dit diy">回信</span>
            <span class="dir">你的回答</span>
          </div>
          <div class='die'>
            <span>7</span>
            <span>></span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="di">
        <div class='diq'>
          <div class='diw'>
            <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#007fff" d="M511.999634 1023.999269a509.80535 509.80535 0 0 0 265.142668-73.947376L1023.999269 1023.999269l-101.375928-206.043282A512.072777 512.072777 0 1 0 0 511.999634c0 282.696941 229.302693 511.999634 511.999634 511.999635zM292.57122 408.283137c1.097142-38.692544 5.851424-68.169094 14.262847-88.356508 8.411423-20.187414 21.942841-38.253687 40.228542-54.125676 18.50513-15.725703 39.058258-27.574837 61.659385-35.108546 22.601127-7.460566 46.591967-11.263992 71.679949-11.263992 50.907392 0 93.183933 14.409133 127.049052 43.154255 33.865119 28.818265 50.834249 67.145095 50.834249 114.980489 0 21.503985-4.388568 40.959971-12.946276 58.514244-8.703994 17.407988-27.135981 39.204543-55.369104 65.316525s-46.957681 44.617111-56.246817 55.661674c-9.215993 10.971421-16.16456 24.137126-20.991985 39.497115-4.827425 15.359989-6.875424 35.98626-6.290281 61.732527h-73.874233c0-30.134836 2.559998-54.125676 7.606852-72.191948 5.046854-17.99313 12.580562-33.718833 22.674269-47.250252 10.093707-13.385133 28.233123-33.279976 54.564533-59.245672 26.33141-26.111981 43.227398-45.055968 50.761106-56.83196 7.606852-11.775992 11.337135-29.47655 11.337135-52.809105 0-23.405698-8.630851-44.105111-25.965696-62.171384-17.261702-17.99313-42.49597-27.062838-75.556517-27.062838-74.31309 0-111.542777 42.569112-111.542777 127.487909H292.57122v0.073143zM511.999634 804.570854H438.856829v-73.142805h73.142805v73.142805z"  /></svg>
            <span class="dit diu">提问</span>
            <span class="dir">你的回答</span>
          </div>
          <div class='die'>
            <span>6</span>
            <span>></span>
          </div>
        </div>
      </div>
      <!--  -->
 <div class="di">
        <div class='diq'>
          <div class='diw'>
           <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#b5a642" d="M610.884913 514.371778c13.257632 0 24.2043-10.825039 24.2043-24.2043 0-13.257632-10.825039-24.2043-24.2043-24.2043l-53.638674 0 64.828602-75.532011c8.635705-10.095261 7.419408-25.420596-2.675852-34.056301-10.095261-8.635705-25.420596-7.419408-34.056301 2.675852l-73.342677 85.505642-73.342677-85.505642c-8.635705-10.095261-23.961041-11.311557-34.056301-2.675852-10.095261 8.635705-11.311557 23.961041-2.675852 34.056301l64.828602 75.532011-53.638674 0c-13.257632 0-24.2043 10.825039-24.2043 24.2043s10.825039 24.2043 24.2043 24.2043l74.680603 0 0 35.637487-74.680603 0c-13.257632 0-24.2043 10.825039-24.2043 24.2043s10.825039 24.2043 24.2043 24.2043l74.558974 0 0 62.274379c0 13.257632 10.825039 24.2043 24.2043 24.2043 13.257632 0 24.2043-10.825039 24.2043-24.2043l0-62.274379 74.680603 0c13.257632 0 24.2043-10.825039 24.2043-24.2043s-10.825039-24.2043-24.2043-24.2043l-74.680603 0 0-35.637487L610.884913 514.371778zM775.084937 33.934672 249.036712 33.934672C131.177584 33.934672 35.698311 129.900463 35.698311 248.24611l0 528.724076C35.698311 895.315833 131.177584 991.281625 249.036712 991.281625l526.048224 0c117.737499 0 213.216772-95.965792 213.216772-214.311438L988.301708 248.24611C988.301708 129.900463 892.822435 33.934672 775.084937 33.934672zM512.00001 811.877895c-165.294691 0-299.208932-133.914242-299.208932-299.208932 0-165.294691 133.914242-299.208932 299.208932-299.208932 165.294691 0 299.208932 133.914242 299.208932 299.208932C811.208942 677.842024 677.2947 811.877895 512.00001 811.877895z" /></svg>
            <span class="dit dii">钱包</span>
            <span class="dir">邀请好友来拿钱</span>
          </div>
          <div class='die'>
            <span>5000</span>
            <span>></span>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  name: 'Wode',
  components: {
    Footer
  },
  data() {
    return {
      showCommentInput: false
    }
  }
}
</script>

<style scoped>
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
.qqq {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.www {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.wwwq {
  font-size: 14px;
}
.response {
  font-size: 14px;
  position: absolute;
  left: 82%;
  top: 10%;
}
.fenxiang {
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.fen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.zhong {
  height: 68.2vh;
  overflow-y: auto;
}
.zhongZ {
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
}
.yichu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bt {
  border: 0;
  outline: 0;
  background-color: #fff;
}
.tu {
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tu div {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
.tu img {
  width: 90%;
}
.di {
  width: 90%;
  margin: 0 auto;
}
.diq {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  padding-top: 10px;
  height: 60px;
}
.diw {
  display: flex;
  align-items: center;
}
.die span {
  margin-right: 10px;
}
.dir {
  color: #ccc;
}
.dit {
  color: #d9d919;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 16px;
}
.diy {
  color: #70dbdb;
}
.diu{
  color:#007fff;
}
.dii{
  color:#b5a642;
}
</style>
