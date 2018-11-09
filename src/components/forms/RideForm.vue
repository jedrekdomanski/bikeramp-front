<template>
  <div class="container padding">
    <p v-show="showErrorAlert" class="alert alert-danger padding">Invalid input data. Please try again.</p>
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
      type="text" 
      class="form-control mb-5 mr-sm-5" 
      id="inlineFormInputName2" 
      placeholder="Price"
      v-model="price">
    <label class="sr-only" for="inlineFormInputName2">Date</label>
    <input 
      type="text" 
      class="form-control mb-5 mr-sm-5" 
      id="inlineFormInputName2" 
      placeholder="Date"
      v-model="date">
  <button type="submit" class="btn btn-primary mb-5">Submit</button>
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
        price: '',
        date: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          start_address: this.start_address,
          destination_address: this.destination_address,
          price: this.price,
          date: this.date
        }
        this.$store.dispatch('createRide', formData);
      }
    },
    computed: {
      ...mapGetters([
          'showErrorAlert'
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
</style>