import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './views/NotFound.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Project from './views/Project.vue';

// import store from './store/store'

Vue.use(Router);

export default new Router({
  base: '/vue-portfolio/',
  routes: [
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      beforeEnter() {
        location.href = 'https://shijiezhou.herokuapp.com/rss.xml';
      }
    }
  ]
});
