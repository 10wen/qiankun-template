import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/layout.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import SubApp from "../views/SubApp.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'production' ? '/' : '/'),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          // 匹配所有其他路由
          path: ':pathMatch(.*)*',
          name: 'sub',
          component: SubApp
        }
      ]
    },
  ],
  strict: true,
})
export default router