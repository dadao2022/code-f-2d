<template>
  <sq-card class="sep" height="auto" :title="'物流信息统计'">
    <template slot="right">
      <sq-choose-date></sq-choose-date>
    </template>
    <div class="card-body pabel-container">
      <div class="list-card">
        <div class="md">
          <sq-icon-text :data="cd1" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/car.png" />
            </template>
          </sq-icon-text>
        </div>
        <div class="md">
          <sq-icon-text :data="cd2" class="lc">
            <template slot="image">
              <img src="@/assets/images/icons/build.png" />
            </template>
          </sq-icon-text>
        </div>
      </div>
    </div>
  </sq-card>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqChooseDate from "@/components/ChooseDate/index.vue";
import SqIconText from "@/components/icon-text/index.vue";
import { GetSupplyChainLogisticsStatics } from "@/api/person";
export default {
  components: {
    SqCard,
    SqChooseDate,
    SqIconText,
  },
  data() {
    return {
      cd1: { title: "累计发货量", dw: "", val: 0 },
      cd2: { title: "累计收货量", dw: "", val: 0 },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      GetSupplyChainLogisticsStatics({ limit: 100 }).then((res) => {
        this.cd1.val = res.list[res.list.length - 1].innumber;
        this.cd2.val = res.list[res.list.length - 1].outnumber;

        this.cd1.dw = res.list[res.list.length - 1].unit;
        this.cd2.dw = res.list[res.list.length - 1].unit;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.list-card {
  display: flex;
  justify-content: space-between;
  height: 55px;
  .md {
    width: 48%;
  }
  margin: 0 0 10px 0;
}
</style>
