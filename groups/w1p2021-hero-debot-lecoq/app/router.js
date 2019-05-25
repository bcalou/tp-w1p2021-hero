import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import intro from './components/intro1.vue';
import introd from './components/intro2.vue';
import introdu from './components/intro3.vue';
import game from './components/page1.vue';
import pagee from './components/page2.vue';
import pageee from './components/page3.vue';
import pageeee from './components/page4.vue';
import pageeeee from './components/page5.vue';
import pag from './components/page6.vue';
import pege from './components/page7.vue';
import win from './components/win.vue';
import terre from './components/terre1.vue';
import terree from './components/terre2.vue';
import terreee from './components/terre3.vue';
import terreeee from './components/terre4.vue';
import taire from './components/terre5.vue';
import earth from './components/terre6.vue';
import earthh from './components/terre7.vue';
import ear from './components/terre8.vue';
import mars from './components/mars1.vue';
import marss from './components/mars2.vue';
import marsss from './components/mars3.vue';
import marssss from './components/mars4.vue';
import loose from './components/loose.vue';


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
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/intro1',
      name: 'intro1',
      component: intro,
    },
    {
      path: '/intro2',
      name: 'introd',
      component: introd,
    },
    {
      path: '/intro3',
      name: 'introdu',
      component: introdu,
    },
    {
      path: '/page1',
      name: 'game',
      component: game,
    },
    {
      path: '/page2',
      name: 'pagee',
      component: pagee,
    },
    {
      path: '/page3',
      name: 'pageee',
      component: pageee,
    },
    {
      path: '/page4',
      name: 'pageeee',
      component: pageeee,
    },
    {
      path: '/page5',
      name: 'pageeeee',
      component: pageeeee,
    },
    {
      path: '/page6',
      name: 'pag',
      component: pag,
    },
    {
      path: '/page7',
      name: 'pege',
      component: pege,
    },
    {
      path: '/terre1',
      name: 'terre',
      component: terre,
    },
    {
      path: '/terre2',
      name: 'terree',
      component: terree,
    },
    {
      path: '/terre3',
      name: 'terreee',
      component: terreee,
    },
    {
      path: '/terre4',
      name: 'terreeee',
      component: terreeee,
    },
    {
      path: '/terre5',
      name: 'taire',
      component: taire,
    },
    {
      path: '/terre6',
      name: 'earth',
      component: earth,
    },
    {
      path: '/terre7',
      name: 'earthh',
      component: earthh,
    },
    {
      path: '/terre8',
      name: 'ear',
      component: ear,
    },
    {
      path: '/mars1',
      name: 'mars',
      component: mars,
    },
    {
      path: '/mars2',
      name: 'marss',
      component: marss,
    },
    {
      path: '/mars3',
      name: 'marsss',
      component: marsss,
    },
    {
      path: '/mars4',
      name: 'marssss',
      component: marssss,
    },
    {
      path: '/win',
      name: 'win',
      component: win,
    },

    {
      path: '/loose',
      name: loose,
      component: loose,
    },

    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
