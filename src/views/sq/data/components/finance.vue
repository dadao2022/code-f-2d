<template>
  <sq-card height="30%" :title="'财务'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">
      <v-list-sim-card></v-list-sim-card>

      <v-left-right-layout class="con-h">
        <template slot="left">
          <sq-sub-title class="title" :title="'现金流变化趋势'"></sq-sub-title>
          <div class="chart">
            <sq-line-chart></sq-line-chart>
          </div>
        </template>
        <template slot="right">
          <sq-sub-title class="title" :title="'营收增长趋势'"></sq-sub-title>
          <div class="chart">
            <sq-line-chart></sq-line-chart>
          </div>
        </template>
      </v-left-right-layout>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqIconText from '@/components/icon-text/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqLineChart from '@/components/Charts/Line.vue'

import VListSimCard from '@/views/components/list-sim-card.vue'
import VLeftRightLayout from '@/views/components/left-right-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqIconText,
    SqSubTitle,
    SqLineChart,
    VListSimCard,
    VLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '全球', type: '3' },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.con-h{
  height: calc(100% - 100px);
  .chart{
    height: calc(100% - 40px);
  }
}
@media screen and (min-width: 2560px) {
  .con-h{
    height: calc(100% - 100px);
    .chart{
      height: calc(100% - 60px);
    }
  }
}
@media screen and (min-width: 3840px) {
  .con-h{
    height: calc(100% - 100px);
    .chart{
      height: calc(100% - 70px);
    }
  }
}
</style>
