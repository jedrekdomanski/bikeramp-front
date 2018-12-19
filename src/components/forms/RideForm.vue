<template>
  <div class="container padding">
    <p v-show="showErrorAlert" class="alert alert-danger padding">Invalid input data. Please try again.</p>
    <p v-show="showSuccessAlert" class="alert alert-success padding">Ride has been successfully created.</p>
    <form @submit.prevent="onSubmit" class="form-inline">
    <label class="sr-only" for="inlineFormInputName2">Start Address</label>
    <input 
      type="text"
      class="form-control mb-5 mr-sm-5"
      id="inlineFormInputName2"
      placeholder="Start Address"
      v-model="start_address">

    <label class="sr-only" for="inlineFormInputName2">Destination Address</label>
    <input 
      type="text" 
      class="form-control mb-5 mr-sm-5" 
      id="inlineFormInputName2" 
      placeholder="Destination Address"
      v-model="destination_address">
    <label class="sr-only" for="inlineFormInputName2">Price</label>
    <input 
      type="number"
      step="0.1"
      class="form-control mb-5 mr-sm-5" 
      id="inlineFormInputName2" 
      placeholder="Price"
      v-model="price_cents">
    <label class="sr-only" for="inlineFormInputName2">Date</label>
    <input 
      type="text" 
      class="form-control mb-5 mr-sm-5" 
      id="inlineFormInputName2" 
      placeholder="Date"
      v-model="date">
  <button type="submit" class="btn btn-primary mb-5" id="loading" :disabled="loading">
    <div class="lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
    Submit
  </button>
</form>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

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