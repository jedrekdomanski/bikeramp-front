import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Array | Object,
      required: false,
    },
    options: {
      
    }
  },
  mounted () {    
    this.renderChart(this.chartdata, this.options)
  }
}