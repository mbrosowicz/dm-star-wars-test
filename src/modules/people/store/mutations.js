import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setPeopleDetail(state, people) {
    Vue.set(state, 'detail', people);
  },

  setPeopleList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
