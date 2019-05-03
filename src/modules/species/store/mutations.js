import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setSpeciesDetail(state, species) {
    Vue.set(state, 'detail', species);
  },

  setSpeciesList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
