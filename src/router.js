import Vue from 'vue'
import Router from 'vue-router'
import Denglu from './components/Denglu.vue'
import HelloWorld from './components/HelloWorld.vue'
import Shouye from './components/Shouye.vue'
import Foot from './components/Foot.vue'
import Footer from './components/Footer.vue'
import Fu from './components/Fu.vue'
import Fuy from './components/Fuy.vue'
import Xiaoxi from './components/Xiaoxi.vue'
import XiaoxiD from './components/XiaoxiD.vue'
import XiaoxiL from './components/XiaoxiL.vue'
import XiaoxiC from './components/XiaoxiC.vue'


import Huati from './components/Huati.vue'
import HuatiT from './components/HuatiT.vue'
import HuatiY from './components/HuatiY.vue'
import HuatiC from './components/HuatiC.vue'

import Buxiang from './components/Buxiang.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/denglu',
      component: Denglu
    },
    {
      path: '/shouye',
      component: Shouye
    },
    {
      path: '/foot',
      component: Foot
    },
    {
      path: '/footer',
      component: Footer
    },
    {
      path: '/fu',
      component: Fu
    },
    {
      path: '/fuy',
      component: Fuy
    },

    {
      path: '/xiaoxi',
      redirect: '/Xiaoxi/XiaoxiD'
      // 默认展示
    },
    {
      path: '/xiaoxi/:id',
      component: Xiaoxi
    },
    {
      path: '/XiaoxiC',
      component: XiaoxiC
    },
    {
      path: '/xiaoxi/xiaoxid',
      component: XiaoxiD
    },
    {
      path: '/xiaoxi/xiaoxil',
      component: XiaoxiL
    },


    {
      path: '/huati',
      redirect: '/Huati/HuatiT'
      // 默认展示
    },
    {
      path: '/huati/:id',
      component: Huati
    },
    {
      path: '/HuatiC',
      component: HuatiC
    },
    {
      path: '/huati/huatit',
      component: HuatiT
    },
    {
      path: '/huati/huatiy',
      component: HuatiY
    },
    {
      path: '/Huati/huati/huatiY/buxiang',
      component: Buxiang
    },
  ],
  mode: 'history',
})