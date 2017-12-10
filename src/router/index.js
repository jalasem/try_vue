import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home';
import Map from '@/pages/map';
import Blog from '@/pages/blog';
import Todo from '@/pages/todo';
import NotFound from '@/pages/404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Map,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound,
    },
  ],
});
