class ChartBuilder {
  constructor(params) {
    this.pieData = params.pieData || []
    this.barData = params.barData || []
    this.lineData = params.lineData || []
    this.xAxis = params.xAxis || []
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

  buildLine() {
    return {
      xAxis: {
          type: 'category',
          data: this.xAxis
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: this.lineData,
          type: 'line',
          smooth: true
      }]
    }
  }

}

export default ChartBuilder
