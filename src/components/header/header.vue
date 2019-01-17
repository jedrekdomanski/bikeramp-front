<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Bikeramp</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!authenticated">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!authenticated">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="authenticated">
          <router-link to="/profile">Ikonka</router-link>
        </li>
        <li v-if="authenticated">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="authenticated">
          <button @click="logout" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    computed: {
      authenticated(){
        return this.$store.getters.signedIn
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout');
      }
    }
  }
</script>
<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active,
  .logout:hover {
    color: #fa923f;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer
  }
</style>