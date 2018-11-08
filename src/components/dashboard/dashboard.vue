<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-if="notSignedIn" class="alert alert-warning">You should only get here if you're authenticated!</p>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        rides: [],
      };
    },
    created() {
      this.$store.dispatch('fetchUserRides');
    },
    computed: {
      notSignedIn(){
        return this.$store.getters.signInError;
      }
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>