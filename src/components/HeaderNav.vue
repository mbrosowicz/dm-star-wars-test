<template>
  <b-navbar toggleable="lg" type="light" variant="dark" fixed="top">
    <router-link class="img-link" :to="{ name: 'film-list' }">
      <b-img :src="headerImg" class="d-inline-block align-top" />
    </router-link>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 4 } }">Episode 1</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 5 } }">Episode 2</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 6 } }">Episode 3</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 1 } }">Episode 4</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 2 } }">Episode 5</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 3 } }">Episode 6</b-nav-item>
        <b-nav-item :to="{ name: 'film-detail', params: { filmId: 7 } }">Episode 7</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      headerImg: require('@/assets/images/logo-sw.png'),
    };
  },
};
</script>

<style lang="stylus" scoped>
#nav {
  a {
    color: #FFFFFF;
  }
}

a.img-link {
  display: contents;
}

img.d-inline-block.align-top {
  height: auto;
  width: 20%;
  margin: 1rem;

  @media only screen and (min-width: 767px) {
    width: 10%;
  }

  @media only screen and (min-width: 991px) {
    width: 5%;
  }
}
</style>
