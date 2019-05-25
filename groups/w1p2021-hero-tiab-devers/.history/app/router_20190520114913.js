import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Test from './components/Test.vue';
import Game from './components/Game.vue';
import Page from './components/Page.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/game:id',
      name: 'game',
      component: Game,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
