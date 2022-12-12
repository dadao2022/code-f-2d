<template>
  <sq-card height="30%" :title="'访客统计'">
    <template slot="right">
      <img class="rg-enter" @click="handleToggleDetail" src="@/assets/images/public/btn_rg.png" height="50%" />
      <div class="detail-panel animated"  :class="{'fadeOutLeft': !showDetail, 'fadeInLeft': showDetail, 'show': showDetail }">
        <div class="rg-search">
          <span class="lbl">搜索人名查询：</span>
          <div class="inp">
            <input type="text" v-model="params.name" />
            <i class="el-icon-search" @click="searchInfo(null)"></i>
          </div>
        </div>

        <div class="tables" v-loading="loadingDetail">
          <sq-table :columns="columns" :tableData="tableData2">
          </sq-table>
        </div>

        <div class="sq-pages">
          <el-pagination
            small :page-size.sync="params.limit"
            layout="prev, pager, next"
            :total="total" @current-change="searchInfo">
          </el-pagination>
        </div>

      </div>
    </template>
    <div class="card-body pabel-container h-con">
      <v-left-right-layout :widths="['30%', '68%']">
        <template slot="left">
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
        </template>
        <template slot="right">
          <sq-table :columns="columns" :tableData="tableData">
          </sq-table>
        </template>
      </v-left-right-layout>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqTable from '@/components/table/index.vue'

import VLeftRightLayout from '@/views/components/left-right-layout.vue'
import { GetVisitorInfo, GetVisitorStatics } from '@/api/person'
export default {
  components: {
    SqCard,
    SqIcontextMv,
    SqTable,
    VLeftRightLayout
  },
  data() {
    return {
      cd1: { title: '累计访客', dw: '单位：人', val: 0 },
      cd2: { title: '今日访客', dw: '单位：人', val: 0 },
      cd3: { title: '累计预约', dw: '单位：人', val: 0 },
      cd4: { title: '今日预约', dw: '单位：人', val: 0 },
      columns: [
        { name: '序号', prop: 'xh' },
        { name: '访客姓名', prop: 'name' },
        { name: '到厂时间', prop: 'time' },
        { name: '来源单位', prop: 'source' },
      ],
      tableData: [
      ],
      tableData2: [],
      total: 30,
      showDetail: false,
      params: {
        limit: 10,
        offset: 0,
        name: ''
      },
      loadingDetail: false
    }
  },
  mounted() {
    this.initInfo()
    this.initStaticsInfo()
    ////
    this.searchInfo(0)
  },
  methods: {
    handleToggleDetail() {
      this.showDetail = !this.showDetail
    },
    async initInfo() {
      let obj = await GetVisitorInfo({limit: 7, offset: 0})
      let arr = []
      let inx = 1
      for (let a of obj.list) {
        arr.push({ id: a.Id, xh: inx++, time: a.arrive_time, name: a.name, source: a.department })
      }
      this.tableData = arr
    },
    async initStaticsInfo() {
      let obj = await GetVisitorStatics()
      if (obj.list.length > 0) {
        this.cd1.val = obj.list[0].total_count
        this.cd2.val = obj.list[0].today_count
        this.cd3.val = obj.list[0].total_order
        this.cd4.val = obj.list[0].today_order
      }
    },
    async searchInfo(ev) {
      if (ev) {
        this.params.offset = ev - 1
      }
      this.loadingDetail = true
      let obj = await GetVisitorInfo({limit: this.params.limit, offset: this.params.offset}, this.params.name)
      this.total = obj.pageInfo.totalRows
      let arr = []
      let inx = 1
      for (let a of obj.list) {
        arr.push({ id: a.Id, xh: inx++, time: a.arrive_time, name: a.name, source: a.department })
      }
      this.tableData2 = arr
      this.loadingDetail = false
    }
  }
}
</script>
<style lang="scss">
.sq-pages{
  margin: 10px 0 0 0;
  text-align: center;
  .el-pagination button{
    background: transparent;
    i{
      color: #fff;
    }
  }
  .el-pager li{
    background: transparent;
    color: #fff;
  }
  .el-pager li.active{
    color: #4dd2ff;
  }
}
</style>
<style lang="scss" scoped>

.detail-panel{
  position: absolute;
  right: -437px;top: 0;
  width: 400px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  background: rgba(2, 9, 17, 0.9019607843);
  box-shadow: 0 0 10px #4dd2ff;
  z-index: 999;
  display: none;
  &.show{
    display: block;
  }
  .tables{
    margin-top: 10px;
  }
  
  .rg-search{
    text-align: right;width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
}

.h-con{
  display: block;
  height: 100%;
}
.lc{
  height: calc(25% - 15px);
  margin: 0 0 10px 0;
  display: inline-block;
}

.rg-enter{
  height: 20px;
  cursor: pointer;
}
@media screen and (min-width: 2560px) {
  .rg-enter{
    height: 25px;
  }
  .lc{
    height: calc(25% - 23px) !important;
    margin: 0 0 20px 0;
    display: inline-block;
  }
}
@media screen and (min-width: 3840px) {
  .rg-enter{
    height: 30px;
  }
  .lc{
    height: calc(25% - 27px) !important;
    margin: 0 0 20px 0;
    display: inline-block;
  }
}
</style>
