import peopleApi from '../api/index';
import { isEmpty } from 'lodash';

export default {
  async listPeople({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-people', { root: true });

      const res = await peopleApi.listPeopleResources();

      if (!isEmpty(res)) {
        const value = {};
        value.items = res.results;
        value.total = res.count;
        commit('setPeopleList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-people', { root: true });
    }
  },

  async getPeople({ commit, dispatch }, { peopleId }) {
    try {
      dispatch('wait/start', 'fetching-people', { root: true });

      const people = await peopleApi.getPeopleResources({ id: peopleId });

      if (!isEmpty(people)) {
        const stringObj = {};
        stringObj.films = people.films;
        stringObj.species = people.species;
        stringObj.starships = people.starships;
        stringObj.vehicles = people.vehicles;

        await dispatch('filterId', { stringObj });

        commit('setPeopleDetail', { ...people });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-people', { root: true });
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
