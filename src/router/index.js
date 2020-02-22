import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    restricted: false
  }
}, {
  path: '/',
  name: 'Dashboard',
  component: Dashboard,
  meta: {
    restricted: true
  }
}, {
  path: '/signup',
  name: 'Singup',
  component: () => import('@/views/Signup.vue'),
  meta: {
    restricted: false
  },
}, {
  path: '*',
  redirect: '/'
}];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.restricted)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next()
  }
})

export default router;
