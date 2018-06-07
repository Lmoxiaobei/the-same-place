<template>
 <div class="home">
  <div class="deng">
    <Icon type="close" class="lu"></Icon>
    <span class="lp">找回密码</span>
    <!-- <input name="textfield" type="text" value="请输入您的手机号" onfocus="if (value =='请输入您的手机号'){value =''}" onblur="if (value ==''){value='请输入您的手机号'}" class='zhanghao' /> -->
    <AutoComplete 
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="请输入您的账号"
        class='zhanghao'>
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
    <input type="password" class="mima" placeholder="请输入您的密码" onfocus="if (placeholder =='请输入您的手机号'){placeholder =''}" onblur="if (placeholder ==''){placeholder='请输入您的手机号'}"/>
   <router-link to="/shouye"> <span class="denglu">登录</span></router-link>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Denglu',
  data() {
    return {
      value2: '',
      data2: []
    }
  },
  methods: {
    handleSearch2(value) {
      this.data2 =
        !value || value.indexOf('@') >= 0
          ? []
          : [value + '@qq.com', value + '@sina.com', value + '@163.com']
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.deng {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/22.jpg');
}
.lu {
  position: absolute;
  left: 10%;
  top: 8%;
  font-size: 22px;
  opacity: 0.2;
}
.lp {
  position: absolute;
  left: 76%;
  top: 8%;
  opacity: 0.2;
  font-size: 16px;
}
.zhanghao {
  z-index: 99;
}
.zhanghao {
  padding-left: 10px;
  opacity: 0.2;
  border: 1px solid #fff;
  border: 0;
  width: 200px;
  height: 30px;
  outline: 0;
  position: absolute;
  left: 24%;
  top: 42%;
}
.mima {
  padding-left: 10px;
  opacity: 0.2;
  border: 1px solid #fff;
  border: 0;
  width: 190px;
  height: 30px;
  outline: 0;
  position: absolute;
  left: 26.5%;
  border-radius: 4px;
  top: 50%;
}
.denglu {
  text-align: center;
  border-radius: 8px;
  width: 190px;
  border: 1px solid #fff;
  position: absolute;
  left: 26%;
  top: 62%;
  font-size: 22px;
  color: #fff;
}
</style>
