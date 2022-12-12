<template>
  <sq-card height="60%" :title="'财务数据'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container h-con">
      <v-hor-mul-layout :hasHead="false" class="m1">
        <template slot="mod-0">
          <sq-icontext-mv :data="cd1"> </sq-icontext-mv>
        </template>
        <template slot="mod-1">
          <sq-icontext-mv :data="cd2">
            <template slot="image">
              <img src="@/assets/images/icons/money.png" />
            </template>
          </sq-icontext-mv>
        </template>
        <template slot="mod-2">
          <sq-icontext-mv :data="cd3">
            <template slot="image">
              <img src="@/assets/images/icons/crash.png" />
            </template>
          </sq-icontext-mv>
        </template>
      </v-hor-mul-layout>

      <div class="m2">
        <v-left-right-layout>
          <template slot="left">
            <v-hor-mul-layout :widths="['30%', '68%']">
              <template slot="m-top">
                <sq-sub-title
                  class="title"
                  :title="'全球交易额'"
                ></sq-sub-title>
              </template>
              <template slot="mod-0">
                <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData1">
                  <template slot="image">
                    <div class="lf">
                      <img src="@/assets/images/icons/gl.png" />
                    </div>
                  </template>
                </sq-v-icon-text>
              </template>
              <template slot="mod-1">
                <div class="chart">
                  <sq-pie v-if="pdata1.length > 0" :data="pdata1"></sq-pie>
                </div>
              </template>
            </v-hor-mul-layout>
          </template>
          <template slot="right">
            <v-hor-mul-layout :widths="['30%', '68%']">
              <template slot="m-top">
                <sq-sub-title
                  class="title"
                  :title="'全国交易额'"
                ></sq-sub-title>
              </template>
              <template slot="mod-0">
                <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData2">
                  <template slot="image">
                    <div class="lf">
                      <img src="@/assets/images/icons/gl.png" />
                    </div>
                  </template>
                </sq-v-icon-text>
              </template>
              <template slot="mod-1">
                <div class="chart">
                  <sq-pie v-if="pdata2.length > 0" :data="pdata2"></sq-pie>
                </div>
              </template>
            </v-hor-mul-layout>
          </template>
        </v-left-right-layout>
      </div>

      <div class="m3">
        <v-hor-mul-layout :widths="['0%', '100%']">
          <template slot="m-top">
            <sq-sub-title
              class="title"
              :title="'交易额产品线分布'"
            ></sq-sub-title>
          </template>
          <!-- <template slot="mod-0">
            <sq-v-icon-text class="fk" :title="'交易金额'" :data="mData">
              <template slot="image">
                <div class="lf">
                  <img src="@/assets/images/icons/gl.png" />
                </div>
              </template>
            </sq-v-icon-text>
          </template> -->
          <template slot="mod-1">
            <div class="chart">
              <sq-bar
                v-if="barData"
                :xdata="barData.xdata"
                :data="barData.data"
              ></sq-bar>
            </div>
          </template>
        </v-hor-mul-layout>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from "@/components/Tab/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqIcontextMv from "@/components/icon-text/indexmv.vue";
import SqVIconText from "@/components/icon-text/vindex.vue";
import SqPie from "@/components/Charts/PieRe.vue";
import SqBar from "@/components/Charts/Bar.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";

import VHorMulLayout from "@/views/components/hor-mul-layout.vue";
import VLeftRightLayout from "@/views/components/left-right-layout.vue";
import {
  GetFinanceStatics,
  GetGlobalFinanceStatics,
  GetCountryFinanceStatics,
  GetGlobalFinanceTotal,
  GetCountryFinanceTotal,
  GetFinanceProductStatics,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqIcontextMv,
    SqVIconText,
    SqPie,
    SqBar,
    SqChooseDate,
    VHorMulLayout,
    VLeftRightLayout,
  },
  data() {
    return {
      cd1: { title: "", dw: "", val: 0 },
      cd2: { title: "", dw: "", val: 0 },
      cd3: { title: "", dw: "", val: 0 },

      mData1: { type: "text", val: 0, dw: "" },
      mData2: { type: "text", val: 0, dw: "" },

      pdata1: [],
      pdata2: [],

      barData: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.pdata1 = [];
      this.pdata2 = [];
      GetFinanceStatics().then((res) => {
        this.cd1.title = res.list[0].name;
        this.cd2.title = res.list[1].name;
        this.cd3.title = res.list[2].name;

        this.cd1.dw = "单位：" + res.list[0].unit;
        this.cd2.dw = "单位：" + res.list[1].unit;
        this.cd3.dw = "单位：" + res.list[2].unit;

        this.cd1.val = res.list[0].number;
        this.cd2.val = res.list[1].number;
        this.cd3.val = res.list[2].number;
      });
      GetGlobalFinanceStatics().then((res) => {
        let pdata = [];
        for (let i of res.list) {
          pdata.push({
            value: i.number,
            name: i.name,
            dw: i.unit,
          });
        }
        this.pdata1 = pdata;
      });
      GetGlobalFinanceTotal().then((res) => {
        this.mData1.val = res.list[res.list.length - 1].number;
        this.mData1.dw = res.list[res.list.length - 1].unit;
      });
      GetCountryFinanceStatics().then((res) => {
        let pdata = [];
        for (let i of res.list) {
          pdata.push({
            value: i.number,
            name: i.name,
            dw: i.unit,
          });
        }
        this.pdata2 = pdata;
      });
      GetCountryFinanceTotal().then((res) => {
        this.mData2.val = res.list[res.list.length - 1].number;
        this.mData2.dw = res.list[res.list.length - 1].unit;
      });
      GetFinanceProductStatics().then((res) => {
        console.log(res.list);
        let xdata = [],
          data = [];
        for (let i of res.list) {
          xdata.push(i.name);
          data.push(i.number);
        }
        this.barData = {
          xdata: xdata,
          data: [{ name: "", data: data }],
        };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.h-con {
  display: block;
  height: 100%;
}
.m1 {
  height: 60px;
}
.m2 {
  height: calc(50% - 34px);
}
.m3 {
  height: calc(50% - 34px);
}
.chart {
  height: 100%;
  width: 100%;
}
.fk {
  margin: 8px 0 0 15px;
}

.rg-cons {
  display: flex;
  justify-content: space-between;
  .date-picker {
    width: 90px;
    margin-left: 5px;
  }
}

@media screen and (min-width: 2560px) {
  .rg-cons {
    .date-picker {
      width: 110px;
      margin-left: 15px;
    }
  }
  .m2 {
    height: calc(50% - 55px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons {
    .date-picker {
      width: 150px;
      margin-left: 15px;
    }
  }
  .m2 {
    height: calc(50% - 64px);
  }
}
</style>
