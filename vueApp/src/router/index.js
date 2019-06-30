
/*
*  컴포먼트 등록 공간
* */

import Vue from 'vue'
import Router from 'vue-router'
import ListOneComp from '../components/ListOneComp'
import ListTweComp from '../components/ListTweComp'
import IndexComp from '../components/IndexComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexComp
    },{
      path: '/1',
      component: ListOneComp
    },{
      path: '/2',
      component: ListTweComp
    }
  ]
})
