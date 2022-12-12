<template>
  <div class="e-chart-con">
    <div class="e-chart">
      <div ref="refChart" class="real-chart"></div>
      <slot name="image">
        <img src="@/assets/images/icons/sale_ch.png" class="img" />
      </slot>
    </div>
    <div class="tl">
      <div class="rg-txt">
        <div class="md-txt" v-for="(item, inx) in data" :key="inx">
          <span class="circle"></span>
          <div class="txts">
            {{ item.namelen }}
            <div class="vals">
              <span class="v">{{ item.value }}</span>
              <span class="dw">{{ item.dw }}</span>
            </div>
          </div>
        </div>
        <div class="tb" v-if="showTB">
          <span class="v">同比</span>
          <span class="dw">
            <!-- +2.3% -->
            {{ getTb() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        { name: "男性", namelen: "男性", value: 80, dw: "人" },
        { name: "女性", namelen: "女性", value: 30, dw: "人" },
      ],
    },
    showTB: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    data: {
      handler(n, o) {
        this.__init([], this.data);
      },
      deep: true,
    },
  },
  mounted() {
    let xdata = [];
    let ses = this.data;
    this.__init(xdata, ses);
  },
  methods: {
    __init(xdata, ydata) {
      let ch = this.$echarts.init(this.$refs.refChart);

      const gaugeData = [
        // {
        //   value: 20,
        //   name: '去年',
        //   title: {
        //     offsetCenter: ['-50%', '-100%']
        //   }
        // },
        // {
        //   value: 40,
        //   name: '今年',
        //   title: {
        //     offsetCenter: ['-50%', '-70%']
        //   }
        // }
      ];
      let titles = [
        { offsetCenter: ["-50%", "-100%"] },
        { offsetCenter: ["-50%", "-70%"] },
      ];
      let inx = 0;
      for (let y of ydata) {
        gaugeData.push({ value: y.value, name: y.name, title: titles[inx++] });
      }

      let option = {
        color: ["#00CDFF", "#00B59E"],
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
            },
            axisLine: {
              lineStyle: {
                width: 10,
                color: [[1, "transparent"]],
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            data: gaugeData,
            title: {
              fontSize: 12,
              show: true,
              color: "#BFDFFF",
            },
            detail: {
              show: false,
            },
          },
        ],
      };
      ch.setOption(option);
    },
    getTb() {
      let ses = this.data;
      let tb = 0;
      if (ses.length > 1) {
        tb = ses[1].value - ses[0].value;
        tb = (tb / ses[0].value) * 100;
        tb = tb.toFixed(1);
        tb = tb + "%";
        if (ses[1].value > ses[0].value) {
          tb = "+" + tb;
        }else{
          tb = "-" + tb;
        }
      }
      return tb;
    },
  },
};
</script>
<style lang="scss" scoped>
.e-chart-con {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: relative;
}
.e-chart {
  height: 100%;
  flex: 1;
  position: relative;
  .real-chart {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .img {
    position: absolute;
    width: 40%;
    height: 40%;
    left: 30%;
    top: 30%;
  }
}
.tl {
  width: 40%;
}
.rg-txt {
  .md-txt {
    display: flex;
    margin: 10px 0 0 0;
    .circle {
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: #00d1ff;
      margin: 5px 5px 0 0;
    }
    .txts {
      flex: 1;
      font-size: 12px;
      color: #bfdfff;
    }
    .vals {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .v {
        font-family: "Agency FB";
        font-size: 20px;
        color: #00d1ff;
      }
      .dw {
        font-size: 12px;
        color: #dce5eb;
      }
    }
  }

  .tb {
    border-top: solid 1px #bfdfff;
    margin: 5px 0 0 0;
    padding: 5px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .v {
      font-size: 12px;
      color: #dce5eb;
    }
    .dw {
      color: #ff7272;
      font-family: "Agency FB";
      font-size: 20px;
    }
  }
}
@media screen and (min-width: 2560px) {
  .rg-txt .md-txt .txts {
    font-size: 14px;
  }
  .rg-txt .md-txt .vals .v {
    font-size: 26px;
  }
  .rg-txt .md-txt .vals .dw {
    font-size: 14px;
  }
}
@media screen and (min-width: 3840px) {
  .rg-txt .md-txt .txts {
    font-size: 16px;
  }
  .rg-txt .md-txt .vals .v {
    font-size: 30px;
  }
  .rg-txt .md-txt .vals .dw {
    font-size: 16px;
  }
}
</style>
