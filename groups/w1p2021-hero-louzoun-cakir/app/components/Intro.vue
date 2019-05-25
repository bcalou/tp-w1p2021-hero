<template>
  <div class="intro">
    <router-link to="/">
      <div class="game__backHome"><img src="../assets/images/icons/home.svg"/></div>
    </router-link>
    <div class="intro__pause" onclick="document.getElementById('video').pause()" ><img src="../assets/images/icons/pause.svg"/></div>
    <div class="intro__play" onclick="document.getElementById('video').play()" ><img src="../assets/images/icons/play.svg"/></div>
    <h1 class="intro__title">Vous aussi devenez un hunter !</h1>
    <div class="intro__content">
      <p class="intro__description">On peut participer autant de fois que l'on veut, mais une fois lauréat on ne peut plus jamais se représenter une deuxième fois. Si on perd la carte, le comité n'en fournit pas de deuxième.
        D'après les statistiques, un sur 10000 candidats arrive jusqu'au premier tour, et seulement un hunter tous les trois ans réussit du premier coup.
      </p>
      <div class="intro__list">
        <router-link class="intro__nextstep" to="/game/2">Participer à l'examen</router-link>
      </div>
    </div>
    <video autoplay loop id="video" class="game__video">
      <source src="../assets/images/video/intro.mp4" type="video/mp4">
    </video>
  </div>
</template>