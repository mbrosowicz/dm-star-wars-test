import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listPlanetResources() {
    return axios.get(`${swapi.baseUrl}${swapi.planetsPath}`);
  },

  getPlanetResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.planetsPath}${id}`);
  },
};
