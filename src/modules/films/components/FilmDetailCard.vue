<template>
  <section>
    <b-card
      v-if="w > 991"
      :img-src="filmPoster"
      img-alt="Star Wars Poster"
      img-left
      :title="film.title"
      class="film-card-detail text-left"
    >
      <detail-card-content
        :film="film"
        :release-date="releaseDate"
        :is-characters-collapsed="isCharactersCollapsed"
        :is-species-collapsed="isSpeciesCollapsed"
        :is-starships-collapsed="isStarshipsCollapsed"
        :is-planets-collapsed="isPlanetsCollapsed"
        :is-vehicles-collapsed="isVehiclesCollapsed"
        @toggle-characters-collapse="toggleCollapse('isCharactersCollapsed', 'characters')"
        @toggle-planets-collapse="toggleCollapse('isPlanetsCollapsed', 'planets')"
        @toggle-species-collapse="toggleCollapse('isSpeciesCollapsed', 'species')"
        @toggle-starships-collapse="toggleCollapse('isStarshipsCollapsed', 'starships')"
        @toggle-vehicles-collapse="toggleCollapse('isVehiclesCollapsed', 'vehicles')"
      />
    </b-card>
    <b-card
      v-else
      :img-src="filmPoster"
      img-alt="Star Wars Poster"
      img-top
      :title="film.title"
      class="film-card-detail"
    >
      <detail-card-content
        :film="film"
        :release-date="releaseDate"
        :is-characters-collapsed="isCharactersCollapsed"
        :is-species-collapsed="isSpeciesCollapsed"
        :is-starships-collapsed="isStarshipsCollapsed"
        :is-planets-collapsed="isPlanetsCollapsed"
        :is-vehicles-collapsed="isVehiclesCollapsed"
        @toggle-characters-collapse="toggleCollapse('isCharactersCollapsed', 'characters')"
        @toggle-planets-collapse="toggleCollapse('isPlanetsCollapsed', 'planets')"
        @toggle-species-collapse="toggleCollapse('isSpeciesCollapsed', 'species')"
        @toggle-starships-collapse="toggleCollapse('isStarshipsCollapsed', 'starships')"
        @toggle-vehicles-collapse="toggleCollapse('isVehiclesCollapsed', 'vehicles')"
      />
    </b-card>
  </section>
</template>

<script>
import DetailCardContent from './DetailCardContent';

export default {
  components: {
    DetailCardContent,
  },
  props: {
    film: {
      type: Object,
      default: () => ({}),
    },
    filmPoster: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCharactersCollapsed: false,
      isSpeciesCollapsed: false,
      isStarshipsCollapsed: false,
      isPlanetsCollapsed: false,
      isVehiclesCollapsed: false,
    };
  },
  computed: {
    w() {
      return window.innerWidth;
    },
    releaseDate() {
      const date = new Date(this.film.releaseDate);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
  watch: {},
  async destroyed() {
    await this.$store.dispatch('films/resetFilmDetail');
  },
  methods: {
    async toggleCollapse(collapseControl, property) {
      this[collapseControl] = !this[collapseControl];
      if (!this.verifyLoadedLazy(property)) {
        await this.$store.dispatch('films/loadLazyInfo', {
          film: this.film,
          property,
        });
      }
    },
    verifyLoadedLazy(property) {
      let isLoaded = false;
      this.$store.state.films.detail.film[property].every(item => {
        if (item.name) {
          isLoaded = true;
          return false;
        }
        return true;
      });
      return isLoaded;
    },
  },
};
</script>

<style lang="stylus" scoped>
.film-card-detail {
  margin: 0 auto;
  max-width: 240px;

  .label-body {
    font-size: 1.2rem;

    >>> &.display-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  img {
    margin: 0 auto;
    display: block;
    max-width: 300px;
    height: auto;
  }

  @media only screen and (min-width: 479px) {
    max-width: 350px;
  }

  @media only screen and (min-width: 676px) {
    max-width: 470px;
  }

  @media only screen and (min-width: 800px) {
    max-width: 570px;
  }

  @media only screen and (min-width: 991px) {
    max-width: 75%;

    img {
      object-fit: contain;
      height: 450px;
    }
  }
}
</style>
