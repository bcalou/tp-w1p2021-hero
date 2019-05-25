<template>
  <section>
    <!-- 
      <nav>
      <button v-on:click="stars(`star`)">Stars</button>
      <button v-on:click="stars(`astro`)">Astro</button>
      <button v-on:click="stop()">stop</button>
    </nav> 
    -->

    <section class="stars"></section>
  </section>
</template>


<style lang="scss">
.stars {
  padding: 0;
  background-color: #484ba0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

nav {
  position: absolute;
  top: 5px;
  left: 5px;
}

.stars {
  .star--children {
    background-color: yellow;
    border-radius: 50%;
    position: absolute;
  }

  .small {
    height: 1vw;
    width: 1vw;
  }
  .medium {
    height: 3vw;
    width: 3vw;
  }
  .big {
    height: 7vw;
    width: 7vw;
  }
}

.astro {
  background-color: #d3a681 !important;
  overflow: hidden;
  position: absolute;
  &:after {
    position: absolute;
    content: "";
    background-color: #a07551;
    height: 40%;
    width: 40%;
    border-radius: 50%;
    bottom: -10%;
    display: block;
  }
  &:before {
    position: absolute;
    content: "";
    background-color: #a07551;
    height: 30%;
    width: 30%;
    border-radius: 50%;
    top: 20%;
    right: 20%;
    display: block;
  }
}
</style>


<script>
/* Classes */
import starsClass from "../../services/stars.js";
//

export default {
  data() {
    return {
      sizeStars: ["small", "medium", "big"],
      starsMoving: [],
      loop: null,
      area: null,
      position: null,
      starsArray: null,
      selectSide: null,
      arraySide: null,
      widthScreen: window.innerWidth,
      heightScreen: window.innerHeight,
      centerScreen: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    };
  },

  methods: {
    /*
     * Start the animation
     */
    stars(type) {
      starsClass.start(type);
    },
    //

    /*
     * Stop the animation
     */
    stop() {
      starsClass.stop();
    }
    //
  },
  mounted: () => {
    window.requestAnimFrame = (() => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        (callback => {
          window.setTimeout(callback, 1000 / 60);
        })
      );
    })();
    starsClass.initialization();
  }
};
</script>
