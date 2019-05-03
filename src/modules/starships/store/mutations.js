import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setStarshipDetail(state, starship) {
    Vue.set(state, 'detail', starship);
  },

  setStarshipList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
