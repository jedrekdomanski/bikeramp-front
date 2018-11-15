<template>
  <div id="dashboard">
    <div class="container chart">
      <h2>Total price this year</h2>
      <monthly-price-bar-chart/>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import MonthlyPriceBarChart from './charts/MonthlyPriceBarChart'

  export default {
    computed: {
      
    },
    components: {
      MonthlyPriceBarChart
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }

  .chart {
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin-top: 25px;
  }

  .chart h2 {
    margin-top: 0;
    padding: 15px 0;
    color:  rgba(255, 0,0, 0.5);
    text-align: center;
  }
</style>