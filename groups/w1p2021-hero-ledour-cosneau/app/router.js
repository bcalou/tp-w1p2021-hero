import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Desert from './components/Desert.vue';
import Jungle from './components/Jungle.vue';


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
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '/desert',
      name: 'desert',
      component: Desert,
    },
    {
      path: '/jungle',
      name: 'jungle',
      component: Jungle,
    },
    
    
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
