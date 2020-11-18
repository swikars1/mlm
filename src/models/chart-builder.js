class ChartBulder {
  constructor(params) {
    this.pieData = params.pieData || []
    this.barData = params.barData || []
    this.xAxis = params.xAxis || { data: [] }
    this.yAxis = params.yAxis || {}
    this.title = params.title || ''
  }

  buildPie() {
    return {
      series: [
        {
          title: { text: this.title },
          type: 'pie',
          radius: '60%',
          data: this.pieData
        }
      ]
    }
  }

  buildBar() {
    return {
      xAxis: { data: this.xAxis },
      yAxis: this.yAxis,
      series: [
        {
          type: 'bar',
          data: this.barData
        }
      ]
    }
  }

}

export default ChartBulder
