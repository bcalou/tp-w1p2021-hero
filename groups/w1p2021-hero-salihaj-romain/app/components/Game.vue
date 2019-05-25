<template>
  <div class="big-header">
    <h1></h1>
    <br />
    <ul ref="msgList" class="msg-list">
      <transition-group name="list">
        <li class="message" :class="{'user-choice': isUserChoice(msg) }" v-for="msg in storagedMsg" :key="msg">{{msg}}</li>
      </transition-group>
    </ul>
    <br>
    <br>
    <div class="btn-container">
      <router-link class="button" :to="actionA">{{btnA}}
        <button class="in-button" v-on:click="addChoiceOnTable(btnA)"></button>
      </router-link>
      <router-link class="button" :to="actionB">{{btnB}}
        <button class="in-button" v-on:click="addChoiceOnTable(btnB)"></button>
      </router-link>
    </div>
    <div class="sounds" @click="turnOff">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="20px" height="20px" viewBox="0 0 93.038 93.038" fill="white" style="enable-background:new 0 0 93.038 93.038;"
        xml:space="preserve">
      <g>
        <path d="M46.547,75.521c0,1.639-0.947,3.128-2.429,3.823c-0.573,0.271-1.187,0.402-1.797,0.402c-0.966,0-1.923-0.332-2.696-0.973
          l-23.098-19.14H4.225C1.892,59.635,0,57.742,0,55.409V38.576c0-2.334,1.892-4.226,4.225-4.226h12.303l23.098-19.14
          c1.262-1.046,3.012-1.269,4.493-0.569c1.481,0.695,2.429,2.185,2.429,3.823L46.547,75.521L46.547,75.521z M62.784,68.919
          c-0.103,0.007-0.202,0.011-0.304,0.011c-1.116,0-2.192-0.441-2.987-1.237l-0.565-0.567c-1.482-1.479-1.656-3.822-0.408-5.504
          c3.164-4.266,4.834-9.323,4.834-14.628c0-5.706-1.896-11.058-5.484-15.478c-1.366-1.68-1.24-4.12,0.291-5.65l0.564-0.565
          c0.844-0.844,1.975-1.304,3.199-1.231c1.192,0.06,2.305,0.621,3.061,1.545c4.977,6.09,7.606,13.484,7.606,21.38
          c0,7.354-2.325,14.354-6.725,20.24C65.131,68.216,64.007,68.832,62.784,68.919z M80.252,81.976
          c-0.764,0.903-1.869,1.445-3.052,1.495c-0.058,0.002-0.117,0.004-0.177,0.004c-1.119,0-2.193-0.442-2.988-1.237l-0.555-0.555
          c-1.551-1.55-1.656-4.029-0.246-5.707c6.814-8.104,10.568-18.396,10.568-28.982c0-11.011-4.019-21.611-11.314-29.847
          c-1.479-1.672-1.404-4.203,0.17-5.783l0.554-0.555c0.822-0.826,1.89-1.281,3.115-1.242c1.163,0.033,2.263,0.547,3.036,1.417
          c8.818,9.928,13.675,22.718,13.675,36.01C93.04,59.783,88.499,72.207,80.252,81.976z"/>
      </g>
      </svg>
        <svg class="cross-music" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 212.982 212.982" fill="white" style="enable-background:new 0 0 212.982 212.982; position:absolute; top:0;" xml:space="preserve">
      <g id="Close">
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
          c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
          l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
          c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
      </g>
      </svg>

    </div>

    <audio class="sounds__musique" src="../assets/sounds/ambiant.mp3" autoplay loop></audio>
    <audio class="sounds__ambiant" :src="getSound" autoplay loop></audio>
    <video :src="getVid" autoplay loop></video>
  
  </div>
</template>

<script>
import json from '../assets/data.js'

export default {
  data(){
    return {
      msgTable : [],
      storagedMsg : null,
      memoTable : [], // table to set the local storage 
      test : true,
    }
  },
  computed : {
    id(){
      return this.$route.params.id;
    },
    messages(){
      return json[this.id].messages
    },
    btnA(){
      return json[this.id].btnA
    },
    actionA(){
      setTimeout(() => {      
        this.addMsgOnTable();
        setTimeout(() => {
          this.doScroll();
        }, 200);
      }, 50);
      return json[this.id].actionA
    },
    btnB(){
      return json[this.id].btnB
    },
    actionB(){
      return json[this.id].actionB
    },
    addScene(){ // add a background based on json, linked on css class
      return json[this.id].scene
    },
    getSound(){
      return json[this.id].snd
    },
    getImg(){
      return json[this.id].img
    },
     getVid(){
      return json[this.id].vid
    },
  },
  methods : {
    addMsgOnTable(){ // Add each messages of the new step, based on the id in data.json file 
        if (this.id == 1) {
          localStorage.clear();
        };    
        let stepMsgList = json[this.id].messages;
        Object.keys(stepMsgList).forEach(item => {
          if (!this.msgTable.includes(stepMsgList[item])) { // if the message still does not exist 
            this.msgTable.push(stepMsgList[item]);
          };
        });
        console.log(this.msgTable);
        if (JSON.parse(localStorage.getItem('msg'))) {
          this.memoTable = JSON.parse(localStorage.getItem('msg'));
        };
        this.msgTable.forEach(msg =>{
          if (this.id == 1 || !this.memoTable.includes(msg)) {
            this.memoTable.push(msg);
          }
        });
        localStorage.setItem('msg',(JSON.stringify(this.memoTable))); // get each msgTable msg to push them on local storage
        this.storagedMsg = (JSON.parse(localStorage.getItem('msg'))); // add all local storage to an other table to show them on the list 

    },
    addChoiceOnTable(value){ // Add the chosen button value on the ul message list, called on btn click and receive the btn value on parameter
      this.msgTable.push(value);
      this.doScroll();
    },
    doScroll(){ // Function called on each uptade, to let the ul list always scrolled to bottom
      setTimeout(() => {
        let x = document.querySelector('.msg-list');
        x.scrollTop = x.scrollHeight;
      }, 200);
    },
    isUserChoice(text){ // This function is used to see if the message pushed on the list is a button value
      let msg = text;
      let regex = /^ /;  // regex to see if the parameter start width a space character (all button values start widh a space) 
      return regex.test(msg);
    },
    turnOff(){
      let sounds = document.querySelectorAll('audio');
      let cross = document.querySelector('.cross-music');
      sounds.forEach(sound=>{
        if (sound.muted) {
          sound.muted = false;
        }else {
          sound.muted = true;
        }
      })
      cross.classList.toggle('isActive');
    },
  },
};
</script>