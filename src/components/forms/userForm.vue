<template>
  <EditAccount :profile="userProfile" :submit="saveUserProfile"/>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import EditAccount from './editAccount.vue'
  
  export default {
    components: { EditAccount },
    computed: mapGetters(['userProfile']),
    methods: mapActions(['saveUserProfile'])
  }
</script>