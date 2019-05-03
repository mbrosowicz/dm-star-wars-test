import Vue from 'vue';
import Router from 'vue-router';
import { routes as filmRoutes } from './modules/films';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [...filmRoutes],
});
