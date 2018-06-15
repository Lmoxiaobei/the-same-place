<template>
  <div>
    <div class="zero">
      <div class="top">
        <router-link to="/wode">
          <Icon type="arrow-left-a"></Icon>
        </router-link>
        <span class="wo">回答</span>
        <Icon type="more"></Icon>
      </div>
    </div>
    <div>
        <div>
          <div class="fa">
            <div class='ff'>
              <div class='fff'>
                <span class="fas">不想上班的理由</span>
              </div>
            </div>
            <div class="fgg"><span>首先，作为心理学领域的答主，必须要强调的一点是，如果你不仅是每天都不想面对工作，而且还觉得自己总是情绪低落，对任何事情都提不起兴趣，那么你可能需要注意自己是不是受到了抑郁情绪的困扰。如果，你发现到自己在很长一段时间里都处于这样的状态之中，甚至这种抑郁的情绪已经严重影响到你的工作与生活，那么你就需要及时地去寻求外界的支持及专业人士的帮助。</span></div>
            </div>
            <div class='fup'>
              <div>
                <span>赞同4</span>
              </div>
              <div class='fua'>
                <span>3-28</span>
              </div>
            </div>
        </div>
        <!--  -->
                <div>
          <div class="fa">
            <div class='ff'>
              <div class='fff'>
                <span class="fas">花落沾满光</span>
              </div>
            </div>
            <div class="fgg"><span>即使调整心态，坦然接受现状。我目前就是工作遇到问题了，咋的了？！结婚还有七年之痒呢，工作遇到点问题也很正常嘛～很多人不愿意面对逆境，不愿意承认生活的不如意，然而生活的不如意是必然存在的。三年高考五年模拟都熬过来了，工作的小小难题，也一定能迎刃而解。</span></div>
            </div>
            <div class='fup'>
              <div>
                <span>赞同4</span>
              </div>
              <div class='fua'>
                <span>3-28</span>
              </div>
            </div>
        </div>
        <!--  -->
    </div>
  </div>
</template>

<script>
export default {}
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
  margin-left: 7px;
}
.fa {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90%;
  margin: 0 auto;
}

.fad {
  font-size: 16px;
}
.fgg {
  margin-top: 20px;
}
.fup {
  width: 90%;
  padding-top: 20px;
  margin: 0 auto;
  color: #ccc;
  display: flex;
  justify-content: space-between;
}
.fua {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
