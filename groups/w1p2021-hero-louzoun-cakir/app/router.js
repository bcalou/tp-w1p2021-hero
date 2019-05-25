import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';
import Characters from './components/Characters.vue';
import Intro from './components/Intro.vue';

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
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/win',
      name: 'win',
      component: Win
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
});

export default router;
