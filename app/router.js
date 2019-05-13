import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Game from './components/Game.vue';
import Win from './components/Win.vue';
import Lose from './components/lose.vue';
import Character from './components/character.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
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
            path: '/game/:id',
            name: 'Game',
            component: Game,
        },
        {
            path: '/Win',
            name: 'win',
            component: Win,
        },
        {
            path: '/lose',
            name: 'lose',
            component: Lose,
        },
        {
            path: '/character',
            name: 'character',
            component: Character,
        },
        {
            path: '*',
            redirect: { name: 'home' },
        },
    ],
});

export default router;