<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="100%" :title="'用能情况'">
        <template slot="right" v-if="curtab">
          <div class="rg-cons">
            <sq-tab :tabData="tabs" v-model="curtab"></sq-tab>
            <el-date-picker size="mini" class="date-picker" :clearable="false" v-model="chooseDate" :type="curtab.type" placeholder="请选择">
            </el-date-picker>
          </div>
        </template>
        <div class="card-body">
          <sq-sub-title :title="'用电情况'"></sq-sub-title>
          <div class="fk-lists">
            <sq-v-icon-text class="fk" v-for="item in ydDatas" :key="item.id" :title="item.title" :data="item.data"></sq-v-icon-text>
          </div>

          <sq-sub-title :title="'生产车间用电量排名'"></sq-sub-title>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>

          <sq-sub-title :title="'用水情况'"></sq-sub-title>
          <div class="fk-lists">
            <sq-v-icon-text class="fk" v-for="item in ydDatas" :key="item.id" :title="item.title" :data="item.data"></sq-v-icon-text>
          </div>

          <sq-sub-title :title="'生产车间用水量排名'"></sq-sub-title>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>

          <sq-sub-title :title="'用气情况'"></sq-sub-title>
          <div class="fk-lists">
            <sq-v-icon-text class="fk" v-for="item in ydDatas" :key="item.id" :title="item.title" :data="item.data"></sq-v-icon-text>
          </div>

          <sq-sub-title :title="'生产车间用气量排名'"></sq-sub-title>
          <div class="chart">
            <sq-bar></sq-bar>
          </div>

        </div>
      </sq-card>
    </div>

    <div class="right-container  animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <sq-card height="30%" :title="'光伏发电'">
        <div class="con-container card-body">
          <div class="md">
            <sq-sub-title :title="'光伏发电累计数'"></sq-sub-title>
            <div class="con">
              <sq-v-icon-text class="fk" :title="'累计发电量'" :data="gfData">
                <template slot="image">
                  <div class="lf">
                    <img src="@/assets/images/icons/gf.png" />
                  </div>
                </template>
              </sq-v-icon-text>
              <div class="chart">
                <sq-line></sq-line>
              </div>
            </div>
          </div>
          <div class="md">
            <sq-sub-title :title="'光伏发电功率理论值'"></sq-sub-title>
            <div class="con">
              <sq-v-icon-text class="fk" :title="'运行功率'" :data="gfData">
                <template slot="image">
                  <div class="lf">
                    <img src="@/assets/images/icons/gl.png" />
                  </div>
                </template>
              </sq-v-icon-text>
              <div class="chart">
                <sq-line></sq-line>
              </div>
            </div>
          </div>
        </div>
      </sq-card>

      <sq-card class="sep" height="auto" :title="'碳能情况'">
        <template slot="right" v-if="curtab">
          <div class="rg-cons">
            <sq-tab :tabData="tabs" v-model="curtab"></sq-tab>
            <el-date-picker size="mini" class="date-picker" :clearable="false" v-model="chooseDate" :type="curtab.type" placeholder="请选择">
            </el-date-picker>
          </div>
        </template>
        <div class="card-body">
          <sq-sub-title :title="'碳能情况'"></sq-sub-title>
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 32%;height: 60px;">
              <sq-icontext-mv :data="cd1"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 32%;height: 60px;">
              <sq-icontext-mv :data="cd2"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 32%;height: 60px;">
              <sq-icontext-mv :data="cd3"></sq-icontext-mv>
            </div>
          </div>
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 32%;height: 80px;">
              <sq-sim-vindex :data="cd11" :title="cd11.title"></sq-sim-vindex>
            </div>
            <div class="md" style="width: 32%;height: 80px;">
              <sq-sim-vindex :data="cd12" :title="cd12.title"></sq-sim-vindex>
            </div>
            <div class="md" style="width: 32%;height: 80px;">
              <sq-sim-vindex :data="cd13" :title="cd13.title"></sq-sim-vindex>
            </div>
          </div>
          <div class="con-container" style="padding: 10px 20px;">
            <img src="@/assets/images/public/carbon.png" width="100%" />
          </div>
        </div>
      </sq-card>
      
    </div>
    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqSimVindex from '@/components/icon-text/sim-vindex.vue'
import SqBar from '@/components/Charts/Bar.vue'
import SqLine from '@/components/Charts/Line.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqVIconText,
    SqIcontextMv,
    SqSimVindex,
    SqBar,
    SqLine
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '日', type: 'date' },
        { id: 2, name: '月', type: 'month' },
        { id: 3, name: '年', type: 'year' },
      ],
      curtab: null,
      datepickerType: 'day',
      chooseDate: '',

      ydDatas: [
        { id: 1, title: '累计费用', data: { type: 'text', val: 500, dw: '万元' } },
        { id: 2, title: '累计用电量', data: { type: 'text', val: 500, dw: 'MW-h' } },
        { id: 3, title: '用电量环比上一年', data: { type: 'text', val: '50.3%', dw: '', up: true } },
        { id: 4, title: '总耗能（标煤）', data: { type: 'text', val: 500, dw: 'tce' } },
        { id: 5, title: '总耗能环比上一年', data: { type: 'text', val: '50.3%', dw: '', up: true } },
      ],

      gfData: { type: 'text', val: 500, dw: 'kW' },

      cd1: { title: '可交易量总计', dw: '单位：tCO2e', val: 9327 },
      cd2: { title: '已交易量总计', dw: '单位：tCO2e', val: 2527 },
      cd3: { title: '已交易金额', dw: '单位：元', val: 3527 },

      cd11: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '碳减排基准总值' },
      cd12: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '核定碳减排量' },
      cd13: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '实际碳排放量' },

      showPanel: true
    }
  },
  mounted() {
    this.curtab = this.tabs[0]
  }
}
</script>
<style lang="scss" scoped>
.rg-cons{
  display: flex;
  justify-content: space-between;
  .date-picker{
    width: 90px;
    margin-left: 5px;
  }
}
.fk-lists{
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 18px;
  margin: 10px 0 10px 0;
  .fk{
    margin: 0 5px;
  }
}

.con-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .md{
    width: 48%;height: calc(100% - 30px);
    .con{
      padding: 20px 0 0 0;
      height: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fk{
        width: 40%;
      }
    }
  }
}

.chart{
  flex: 1;
  width: 100%;height: 100%;
}
@media screen and (min-width: 2560px) {
  .rg-cons{
    .date-picker{
      width: 110px;
      margin-left: 15px;
    }
  }
  .card-body{
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons{
    .date-picker{
      width: 150px;
      margin-left: 15px;
    }
  }
  .card-body{
    height: calc(100% - 30px);
  }
}
</style>
