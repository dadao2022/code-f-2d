<template>
  <sq-card height="auto" :title="'采购'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="ch-con">
        <div class="md">
          <sq-sub-title class="title" :title="'原料采购金额'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="cData"
              :xdata="cData.xData"
              :data="cData.data"
              :showtl="true"
              :showarea="false"
            ></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'供应商采购金额'"></sq-sub-title>
          <div class="chart">
            <sq-bar
              v-if="cdata1"
              :xdata="cdata1.xData"
              :data="cdata1.data"
              :color="2"
            ></sq-bar>
          </div>
        </div>
      </div>
      <div class="table-con">
        <sq-sub-title class="title" :title="'原料采购详情'"></sq-sub-title>
        <div class="filter">
          <sq-tab :tabData="tabs" @eventChange="tabChange" ref="tab"></sq-tab>
          <input type="text" class="inp-text" />
        </div>
        <div class="table">
          <sq-table :columns="columns" :tableData="tableDataList"> </sq-table>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqTab from "@/components/Tab/index.vue";
import SqTable from "@/components/table/index.vue";
import SqLine from "@/components/Charts/Line.vue";
import SqBar from "@/components/Charts/Bar.vue";
import {
  GetSupplyChainRawPurchaseAmountStatics,
  GetSupplyChainSupplierPurchaseAmountStatics,
  GetSupplyChainRawPurchaseDetailList,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqTab,
    SqTable,
    SqLine,
    SqBar,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "物料名称", type: "1" },
        { id: 2, name: "物料名称", type: "2" },
        { id: 3, name: "物料名称", type: "3" },
        { id: 4, name: "物料名称", type: "4" },
      ],
      columns: [
        { name: "序号", prop: "Id" },
        { name: "采购物品", prop: "name" },
        { name: "数量", prop: "number" },
        { name: "金额（万元）", prop: "money" },
        { name: "预计到货时间", prop: "time" },
        { name: "厂商", prop: "from" },
        { name: "到货状态", prop: "status" },
      ],
      tableData: [],
      tableDataList: [],
      cData: {},
      // ldata1: [
      //   { name: "原料1", data: [] },
      //   { name: "原料2", data: [] },
      //   { name: "原料3", data: [] },
      //   { name: "原料4", data: [] },
      // ],
      cdata1: {},

      tableName: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.cData = false;
      GetSupplyChainRawPurchaseAmountStatics({ limit: 10000 }).then((res) => {
        let xData = [],
          yData = [];
        res.list.forEach((item) => {
          if (xData.indexOf(item.time) == -1) {
            xData.push(item.time);
          }
          if (yData.filter((i) => i.name == item.name).length == 0) {
            yData.push({ name: item.name, data: [] });
          }
          yData.forEach((i) => {
            if (i.name == item.name) {
              i.data.push(item.number);
            }
          });

          this.cData = {
            xData: xData,
            data: yData,
          };
        });
      });
      this.cdata1 = false;
      GetSupplyChainSupplierPurchaseAmountStatics({
        limit: 10000,
      }).then((res) => {
        let xData = [],
          yData = [];
        res.list.forEach((item) => {
          xData.push(item.name);
          yData.push(item.number);
          this.cdata1 = {
            xData: xData,
            data: [{ name: "", data: yData }],
          };
        });
      });

      GetSupplyChainRawPurchaseDetailList({ limit: 10000 }).then((res) => {
        this.tableData = res.list;
        let tabList = [{ id: 1, name: "全部", type: "1" }];
        res.list.forEach((item) => {
          if (tabList.filter((i) => i.name == item.name).length == 0) {
            tabList.push({
              id: tabList.length + 1,
              name: item.name,
              type: item.name,
            });
          }
        });
        this.tabs = tabList;
        this.$refs.tab.handleClick(tabList[0]);
        this.tabChange();
      });
    },
    tabChange() {
      console.log(this.$refs.tab.curtab);
      if (this.$refs.tab.curtab.name == "全部") {
        this.tableDataList = this.tableData;
      } else {
        this.tableDataList = this.tableData.filter(
          (item) => item.name == this.$refs.tab.curtab.name
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.ch-con {
  display: flex;
  height: 150px;
  justify-content: space-between;
  .md {
    width: 48%;
    height: 100%;
    .chart {
      flex: 1;
      height: calc(100% - 30px);
    }
  }
}
.table-con {
  .filter {
    display: flex;
    margin: 10px 0 0 0;
    justify-content: space-between;
  }
  .table {
    margin: 10px 0 10px 0;
  }
}
</style>
