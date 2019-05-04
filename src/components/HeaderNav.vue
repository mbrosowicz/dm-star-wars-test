<template>
  <b-navbar toggleable="lg" type="light" variant="dark" fixed="top">
    <router-link class="img-link" :to="{ name: 'film-list' }">
      <b-img :src="headerImg" class="d-inline-block align-top" />
    </router-link>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 4, filmPoster: require('@/assets/images/Star-Wars-Episode-1-1999-official-poster.jpg') },
          }"
        >Episode 1</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 5, filmPoster: require('@/assets/images/Star-Wars-Episode-2-2002-official-poster.png') },
          }"
        >Episode 2</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 6, filmPoster: require('@/assets/images/Star-Wars-Episode-3-2005-official-poster.jpg') },
          }"
        >Episode 3</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 1, filmPoster: require('@/assets/images/Star-Wars-Episode-4-1977-official-poster.jpg') },
          }"
        >Episode 4</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 2, filmPoster: require('@/assets/images/Star-Wars-Episode-5-1980-official-poster.jpg') },
          }"
        >Episode 5</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 3, filmPoster: require('@/assets/images/Star-Wars-Episode-6-1983-official-poster.jpg') },
          }"
        >Episode 6</b-nav-item
        >
        <b-nav-item
          :to="{
            name: 'film-detail',
            params: { filmId: 7, filmPoster: require('@/assets/images/Star-Wars-Episode-7-2015-official-poster.jpg') },
          }"
        >Episode 7</b-nav-item
        >
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
