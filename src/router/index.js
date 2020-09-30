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
<<<<<<< HEAD
    meta: {
      tabberShow: true
    }
=======
<<<<<<< HEAD
    meta: {
      tabberShow: true
    }
=======
    meta:{
      tabberShow:true
    },
  },
  // 一对一辅导
  {
    path: '/tutoring',
    name: 'Home',
    component: () => import('../views/home/components/Tutoring.vue'),
  },
  // 学习日历
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/home/components/Calendar.vue'),
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
>>>>>>> e1cc1b39262f306b15390511055be7e022f67ada
  },
  //课程
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/course/About.vue'),
    meta: {
      tabberShow: true
    }
<<<<<<< HEAD

=======
  }, 
  {
    path: '/lessondetails',//跳转至课程详情页
    name: 'lessondetails',
    component: () => import('../views/course/details/LessonDetails.vue'),
  },
  {
    path: '/teacherdetails',//跳转至讲师详情页
    name: 'teacherdetails',
    component: () => import('../views/course/details/TeacherDetails.vue'),
    meta: {
      tabberShow: false
    },
>>>>>>> e1cc1b39262f306b15390511055be7e022f67ada
  },
  //约课记录
  {
    path: '/lessonHistory',
    name: 'lessonHistory',
    component: () => import('../views/lessonHistory/LessonHistory.vue'),
<<<<<<< HEAD
    meta: {
      tabberShow: true
    },
    children: [{
      path: '/oto',
      name: 'oto',
      component: () => import('../views/lessonHistory/oto/Oto.vue')
    }]
=======
<<<<<<< HEAD
    meta: {
      tabberShow: true
    },
    children: [
=======
    meta:{
      tabberShow:true
    },
<<<<<<< HEAD
  },
     //一对一辅导
      {
        path:'/oto',
        name:'oto',
        component:()=>import('../views/lessonHistory/Oto.vue')
      },
      //约课搜索
      {
        path:'/serch',
        name:'serch',
        component:()=>import('../views/lessonHistory/Serch.vue')
      },
      //预约课程
      {
        path:'/plan',
        name:'plan',
        component:()=>import('../views/lessonHistory/Plan.vue')
      },
      //讲师详情
      {
        path:'/teacher',
        name:'teacher',
        component:()=>import('../views/lessonHistory/Teacher.vue')
      },
=======
    children:[
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
      {
        path: '/oto',
        name: 'oto',
        component: () => import('../views/lessonHistory/oto/Oto.vue')
      }
    ]
>>>>>>> e1cc1b39262f306b15390511055be7e022f67ada
  },
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
  //练习
  {
    path: '/pricate',
    name: 'pricate',
    component: () => import('../views/pricate/Pricate.vue'),
    meta: {
      tabberShow: true
    }
  },
  /////////练习子路由
  {
    path: "/test",
    name: "Test",
    component: () => import('../views/pricate/Test.vue')
  },
  {
    path: "/paper",
    name: "Paper",
    component: () => import('../views/pricate/Paper.vue')
  },
  {
    path: "/model",
    name: "Model",
    component: () => import('../views/pricate/Model.vue')
  },
  {
    path: "/wrong",
    name: "Wrong",
    component: () => import('../views/pricate/Wrong.vue')
  },
  {
    path: "/problem",
    name: "Problem",
    component: () => import('../views/pricate/Problem.vue')
  },
  {
    path: "/collection",
    name: "Collection",
    component: () => import('../views/pricate/Collection.vue')
  },
  /////////
  //我的
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/User.vue'),
    meta: {
      tabberShow: true
<<<<<<< HEAD
    }
  },
  //登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
    meta: {
      tabberShow: false
    }
  },
  //找回密码页面
  {
    path: '/forgetPass',
    name: 'ForgetPass',
    component: () => import('../views/login/ForgetPass.vue'),
    meta: {
      tabberShow: false
    }
  },
  //个人信息页面
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/login/Info.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的学习页面
  {
    path: '/MyStudy',
    name: 'MyStudy',
    component: () => import('../views/login/MyStudy.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的余额页面
  {
    path: '/currency',
    name: 'currency',
    component: () => import('../views/login/Currency.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我关注的老师页面
  {
    path: '/concern',
    name: 'concern',
    component: () => import('../views/login/Concern.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的收藏页面
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/login/Collect.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的订单相关页面
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/login/Order.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的订单相关页面
  {
    path: '/coupon',
    name: 'coupon',
    component: () => import('../views/login/Coupon.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的学习卡页面
  {
    path: '/userCard',
    name: 'userCard',
    component: () => import('../views/login/UserCard.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的学习卡兑换页面
  {
    path: '/exchange',
    name: 'exchange',
    component: () => import('../views/login/Exchange.vue'),
    meta: {
      tabberShow: false
    }
  },
  //我的VIP页面
  {
    path: '/userVip',
    name: 'userVip',
    component: () => import('../views/login/UserVip.vue'),
    meta: {
      tabberShow: false
=======
>>>>>>> e1cc1b39262f306b15390511055be7e022f67ada
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router