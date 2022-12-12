<template>
  <div class="e-chart" ref="refChart"></div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [{ name: '', data: [] }]
    },
    xdata: {
      type: Array,
      default: () => ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    showtl: {
      type: Boolean,
      default: false
    },
    color: {
      type: Number,
      default: 0
    }
  },
  watch: {
    data: {
      handler(n, o) {
        this.__init(this.xdata, this.data)
      },
      deep: true
    }
  },
  mounted() {
    let xdata = this.xdata
    let ses = this.data
    this.__init(xdata, ses)
  },
  methods: {
    __init(xdata, ydata) {
      
      let colors = [
        new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#008CFF' },
          { offset: 1, color: '#00E4FF' }
        ]),
        new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#00B59E' },
          { offset: 1, color: '#4DFFD2' }
        ]),
        new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#7373FF' },
          { offset: 1, color: '#B399FF' }
        ]),
        new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0096FF' },
          { offset: 1, color: '#0096FF00' }
        ]),
      ]
      let ch = this.$echarts.init(this.$refs.refChart)
      let datas = []
      let inxColor = 0
      let legends = []
      for (let y of ydata) {
        let color = colors[this.color]
        if (ydata.length > 1) {
          color = colors[inxColor++]
        }
        let tmp = { data: y.data, name: y.name, type: 'bar', color: color, showBackground: true, }
        if (y.data.length <= 0) {
          for (let x of xdata) {
            let num = Math.random() * 400 + 100
            tmp.data.push(num.toFixed(1))
          }
        }
        datas.push(tmp)
        legends.push(y.name)
      }

      let option = {
        legend: {
          data: legends,
          textStyle: {
            color: '#BFDFFF'
          },
          show: this.showtl,
          top: 0,
          icon: 'circle',
          itemWidth: 10,
          itemHeight: 10
        },
        color: ['#0096FF', '#34E7C1', '#B399FF', '#0096FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '0',
          top: this.showtl ? '30px' : '10px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xdata,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#7CB0C9'
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(250,250,250,8)','rgba(200,200,200,0)']
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#7CB0C9'
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.08)','rgba(200,200,200,0)']
            }
          }
        },
        itemStyle: {
          borderRadius: [50, 50, 50, 50]
        },
        barMaxWidth: 15,
        series: datas
      }
      ch.setOption(option)

    }
  }
}
</script>
<style lang="scss" scoped>
.e-chart{
  width: 100%;height: 100%;
}
</style>
