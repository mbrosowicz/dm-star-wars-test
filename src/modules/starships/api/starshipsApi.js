import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listStarshipResources() {
    return axios.get(`${swapi.baseUrl}${swapi.starshipsPath}`);
  },

  getStarshipResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.starshipsPath}${id}`);
  },
};
