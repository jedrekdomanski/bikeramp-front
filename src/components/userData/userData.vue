<template>
  <div class="main container">
    <div class="header">
      <h4 id="heading">Rides this week:</h4>
      <button @click="onAddRide" type="button" class="newRideBtn">Add Ride</button>
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
<style scoped>
  .header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  #heading {
    display: inline-block;
    width: 200px;
    margin-top: 10px;
    padding: 10px;
  }

  .newRideBtn {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    border-radius: 3px;
  }

  .newRideBtn:hover {
    background-color: #521751;
    color: white;
  }
</style>