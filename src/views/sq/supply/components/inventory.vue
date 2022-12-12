<template>
  <sq-card class="sep" height="76%" :title="'库存统计'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <template slot="left">
      <input type="text" class="inp-text" />
    </template>
    <div class="card-body pabel-container">
      <div class="list-card">
        <div class="md">
          <sq-icontext-mv :data="cd1" class="lc"> </sq-icontext-mv>
        </div>
        <div class="md">
          <sq-icontext-mv :data="cd2" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/money.png" />
            </template>
          </sq-icontext-mv>
        </div>
        <div class="md">
          <sq-icontext-mv :data="cd3" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/crash.png" />
            </template>
          </sq-icontext-mv>
        </div>
      </div>

      <div class="ch-mod" style="margin-top: 10px">
        <sq-sub-title class="title" :title="'原料库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData1">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar
              v-if="cdata1"
              :data="cdata1.data"
              :xdata="cdata1.xData"
            ></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'半成品库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData2">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar
              v-if="cdata2"
              :data="cdata2.data"
              :xdata="cdata2.xData"
            ></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'成品库存情况'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库存量总数'" :data="mData3">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar
              v-if="cdata3"
              :data="cdata3.data"
              :xdata="cdata3.xData"
            ></sq-bar>
          </div>
        </div>
      </div>

      <div class="ch-mod">
        <sq-sub-title class="title" :title="'各库房使用率'"></sq-sub-title>
        <div class="ch-ls">
          <sq-v-icon-text class="fk" :title="'库房使用率'" :data="mData4">
            <template slot="image">
              <div class="lf">
                <img src="@/assets/images/icons/gl.png" />
              </div>
            </template>
          </sq-v-icon-text>
          <div class="chart">
            <sq-bar
              v-if="cdata4"
              :data="cdata4.data"
              :xdata="cdata4.xData"
            ></sq-bar>
          </div>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqIcontextMv from "@/components/icon-text/indexmv.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqVIconText from "@/components/icon-text/vindex.vue";
import SqBar from "@/components/Charts/Bar.vue";
import {
  GetSupplyChainStockStatics,
  GetSupplyChainRawStockStatics,
  GetSupplyChainSemiStockStatics,
  GetSupplyChainFinishedStockStatics,
  GetSupplyChainStockUseRateStatics,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqIcontextMv,
    SqSubTitle,
    SqVIconText,
    SqBar,
  },
  data() {
    return {
      cd1: { title: "", dw: "", val: 0 },
      cd2: { title: "", dw: "", val: 0 },
      cd3: { title: "", dw: "", val: 0 },

      mData1: { type: "text", val: 0, dw: "箱" },
      cdata1: false,
      mData2: { type: "text", val: 0, dw: "箱" },
      cdata2: false,
      mData3: { type: "text", val: 0, dw: "箱" },
      cdata3: false,

      mData4: { type: "text", val: 0, dw: "%" },
      cdata4: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetSupplyChainStockStatics({
        limit: 10000,
      }).then((res) => {
        this.cd1 = {
          title: res.list[0].name,
          dw: "单位：" + res.list[0].unit,
          val: res.list[0].number,
        };
        this.cd2 = {
          title: res.list[1].name,
          dw: "单位：" + res.list[1].unit,
          val: res.list[1].number,
        };
        this.cd3 = {
          title: res.list[2].name,
          dw: "单位：" + res.list[2].unit,
          val: res.list[2].number,
        };
      });

      GetSupplyChainRawStockStatics().then((res) => {
        console.log(res.list);
        let xData = [],
          yData = [],
          sumNumber = 0;
        res.list.forEach((item) => {
          xData.push(item.time);
          yData.push(item.number);
          sumNumber += Number(item.number);
        });
        this.cdata1 = {
          xData: xData,
          data: [
            {
              name: "",
              data: yData,
            },
          ],
        };
        this.mData1 = { type: "text", val: sumNumber, dw: "箱" };
      });

      GetSupplyChainSemiStockStatics().then((res) => {
        console.log(res.list);
        let xData = [],
          yData = [],
          sumNumber = 0;
        res.list.forEach((item) => {
          xData.push(item.time);
          yData.push(item.number);
          sumNumber += Number(item.number);
        });
        this.cdata2 = {
          xData: xData,
          data: [
            {
              name: "",
              data: yData,
            },
          ],
        };
        this.mData2 = { type: "text", val: sumNumber, dw: "箱" };
      });

      GetSupplyChainFinishedStockStatics().then((res) => {
        console.log(res.list);
        let xData = [],
          yData = [],
          sumNumber = 0;
        res.list.forEach((item) => {
          xData.push(item.time);
          yData.push(item.number);
          sumNumber += Number(item.number);
        });
        this.cdata3 = {
          xData: xData,
          data: [
            {
              name: "",
              data: yData,
            },
          ],
        };
        this.mData3 = { type: "text", val: sumNumber, dw: "箱" };
      });

      GetSupplyChainStockUseRateStatics().then((res) => {
        console.log(res.list);
        let xData = [],
          yData = [],
          sumNumber = 0;
        res.list.forEach((item) => {
          xData.push(item.name);
          yData.push(item.number);
          sumNumber += Number(item.number);
        });
        sumNumber = (sumNumber*100 / res.list.length).toFixed(1);
        this.cdata4 = {
          xData: xData,
          data: [
            {
              name: "",
              data: yData,
            },
          ],
        };
        this.mData4 = { type: "text", val: sumNumber, dw: "%" };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  display: block;
}
.list-card {
  display: flex;
  justify-content: space-between;
  .md {
    height: 55px;
    width: 30%;
  }
}
.ch-mod {
  height: calc(25% - 54px);
  margin: 37px 0 10px 0;
  .title {
    margin: 0 0 5px 0;
  }
  .ch-ls {
    display: flex;
    height: 100%;
    justify-content: space-between;
    .fk {
      width: 15%;
    }
    .chart {
      height: 100%;
      flex: 1;
    }
  }
}
@media screen and (min-width: 2560px) {
  .ch-mod {
    height: calc(25% - 60px);
  }
}
@media screen and (min-width: 3840px) {
  .ch-mod {
    height: calc(25% - 66px);
  }
}
</style>
