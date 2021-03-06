import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home/Home.vue';
import Character from './components/Character/Character.vue';
import Game from './components/Game.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose/Lose.vue';

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
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game,
    },
    {
      path: '/win/:id',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose/:id',
      name: 'lose',
      component: Lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
