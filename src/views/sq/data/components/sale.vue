<template>
  <sq-card height="66%" class="sep" :title="'销售与客户体验'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">

      <v-left-right-layout :widths="['60%', '38%']" class="h-con">
        <template slot="left">
          <sq-sub-title class="title" :title="'销售情况'"></sq-sub-title>
          <sq-sale-panel></sq-sale-panel>
        </template>
        <template slot="right">
          <sq-sub-title :simple="true" class="title" :title="'去年与今年销售额对比'"></sq-sub-title>
          <div class="chart-con">
            <div class="chart ch-image">
              <sq-gauge :data="chdata">
              </sq-gauge>
            </div>
          </div>
        </template>
      </v-left-right-layout>


      <div class="chart-con" style="margin-top: 40px;">
        <sq-sub-title :simple="true" class="title" :title="'销量趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line :data="cdata1" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="chart-con">
        <sq-sub-title :simple="true" class="title" :title="'销售额趋势'"></sq-sub-title>
        <div class="chart">
          <sq-line :data="cdata1" :showtl="true"></sq-line>
        </div>
      </div>

      <div class="ch-con">
        <sq-sub-title class="title" :title="'客户行业分布'"></sq-sub-title>
        <div class="ls-list">
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%;height:100px;">
            <sq-circle-text></sq-circle-text>
          </div>
        </div>
      </div>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSalePanel from '@/components/sale-panel/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqCircleText from '@/components/circle-text/index.vue'
import SqGauge from '@/components/Charts/Gauge.vue'
import SqLine from '@/components/Charts/Line.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSalePanel,
    SqSubTitle,
    SqCircleText,
    SqGauge,
    SqLine,
    VLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '全球', type: '3' },
        { id: 4, name: '全部产品', type: '4' },
      ],

      cdata1: [
        { name: '销售额目标', data: [1,3,5,3,5,6,7,9,10,3,6,8] },
        { name: '实际销售额', data: [1,3,5,3,5,6,7,9,10,3,6,8] },
        { name: '同期销售额', data: [1,3,5,3,5,6,7,9,10,3,6,8] },
        { name: '环比销售额', data: [1,3,5,3,5,6,7,9,10,3,6,8] },
      ],

      chdata: [{ name: '去年', namelen: '去年销售额', value: 80, dw: '亿元' }, { name: '今年', namelen: '今年销售额', value: 50, dw: '亿元' }]
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
  .h-con{
    height: 128px;margin: 10px 0 0 0;
    .chart-con{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      
      .chart{
        height: 100%;width: 100%;
        flex: 1;margin: 10px 0 0 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          position: absolute;
          width: 40%;
        }
      }
    }
  }
  .chart-con{
    height: calc(50% - 140px);
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }

  .ls-list{
    display: flex;margin: 10px 0 0 0;
    justify-content: space-between;
    .md{height: 100%;
    }
  }
  .ch-con{

  }
}
@media screen and (min-width: 2560px) {
  .pabel-container>.chart-con{
    height: calc(50% - 150px);
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }
}
@media screen and (min-width: 3840px) {
  .pabel-container>.chart-con{
    height: calc(50% - 166px) !important;
    .chart{
      width: 100%;
      height: calc(100%  - 40px);
    }
  }
}
</style>
