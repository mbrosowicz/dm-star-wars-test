<template>
  <section class="wrapper mt-5">
    <div v-if="$wait.is('fetching-films')">
      <loading-page />
    </div>
    <b-card-group v-else deck class="film-deck">
      <film-card v-for="film in items" :key="film.episodeId" :film="film" />
    </b-card-group>
  </section>
</template>

<script>
import FilmCard from '../components/FilmCard';
import { mapState } from 'vuex';

export default {
  components: {
    FilmCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('films', {
      items: state => state.list.items,
      total: state => state.list.total,
    }),
  },
  watch: {},
  async created() {
    await this.$store.dispatch('films/listFilms');
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.film-deck {
  justify-content: center;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
}
</style>
