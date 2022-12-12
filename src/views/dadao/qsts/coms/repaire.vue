<template>
  <div class="pad30 task-con">
    <sq-sub-title class="title" :title="'维保情况（近一月）'"></sq-sub-title>
    
    <div class="charts">
      <div class="ch1">
        <img src="@/assets/images/dd/pbg.png" />
        <div class="txt">
          <span class="lbl">维修次数</span><br/>
          <span class="val">22</span>
        </div>
        <div class="chart" ref="refC1"></div>
      </div>
      <div class="ch1">
        <img src="@/assets/images/dd/pbg.png" />
        <div class="txt">
          <span class="lbl">保养次数</span><br/>
          <span class="val">111</span>
        </div>
        <div class="chart" ref="refC2"></div>
      </div>
    </div>
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
    let dm = this.$echarts.init(this.$refs.refC1)
    let op = this.__initPie()
    dm.setOption(op)

    
    let dm2 = this.$echarts.init(this.$refs.refC2)
    let op2 = this.__initPie()
    dm2.setOption(op2)
  },
  methods: {
    __initPie() {
      let option = {
        color: ['#00D1FF', '#008DFF', '#FFBC4D', '#6BDE94', '#FF9999'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '0%',
          right: '20',
          orient: 'vertical',
          icon: 'circle',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            type: 'pie',
            radius: [33, 45],
            center: [53, 60],
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '消防' },
              { value: 735, name: '平台' },
              { value: 580, name: '空调' },
              { value: 484, name: '大门' },
              { value: 300, name: '吊车' }
            ]
          }
        ]
      }
      return option
    }
  }
}
</script>
<style lang="scss" scoped>
.task-con{
  margin: 20px 0 0 0;
  .charts{
    height: 200px;display: flex;margin-top: 10px;
    .ch1{
      flex: 1;position: relative;

      img{
        position: absolute;left: 20px;top: 40px;
      }
      .txt{
        position: absolute;left: 20px;top: 40px;
        width: 66px;height: 66px;
        text-align: center;
        .lbl{
          color: #79B0C9;font-size: 16px;
        }
        .val{
          font-family: 'Agency FB';font-size: 26px;color: #c4c4c4;
        }
      }

      .chart{
        position: absolute;left: 0;top: 0;
        width: 100%;height: 200px;
      }
    }
  }
}
</style>
