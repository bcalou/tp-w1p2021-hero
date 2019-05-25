import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Game from './components/Game.vue';
import Characters from './components/Characters.vue';
import Lose from './components/Lose.vue';
import Win from './components/Win.vue';
import Videos from './components/Videos.vue';
import Video from './components/Video.vue';
import Videoo from './components/Videoo.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/videoo',
      name: 'videoo',
      component: Videoo
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose
    },
    {
      path: '/win',
      name: 'win',
      component: Win
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
