import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setVehicleDetail(state, vehicle) {
    Vue.set(state, 'detail', vehicle);
  },

  setVehicleList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
