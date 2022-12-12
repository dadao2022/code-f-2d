<template>
  <div class="e-chart-con">
    <div class="e-chart" ref="refChart"></div>
    <div class="bg-img">
      <div class="txt">
        {{ data[0].name }}<br />
        <span class="val"
          >{{ data[0].value }}
          <span class="unit">{{ data[0].dw }}</span>
        </span>
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
  data() {
    return {
      tls: [],
    };
  },
  mounted() {
    let xdata = [];
    let ses = this.data;
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
            radius: ["40%", "50%"],
            center: ["55%", "50%"],
            avoidLabelOverlap: false,
            roseType: "area",
            label: {
              show: true,
              position: "outside",
              color: "#fff",
              formatter: (p) => {
                console.log(p);
                let inx = p.dataIndex;
                let data = p.data.name;
                let val = p.data.value;
                let dw = p.data.dw;
                console.log(inx);
                return `{a|${data}}\n{hr|}\n{c${inx}|${val}}{d|${dw}}`;
              },
              rich: {
                a: {
                  color: "#ffffff",
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                },
                hr: {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  borderWidth: 1,
                  height: 1,
                  width: "100%",
                },
                c0: {
                  fontFamily: "Segoe UI",
                  fontSize: 20,
                  color: colors[0],
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                  padding: [8, 0, 0, 0],
                },
                c1: {
                  fontFamily: "Segoe UI",
                  fontSize: 20,
                  color: colors[1],
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                  padding: [8, 0, 0, 0],
                },
                c2: {
                  fontFamily: "Segoe UI",
                  fontSize: 20,
                  color: colors[2],
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                  padding: [8, 0, 0, 0],
                },
                c3: {
                  fontFamily: "Segoe UI",
                  fontSize: 20,
                  color: colors[3],
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                  padding: [8, 0, 0, 0],
                },
                d: {
                  color: "#ffffff",
                  lineHeight: 20,
                  align: "center",
                  verticalAlign: "top",
                  padding: [14, 0, 0, 6],
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: datas,
          },
          {
            type: "pie",
            radius: ["40%", "90%"],
            center: ["55%", "50%"],
            roseType: "area",
            itemStyle: {
              opacity: 0.3,
            },
            data: datas,
            label: {
              show: false,
            },
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
  .e-chart {
    height: 100%;
    position: relative;
    width: 100%;
  }
  .bg-img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: radial-gradient(#1fa3ef00 80%, #1fa3ef28);
    top: 0%;
    left: 5%;
    border-radius: 500px;
    display: flex;
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
</style>
