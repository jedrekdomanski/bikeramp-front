<template>
  <div id="dashboard">
    <div class="container chart">
      <monthly-price-chart v-if="loaded" :chartdata="chartdata" :options="options"/>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { map, forEach } from 'lodash'
  import MonthlyPriceChart from './charts/MonthlyPriceChart'

  export default {
    data(){
      return {
        chartdata: {
          labels: [],
          datasets: [
            {
              label: 'Total price (PLN)',
              data: [],
              backgroundColor: '#fa923f',
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Total price per month (PLN)',
            fontSize: 25
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [ {
              barThickness: 6,
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true,
            position: 'top'
          },
          responsive: true,
          maintainAspectRatio: false
        },
        loaded: false
      }
    },
    components: {
      MonthlyPriceChart
    },
    created() {
      axios.get('/api/stats/monthly')
        .then(response => {
          let rides = response.data
          forEach(rides, (ride) => {
            this.chartdata.labels.push(ride.month)
            this.chartdata.datasets[0].data.push(ride.total_price)
          })
          this.loaded = true
        })
        .catch(error => {
          console.log(error)
      })
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
</style>