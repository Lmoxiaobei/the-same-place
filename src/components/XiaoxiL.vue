<template>
  <div class="zer">
    <div class="kuang">
      <Input v-model="value" placeholder="Search contacts and dynamics ..." style="width: 300px" class="in" />
    </div>
    <div >

  
    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i1.hdslb.com/bfs/archive/0d9f8848b195a79dd45aed640bc95def58dfbbfd.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>通知</p>
        <p>曾经年少，拥抱着阳光；曾经奋发，追逐着梦想；曾经坎坷，似迷途的羔羊。</p>
      </div>
    </div>

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/f7b1070d77e52d4f9d89e2a3d9c9bba59b2f1abd.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>一处小秘书</p>
        <p>每晚睡前听你说晚安，是属于我的，最简单而持久的幸福。</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/fe9fffc229515c3b16fa4094e36fdfc091d160f5.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>在水一方</p>
        <p>你会不会忽然的出现，在街角的咖啡店。对你说一句，只是说一句，好久不见。</p>
      </div>
    </div>


     <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i1.hdslb.com/bfs/archive/7ace9894b53baee6f786a73a4785a3fc13dd6eb9.png@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>02</p>
        <p>如果没有你，明天不值得期待，昨天不值得回忆。</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i2.hdslb.com/bfs/archive/8e24063c3779556b5bc19b6163731ab5e9a314b4.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>罪恶王冠</p>
        <p>如果我没有王冠，我就不能保护你，如果我拥有王冠，我就不能拥抱你。</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i2.hdslb.com/bfs/archive/b4c5f3c39746fe389dc9179bf9516f54042a4a3f.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>龙族</p>
        <p>什么是死，是终点，是永决，是不可挽回，是再也握不到的手，感觉不到的温度，再也说不出口的“对不起”。</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i2.hdslb.com/bfs/archive/bfcdc55b696bca246a72186f1a1f7495b254e9d1.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>路鸣泽</p>
        <p>比孤独更可悲的事情，就是根本不知道自己很孤独，或者分明很孤独，却把自己都骗的相信自己不孤独。</p>
      </div>
    </div>

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i2.hdslb.com/bfs/archive/88d24de9f64c797b0a55d4f0ffbbd0c187a2c021.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>路明非</p>
        <p>所以师兄，你牛逼是因为有人给你兜着啊，你有靠谱后爹，还有漂亮老娘，他们其实都是......爱你的啊，你不管做了什么坏事都有地方去的......可我没有，你要我怎么勇敢呢?</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i2.hdslb.com/bfs/archive/096ae08591bbb7229cb30575a9909c4dfef9ecd8.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p>芬格尔</p>
        <p>爱什么人不容易的，得在万军从中杀出一条血路！最后一条狗，穿越无数龙骑的炮火，在剩下最后一滴血的时候，挥出改变战局的一爪！你要是死在半路上，也很自然呐。不过不冲向炮火的狗不是好狗啊。</p>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'XiaoxiL',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.zer {
  overflow-y: auto;
  height: 80vh;
}
.kuang {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.in {
  margin: 20px;
}
.z {
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00ffff;
}
.x {
  margin-left: 10px;
}
</style>
