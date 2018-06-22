<template>
<div>
  <div>
      <div class="zero1">
        <div class="topq">
          <router-link to='/shouye'>
            <Icon type="arrow-left-a" class="zi"></Icon>
          </router-link>
          <span class="tu">音乐</span>
          <span>我的音乐</span>
        </div>
      </div>
        <div class="zhong">
          <div class="xuebi">
            <img  src="http://p1.music.126.net/Sm7W_0R_TYho_7zgYMzx_A==/17648261137669050.jpg?param=130y130" alt="" class="xuebiw">
            <div class="gequ"> 
              <span>樱雨 （Cover JUJU）</span>
            </div>
       
          </div>
                    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=587211&auto=1&height=66"></iframe>
               <div class="geci">
             <Collapse v-model="value2" accordion >
              <Panel name="2">
                  歌词
                  <p slot="content">樱雨
                    <br>
                就算再点温柔 有些故事唔喺可以一个人嚟守候
                <br>
                边时已坚强到可睇住另一人牵起你手
                <br>
                还记得果晚 拦路的飞雪 化为一副锁扣
                <br>
                还企喺十字路口 嘅自己
                <br>
                不知如何逃走
                <br>
                走到那条我曾自认属于我们两人的旧街
                <br>
                街尾走过转身发觉两人各返各世界
                <br>
                相隔唔够十米嘅彼此其实已经不太 远
                <br>
                但求如樱花飘去眼前可惜已失败
                <br>
                其实喺自己依赖 三年嘅时间过得不算太快
                <br>
                期间我挣扎过
                <br>
                而你让我笑过喊过
                <br>
                走过看过
                <br>
                期盼从来不多
                <br>
                唯求雨落嘅时候在你身边是我
                <br>
                而返到屋企我先发觉手中嘅大遮都未曾开过
                <br>
                回忆中果日下昼 墙角阴影中企住嘅不系我
                <br>
                而掕住大遮嘅自己 目送你
                <br>
                投入他的怀抱
                <br>
                桜を濡らすやさしい雨が (打湿樱花的温柔的雨)
                <br>
                私の頬を伝わってゆく (顺著我的脸颊流下)
                <br>
                どうかこのまま降りやまないで (请就这样一直下著不要停止)
                <br>
                涙がかわくまではもう少し (直到眼泪乾涸前)
                <br>
                この雨に打たれていたくて (我还想再沐浴在这雨中)
                <br>
                有时手机屏幕蓝灯闪亮
                <br>
                而我会倍感兴奋
                <br>
                因为这表明电波划破时空带俾我你回信
                <br>
                夜晚十一点话未足三句便断音
                <br>
                或你要訓？
                <br>
                但果句晚安未得你回音 我默默等
                <br>
                他人不明我曾许下多少诺言讲过多少抱歉
                <br>
                事实早已偷将你微笑 设为手机桌面
                <br>
                想话带你寻落樱雨的春天
                <br>
                漫天花瓣下你对我挥手 定格相片 深埋心入面
                <br>
                然而痴心一片 反而让你如此不便
                <br>
                行雷闪电时想搵你 但你手机断线
                <br>
                发觉喺因为你与另一人深夜还纠缠
                <br>
                可笑是我未明白果句“我訓先”喺你敷衍
                <br>
                而居住喺童话嘅自己仍这般肤浅
                <br>
                不想俾你看到这眼泪
                <br>
                宁愿沐浴于这温柔雨水
                <br>
                路灯下他吻你嘴 这般登对
                <br>
                手边垂下大遮上 落满飞花我也早不舍得举
                <br>
                桜を濡らすやさしい雨が (打湿樱花的温柔的雨)
                <br>
                私の頬を伝わってゆく (顺著我的脸颊流下)
                <br>
                どうかこのまま降りやまないで (请就这样一直下著不要停止)
                <br>
                涙がかわくまではもう少し (直到眼泪乾涸前)
                <br>
                この雨に打たれていたくて (我还想再沐浴在这雨中)
                <br>
                雪花停止纷飞
                <br>
                谂起雨点飘零嘅果个街尾
                <br>
                樱花落下刹那 静默看着列车铁轨
                <br>
                可能得我自己 早就预料到别离
                <br>
                俾你依赖嘅手臂 此时已抱不到你
                <br>
                这一刻 我哋擦肩而过 未回首
                <br>
                但记忆涌上心头
                <br>
                用咗一秒都未够
                <br>
                直至下定决心要挽留
                <br>
                呼啸而过的列车已在身后
                <br>
                这身影是否喺你我看不透
                <br>
                渴望再见到你眼眸
                <br>
                有谁愿再厮守
                <br>
                列车离开而你不在
                <br>
                唯有转身向前走
                <br>
                都算幸运 于这瞬间 可与你再见一面
                <br>
                飘香樱雨化为这个故事中最美噶诗篇
                <br>
                或许未来等待我寻找噶喺另一个晴天
                <br>
                哪怕结局你早已不在入面
                <br>
                时间终会裁断 捆绑住我嘅铁链
                <br>
                可能你我之间终究沦为陌生
                <br>
                直到宜家都不算有些小关联
                <br>
                桜を濡らすやさしい雨が (打湿樱花的温柔的雨)
                <br>
                私の頬を伝わってゆく (顺著我的脸颊流下)
                <br>
                どうかこのまま降りやまないで (请就这样一直下著不要停止)
                <br>
                涙がかわくまではもう少し (直到眼泪乾涸前)
                <br>
                この雨に打たれていたくて (我还想再沐浴在这雨中)
                <br>
                ねえ桜雨私の願いかなえてほしい (樱花的雨 请你实现我的愿望)
                <br>
                どうかこのまま降りやまないで (请就这样一直不停地下)
                <br>
                どこかで気まぐれにきみが吹いた (直到你那不知从何处吹起的)
                <br>
                口笛の音消し去るまで (口哨声完全消失为止)</p>
              </Panel>
          </Collapse>
            </div>
        </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      value2: '1'
    }
  }
}
</script>

<style scoped>
.zero1 {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('../assets/6.png');
}
.topq {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topq span {
  font-size: 16px;
  color: #fff;
}
.tu {
  margin-left: 52px;
}
.zi {
  font-size: 16px;
  color: #fff;
}
.xuebi {
  width: 220px;
  height: 220px;
  background-color: #fff;
  background-image: url('https://s2.music.126.net/style/web2/img/coverall.png?df951a3b1312897d26cfcee2d6694e6c');
  background-position: -140px 920px;
}
.xuebiw {
  position: absolute;
  left: 10%;
  top: 15.5%;
  border-radius: 50%;
}
.gequ {
  position: absolute;
  font-size: 16px;
  color: #333;
  left: 56%;
  top: 24%;
}
.zhong {
  overflow-y: auto;
  /* height: 80vh; */
}
.geci {
  width: 100%;
  overflow-y: auto;
  /* margin-top: 190px; */
}
</style>
