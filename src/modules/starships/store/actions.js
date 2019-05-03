import starshipApi from '../api/index';
import { isEmpty } from 'lodash';

export default {
  async listStarship({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-starship', { root: true });

      const res = await starshipApi.listStarshipResources();

      if (!isEmpty(res)) {
        const value = {};
        value.items = res.results;
        value.total = res.count;
        commit('setStarshipList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-starship', { root: true });
    }
  },

  async getStarship({ commit, dispatch }, { starshipId }) {
    try {
      dispatch('wait/start', 'fetching-starship', { root: true });

      const starship = await starshipApi.getStarshipResources({ id: starshipId });

      if (!isEmpty(starship)) {
        const stringObj = {};
        stringObj.films = starship.films;
        stringObj.pilots = starship.pilots;

        await dispatch('filterId', { stringObj });

        commit('setStarshipDetail', { ...starship });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-starship', { root: true });
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
