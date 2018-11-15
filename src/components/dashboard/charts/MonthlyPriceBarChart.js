import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Total price',
          backgroundColor: '#fa923f',
          data: [40, 20, 12, 39, 20, 40, 39, 80, 40, 20, 12, 30]
        }
      ]
    },
    {responsive: true, maintainAspectRatio: false})
  }
}