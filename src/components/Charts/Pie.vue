<template>
  <div class="e-chart-con">
    <div class="e-chart">
      <div class="real-chart" ref="refChart"></div>
      <slot name="image">
        <div class="bg-img">
          <div class="txt">
            {{ data[0].name }}<br />
            <span class="val">
              {{ data[0].value }}
              <span class="unit">
                {{ data[0].dw }}
              </span>
            </span>
          </div>
        </div>
      </slot>
    </div>
    <div class="tl">
      <div class="line-txt" v-for="(t, ix) in tls" :key="ix">
        <span class="circle"></span>
        <span class="name">{{ t.name }}</span>
        <span class="val">{{ t.value }}</span>
        <span class="dw">{{ t.dw }}</span>
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
        { value: 1048, name: "SSS级", dw: "个" },
        { value: 735, name: "SS级", dw: "个" },
        { value: 580, name: "S级", dw: "个" },
        { value: 484, name: "S级以下", dw: "个" },
      ],
    },
    showtl: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      tls: [],
    };
  },
  mounted() {
    let xdata = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ];
    let ses = this.data;
    console.log(ses);
    this.__init(xdata, ses);
  },
  methods: {
    __init(xdata, ydata) {
      let ch = this.$echarts.init(this.$refs.refChart);

      let colors = ["#00D1FF", "#008DFF", "#FFBC4D", "#6BDE94"];
      let datas = this.data;
      let inx = 0;
      for (let s of datas) {
        this.tls.push({
          name: s.name,
          value: s.value,
          dw: s.dw,
          color: colors[inx],
        });
        inx++;
      }

      let option = {
        color: colors,
        legend: {
          top: "0%",
          left: "right",
          show: this.showtl,
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#BFDFFF",
          },
          orient: "vertical",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["70%", "90%"],
            center: ["55%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            labelLine: {
              show: false,
            },
            data: datas,
          },
        ],
      };
      ch.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.e-chart-con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  .img {
    position: absolute;
    width: 60%;
    height: 60%;
    background: radial-gradient(#1fa3ef00 80%, #1fa3ef28);
    top: 20%;
    left: 25%;
  }
  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(#1fa3ef00 80%, #1fa3ef28);
    top: 0%;
    left: 5%;
    border-radius: 500px;
    display: flex;
    z-index: -1;
    justify-content: center;
    align-items: center;
    color: #bfdfff;
    font-family: "HY";
    font-size: 14px;
    text-align: center;
    .val {
      color: #ffffff;
      font-size: 20px;
      font-family: "Agency FB";
      .unit {
        font-size: 14px;
      }
    }
  }
}
.e-chart {
  width: 60%;
  height: 100%;
  position: relative;
  .real-chart {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
.tl {
  width: 40%;
}
.line-txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .circle {
    width: 5px;
    height: 5px;
    margin: 0 3px 0 0;
    border-radius: 5px;
    background: #00d1ff;
  }
  .name {
    color: #bfdfff;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    width: 50px;
  }
  .dw {
    color: #bfdfff;
    font-size: 12px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .val {
    color: #bfdfff;
    font-size: 20px;
    font-family: "Agency FB";
    color: #00d1ff;
    text-align: right;
  }
}
@media screen and (min-width: 2560px) {
  .line-txt .name {
    font-size: 14px;
  }
  .line-txt .val {
    font-size: 24px;
  }
  .line-txt .dw {
    font-size: 14px;
  }
}
@media screen and (min-width: 3840px) {
  .line-txt .name {
    font-size: 14px;
  }
  .line-txt .val {
    font-size: 24px;
  }
  .line-txt .dw {
    font-size: 14px;
  }
}
</style>
