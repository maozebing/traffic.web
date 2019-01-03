import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: resolve => require(['../App.vue'], resolve),
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: {name: 'running'},
        component: resolve => require(['../pages/Home.vue'], resolve),
        meta: { requiresAuth: true ,keepAlive:false},
        children: [
          {
            path: 'running',
            name: 'running',
            component: resolve => require(['../pages/Running.vue'], resolve),
            meta: { requiresAuth: true }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  /*  mode: 'history',*/
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;



