import Vue from 'vue';
import Vuex from 'vuex';
import { store as films } from './modules/films';
import { store as people } from './modules/people';
import { store as planets } from './modules/planets';
import { store as species } from './modules/species';
import { store as starships } from './modules/starships';
import { store as vehicles } from './modules/vehicles';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    films,
    people,
    planets,
    species,
    starships,
    vehicles,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
});

// eslint-disable-next-line
if (module.hot) {
  // eslint-disable-next-line
  module.hot.accept(
    [
      '@/modules/films/store',
      '@/modules/people/store',
      '@/modules/planets/store',
      '@/modules/species/store',
      '@/modules/starships/store',
      '@/modules/vehicles/store',
    ],
    () => {
      store.hotUpdate({
        modules: {
          films: require('@/modules/films/store').default,
          people: require('@/modules/people/store').default,
          planets: require('@/modules/planets/store').default,
          species: require('@/modules/species/store').default,
          starships: require('@/modules/starships/store').default,
          vehicles: require('@/modules/vehicles/store').default,
        },
      });
    },
  );
}

export default store;
