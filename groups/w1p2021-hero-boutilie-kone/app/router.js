import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import game from './components/game.vue';
import lose from './components/lose.vue';
import win from './components/win.vue';



Vue.use(Router);


const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/game/:step',
      name: 'game',
      component: game,
    },
    {
      path: '/lose',
      name: 'lose',
      component: lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },{
      path: '/win',
      name: 'win',
      component: win,
    },
  ],
});

export default router;
