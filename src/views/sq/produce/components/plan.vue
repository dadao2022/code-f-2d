<template>
  <sq-card class="sep" height="76%" :title="'生产计划'">
    <div class="card-body pabel-container">
      <div class="tl-con">
        <div class="time-line-con">
          <sq-time-line></sq-time-line>
        </div>
        <div class="rg-con">
          <div class="cd-con">
            <sq-sub-title class="title" :title="'原料采购详情'"></sq-sub-title>
            <div class="list-card">
              <div class="md">
                <sq-icon-text :data="cd1" class="lc">
                  <template slot="image">
                    <img src="@/assets/images/icons/car.png" />
                  </template>
                </sq-icon-text>
              </div>
              <div class="md">
                <sq-icon-text :data="cd2" class="lc">
                  <template slot="image">
                    <img src="@/assets/images/icons/build.png" />
                  </template>
                </sq-icon-text>
              </div>
            </div>

          </div>

          <div class="ch-con">
            <sq-sub-title class="title" :title="'可调配的在职员工数量'"></sq-sub-title>
            <div class="chart">
              <sq-bar></sq-bar>
            </div>
          </div>

          <div class="tb-con">
            <sq-sub-title class="title" :title="'临时工人岗位分布情况'"></sq-sub-title>
            <sq-table :columns="columns" :tableData="tableData">
          
            </sq-table>
          </div>

          <div class="ch-con">
            <sq-sub-title class="title" :title="'已投产设备数量'"></sq-sub-title>
            <div class="chart">
              <sq-bar :data="bdata"></sq-bar>
            </div>
          </div>

          <div class="ch-con">
            <sq-sub-title class="title" :title="'生产任务数量统计'">
              <template slot="right">
                <sq-tab :tabData="tabs"></sq-tab>
              </template>
            </sq-sub-title>
            <div class="chart">
              <sq-bar></sq-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTimeLine from '@/components/timeline/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqIconText from '@/components/icon-text/index.vue'
import SqTab from '@/components/Tab/index.vue'
import SqTable from '@/components/table/index.vue'
import SqBar from '@/components/Charts/Bar.vue'
export default {
  components: {
    SqCard,
    SqTimeLine,
    SqSubTitle,
    SqIconText,
    SqTab,
    SqTable,
    SqBar
  },
  data() {
    return {
      cd1: { title: '最低需求临时人数', dw: '万件', val: 103 },
      cd2: { title: '最佳需求临时人数', dw: '万件', val: 60 },

      tabs: [
        { id: 1, name: '按车间统计', type: '1' },
        { id: 2, name: '按产品统计', type: '2' },
      ],

      columns: [
        { name: '序号', prop: 'xh' },
        { name: '岗位', prop: 'gw' },
        { name: '分配数量（人）', prop: 'count' },
        { name: '到岗日期', prop: 'dtime' },
        { name: '离岗日期', prop: 'ltime' },
      ],
      tableData: [
        { id: 1, xh: 1, gw: '岗位名称', dtime: '2022-04-05 12:00:00', ltime: '2022-04-05 12:00:00', count: '20' },
        { id: 2, xh: 2, gw: '岗位名称', dtime: '2022-04-05 12:00:00', ltime: '2022-04-05 12:00:00', count: '20' },
        { id: 3, xh: 3, gw: '岗位名称', dtime: '2022-04-05 12:00:00', ltime: '2022-04-05 12:00:00', count: '20' },
        { id: 4, xh: 4, gw: '岗位名称', dtime: '2022-04-05 12:00:00', ltime: '2022-04-05 12:00:00', count: '20' },
      ],

      bdata: [{ name: '已投产设备', data: [] }, { name: '需投产设备', data: [] }]
    }
  }
}
</script>
<style lang="scss" scoped>
.pabel-container{
  display: block;
}
.tl-con{
  height: 100%;
  display: flex;
  flex-direction: row;
  .rg-con{
    flex: 1;
  }
  .time-line-con{
    height: 100%;
    width: 20%;
    margin: 0 5px 0 0;
  }
}
.cd-con{
  .list-card{
    display: flex;
    justify-content: space-between;
    height: 45px;
    .md{
      width: 48%;
    }
    margin: 8px 0 5px 0;
  }
}
.ch-con{
  margin: 0 0 10px 0;
  height: calc(25% - 44px);
  .chart{
    height: calc(100% - 32px);
  }
}
.tb-con{
  margin: 0 0 10px 0;
}
</style>
