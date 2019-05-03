import Vue from 'vue';

export default {
  setResults(state, result) {
    Object.entries(result).forEach(([key, value]) => {
      Vue.set(state, key, value);
    });
  },

  setFilmDetail(state, film) {
    Vue.set(state, 'detail', film);
  },

  resetFilmDetail(state) {
    const film = {
      characters: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
      producer: '',
      releaseDate: '',
      title: '',
      director: '',
      episodeId: '',
      openingText: '',
      url: '',
      id: 0,
    };
    Vue.set(state, 'detail', film);
  },

  resetList(state) {
    const list = {
      page: 1,
      items: [],
      total: 0,
    };
    Vue.set(state, 'detail', list);
  },

  setFilmList(state, { value }) {
    state.list = {
      ...state.list,
      ...value,
    };
  },
};
