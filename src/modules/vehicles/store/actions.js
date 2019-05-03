import vehicleApi from '../api/index';
import { isEmpty } from 'lodash';

export default {
  async listVehicle({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'fetching-vehicle', { root: true });

      const res = await vehicleApi.listVehicleResources();

      if (!isEmpty(res)) {
        const value = {};
        value.items = res.results;
        value.total = res.count;
        commit('setVehicleList', { value });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-vehicle', { root: true });
    }
  },

  async getVehicle({ commit, dispatch }, { vehicleId }) {
    try {
      dispatch('wait/start', 'fetching-vehicle', { root: true });

      const vehicle = await vehicleApi.getVehicleResources({ id: vehicleId });

      if (!isEmpty(vehicle)) {
        const stringObj = {};
        stringObj.films = vehicle.films;
        stringObj.pilots = vehicle.pilots;

        await dispatch('filterId', { stringObj });

        commit('setVehicleDetail', { ...vehicle });
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch('wait/end', 'fetching-vehicle', { root: true });
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
