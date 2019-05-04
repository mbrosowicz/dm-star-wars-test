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

  async loadLazyInfo({ commit, dispatch }, { film, property }) {
    try {
      dispatch('wait/start', `fetching-lazy-info-${property}`, { root: true });
      const promises = [];
      film[property].forEach(propertyUrl => {
        promises.push(axios.get(propertyUrl));
      });

      const filmInfo = {};
      filmInfo[property] = await Promise.all(promises);
      commit('setLazyDetail', { filmInfo });
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', `fetching-lazy-info-${property}`, { root: true });
    }
  },

  async resetFilmDetail({ commit }) {
    commit('resetFilmDetail');
  },

  async resetList({ commit }) {
    commit('resetList');
  },
};
