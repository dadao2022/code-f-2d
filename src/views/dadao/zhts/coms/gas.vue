<template>
  <div class="pad30 alert-con">
    <sq-sub-title class="title" :title="'气体监控'"></sq-sub-title>
    
    <div class="charts" ref="refChart"></div>
  </div>
</template>
<script>
import SqSubTitle from '@/components/sub-title/index.vue'
export default {
  components: {
    SqSubTitle
  },
  data() {
    return {
      datas: [
      ]
    }
  },
  mounted() {
    this.__init()
  },
  methods: {
    __init() {
      let ch = this.$echarts.init(this.$refs.refChart)
      let option = {
        legend: {
          textStyle: {
            color: '#c4c4c4',
            fontSize: 16
          },
          top: 5,
          left: 30,
          itemWidth: 20,
          itemHeight: 10
        },
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#008CFF' // 0% 处的颜色
            }, {
              offset: 1, color: '#00E4FF' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          '#f00'
        ],
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
          top: '30px',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          data: ['氧气', '氢气', '二氧化氮', '一氧化氮', '甲烷'],
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
        xAxis: {
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
        series: [
          { name: '未超标', data: [50, 40, 45, 55, 54], type: 'bar' },
          { name: '超标', data: [50, 40, 45, 55, 54], type: 'bar' }
        ]
      }
      ch.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.alert-con{
  margin: 20px 0 0 0;
  .charts{
    height: 165px;
  }
}
</style>
