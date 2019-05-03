import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setPlanetDetail(state, planet) {
    Vue.set(state, 'detail', planet);
  },

  setPlanetList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
