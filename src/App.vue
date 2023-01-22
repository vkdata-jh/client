<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark px-2 d-md-inline-flex py-2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/movie" class="nav-link">Movie</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/people" class="nav-link">People</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mt-3"></div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "App",
  components: {


  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .navbar{
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;


  }
}
</style>
