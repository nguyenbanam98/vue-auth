<template>
  <div class="d-flex justify-content-center mt-5">
    <h1 v-if="user">Hi, {{ user.name }}</h1>
    <h1 v-if="!user">You are not logged in!</h1>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  async created() {
    const user = await axios.post("me");
    this.$store.dispatch("user", user.data);
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style></style>
