<template>
  <div class="big-header image1" :class="image">
    <img class="mute" src="../assets/images/mute.svg">
    <h1>{{ message }}</h1>
    <h2>{{ subtitle }}</h2>
    <br>
    <router-link class="button" :to="actionA" v-if="actionA">{{ messageA }}</router-link>
    <br>
    <router-link class="button" :to="actionB" v-if="actionB">{{ messageB }}</router-link>
    <br>
    <router-link class="button" :to="actionC" v-if="actionC && messageC">{{ messageC }}</router-link>
    <br>
    <router-link class="button" :to="actionD" v-if="actionD && messageD">{{ messageD }}</router-link>
    <div>{{ temporalite }}</div>
  </div>
</template>

<style>

h1 {
  font-size: 20px;
}

.mute {
  width: 1.5%;
  position: absolute;
  top: 10px;
  left: 10px;
}

</style>

<script>
import game from '../data/data.json';
import keyDoor from '../js/CleStorage.js';

export default {

  computed: {
    id() {
      return this.$route.params.id;
    },
    message() {
      return game[this.id].message;
    },
    actionA() {
      if (this.$route.params.id === "3") {
        if (game[3].key === "true" && game[3].combat === "true") {
          return game[this.id].actionD;
        } else if (game[3].key === "true") {
          return game[this.id].actionA = "/game/7" , game[this.id].actionA;
        }
      } else if (this.$route.params.id === "1") {
        if (game[this.id].cle === "true") {
          game[2].message = "Vous n'avez plus rien à faire dans cette salle",
          game[2].messageA = "Faire demi-tour",
          game[2].actionA = "/game/1",
          game[2].image = "image2",
          game[2].messageB = "",
          game[2].actionB = "";
        }
      } else if (this.$route.params.id === "21") {
        if (game[this.id].hache === "true") {
          return game[this.id].actionA;
        }
      } else if (this.$route.params.id === "24") {
        if (game[23].mort === "true" || game[27].mort === "true") {
          game[this.id].actionA = "/game/21"
        } else {
          game[this.id].actionA = "/game/25"
        }
      }
      return game[this.id].actionA
    },
    actionB() {
      if (this.$route.params.id === "14") {
        if (game[23].mort === "true" || game[27].mort === "true") {
          return game[14].actionB = "/game/21"
        }
        else if (game[this.id].passage === "true") {
          game[this.id].actionB = "/game/19"
          return game[this.id].actionB
        }
      }
      return game[this.id].actionB;
    },
    actionC() {
      return game[this.id].actionC;
    },
    actionD() {
      return game[this.id].actionD;
    },
     messageA() {
      return game[this.id].messageA;
    },
     messageB() {
      return game[this.id].messageB;
    },
    messageC() {
      return game[this.id].messageC;
    },
    messageD() {
      return game[this.id].messageD
    },
    image() {
      return game[this.id].image
    },
    temporalite() {
      if (this.$route.params.id === "4") {
        if (game[3].key === "true") {
          return game[this.id].key;
        } else {
          game[3].key = "true", game[1].cle = "true";
        }
      } else if (this.$route.params.id === "14") {
        if (game[3].combat === "false") {
          game[3].combat = "true",
          game[3].message = "Plus aucun bruit ne vient de cette salle"
        }
      } else if (this.$route.params.id === "19") {
        if (game[14].passage === "false") {
          game[14].passage = "true"
        }
      } else if (this.$route.params.id === "21") {
        if (game[24].fille === 'true') {
          game[24].message = "Il n'y a plus rien à faire dans cette salle",
          game[24].messageA = "Faire demi-tour"
        }
      } else if (this.$route.params.id === "22") {
        if (game[21].hache === "false") {
          game[21].hache = "true",
          game[21].subtitle = "Vous pouvez enfoncer la porte avec la hache",
          game[21].actionA = "/game/24",
          game[21].actionB = "/game/22"
        }
      } else if (this.$route.params.id === "23") {
        game[23].mort = "true"
      } else if (this.$route.params.id === "24") {
        if (game[this.id].fille === 'false') {
          game[this.id].fille = "true"
          game[21].message = "Devant vous se trouve la porte de la salle où était la femme disparue",
          game[21].subtitle = "La porte est enfoncée",
          game[21].actionB = "/game/14"
          game[15].subtitle = "Vous pouvez enfoncer la porte",
          game[15].actionA = "/game/win",
          game[1].actionD = "/game/win"
        }
      } else if (this.$route.params.id === "27") {
        game[20].message = "L'homme est maintenant mort, à côté de lui git un chien et une hache",
        game[20].actionB = "",
        game[20].messageB = "",
        game[22].message = "Vous avez rammassé la hache",
        game[22].actionB = "/game/14",
        game[22].messageB = "Faire demi-tour",
        game[27].mort = "true"
      } else if (this.$route.params.id === "32") {
        if (game[this.id].hache === "false") {
          game[this.id].hache = "true",
          game[this.id].message = "Vous avez déja fouillé cette endroit",
          game[33].actionA = "/game/34",
          game[33].messageA = "Enfoncer la porte",
          game[33].subtitle = "Votre hache peut l'enfoncer"
        }
      } else if (this.$route.params.id === "40") {
        game[44].actionA = "/game/45"
      } else if (this.$route.params.id === "42") {
        game[44].actionA = "/game/48"
      }
    },
    subtitle() {
      if (this.$route.params.id === "3") {
        if (game[3].key === "false") {
          return game[this.id].subtitle
        } else {
          game[this.id].subtitle = "Vous avez la clé pour ouvrir la porte"
          return game[this.id].subtitle
        }
      } else if (this.$route.params.id === "12") {
        game["lose"].subtitle = "Vous avez finalement tué le zombie mais vous vous êtes transformé en l'une de ces créatures"
      } else if (this.$route.params.id === "18") {
        game["lose"].subtitle = "Vous avez réussi à tuer un ou deux zombie mais les autres on eu raison de vous, votre corps n'est plus qu'une bouillie d'organes"
      } else if (this.$route.params.id === "26") {
        game["lose"].subtitle = "Finalement vous auriez peut-être du le tuer"
      } else if (this.$route.params.id === "35") {
        game["lose"].subtitle = "Faites plus attention la prochaine fois",
        game["lose"].actionA = "/game/28"
      } else if (this.$route.params.id === "46") {
        game["lose"].subtitle = "Les mots font 'parfois' plus mal que les coups";
        game["lose"].actionA = "/game/28"
      } else if (this.$route.params.id === "47") {
        game["lose"].subtitle = "Vous êtes mort",
        game["lose"].actionA = "/game/28"
      } else if (this.$route.params.id === "53") {
        game["lose"].subtitle = "La discrétion ne marche pas à tous les coups",
        game["lose"].actionA = "/game/28"
      }
      return game[this.id].subtitle;
    }
  },
};
</script>