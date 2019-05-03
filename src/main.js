import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import '@/modules/films';
import '@/modules/people';
import '@/modules/planets';
import '@/modules/species';
import '@/modules/starships';
import '@/modules/vehicles';

import '@/assets/styles/main.styl';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@fortawesome/fontawesome-free';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { VueWait } from './config/plugins';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  wait: new VueWait({ useVuex: true }),
}).$mount('#app');
