import { createRouter, createWebHistory } from "vue-router";
import Login from '../view/Login.vue';
import Homepage from '../view/Homepage.vue';
import Homepagem from '../viewm/Homepagem.vue';
const routes = [
  {
    path:'',
    component:/test|Android/i.test(navigator.userAgent)?Homepagem:Homepage
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/homepage',
    component: () => import("../view/Homepage.vue")

  }, {
    path: '/list',
    component: () => import("../view/List.vue")
  }
  //  {
  //   path:'/home',
  //   component:()=>import("../view/Home.vue")
  //  },{
  //      path:'/list',
  //      component:()=>import("../view/ArticalList.vue")
  //  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router