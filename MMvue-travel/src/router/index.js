import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import ChildrenDalian from '../components/ChildrenDalian'
import City from '../components/City'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dalian',
      name: 'ChildrenDalian',
      component: ChildrenDalian
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
