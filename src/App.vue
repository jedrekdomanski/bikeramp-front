<template src='./App.html'></template>
<script>
  import NotificationContainer from './components/notification/NotificationContainer.vue'

  export default {
    name: 'app',
    created(){
      this.$store.dispatch('auth/tryAutoLogin')
    },
    computed: {
      authenticated(){
        return this.$store.state.auth.signedIn
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('auth/logout');
      }
    },
    components: {
      NotificationContainer
    }
  }
</script>
<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .alert {
    text-align: center;
  }

  .vdp-datepicker input {
    border: 0px;
  }

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

  #nprogress .spinner {
    top: 60px;
  }

</style>