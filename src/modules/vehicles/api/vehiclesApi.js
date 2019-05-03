import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listVehicleResources() {
    return axios.get(`${swapi.baseUrl}${swapi.vehiclesPath}`);
  },

  getVehicleResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.vehiclesPath}${id}`);
  },
};
