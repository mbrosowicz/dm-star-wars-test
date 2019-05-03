import speciesApi from '../api/index';
import { isEmpty } from 'lodash';

export default {
  async listSpecies({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-species', { root: true });

      const res = await speciesApi.listSpeciesResources();

      if (!isEmpty(res)) {
        const value = {};
        value.items = res.results;
        value.total = res.count;
        commit('setSpeciesList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-species', { root: true });
    }
  },

  async getSpecies({ commit, dispatch }, { speciesId }) {
    try {
      dispatch('wait/start', 'fetching-species', { root: true });

      const species = await speciesApi.getSpeciesResources({ id: speciesId });

      if (!isEmpty(species)) {
        const stringObj = {};
        stringObj.people = species.people;
        stringObj.films = species.films;

        await dispatch('filterId', { stringObj });

        commit('setSpeciesDetail', { ...species });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-species', { root: true });
    }
  },

  async filterId({ stringObj }) {
    Object.entries(stringObj).forEach(value => {
      value.forEach(url => {
        const urlArray = url.split('/');
        url = urlArray[urlArray.length - 2];
      });
    });
  },
};
