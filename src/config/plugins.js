import Vue from 'vue';

// HTTP Requests
import './axios';

// Bootstrap
import './bootstrapVue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// Loading State
import VueWait from 'vue-wait';
export { VueWait };
Vue.use(VueWait);

import LoadingPage from '../components/LoadingPage';
Vue.component('loading-page', LoadingPage);

// Portal Vue
import PortalVue from 'portal-vue';
Vue.use(PortalVue);
