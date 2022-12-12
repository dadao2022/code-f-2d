<template>
  <div class="finance">
    <div class="top-txts">
      <div class="md">
        <sq-icon-text></sq-icon-text>
      </div>
      <div class="md">
        <sq-icon-text></sq-icon-text>
      </div>
      <div class="md">
        <sq-icontext-mv></sq-icontext-mv>
      </div>
      <div class="md">
        <sq-sim-icon-text></sq-sim-icon-text>
      </div>
    </div>
    <div class="mid-content">
      <div class="md" style="width: 66%;height: 110px;">
        <sq-sub-title></sq-sub-title>
        <sq-sale-panel></sq-sale-panel>
      </div>
      <div class="md" style="width: 30%">
        <sq-sub-title :simple="true"></sq-sub-title>
        <sq-circle-text style="width: 100px;height: 100px;"></sq-circle-text>
      </div>
    </div>
    <div class="mid-content">
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
    <div class="mid-content">
      <div class="md" style="width: 30%;height:100px;">
        <sq-v-icon-text></sq-v-icon-text>
      </div>
      <div class="md" style="width: 30%;height:100px;">
        <sq-line-text></sq-line-text>
      </div>
    </div>
    <div class="mid-content">
      <div class="md" style="width: 50%;height: 250px;">
        <sq-table></sq-table>
      </div>
      <div class="md" style="width: 50%;height: 250px;">
        <sq-time-line></sq-time-line>
      </div>
    </div>
  </div>
</template>
<script>
import SqIconText from '@/components/icon-text/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqSimIconText from '@/components/icon-text/simindex.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqSalePanel from '@/components/sale-panel/index.vue'
import SqCircleText from '@/components/circle-text/index.vue'
import SqTable from '@/components/table/index.vue'
import SqLineText from '@/components/line-text/index.vue'
import SqTimeLine from '@/components/timeline/index.vue'
export default {
  components: {
    SqIconText,
    SqSubTitle,
    SqSalePanel,
    SqCircleText,
    SqVIconText,
    SqSimIconText,
    SqIcontextMv,
    SqTable,
    SqLineText,
    SqTimeLine
  }
}
</script>
<style lang="scss" scoped>
.finance{
  height: 100%;
  padding: 0 10px;
  .top-txts{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .md{
      margin: 15px 0 0 0;
      width: 45%;height: 35px;
    }
  }
  .mid-content{
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .md{
      margin: 15px 0 0 0;
      width: 45%;height: 35px;
    }
  }
}
</style>
