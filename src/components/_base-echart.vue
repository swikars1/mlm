<template>
  <div class="echarts-wrapper">
    <h2>{{title}}</h2>
    <v-chart v-bind="$attrs" v-on="$listeners" :options="chartOptions[type]" />
  </div>
</template>
<script>
import ChartBuilder from '@/models/chart-builder'
import ECharts from 'vue-echarts'

import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

export default {
  data() {
    return {
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    legend: {
      type: Array,
      default: () => []
    },
    pieData: {
      type: Array,
      default: () => []
    },
    barData: {
      type: Array,
      default: () => []
    },
    lineData: {
      type: Array,
      default: () => []
    },
    xAxis: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'v-chart': ECharts
  },
  computed: {
    chartOptions() {
      let pieChart = new ChartBuilder({ pieData: this.pieData, title: this.title })
      let barChart = new ChartBuilder({ barData: this.barData, title: this.title, xAxis: this.xAxis })
      let lineChart = new ChartBuilder({ lineData: this.lineData, title: this.title, xAxis: this.xAxis })
      return {
        pie: pieChart.buildPie(),
        bar: barChart.buildBar(),
        line: lineChart.buildLine()
      }
    }
  }
}
</script>
<style lang="sass">
.echarts-wrapper
  padding: 4rem
  padding: 2.5rem 14rem
  .echarts
    div
      background: white
      canvas
        box-shadow: 0px 0px 6px 0px rgba(207, 207, 207, 75%)
        border-radius: 8px
</style>