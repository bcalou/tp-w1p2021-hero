import Vue from 'vue';
import router from './router';
import './assets/scss/styles.scss';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);


new Vue({ router: router }).$mount('#root');

