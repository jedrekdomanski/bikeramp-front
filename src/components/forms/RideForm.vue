<template>
  <form @submit.prevent>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Start address</th>
          <th scope="col">Destination address</th>
          <th scope="col">Price</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <th scope="row"></th>
          <td><input
                    type="text"
                    id="start_address"
                    v-model="start_address">
          </td>
          <td><input
                    type="text"
                    id="destination_address"
                    v-model="destination_address"></td>
          <td><input
                    type="text"
                    id="price"
                    v-model="price">
          </td>
          <td><input
                    type="text"
                    id="date"
                    v-model="date">
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
<script>
  export default {
    data(){
      return {
        start_address: '',
        destination_address: '',
        price: '',
        date: ''
      }
    }
  }
</script>
<style scoped>
  td input {
    width: 250px;
  }
</style>