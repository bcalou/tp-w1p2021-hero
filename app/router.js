/* 
* Import basics
 */

import Vue from "vue";
import Router from "vue-router";

/* Import frames */

import Home from "./components/Home.vue";
import Frame__1 from "./components/story/Frame__1.vue";
import Frame__2 from "./components/story/Frame__2.vue";
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
    /* Frames */
    {
      path: "/frame__1",
      name: "frame__1",
      component: Frame__1
    },
    {
      path: "/frame__2",
      name: "frame__2",
      component: Frame__2
    },

    /*  */
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;

/* 
import Page from "./components/character/Page.vue";
import Characters from "./components/character/Characters.vue";

{
  path: "/characters",
  name: "characters",
  component: Characters
},
{
  path: "/page",
  name: "page",
  component: Page
},
*/
