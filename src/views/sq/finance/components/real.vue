<template>
  <sq-card height="20%" :title="'实时基准利率'">
    <div class="card-body pabel-container">
      <div class="chart">
        <sq-bar :xdata="xdata" :data="data"></sq-bar>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqBar from "@/components/Charts/Bar.vue";
import { GetFinanceRateStatics } from "@/api/person";
export default {
  components: {
    SqCard,
    SqBar,
  },
  data() {
    return {
      xdata: [],
      data: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetFinanceRateStatics().then((res) => {
        console.log(res.list);
        let xdata = [],
          data = [];
        res.list.forEach((item) => {
          xdata.push(item.time+"月");
          data.push(item.number);
        });
        this.xdata = xdata;
        this.data = [{ name: "", data: data }];
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  height: calc(100% - 10px);
  width: 100%;
}
@media screen and (min-width: 2560px) {
  .chart {
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .chart {
    height: calc(100% - 50px);
  }
}
</style>
