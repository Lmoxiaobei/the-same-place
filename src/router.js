import Vue from 'vue'
import Router from 'vue-router'
import Denglu from './components/Denglu.vue'
import HelloWorld from './components/HelloWorld.vue'
import Shouye from './components/Shouye.vue'
import Foot from './components/Foot.vue'

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
  ],
  mode: 'history',
})