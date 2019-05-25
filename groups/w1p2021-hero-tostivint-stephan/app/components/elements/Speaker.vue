<template>
  <section class="speaker">
    <!-- autoplay -->
    <audio class="speaker--songs" loop autoplay>
      <source src="../../assets/ressources/music/backgroundMusic.mp3" type="audio/mp3">
    </audio>

    <section v-if="selectSpeaker() === false" v-on:click="clickSpeaker()" class="speaker--on">
      <svg xmlns="http://www.w3.org/2000/svg" width="13.85mm" height="12.85mm" viewBox="0 0 39.27 36.43">
        <g>
          <path d="M3.47,20.68,18.11,35.4a3.49,3.49,0,0,0,6-2.47V3.5a3.49,3.49,0,0,0-6-2.46L3.47,15.75A3.49,3.49,0,0,0,3.47,20.68Z" style="fill: #fff"/>
          <path d="M2.88,10.54H8a.66.66,0,0,1,.66.66v14A.66.66,0,0,1,8,25.9H2.88A2.88,2.88,0,0,1,0,23v-9.6a2.88,2.88,0,0,1,2.88-2.88Z" style="fill: #fff"/>
          <rect x="7.32" y="8.09" width="2.71" height="20.25" rx="1.32" style="fill: #79be76"/>
          <path d="M29,10.89a10.36,10.36,0,0,1,0,14.66" style="fill: none;stroke: #79be76;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
          <path d="M33.17,5.61a17.82,17.82,0,0,1,0,25.22" style="fill: none;stroke: #79be76;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        </g>
      </svg>

    </section>

    <section v-if="selectSpeaker() === true" v-on:click="clickSpeaker()" class="speaker--off">
      <svg xmlns="http://www.w3.org/2000/svg" width="13.85mm" height="12.85mm" viewBox="0 0 39.27 36.43">
        <path d="M3.55,20.68,18.19,35.4a3.49,3.49,0,0,0,6-2.47V3.5a3.49,3.49,0,0,0-6-2.46L3.55,15.75A3.49,3.49,0,0,0,3.55,20.68Z" transform="translate(-0.08 0)" style="fill: #fff"/>
        <path d="M2.88,10.54H8a.66.66,0,0,1,.66.66v14A.66.66,0,0,1,8,25.9H2.88A2.88,2.88,0,0,1,0,23v-9.6a2.88,2.88,0,0,1,2.88-2.88Z" style="fill: #fff"/>
        <rect x="7.32" y="8.09" width="2.71" height="20.25" rx="1.32" style="fill: #e30613"/>
        <line x1="30.14" y1="6.27" x2="38.27" y2="30.26" style="fill: none;stroke: #bf3b18;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
        <line x1="38.27" y1="6.27" x2="30.14" y2="30.26" style="fill: none;stroke: #bf3b18;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>
      </svg>

    </section>
  </section>
</template>

<style lang="postcss">
.speaker {
  min-width: 50px;
  height: 50px;

  position: absolute;
  top: 20px;
  left: 20px;
}

.speaker--color {
  fill: white;
}
</style>


<script>
export default {
  data() {
    return {
      boolean: JSON.parse(localStorage.getItem(`MUSIC`))
        ? JSON.parse(localStorage.getItem(`MUSIC`))
        : false
    };
  },

  methods: {
    /*
     * Select the status of speaker
     */
    selectSpeaker() {
      return this.boolean;
    },
    //

    /*
     * Inverse iconBoolean
     */
    clickSpeaker() {
      this.boolean = !this.boolean;
      document.querySelector(".speaker--songs").muted = this.boolean;
      localStorage.setItem(`MUSIC`, this.boolean);
    }
    //
  },

  /*
   * If the music is activate
   */
  mounted() {
    document.querySelector(".speaker--songs").muted = this.boolean;
  }
  //
};
</script>
