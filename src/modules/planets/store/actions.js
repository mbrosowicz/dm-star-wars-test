import planetApi from '../api/index';
import { isEmpty } from 'lodash';

export default {
  async listPlanet({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-planet', { root: true });

      const res = await planetApi.listPlanetResources();

      if (!isEmpty(res)) {
        const value = {};
        value.items = res.results;
        value.total = res.count;
        commit('setPlanetList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-planet', { root: true });
    }
  },

  async getPlanet({ commit, dispatch }, { planetId }) {
    try {
      dispatch('wait/start', 'fetching-planet', { root: true });

      const planet = await planetApi.getPlanetResources({ id: planetId });

      if (!isEmpty(planet)) {
        const stringObj = {};
        stringObj.films = planet.films;
        stringObj.residents = planet.residents;

        await dispatch('filterId', { stringObj });

        commit('setPlanetDetail', { ...planet });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-planet', { root: true });
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
