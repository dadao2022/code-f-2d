<template>
  <sq-card class="sep" height="33%" :title="'员工信息统计'">
    <template slot="right">
      <div class="rg-search">
        <span class="lbl">人员定位：</span>
        <div class="inp">
          <input type="text" />
          <i class="el-icon-search"></i>
        </div>
      </div>
    </template>
    <div class="card-body pabel-container h-con">
      <div class="m1">
        <v-hor-mul-layout :hasHead="false" :widths="['65%', '33%']">
          <template slot="mod-0">
            <div class="list-card">
              <sq-icontext-mv :data="cd1" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/peos.png" />
                </template>
              </sq-icontext-mv>
              <sq-icontext-mv :data="cd2" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/peo.png" />
                </template>
              </sq-icontext-mv>
              <sq-icontext-mv :data="cd3" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/peos.png" />
                </template>
              </sq-icontext-mv>
              <sq-icontext-mv :data="cd4" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/peo.png" />
                </template>
              </sq-icontext-mv>
            </div>
          </template>
          <template slot="mod-1">
            <div class="sim-head">
              <img src="@/assets/images/icons/sj.png">
              <span>入职年限统计</span>
            </div>
            <div class="lists">
              <sq-line-text :data="d1" class="ls"></sq-line-text>
              <sq-line-text :data="d2" class="ls"></sq-line-text>
              <sq-line-text :data="d3" class="ls"></sq-line-text>
            </div>
          </template>
        </v-hor-mul-layout>
      </div>
      <div class="m2">
        <v-hor-mul-layout :hasHead="false">
          <template slot="mod-0">
            <div class="sim-head">
              <img src="@/assets/images/icons/sj.png">
              <span>性别占比</span>
            </div>
            <div class="chart">
              <sq-range :showTB="false" :data="xbRange">
                <template slot="image">
                  <img src="@/assets/images/icons/sex_ch.png" class="img" />
                </template>
              </sq-range>
            </div>
          </template>
          <template slot="mod-1">
            <div class="sim-head">
              <img src="@/assets/images/icons/sj.png">
              <span>教育程度占比</span>
            </div>
            <div class="chart">
              <sq-pie :data="pdata">
                <template slot="image">
                  <img src="@/assets/images/icons/person_ch.png" class="img" />
                </template>
              </sq-pie>
            </div>
          </template>
          <template slot="mod-2">
            <div class="sim-head">
              <img src="@/assets/images/icons/sj.png">
              <span>员工年龄统计</span>
            </div>
            <div class="chart">
              <sq-bar :xdata="bdata" :data="bdatay" :color="1"></sq-bar>
            </div>
          </template>
        </v-hor-mul-layout>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqLineText from '@/components/line-text/index.vue'
import SqPie from '@/components/Charts/Pie.vue'
import SqRange from '@/components/Charts/Gauge.vue'
import SqBar from '@/components/Charts/Bar.vue'

import VHorMulLayout from '@/views/components/hor-mul-layout.vue'

import { GetEmployeeStatics, GetEmployeeEducation, GetEmployeeAges } from '@/api/person'
export default {
  components: {
    SqCard,
    SqIcontextMv,
    SqLineText,
    SqPie,
    SqRange,
    SqBar,
    VHorMulLayout
  },
  data() {
    return {
      cd1: { title: '员工总数', dw: '单位：人', val: 0 },
      cd2: { title: '临时人员', dw: '单位：人', val: 0 },
      cd3: { title: '需调动员工', dw: '单位：人', val: 0 },
      cd4: { title: '需增加临时人员', dw: '单位：人', val: 0 },

      d1: { title: '入职3年以下', val: '0', width: '50%', dw: '人' },
      d2: { title: '入职3-10年', val: '0', width: '50%', dw: '人' },
      d3: { title: '入职10年以上', val: '0', width: '50%', dw: '人' },

      xbRange: [],

      pdata: [
      ],

      bdata: [],
      bdatay: [{ name: '', data: [] }]
    }
  },
  mounted() {
    this.initStaticsInfo()
    this.initEducation()
    this.initAges()
  },
  methods: {
    async initStaticsInfo() {
      let obj = await GetEmployeeStatics()
      if (obj.list.length > 0) {
        this.cd1.val = obj.list[0].total_count
        this.cd2.val = obj.list[0].temp_count
        this.cd3.val = obj.list[0].need_count
        this.cd4.val = obj.list[0].need_add_count

        this.d1.val = obj.list[0].lt3_count
        this.d2.val = obj.list[0].p3_10_count
        this.d3.val = obj.list[0].gt10_count

        let maleCount = parseInt(obj.list[0].male_count)
        let femaleCount = parseInt(obj.list[0].female_count)

        let mR = parseInt(maleCount * 100 / (maleCount + femaleCount))
        let fR = parseInt(femaleCount * 100 / (maleCount + femaleCount))

        let arr = [{ name: '男性', namelen: '男性', value: mR, dw: '人' }, { name: '女性', namelen: '女性', value: fR, dw: '人' }]
        this.xbRange = arr
      }
    },
    async initEducation() {
      let obj = await GetEmployeeEducation()
      let arr = []
      for (let o of obj.list) {
        arr.push({ value: o.value, name: o.label, dw: '个' })
      }
      this.pdata = arr
    },
    async initAges() {
      let obj = await GetEmployeeAges()
      let xdatas = [], yd = []
      for (let o of obj.list) {
        xdatas.push(o.label)
        yd.push(o.value)
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
  height: 100px;
}
.m2{
  height: calc(100% - 110px);
  margin: 10px 0 0 0;
}
.chart{
  height: calc(100% - 20px);
}
.card-body{
  .list-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .lc{
      width: 48%;
      height: 45px;margin: 0 0 10px 0;
    }
  }
  .chart-con{
    flex-direction: column;
    height: 100%;
    .chart{
      height: calc(100% - 139px);
    }
  }
  .lists{
    .ls{
      margin: 5px 0 5px 0;
    }
  }
}
.rg-search{
  display: flex;
  align-items: center;
  .lbl{
    font-size: 14px;color: #BFDFFF;
    white-space: nowrap;
  }
  .inp{
    background: #004884;
    height: 30px;border-radius: 5px;
    border: solid 1px #00BFFF;
    display: flex;
    align-items: center;
    input{
      background: transparent;border: none;
      border-right: solid 1px #fff;
      color: #fff;margin: 0 5px 0 0;
      height: 80%;padding: 0 6px;
      outline: none;width: 60px;
    }
    i{
      font-size: 18px;color: #fff;
    }
  }
}

.sim-head{
  width: 100%;
  color: #00D1FF;
  font-size: 14px;
  display: flex;
  align-items: center;
  img{
    height: 10px;margin: 0 5px 0 0;
  }
}
@media screen and (min-width: 2560px) {
  .m2{
    height: calc(100% - 120px);
  }
  .rg-search .inp input{}
}
@media screen and (min-width: 3840px) {
  .h-con{
    height: calc(100% - 20px);
  }
  .rg-search .inp input{
    width: 170px;
  }
}
</style>
