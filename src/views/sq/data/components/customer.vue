<template>
  <sq-card height="20%" :title="'客户管理'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">
      <v-left-right-layout class="h-con">
        <template slot="left">
          <v-top-left-right-layout>
            <template slot="top">
              <sq-sub-title class="title" :title="'客户级别占比'"></sq-sub-title>
            </template>
            <template slot="t-left">
              <sq-v-icon-text class="fk" :title="'客户总数'" :data="mData">
                <template slot="image">
                  <div class="lf">
                    <img src="@/assets/images/icons/house.png" />
                  </div>
                </template>
              </sq-v-icon-text>
            </template>
            <template slot="t-right">
              <div class="chart">
                <sq-pie :showtl="false"></sq-pie>
              </div>
            </template>
          </v-top-left-right-layout>
        </template>

        <template slot="right">
          <v-top-left-right-layout>
            <template slot="top">
              <sq-sub-title class="title" :title="'活跃客户占比'"></sq-sub-title>
            </template>
            <template slot="t-left">
              <sq-v-icon-text class="fk" :title="'活跃客户'" :data="mData">
                <template slot="image">
                  <div class="lf">
                    <img src="@/assets/images/icons/tv.png" />
                  </div>
                </template>
              </sq-v-icon-text>
            </template>
            <template slot="t-right">
              <div class="chart">
                <sq-pie :showtl="false" :data="pdata"></sq-pie>
              </div>
            </template>
          </v-top-left-right-layout>
        </template>

      </v-left-right-layout>


    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqPie from '@/components/Charts/Pie.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
import VTopLeftRightLayout from '@/views/components/top-left-right-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqVIconText,
    SqPie,
    VLeftRightLayout,
    VTopLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '普立尔园区', type: '3' },
      ],
      mData: { type: 'text', val: 500, dw: '个' },

      pdata: [
        { value: 48, name: '近3个月订购', dw: '个' },
        { value: 35, name: '进半年订购', dw: '个' },
        { value: 80, name: '近一年订购', dw: '个' },
        { value: 84, name: '超一年未购', dw: '个' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.h-con{
  height: 100%;
  .chart{
    flex: 1;
    height: 100%;
  }
}
.list-ch{
  display: flex;height: 100%;
  justify-content: space-between;
  .md{
    width: 49%;height: calc(100% - 45px);
    .ch-md{
      display: flex;margin: 8px 0 0 0;
      justify-content: space-between;height: 100%;
      .fk{
        width: 25%;
      }
    }
  }
}
@media screen and (min-width: 2560px) {
  
}
@media screen and (min-width: 3840px) {
  
}
</style>
