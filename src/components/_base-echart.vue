<template>
  <div class="echarts-wrapper">
    <v-chart v-bind="$attrs" v-on="$listeners" :options="pieOptions" />
  </div>
</template>
<script>
import ECharts from 'vue-echarts'

import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'

export default {
  data() {
    return {
    }
  },
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'v-chart': ECharts
  },
  computed: {
    pieOptions() {
      return {
        backgroundColor: '#ffffff',
        series : [
          {
            name: 'Pie Chart',
            type: 'pie',
            radius: '75%',
            data: this.pieData,
            roseType: 'angle'
          }
        ]
      }
    }
  }
}
</script>
<style lang="sass">
.echarts-wrapper
  padding: 4rem
  canvas
    box-shadow: 0px 0px 6px 0px rgba(207, 207, 207, 75%)
    border-radius: 8px
</style>