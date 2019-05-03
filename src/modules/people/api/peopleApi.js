import axios from 'axios';
import { swapi } from '../../../config/index';

export default {
  listPeopleResources() {
    return axios.get(`${swapi.baseUrl}${swapi.peoplePath}`);
  },

  getPeopleResources({ id }) {
    return axios.get(`${swapi.baseUrl}${swapi.peoplePath}${id}`);
  },
};
