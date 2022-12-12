<template>
  <sq-card height="80%" :title="'客户统计'">
    <template slot="right">
      <sq-choose-date @eventChange="init" ref="choose"></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="list-ch">
        <div class="md">
          <sq-sub-title class="title" :title="'客户级别占比'"></sq-sub-title>
          <div class="ch-md">
            <sq-v-icon-text
              class="fk"
              :title="'客户总数'"
              :data="getSum(adata)"
            >
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/house.png" />
                </div>
              </template>
            </sq-v-icon-text>
            <div class="chart">
              <sq-pie v-if="adata" :data="adata"></sq-pie>
            </div>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'活跃客户占比'"></sq-sub-title>
          <div class="ch-md">
            <sq-v-icon-text
              class="fk"
              :title="'活跃客户'"
              :data="getSum(bdata)"
            >
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/tv.png" />
                </div>
              </template>
            </sq-v-icon-text>
            <div class="chart">
              <sq-pie v-if="bdata" :data="bdata"></sq-pie>
            </div>
          </div>
        </div>
      </div>

      <div class="ch-con" style="margin-top: 40px; height: 30%">
        <sq-sub-title class="title" :title="'客户成交统计'"></sq-sub-title>
        <div class="chart">
          <sq-bar v-if="cdata" :data="cdata.data" :xdata="cdata.xdata"></sq-bar>
        </div>
      </div>

      <div class="ch-con" style="height: 30%">
        <div class="ls-ch">
          <div class="md">
            <sq-sub-title class="title" :title="'全球客户分布'"></sq-sub-title>
            <div class="chart">
              <sq-mg-pie v-if="ddata" :data="ddata"></sq-mg-pie>
            </div>
          </div>
          <div class="md">
            <sq-sub-title class="title" :title="'全国客户分布'"></sq-sub-title>
            <div class="chart">
              <sq-mg-pie v-if="edata" :data="edata"></sq-mg-pie>
            </div>
          </div>
        </div>
      </div>

      <div class="ch-con">
        <sq-sub-title class="title" :title="'客户行业分布'"></sq-sub-title>
        <div class="ls-list">
          <div
            class="md"
            style="height: 100px"
            :style="{ width: 100 / fdata.length + '%' }"
            v-for="(item, index) in fdata"
            :key="index"
          >
            <sq-circle-text :data="item"></sq-circle-text>
          </div>
          <!-- <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div>
          <div class="md" style="width: 14.2%; height: 100px">
            <sq-circle-text></sq-circle-text>
          </div> -->
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqVIconText from "@/components/icon-text/vindex.vue";
import SqCircleText from "@/components/circle-text/index.vue";
import SqPie from "@/components/Charts/PieRe.vue";
import SqBar from "@/components/Charts/Bar.vue";
import SqMgPie from "@/components/Charts/MgPie.vue";
import {
  GetCustomerLevelStatics,
  GetCustomerActiveStatics,
  GetCustomerDealStatics,
  GetCustomerDistributionStatics,
  GetCustomerDistributionCNStatics,
  GetCustomerIndustryStatics,
  GetCustomerDealStaticsDay,
  GetCustomerDealStaticsYear,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqVIconText,
    SqCircleText,
    SqPie,
    SqBar,
    SqMgPie,
  },
  data() {
    return {
      mData: { type: "text", val: 500, dw: "个" },

      adata: false,

      bdata: false,

      cdata: false,

      ddata: false,

      edata: false,

      fdata: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.adata = false;
      GetCustomerLevelStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            value: item.number,
            name: item.name,
            dw: "个",
          });
        });
        this.adata = data;
      });

      this.bdata = false;
      GetCustomerActiveStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            value: item.number,
            name: item.name,
            dw: "个",
          });
        });
        this.bdata = data;
      });

      this.cdata = false;
      if (this.$refs.choose.curtab.id == 1) {
        GetCustomerDealStaticsDay().then((res) => {
          let data = [];
          let xdata = [];
          res.list.forEach((item) => {
            data.push(item.number);
            xdata.push(item.time);
          });
          this.cdata = {
            data: [{ name: "", data: data }],
            xdata: xdata,
          };
        });
      } else if (this.$refs.choose.curtab.id == 2) {
        GetCustomerDealStatics().then((res) => {
          let data = [];
          let xdata = [];
          res.list.forEach((item) => {
            data.push(item.number);
            xdata.push(item.time);
          });
          this.cdata = {
            data: [{ name: "", data: data }],
            xdata: xdata,
          };
        });
      } else if (this.$refs.choose.curtab.id == 3) {
        GetCustomerDealStaticsYear().then((res) => {
          let data = [];
          let xdata = [];
          res.list.forEach((item) => {
            data.push(item.number);
            xdata.push(item.time);
          });
          this.cdata = {
            data: [{ name: "", data: data }],
            xdata: xdata,
          };
        });
      }

      this.ddata = false;
      GetCustomerDistributionStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            value: item.number,
            name: item.name,
            dw: "个",
          });
        });
        this.ddata = data;
      });

      this.edata = false;
      GetCustomerDistributionCNStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            value: item.number,
            name: item.name,
            dw: "个",
          });
        });
        this.edata = data;
      });

      GetCustomerIndustryStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            label: item.name,
            val: item.number + "%",
            unit: "",
          });
        });
        this.fdata = data;
      });
    },
    getSum(data) {
      let sum = 0;
      if (data) {
        data.forEach((item) => {
          sum += Number(item.value);
        });
        return { type: "text", val: sum, dw: "个" };
      }
      return { type: "text", val: 0, dw: "个" };
    },
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  display: block;
}
.list-ch {
  display: flex;
  height: 20%;
  justify-content: space-between;
  .md {
    width: 48%;
    height: 100%;
    .ch-md {
      display: flex;
      margin: 8px 0 0 0;
      justify-content: space-between;
      height: 100%;
      .fk {
        width: 25%;
      }
      .chart {
        flex: 1;
        height: 100%;
      }
    }
  }
}
.ch-con {
  height: 20%;
  .chart {
    width: 100%;
    height: calc(100% - 40px);
  }
  .ls-ch {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .md {
      width: 48%;
      height: 100%;
    }
  }
}
.ls-list {
  display: flex;
  margin: 10px 0 0 0;
  justify-content: space-between;
  .md {
    height: 100%;
  }
}
</style>
