<template>
  <section class="wrapper mt-5">
    <div v-if="$wait.is('fetching-film')">
      <loading-page />
    </div>
    <b-card-group v-else deck class="film-deck">
      <film-detail-card :film="film" :film-poster="filmPoster" />
    </b-card-group>
  </section>
</template>

<script>
import FilmDetailCard from '../components/FilmDetailCard';
import { mapState } from 'vuex';

export default {
  components: {
    FilmDetailCard,
  },
  props: {
    filmId: {
      type: [Number, String],
      required: true,
    },
    filmPoster: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('films', {
      film: state => state.detail.film,
    }),
  },
  watch: {
    async filmId() {
      await this.refresh();
    },
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      await this.$store.dispatch('films/getFilm', { filmId: this.filmId });
    },
  },
};
</script>

<style lang="stylus" scoped>
.film-deck {
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
