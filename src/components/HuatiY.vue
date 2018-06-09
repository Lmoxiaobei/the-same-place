<template>
  <div class="zer">
    <div class="kuang">
      <Input v-model="value" placeholder="Search contacts and dynamics ..." style="width: 300px" class="in" />
    </div>
    <div >

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/050b24a63e897d9d16eb9fb1587dad5a2e338c51.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">不想上班的理由</p>
        <p >还有 3 小时结束</p>
      </div>
    </div>

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/072a40f3716107c4c0aa03f84d70cc6aef3b1d03.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">还有比普通朋友伤人的么</p>
        <p>还有 5 小时结束</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/07e1e0980b353404b9f4f4690d8c358f5fc89608.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">你已经做的足够好</p>
        <p>还有 6 小时结束</p>
      </div>
    </div>


     <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/0a0afb57e86a08f9d4825b39a0863f215ee5557b.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">稳住我们能赢</p>
        <p>还有 6 小时结束</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/0de564c75b2d656d1c4e078d65dc6664574f513e.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">听说要高考了</p>
        <p>还有 9 小时结束</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/0e3171e0448b98d0895264e6e2d8358d981d708e.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">你是不是膨胀了</p>
        <p>还有 10 小时结束</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/116aa49e4cf3deca9f250c9cef68a13882e4959b.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">注册会计师资格</p>
        <p>还有 14 小时结束</p>
      </div>
    </div>

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/1ebaf35eb881a9a4f00f1eb7ccbafc3e96c40fa6.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">莫欺少年</p>
        <p>还有 18 小时结束</p>
      </div>
    </div>


    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/1f515da932bcaf1678488e3be0f59ceacee0708e.png@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">得失之间</p>
        <p>还有 23 小时结束</p>
      </div>
    </div>

    <div class="z">
      <div class="demo-avatar">
          <Avatar src="https://i0.hdslb.com/bfs/archive/22a4e28529bf0b500532f8e632a49ee90906fc0d.jpg@380w_240h_100Q_1c.webp" size='large'/>
      </div>
      <div class="x">
        <p class="ff">心若向阳，无谓悲伤</p>
        <p>还有 24 小时结束</p>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'HuatiL',
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
  border-bottom: 1px solid #00ffff;
}
.x {
  margin-left: 30px;
}
.ff {
  font-size: 14px;
}
</style>
