<template>
  <div id="app">
    <div id="nav">
      <header-nav />
    </div>
    <div id="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav';

export default {
  components: {
    HeaderNav,
  },
};
</script>

<style lang="stylus">
#app {
  font-family: 'D-DIN', 'DIN', 'Helvetica', 'Arial', sans-serif;
  color: #535359;
  font-weight: 600;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
