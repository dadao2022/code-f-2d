<template>
  <sq-card height="46%" class="sep" :title="'生产管理'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container sc">
      <v-top-left-right-layout :widths="['49%', '49%']" class="m1">
        <template slot="top">
          <sq-sub-title class="title" :title="'生产计划'"></sq-sub-title>
        </template>
        <template slot="t-left">
          <sq-icon-text :data="cd1" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/car.png" />
            </template>
          </sq-icon-text>
        </template>
        <template slot="t-right">
          <sq-icon-text :data="cd2" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/build.png" />
            </template>
          </sq-icon-text>
        </template>
      </v-top-left-right-layout>


      <div class="m2">
        <sq-sub-title class="title" :title="'生产任务数量统计'">
          <template slot="right">
            <sq-tab :tabData="tabs2"></sq-tab>
          </template>
        </sq-sub-title>
        <div class="chart">
          <sqbar></sqbar>
        </div>
      </div>

      <div class="m3">
        <v-left-right-layout class="h-con">
          <template slot="left">
            <v-top-left-right-layout>
              <template slot="top">
                <sq-sub-title class="title" :title="'原料库存'"></sq-sub-title>
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
                  <sq-pie :data="pdata"></sq-pie>
                </div>
              </template>
            </v-top-left-right-layout>
          </template>

          <template slot="right">
            <v-top-left-right-layout>
              <template slot="top">
                <sq-sub-title class="title" :title="'成品库存'"></sq-sub-title>
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
                  <sq-pie :data="pdata2"></sq-pie>
                </div>
              </template>
            </v-top-left-right-layout>
          </template>
        </v-left-right-layout>

      </div>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqIconText from '@/components/icon-text/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import Sqbar from '@/components/Charts/Bar.vue'
import SqPie from '@/components/Charts/Pie.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
import VTopLeftRightLayout from '@/views/components/top-left-right-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqIconText,
    SqSubTitle,
    SqVIconText,
    Sqbar,
    SqPie,
    VTopLeftRightLayout,
    VLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '普立尔园区', type: '3' },
      ],
      tabs2: [
        { id: 1, name: '按车间统计', type: '1' },
        { id: 2, name: '按产品统计', type: '2' },
      ],
      cd1: { title: '累计发货量', dw: '万件', val: 103 },
      cd2: { title: '累计收货量', dw: '万件', val: 60 },
      
      mData: { type: 'text', val: 500, dw: '个' },

      pdata: [
        { value: 48, name: '原料01', dw: '万件' },
        { value: 35, name: '原料02', dw: '万件' },
        { value: 80, name: '原料03', dw: '万件' },
        { value: 84, name: '原料04', dw: '万件' },
      ],
      pdata2: [
        { value: 48, name: '医疗器械', dw: '万件' },
        { value: 35, name: '健康护理', dw: '万件' },
        { value: 80, name: '医用卫生', dw: '万件' },
        { value: 84, name: '清洁卫生', dw: '万件' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
}
.m1{
  height: 90px;
}
.m2{
  height: calc(50% - 49px);
  margin: 5px 0 0 0;
  .chart{
    height: calc(100% - 40px);
  }
}
.m3{
  height: calc(50% - 45px);
  .chart{
    flex: 1;
    height: 100%;
  }
}
@media screen and (min-width: 2560px) {
  .m3{
    height: calc(50% - 66px);
  }
}
@media screen and (min-width: 3840px) {
  .m3{
    height: calc(50% - 78px);
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 2560px) {
  .sc{
    .top-left-right-layout .ch-md{
      height: calc(100% - 45px);
    }
  }
}
@media screen and (min-width: 3840px) {
  .sc{
    .top-left-right-layout .ch-md{
      height: calc(100% - 45px);
    }
  }
}
</style>
