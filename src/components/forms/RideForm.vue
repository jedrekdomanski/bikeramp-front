<template src="./RideForm.html"></template>
<script>
  import { mapGetters } from 'vuex'
  import Datepicker from 'vuejs-datepicker'

  export default {
    data(){
      return {
        start_address: '',
        destination_address: '',
        price_cents: '',
        date: '',
        loading: false
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          start_address: this.start_address,
          destination_address: this.destination_address,
          price_cents: this.price_cents,
          date: this.date
        }
        this.loading = true
        this.$store.dispatch('createRide', formData).then(() => {
          this.loading = false
        })
      }
    },
    computed: {
      ...mapGetters([
          'showErrorAlert',
          'showSuccessAlert'
      ])
    },
    components: {
      Datepicker
    }
  }
</script>
<style scoped>
  td input {
    width: 250px;
  }

  .padding {
    margin-top: 10px;
  }

  #loading:disabled {
    background-color: lighten(#007bff, 25%);
    cursor: not-allowed;
  }
</style>