import Vue from 'vue';
import router from './router';
import './assets/scss/styles.scss';

new Vue({ router: router }).$mount('#root');


// Inventory open & close

var inventory = document.querySelector('.inventory');
var inventoryList = document.querySelector('.inventory__list');

inventory.addEventListener('click', function() {
  inventoryList.classList.toggle('is-open');
})

// var conversation = document.querySelector('.conversation');
// var conversationClosed = document.querySelector('.conversation__close');

// conversationClosed.addEventListener('click', function() {
//   console.log('CLOSED');
//   conversation.classList.toggle('is-closed');
// })

var arrowsMale = document.querySelectorAll('div.characters__arrow--male');
var charactersMaleOne = document.querySelector('.character__maleOne');
var charactersMaleTwo = document.querySelector('.character__maleTwo');

arrowsMale.addEventListener('click', function() {
  for (i = 0; i < arrowsMale.length; ++i) {
    arrowsMale[i].classList.toggle('is-hide');
    console.log('OKKKK FDP');
  }
  
})