import Vue from 'vue';
import Router from 'vue-router';
import ChatView from './views/ChatView.vue';
import LoginView from './views/LoginView.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tchat',
      meta: {
        requiresAuth: true, // Require Login to acces this page
      },
      component: ChatView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

// Redirection if no Log
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.user) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
