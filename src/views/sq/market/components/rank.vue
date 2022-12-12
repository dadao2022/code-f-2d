<template>
  <sq-card height="auto" :title="'销售排行'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body">
      <div class="list-data">
        <div class="md">
          <sq-rank title="地区销量排名" :dataList="cdata1"></sq-rank>
        </div>
        <div class="md">
          <sq-rank title="产品销量排名" :dataList="cdata2"></sq-rank>
        </div>
        <div class="md">
          <sq-rank title="地区销售额排名" :dataList="cdata3"></sq-rank>
        </div>
        <div class="md">
          <sq-rank title="产品销售额排名" :dataList="cdata4"></sq-rank>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqRank from "@/components/Rank/index.vue";
import {
  GetMarketSalesAreaRankStatics,
  GetMarketSalesProductRankStatics,
  GetMarketSalesAmountAreaRankStatics,
  GetMarketSalesAmountProductRankStatics,
} from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqSubTitle,
    SqRank,
  },
  data() {
    return {
      cdata1: [],
      cdata2: [],
      cdata3: [],
      cdata4: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetMarketSalesAreaRankStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            name: item.name,
            val: item.number,
            dw: item.unit,
          });
        });
        this.cdata1 = data;
      });
      GetMarketSalesProductRankStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            name: item.name,
            val: item.number,
            dw: item.unit,
          });
        });
        this.cdata2 = data;
      });
      GetMarketSalesAmountAreaRankStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            name: item.name,
            val: item.number,
            dw: item.unit,
          });
        });
        this.cdata3 = data;
      });
      GetMarketSalesAmountProductRankStatics().then((res) => {
        let data = [];
        res.list.forEach((item) => {
          data.push({
            name: item.name,
            val: item.number,
            dw: item.unit,
          });
        });
        this.cdata4 = data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.list-data {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .md {
    width: 48%;
    margin: 10px 0;
  }
}
</style>