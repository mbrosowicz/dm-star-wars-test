<template>
  <section>
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
    <b-card-text v-if="film.characters && film.characters.length">
      <span class="label-body display-flex">
        Characters:
        <b-button variant="dark" @click="$emit('toggle-characters-collapse')">
          <i class="fas fa-sort-down" />
        </b-button>
      </span>
      <b-collapse id="characters_collapse" v-model="isCharactersCollapsed" class="mt-4">
        <div v-if="$wait.is('fetching-lazy-info-characters')">
          <loading-page />
        </div>
        <b-list-group v-else>
          <b-list-group-item v-for="character in film.characters" :key="character.url">
            {{ character.name }}
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card-text>
    <b-card-text v-if="film.planets && film.planets.length">
      <span class="label-body display-flex">
        Planets:
        <b-button variant="dark" @click="$emit('toggle-planets-collapse')">
          <i class="fas fa-sort-down" />
        </b-button>
      </span>
      <b-collapse id="planets_collapse" v-model="isPlanetsCollapsed" class="mt-4">
        <div v-if="$wait.is('fetching-lazy-info-planets')">
          <loading-page />
        </div>
        <b-list-group v-else>
          <b-list-group-item v-for="planet in film.planets" :key="planet.url">{{ planet.name }}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card-text>
    <b-card-text v-if="film.species && film.species.length">
      <span class="label-body display-flex">
        Species:
        <b-button variant="dark" @click="$emit('toggle-species-collapse')">
          <i class="fas fa-sort-down" />
        </b-button>
      </span>
      <b-collapse id="species_collapse" v-model="isSpeciesCollapsed" class="mt-4">
        <div v-if="$wait.is('fetching-lazy-info-species')">
          <loading-page />
        </div>
        <b-list-group v-else>
          <b-list-group-item v-for="specie in film.species" :key="specie.url">{{ specie.name }}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card-text>
    <b-card-text v-if="film.starships && film.starships.length">
      <span class="label-body display-flex">
        Starships:
        <b-button variant="dark" @click="$emit('toggle-starships-collapse')">
          <i class="fas fa-sort-down" />
        </b-button>
      </span>
      <b-collapse id="starships_collapse" v-model="isStarshipsCollapsed" class="mt-4">
        <div v-if="$wait.is('fetching-lazy-info-starships')">
          <loading-page />
        </div>
        <b-list-group v-else>
          <b-list-group-item v-for="starship in film.starships" :key="starship.url">
            {{ starship.name }}
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card-text>
    <b-card-text v-if="film.vehicles && film.vehicles.length">
      <span class="label-body display-flex">
        Vehicles:
        <b-button variant="dark" @click="$emit('toggle-vehicles-collapse')">
          <i class="fas fa-sort-down" />
        </b-button>
      </span>
      <b-collapse id="vehicles_collapse" v-model="isVehiclesCollapsed" class="mt-4">
        <div v-if="$wait.is('fetching-lazy-info-vehicles')">
          <loading-page />
        </div>
        <b-list-group v-else>
          <b-list-group-item v-for="vehicle in film.vehicles" :key="vehicle.url">
            {{ vehicle.name }}
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card-text>
  </section>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      default: () => ({}),
    },
    releaseDate: {
      type: String,
      default: 'DD/MM/AAAA',
    },
    isCharactersCollapsed: {
      type: Boolean,
      required: true,
    },
    isSpeciesCollapsed: {
      type: Boolean,
      required: true,
    },
    isStarshipsCollapsed: {
      type: Boolean,
      required: true,
    },
    isPlanetsCollapsed: {
      type: Boolean,
      required: true,
    },
    isVehiclesCollapsed: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped></style>
