import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listFilmResources() {
    return axios.get(`${swapi.baseUrl}${swapi.filmsPath}`);
  },

  getFilmResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.filmsPath}${id}`);
  },
};
