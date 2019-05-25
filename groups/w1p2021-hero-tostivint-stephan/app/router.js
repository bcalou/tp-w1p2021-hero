/*
 * Import basics
 */

import Vue from "vue";
import Router from "vue-router";

/* Import frames */

import Home from "./components/Home.vue";
import Moon from "./components/story/Moon.vue";

import GameOver from "./components/story/GameOver.vue";
import Victory from "./components/story/Victory.vue";
//

/* PROVISOIRE */
import Stars from "./components/decors/Stars.vue";
//

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Moon",
      name: "Moon",
      component: Moon
    },
    {
      path: "/Victory",
      name: "Victory",
      component: Victory
    },
    {
      path: "/GameOver",
      name: "GameOver",
      component: GameOver
    },

    /* PROVISOIRE */
    {
      path: "/Stars",
      name: "Stars",
      component: Stars
    },
    /* PROVISOIRE */

     /*  */
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;