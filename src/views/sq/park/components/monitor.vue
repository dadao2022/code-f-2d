<template>
  <sq-card class="sep" height="21%" :title="'监控设备'">
    <div class="card-body pabel-container h-con">
      <v-hor-mul-layout :widths="['15%', '15%', '15%', '15%', '15%', '15%']" :hasHead="false">
        <template slot="mod-0">
          <sq-v-icon-text class="fk" :title="d1.title" :data="d1">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/monitor.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-1">
          <sq-v-icon-text class="fk" :title="d2.title" :data="d2">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/monitor.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-2">
          <sq-v-icon-text class="fk" :title="d3.title" :data="d3">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/door.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-3">
          <sq-v-icon-text class="fk" :title="d4.title" :data="d4">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/door.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-4">
          <sq-v-icon-text class="fk" :title="d5.title" :data="d5">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/yan.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-5">
          <sq-v-icon-text class="fk" :title="d6.title" :data="d6">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/yan.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
      </v-hor-mul-layout>

    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqVIconText from '@/components/icon-text/vindex.vue'
import VHorMulLayout from '@/views/components/hor-mul-layout.vue'
export default {
  components: {
    SqCard,
    SqVIconText,
    VHorMulLayout
  },
  data() {
    return {
      d1: { type: 'text', val: 100, dw: '个', title: '摄像头总计' },
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
.h-con{
  display: block;
  height: 100%;
}
@media screen and (min-width: 2560px) {
  .h-con{
    height: calc(100% - 10px);
  }
}
@media screen and (min-width: 3840px) {
  .h-con{
    height: calc(100% - 30px);
  }
}
</style>
