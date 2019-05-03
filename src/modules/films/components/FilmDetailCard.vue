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
      <b-card-sub-title class="mb-4">Episode {{ film.episodeId }}</b-card-sub-title>
      <b-card-text>
        <span class="label-body">Release Date:</span>
        {{ releaseDate }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Director:</span>
        {{ film.director }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Producer(s):</span>
        {{ film.producer }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Opening Crawl:</span>
        {{ film.openingCrawl }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Characters:
          <b-button v-b-toggle.characters_collapse class="collapse-btn" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="characters_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="character in film.characters" :key="character.url">
              {{ character.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Planets:
          <b-button v-b-toggle.planets_collapse class="collapse-btn-planets" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="planets_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="planet in film.planets" :key="planet.url">
              {{ planet.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Species:
          <b-button v-b-toggle.species_collapse class="collapse-btn-species" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="species_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="specie in film.species" :key="specie.url">
              {{ specie.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Starships:
          <b-button v-b-toggle.starships_collapse class="collapse-btn-starships" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="starships_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="starship in film.starships" :key="starship.url">
              {{ starship.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Vehicles:
          <b-button v-b-toggle.vehicles_collapse class="collapse-btn-vehicles" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="vehicles_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="vehicle in film.vehicles" :key="vehicle.url">
              {{ vehicle.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
    </b-card>
    <b-card
      v-else
      :img-src="filmPoster"
      img-alt="Star Wars Poster"
      img-top
      :title="film.title"
      class="film-card-detail"
    >
      <b-card-sub-title class="mb-4">Episode {{ film.episodeId }}</b-card-sub-title>
      <b-card-text>
        <span class="label-body">Release Date:</span>
        {{ releaseDate }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Director:</span>
        {{ film.director }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Producer(s):</span>
        {{ film.producer }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">Opening Crawl:</span>
        {{ film.openingCrawl }}
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Characters:
          <b-button v-b-toggle.characters_collapse class="ml-2" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="characters_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="character in film.characters" :key="character.url">
              {{ character.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Planets:
          <b-button v-b-toggle.planets_collapse class="ml-2" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="planets_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="planet in film.planets" :key="planet.url">
              {{ planet.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Species:
          <b-button v-b-toggle.species_collapse class="ml-2" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="species_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="specie in film.species" :key="specie.url">
              {{ specie.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Starships:
          <b-button v-b-toggle.starships_collapse class="ml-2" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="starships_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="starship in film.starships" :key="starship.url">
              {{ starship.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
      <b-card-text>
        <span class="label-body">
          Vehicles:
          <b-button v-b-toggle.vehicles_collapse class="ml-2" variant="dark">
            <i class="fas fa-sort-down" />
          </b-button>
        </span>
        <b-collapse id="vehicles_collapse" class="mt-4">
          <b-list-group>
            <b-list-group-item v-for="vehicle in film.vehicles" :key="vehicle.url">
              {{ vehicle.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card-text>
    </b-card>
  </section>
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
    w() {
      return window.innerWidth;
    },
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
    await this.$store.dispatch('films/resetFilmDetail');
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.film-card-detail {
  margin: 0 auto;
  max-width: 240px;

  .label-body {
    font-size: 1.2rem;

    .collapse-btn {
      margin-left: 65%;

      @media only screen and (min-width: 1200px) {
        margin-left: 75%;
      }

      @media only screen and (min-width: 1400px) {
        margin-left: 80%;
      }

      @media only screen and (min-width: 1659px) {
        margin-left: 85%;
      }
    }

    @media only screen and (min-width: 1200px) {
      .collapse-btn-planets {
        margin-left: 77.5%;
      }

      .collapse-btn-species {
        margin-left: 77.3%;
      }

      .collapse-btn-starships {
        margin-left: 76.1%;
      }

      .collapse-btn-vehicles {
        margin-left: 76.7%;
      }
    }

    @media only screen and (min-width: 1400px) {
      .collapse-btn-planets {
        margin-left: 82.5%;
      }

      .collapse-btn-species {
        margin-left: 82.3%;
      }

      .collapse-btn-starships {
        margin-left: 81.1%;
      }

      .collapse-btn-vehicles {
        margin-left: 81.7%;
      }
    }

    @media only screen and (min-width: 1659px) {
      .collapse-btn-planets {
        margin-left: 87.5%;
      }

      .collapse-btn-species {
        margin-left: 87.3%;
      }

      .collapse-btn-starships {
        margin-left: 86.1%;
      }

      .collapse-btn-vehicles {
        margin-left: 86.7%;
      }
    }
  }

  img {
    margin: 0 auto;
    margin-top: 1rem;
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
      margin: 0 auto;
      width: 300px;
      height: 100%;
    }
  }
}
</style>
