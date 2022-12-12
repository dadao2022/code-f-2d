<template>
  <sq-card height="60%" class="sep" :title="'外汇牌价'">
    <div class="card-body pabel-container">
      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'美元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_usd"
              :xdata="data_usd.xdata"
              :data="data_usd.data"
            ></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'欧元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_eur"
              :xdata="data_eur.xdata"
              :data="data_eur.data"
            ></sq-line>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'日元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_jpy"
              :xdata="data_jpy.xdata"
              :data="data_jpy.data"
            ></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'韩元汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_krw"
              :xdata="data_krw.xdata"
              :data="data_krw.data"
            ></sq-line>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="md">
          <sq-sub-title class="title" :title="'英镑汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_gbp"
              :xdata="data_gbp.xdata"
              :data="data_gbp.data"
            ></sq-line>
          </div>
        </div>
        <div class="md">
          <sq-sub-title class="title" :title="'迪拉姆汇率'"></sq-sub-title>
          <div class="chart">
            <sq-line
              v-if="data_aed"
              :xdata="data_aed.xdata"
              :data="data_aed.data"
            ></sq-line>
          </div>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqLine from "@/components/Charts/Line.vue";
import {
  GetFinanceRateUSDStatics,
  GetFinanceRateEURStatics,
  GetFinanceRateJPYStatics,
  GetFinanceRateKRWStatics,
  GetFinanceRateGBPStatics,
  GetFinanceRateAEDStatics,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqSubTitle,
    SqLine,
  },
  data() {
    return {
      data_usd: false,
      data_eur: false,
      data_jpy: false,
      data_krw: false,
      data_gbp: false,
      data_aed: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetFinanceRateUSDStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_usd = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
      GetFinanceRateEURStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_eur = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
      GetFinanceRateJPYStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_jpy = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
      GetFinanceRateKRWStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_krw = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
      GetFinanceRateGBPStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_gbp = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
      GetFinanceRateAEDStatics().then((res) => {
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time + "月");
          data.push(item.number);
        });
        this.data_aed = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.cards {
  height: calc(33% - 13px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 15px 0;
  justify-content: space-between;
  .title {
    width: 100%;
    margin: 0 0 10px 0;
  }
  .md {
    width: 49%;
    height: 100%;
  }
}
.chart {
  flex: 1;
  height: calc(100% - 40px);
  width: 100%;
}
@media screen and (min-width: 2560px) {
  .chart {
    height: calc(100% - 60px);
  }
}
@media screen and (min-width: 3840px) {
  .chart {
    height: calc(100% - 80px);
  }
}
</style>
