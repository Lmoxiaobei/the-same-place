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
import XiaoxiZhong from './components/XiaoxiZhong.vue'



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
      component: Xiaoxi
    },
    {
      path: '/xiaoxizhong',
      component: XiaoxiZhong
    },
  ],
  mode: 'history',
})