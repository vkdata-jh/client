<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/movies" class="nav-link">Movie</router-link>
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
  components: {},
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
}
</style>
