<template>
  <sq-card height="28%" class="sep" :title="'质量及安全'">
    <template slot="right">
      <sq-tab></sq-tab>
    </template>
    <div class="card-body pabel-container">
      <div class="m1">
        <v-hor-mul-layout>
          <template slot="m-top">
            <sq-sub-title class="title" :title="'产品质量'"></sq-sub-title>
          </template>
          <template slot="mod-0">
            <sq-sim-icon-text></sq-sim-icon-text>
          </template>
          <template slot="mod-1">
            <sq-sim-icon-text></sq-sim-icon-text>
          </template>
          <template slot="mod-2">
            <sq-sim-icon-text></sq-sim-icon-text>
          </template>
        </v-hor-mul-layout>
      </div>
      <div class="m2">
        <v-hor-mul-layout :widths="['14%', '14%', '14%', '14%', '14%', '14%']">
          <template slot="m-top">
            <sq-sub-title class="title" :title="'园区安全'"></sq-sub-title>
          </template>
          <template slot="mod-0">
            <sq-v-icon-text class="fk" :title="d1.title" :data="d1">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-1">
            <sq-v-icon-text class="fk" :title="d2.title" :data="d2">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-2">
            <sq-v-icon-text class="fk" :title="d3.title" :data="d3">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-3">
            <sq-v-icon-text class="fk" :title="d4.title" :data="d4">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-4">
            <sq-v-icon-text class="fk" :title="d5.title" :data="d5">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
          <template slot="mod-5">
            <sq-v-icon-text class="fk" :title="d6.title" :data="d6">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/alert.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template>
        </v-hor-mul-layout>

      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqSimIconText from '@/components/icon-text/simindex.vue'

import VHorMulLayout from '@/views/components/hor-mul-layout.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqSimIconText,
    SqVIconText,
    VHorMulLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '2022', type: '1' },
        { id: 2, name: '全年', type: '2' },
        { id: 3, name: '普立尔园区', type: '3' },
      ],

      d1: { type: 'status', val: 100, dw: '个', title: '摄像头总计' },
      d2: { type: 'text', val: 100, dw: '个', title: '摄像头在线' },
      d3: { type: 'text', val: 100, dw: '个', title: '门禁总计' },
      d4: { type: 'text', val: 100, dw: '个', title: '门禁在线' },
      d5: { type: 'text', val: 100, dw: '个', title: '烟感总计' },
      d6: { type: 'text', val: 100, dw: '个', title: '烟感在线' },
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
}
.m1{
  height: 80px;
}
.m2{
  height: calc(100% - 78px);
}
@media screen and (min-width: 2560px) {
  .m2{
    height: calc(100% - 98px);
  }
}
@media screen and (min-width: 3840px) {
  .m2{
    height: calc(100% - 118px);
  }
}
</style>
