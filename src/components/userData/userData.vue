<template>
  <div class="main container">
    <div>
      <h4 id="heading">Rides this week:</h4>
      <button @click="onAddRide" type="button">Add Ride</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Start address</th>
          <th scope="col">Destination address</th>
          <th scope="col">Distance</th>
          <th scope="col">Price</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ride, index) in userRides">
          <th scope="row">{{ index += 1 }}</th>
          <td>{{ ride.start_address }}</td>
          <td>{{ ride.destination_address }}</td>
          <td>{{ ride.distance }}</td>
          <td>{{ ride.price }}</td>
          <td>{{ ride.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data(){
      return {
        rides: null
      }
    },
    created() {
      this.$store.dispatch('fetchUserRides');
    },
    methods: {
      onAddRide(){

      }
    },
    computed: {
      ...mapGetters([
          'userRides'
      ])
    }
  }
</script>
<style>
  #heading {
    display: inline-block;
    padding: 10px;
  }

  button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    margin: 8px;
    font: inherit;
    cursor: pointer;
    float: right;
    border-radius: 4px;
  }
</style>