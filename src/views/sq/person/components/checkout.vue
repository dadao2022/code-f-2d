<template>
  <sq-card class="sep" height="33%" :title="'考勤信息统计'">
    <template slot="right" v-if="curtab">
      <div class="rg-cons">
        <sq-tab :tabData="tabs" v-model="curtab" @eventChange="initTableDate"></sq-tab>
        <el-date-picker @change="initTableDate" :value-format="curtab.vformat" size="mini" class="date-picker" :clearable="false" v-model="chooseDate" :type="curtab.type" placeholder="请选择">
        </el-date-picker>
      </div>
    </template>
    <div class="card-body pabel-container h-con">
      <v-left-right-layout class="m1">
        <template slot="left">
          <sq-icon-text :data="cd1" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/package.png" />
            </template>
          </sq-icon-text>
        </template>
        <template slot="right">
          <sq-icon-text :data="cd2" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/heart.png" />
            </template>
          </sq-icon-text>
        </template>
      </v-left-right-layout>
      <div class="chart-con">
        <sq-sub-title :title="'生产车间出勤统计'"></sq-sub-title>
        <div class="chart">
          <sq-bar :xdata="bdata" :data="bdatay"></sq-bar>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqIconText from '@/components/icon-text/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqBar from '@/components/Charts/Bar.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
import { GetCheckoutStatics, GetDateList } from '@/api/person'
export default {
  components: {
    SqCard,
    SqTab,
    SqIconText,
    SqSubTitle,
    SqBar,
    VLeftRightLayout
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '日', type: 'date', vformat: 'yyyy-MM-dd' },
        { id: 2, name: '月', type: 'month', vformat: 'yyyy-MM-dd' },
        { id: 3, name: '年', type: 'year', vformat: 'yyyy-MM-dd' },
      ],
      curtab: null,
      datepickerType: 'day',
      chooseDate: '2022-08-01',

      cd1: { title: '总出勤率', dw: '%', val: 0 },
      cd2: { title: '请假人数', dw: '人', val: 0 },

      bdata: [],
      bdatay: [{ name: '', data: [] }],

      tables: {
        date: '出勤率_日',
        month: '出勤率_月',
        year: '出勤率_年'
      }
    }
  },
  mounted() {
    this.curtab = this.tabs[0]
    this.initStaticsInfo()
    this.initTableDate()
  },
  methods: {
    async initStaticsInfo() {
      let obj = await GetCheckoutStatics()
      if (obj.list.length > 0) {
        this.cd1.val = obj.list[0].total_rate
        this.cd2.val = obj.list[0].leave_count
      }
    },
    async initTableDate() {
      let table = this.tables[this.curtab.type]
      let dstr = ''
      let arr = this.chooseDate.split('-')

      let xdatas = [], yd = []
      if (this.curtab.type == 'date') {
        dstr = `${arr[0]}-${arr[1]}-${arr[2]}`
        let obj = await GetDateList(table, { where: `(${this.curtab.type},eq,${dstr})` })
        for (let o of obj.list) {
          xdatas.push(o.hour + '时')
          yd.push(o.num)
        }
      } else if (this.curtab.type == 'month') {
        dstr = `${arr[0]}-${arr[1]}`
        let obj = await GetDateList(table, { where: `(${this.curtab.type},eq,${dstr})` })
        for (let o of obj.list) {
          xdatas.push(o.date + '日')
          yd.push(o.num)
        }
      } else if (this.curtab.type == 'year') {
        dstr = `${arr[0]}`
        let obj = await GetDateList(table, { where: `(${this.curtab.type},eq,${dstr})` })
        for (let o of obj.list) {
          xdatas.push(o.month + '月')
          yd.push(o.num)
        }
      }
      let ydatas = [{ name: '', data: yd }]
      this.bdata = xdatas
      this.bdatay = ydatas
    }
  }
}
</script>
<style lang="scss" scoped>
.h-con{
  height: 100%;
  display: block;
}
.m1{
  height: 45px;
}
.rg-cons{
  display: flex;
  justify-content: space-between;
  .date-picker{
    width: 90px;
    margin-left: 5px;
  }
}
.chart-con{
  width: 100%;margin: 15px 0 0 0;
  height: calc(100% - 105px);
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
  .chart-con{
    height: calc(100% - 125px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons{
    .date-picker{
      width: 150px;
      margin-left: 15px;
    }
  }
  .chart-con{
    height: calc(100% - 140px);
  }
}
</style>
