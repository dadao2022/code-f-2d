<template>
  <sq-card height="16%" :title="'设备状态'">
    <template slot="right">
      <sq-tab :tabData="tabs"></sq-tab>
    </template>
    <div class="card-body pabel-container">
      <div class="md">
        <sq-v-icon-text class="fk" :title="'合格率'" :data="stData">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md">
        <sq-v-icon-text class="fk" :title="'不良率'" :data="mdData">
          <template slot="image">
            <div class="lf">
              <img src="@/assets/images/icons/cp.png" />
            </div>
          </template>
        </sq-v-icon-text>
      </div>
      <div class="md" style="width: 75%;">
        <div class="chart">
          <sq-bar></sq-bar>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from '@/components/ChooseDate/index.vue'
import SqTab from '@/components/Tab/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqBar from '@/components/Charts/Bar.vue'
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqTab,
    SqVIconText,
    SqBar
  },
  data() {
    return {
      stData: { type: 'text', val: 500, dw: 'kW' },
      mdData: { type: 'text', val: 500, dw: 'kW' },
      tabs: [
        { id: 1, name: '合格率', type: '1' },
        { id: 2, name: '不良率', type: '2' },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  padding: 0 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
  .md{
    width: 12%;
    height: calc(100% - 10px);
  }
  .chart{
    height: 100%;width: 100%;
  }
}
@media screen and (min-width: 2560px) {
  .card-body .md{
    width: 12%;
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .card-body .md{
    width: 12%;
    height: calc(100% - 50px);
  }
}
</style>
