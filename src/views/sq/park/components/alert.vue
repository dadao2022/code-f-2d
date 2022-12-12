<template>
  <sq-card height="20.5%" :title="'告警信息'">
    <template slot="right">
      <img class="rg-enter" src="@/assets/images/public/btn_rg.png" height="50%" />
    </template>
    <div class="card-body pabel-container h-con">
      <v-hor-mul-layout :widths="['12%', '12%', '75%']" :hasHead="false">
        <template slot="mod-0">
          <sq-v-icon-text class="fk" :title="'当前状态'" :data="stData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/alert.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-1">
          <sq-v-icon-text class="fk" :title="'告警总数'" :data="mdData">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/alert.png" />
              </div>
            </template>
          </sq-v-icon-text>
        </template>
        <template slot="mod-2">
          <sq-table :columns="columns" :tableData="tableData">
            <template v-for="item in tableData" :slot="'data-' + item.id">
              <div :key="item.id" class="op-txt">
                <span class="txt ok" v-if="item.op.val == 1">{{ item.op.txt }}</span>
                <span class="txt err" v-if="item.op.val == 0">{{ item.op.txt }}</span>
                <img src="@/assets/images/icons/deal.png" v-if="item.op.val == 0" />
              </div>
            </template>
          </sq-table>
        </template>
      </v-hor-mul-layout>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqTable from '@/components/table/index.vue'
import VHorMulLayout from '@/views/components/hor-mul-layout.vue'
export default {
  components: {
    SqCard,
    SqVIconText,
    SqTable,
    VHorMulLayout
  },
  data() {
    return {
      stData: { type: 'status', val: 500, dw: 'kW' },
      mdData: { type: 'text', val: 500, dw: 'kW' },

      columns: [
        { name: '序号', prop: 'xh' },
        { name: '告警时间', prop: 'time' },
        { name: '告警类型', prop: 'type' },
        { name: '操作', prop: 'op' },
      ],
      tableData: [
        { id: 1, xh: 1, time: '2022-04-05 12:00:00', type: '违停告警', op: { txt: '处置', val: 1 } },
        { id: 2, xh: 2, time: '2022-04-05 12:00:00', type: '烟感报警', op: { txt: '处置', val: 1 } },
        { id: 3, xh: 3, time: '2022-04-05 12:00:00', type: '人员入侵', op: { txt: '未处置', val: 0 } },
        { id: 4, xh: 4, time: '2022-04-05 12:00:00', type: '噪音过高', op: { txt: '未处置', val: 0 } },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  display: block;
  
}
.rg-enter{
  height: 20px;
  cursor: pointer;
}
@media screen and (min-width: 2560px) {
  .rg-enter{
    height: 25px;
  }
  .h-con{
    height: calc(100% - 10px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-enter{
    height: 30px;
  }
  .h-con{
    height: calc(100% - 30px);
  }
}
</style>
