<template>
  <div class="zhong">
      <div class="tope">
        <span class="topw">一起说:</span>
      </div>
      <div class="qq">
        <img src="https://i2.sanwen8.cn/m/1528204717.jpg" alt="">
        <div class="zero">
          <span class="qqw">生活，简单着就好</span>
          <span class="qqe">生活的脉络，是一颗自然的平常心。如同涓涓清流从心底淌过，来自我们对这个世界的认知与热爱，也是与世间周遭的人与事和睦相处的道理。</span>
        </div>
      </div>
      <div class="yan"></div>
    </div>
</template>

<script>
export default {
  name: 'XiaoxiZhong'
}
</script>

<style scoped>
.zhong {
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  overflow-y: auto;
}
.tope {
  margin-top: 10px;
}
.topw {
  font-size: 14px;
}
.zero {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.qq {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.qq img {
  width: 90px;
  height: 130px;
}
.qqw {
  font-size: 18px;
}
.yan {
  margin-top: 10px;
  height: 2px;
  background-color: #c0d9d9;
}
</style>
