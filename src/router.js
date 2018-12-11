import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
       path: '/404', 
       name: 'notFound',
       component: () => import('./views/NotFound.vue')
    },  
    { 
      path: '*', 
      redirect: '/404' 
    }  
  ]
})
