import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home/Home.vue';
import Character from './components/Character/Character.vue';
import Game from './components/Game/Game.vue';
import Lose1 from './components/Lose1.vue';
import Lose3 from './components/Lose3.vue';
import Lose4 from './components/Lose4.vue';
import Lose10 from './components/Lose10.vue';
import Lose15 from './components/Lose15.vue';
import Lose17 from './components/Lose17.vue';
import Lose18 from './components/Lose18.vue';
import Lose25 from './components/Lose25.vue';
import Lose26 from './components/Lose26.vue';
import Lose27 from './components/Lose27.vue';
import Win32 from './components/Win32.vue';
import Win33 from './components/Win33.vue';

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
      path:'/character',
      name:'character',
      component: Character,
    },
    {
      path:'/game/:id',
      name:'game',
      component: Game,
    },
    {
      path:'/lose1',
      name:'lose1',
      component: Lose1,
    },
    {
      path:'/lose3',
      name:'lose3',
      component: Lose3,
    },
    {
      path:'/lose4',
      name:'lose4',
      component: Lose4,
    },
    {
      path:'/lose10',
      name:'lose10',
      component: Lose10,
    },
    {
      path:'/lose15',
      name:'lose15',
      component: Lose15,
    },
    {
      path:'/lose17',
      name:'lose17',
      component: Lose17,
    },
    {
      path:'/lose18',
      name:'lose18',
      component: Lose18,
    },
    {
      path:'/lose25',
      name:'lose25',
      component: Lose25,
    },
    {
      path:'/lose26',
      name:'lose26',
      component: Lose26,
    },
    {
      path:'/lose27',
      name:'lose27',
      component: Lose27,
    },
    {
      path:'/win32',
      name:'win32',
      component: Win32,
    },
    {
      path:'/win33',
      name:'win33',
      component: Win33,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
