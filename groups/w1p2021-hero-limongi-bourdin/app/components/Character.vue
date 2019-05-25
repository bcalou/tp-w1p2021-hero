<template>
  <div class="perso">
    <div class="content-caractere">
      <router-link class="button1" to="/game/1">Policier</router-link>
      <router-link class="button2" to="/game/28">Promeneur</router-link>
    <div>
  </div>
</template>

<style>
  .perso {
    background: url('../assets/images/persos.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

    display: flex;
    
    
    flex-wrap: wrap;
    flex-direction: column;

    color: white;
  }

  .content-caractere {
    margin-top: 36%;
    display: flex;
  }

  .button1 {
    color: white;
    text-decoration: none;
    background: rgb(122, 12, 12);
    padding: 5px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    margin-left: 23%
  }

  .button2 {
    color: white;
    text-decoration: none;
    background: rgb(122, 12, 12);
    padding: 5px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    margin-left: 42%
  }

  
</style>
