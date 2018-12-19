<template>
  <div class="main container">
    <div class="header">
      <h4 id="heading">Rides this week:</h4>
      <button @click="onBtnClick" type="button" class="newRideBtn">{{ btnText }}</button>
    </div>
    <RideForm v-show="clicked"></RideForm>
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
        <tr v-for="(ride, index) in userRides" :key="ride.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ ride.start_address }}</td>
          <td>{{ ride.destination_address }}</td>
          <td>{{ ride.distance }}</td>
          <td>{{ ride.price_cents }}</td>
          <td>{{ ride.date }}</td>
          <td>
            <button @click="deleteRide(index, ride.id)" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><b>{{ weeklyTotals.total_distance }} km</b></td>
          <td><b>{{ weeklyTotals.total_price }} PLN</b></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import RideForm from '../forms/RideForm.vue'

  export default {
    data(){
      return {
        clicked: false
      }
    },
    created() {
      this.$store.dispatch('fetchUserRides');
    },
    methods: {
      onBtnClick(){
        this.clicked = !this.clicked
      },
      deleteRide(index, id){
        this.$store.dispatch('deleteRide', { index: index, id: id });
      }
    },
    computed: {
      ...mapGetters([
          'userRides',
          'weeklyTotals'
      ]),
      btnText(){
        return this.clicked ? 'Cancel' : 'New ride'
      }
    },
    components: {
      RideForm
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
    padding: 10 20px;
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
    width: 106px;
  }

  .newRideBtn:hover {
    background-color: #521751;
    color: white;
  }

  .close span {
    color: red;
  }
</style>