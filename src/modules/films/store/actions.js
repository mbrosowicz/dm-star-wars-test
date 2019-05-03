import filmsApi from '../api';
import axios from 'axios';
import { camelCase, isEmpty } from 'lodash';

export default {
  async listFilms({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-films', { root: true });

      const res = await filmsApi.listFilmResources();

      if (!isEmpty(res)) {
        res.results.forEach(film => {
          const urlArray = film.url.split('/');
          film.id = parseInt(urlArray[urlArray.length - 2], 10);
        });

        const value = {};
        value.items = res.results;
        value.total = res.count;
        await dispatch('keysToCamel', { items: value.items });
        await value.items.sort((filmA, filmB) => filmA.episodeId - filmB.episodeId);
        commit('setFilmList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-films', { root: true });
    }
  },

  async getFilm({ commit, dispatch }, { filmId }) {
    try {
      dispatch('wait/start', 'fetching-film', { root: true });

      const film = await filmsApi.getFilmResources({ id: filmId });

      if (!isEmpty(film)) {
        const characterPromises = [];
        film.characters.forEach(filmCharacterUrl => {
          characterPromises.push(axios.get(filmCharacterUrl));
        });

        const planetsPromises = [];
        film.planets.forEach(filmPlanetsUrl => {
          planetsPromises.push(axios.get(filmPlanetsUrl));
        });

        const speciesPromises = [];
        film.species.forEach(filmSpeciesUrl => {
          speciesPromises.push(axios.get(filmSpeciesUrl));
        });

        const starshipsPromises = [];
        film.starships.forEach(filmStarshipUrl => {
          starshipsPromises.push(axios.get(filmStarshipUrl));
        });

        const vehiclesPromises = [];
        film.vehicles.forEach(filmVehicleUrl => {
          vehiclesPromises.push(axios.get(filmVehicleUrl));
        });

        const characters = await Promise.all(characterPromises);
        const planets = await Promise.all(planetsPromises);
        const species = await Promise.all(speciesPromises);
        const starships = await Promise.all(starshipsPromises);
        const vehicles = await Promise.all(vehiclesPromises);

        if (characters && planets && species && starships && vehicles) {
          film.characters = characters;
          film.planets = planets;
          film.species = species;
          film.starships = starships;
          film.vehicles = vehicles;
        }

        await dispatch('keysToCamel', { items: film });

        commit('setFilmDetail', { film });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-film', { root: true });
    }
  },

  async keysToCamel({ dispatch }, { items }) {
    if (items && typeof items === 'object' && items.constructor === Object) {
      Object.entries(items).forEach(([key, value]) => {
        const newKey = camelCase(key);
        if (newKey !== key) {
          items[newKey] = value;
          delete items[key];
        }
      });
    } else if (Array.isArray(items)) {
      return items.forEach(item => {
        dispatch('keysToCamel', { items: item });
      });
    }
  },

  async resetFilmDetail({ commit }) {
    commit('resetFilmDetail');
  },

  async resetList({ commit }) {
    commit('resetList');
  },
};
