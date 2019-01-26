<template>
  <div>
    <div v-if="!signedIn" id="welcome">
      <h1>Ride tracking made simple</h1>
      <p>Know exactly how much you earn and how far you ride</p>
      <div class="cta">
        <router-link :to="{ name: 'signup' }">Sign Up</router-link>
        <router-link :to="{ name: 'signin' }">Sign In</router-link>
      </div>
    </div>
    <Ride v-if="signedIn"></Ride>
  </div>
</template>
<script>
  import Ride from './rides/Index.vue'

  export default {
    computed: {
      signedIn(){
        return this.$store.state.auth.signedIn
      }
    },
    components: { Ride }
  }
</script>
<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>