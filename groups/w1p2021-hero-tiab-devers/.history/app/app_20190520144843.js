import Vue from 'vue';
import router from './router';
import './assets/scss/styles.scss';

new Vue({ router: router }).$mount('#root');


// Inventory 

var inventory = document.querySelector('.inventory');

inventory.addEventListener('click', function() {
  console.log('OK INVENTAIRE');
})