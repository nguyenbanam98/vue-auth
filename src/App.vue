<template>
  <div id="app">
    <div class="container-fluid bg-light">
      <Header />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
</style>
