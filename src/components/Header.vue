<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand" href="#">Home</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item active">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/register" class="nav-link">Sign Up</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item active">
            <a class="nav-link" href="/login" @click="handleLogout"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Header",

  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      this.$store.dispatch('user', null);

      this.$router.push("/");
    },
  },

  computed: {
      ...mapGetters(['user'])
  }
};
</script>

<style></style>
