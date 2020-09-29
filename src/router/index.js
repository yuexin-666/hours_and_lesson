import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      tabberShow:true
    }
  },
  //课程
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/course/About.vue'),
    meta:{
      tabberShow:true
    }
    
  },
  //约课记录
  {
    path: '/lessonHistory',
    name: 'lessonHistory',
    component: () => import('../views/lessonHistory/LessonHistory.vue'),
    meta:{
      tabberShow:true
    }
  },
  //练习
  {
    path: '/pricate',
    name: 'pricate',
    component: () => import('../views/pricate/Pricate.vue'),
    meta:{
      tabberShow:true
    }
  },
  /////////练习子路由
  {
    path:"/test",
    name:"Test",
    component:()=>import('../views/pricate/Test.vue')
  },
  {
    path:"/paper",
    name:"Paper",
    component:()=>import('../views/pricate/Paper.vue')
  },
  {
    path:"/model",
    name:"Model",
    component:()=>import('../views/pricate/Model.vue')
  },
  {
    path:"/wrong",
    name:"Wrong",
    component:()=>import('../views/pricate/Wrong.vue')
  },
  {
    path:"/problem",
    name:"Problem",
    component:()=>import('../views/pricate/Problem.vue')
  },
  {
    path:"/collection",
    name:"Collection",
    component:()=>import('../views/pricate/Collection.vue')
  },
  /////////
  //我的
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/User.vue'),
    meta:{
      tabberShow:true
    }
  }
  //已删除
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
