/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({ // 配置对象
  // 配置应用中所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path:'/shop/goods',
          component: ShopGoods
        },
        {
          path:'/shop/ratings',
          component: ShopRatings
        },
        {
          path:'/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
