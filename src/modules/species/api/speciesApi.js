import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listSpeciesResources() {
    return axios.get(`${swapi.baseUrl}${swapi.speciesPath}`);
  },

  getSpeciesResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.speciesPath}${id}`);
  },
};
