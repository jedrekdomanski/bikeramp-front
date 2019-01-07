<template>
  <EditAccount :profile="userProfile" :submit="saveUserProfile"/>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import EditAccount from './editAccount.vue'
  
  export default {
    components: { EditAccount },
    computed: mapState(['userProfile']),
    methods: mapActions(['saveUserProfile'])
  }
</script>