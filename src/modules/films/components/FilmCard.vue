<template>
  <b-card
    :img-src="filmPoster"
    img-alt="Star Wars Poster"
    :title="film.title"
    :sub-title="releaseDate"
    class="film-card m-4"
  >
    <b-card-text class="film-director-text">{{ film.director }}</b-card-text>

    <b-button size="lg" variant="dark" @click="$router.push({ name: 'film-detail', params: { filmId: film.id } })"
    >Details</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    filmPoster() {
      return {
        1: require('@/assets/images/Star-Wars-Episode-1-1999-official-poster.jpg'),
        2: require('@/assets/images/Star-Wars-Episode-2-2002-official-poster.png'),
        3: require('@/assets/images/Star-Wars-Episode-3-2005-official-poster.jpg'),
        4: require('@/assets/images/Star-Wars-Episode-4-1977-official-poster.jpg'),
        5: require('@/assets/images/Star-Wars-Episode-5-1980-official-poster.jpg'),
        6: require('@/assets/images/Star-Wars-Episode-6-1983-official-poster.jpg'),
        7: require('@/assets/images/Star-Wars-Episode-7-2015-official-poster.jpg'),
      }[this.film.episodeId];
    },
    releaseDate() {
      const date = new Date(this.film.releaseDate);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
  watch: {},
  async destroyed() {
    await this.$store.dispatch('films/resetList');
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.film-card {
  margin: 0 auto;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  @media only screen and (min-width: 576px) {
    flex: 1 0 25%;
    max-width: 27%;

    img {
      flex: 1 0 25%;
      max-height: 47%;
    }
  }

  @media only screen and (min-width: 900px) {
    img {
      max-height: 51%;
    }
  }

  @media only screen and (min-width: 1023px) {
    img {
      max-height: 57%;
    }
  }

  @media only screen and (min-width: 1279px) {
    img {
      max-height: 61%;
    }
  }

  @media only screen and (min-width: 1400px) {
    img {
      max-height: 62%;
    }

    .film-director-text {
      margin-bottom: 3rem;
    }
  }

  @media only screen and (min-width: 1550px) {
    img {
      max-height: 68%;
    }
  }
}
</style>
