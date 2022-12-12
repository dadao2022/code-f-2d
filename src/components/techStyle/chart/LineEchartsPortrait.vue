<template>
  <div class="echarts-class">
    <v-chart
      :option="option"
      style="width: 100%; height: 100%"
      ref="lineEcharts"
    />
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    lineData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      option: {
        grid: {
          top: "10",
          left: "10",
          right: "20",
          bottom: "10",
          containLabel: true,
        },
        yAxis: {
          type: "category",
          data: this.lineData.xData,
          // 设置刻度标签
          axisLabel: {
            show: true,
            color: "#fff",
          },
        },
        xAxis: {
          type: "value",
          // 设置刻度标签
          axisLabel: {
            show: true,
            color: "#fff",
          },
          // 设置图内斑马线
          splitLine: {
            show: false,
          },
          // 设置图内间隔颜色
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(255,255,255,0.08)", "rgba(255,255,255,0)"],
            },
          },
        },
        series: [
          {
            data: this.lineData.yData,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(255, 255, 255, 0.1)",
              // 设置圆角
              borderRadius: [10, 10, 10, 10],
            },
            // 设置柱子颜色渐变
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#008CFF" },
                { offset: 1, color: "#00E4FF" },
              ]),
              // 柱子设置为圆角
              barBorderRadius: [10, 10, 10, 10],
            },
            // 设置柱子宽度
            barWidth: "20%",
          },
        ],
      },
    };
  },
  mounted() {
    // 屏幕分辨率发生变化时重绘图表
    window.addEventListener("resize", () => {
      this.$refs.lineEcharts.resize();
    });
  },
  methods: {},
  watch: {
    lineData: {
      handler(val) {
        this.option.xAxis.data = val.xData;
        this.option.series[0].data = val.yData;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts-class {
  width: 100%;
  height: 100%;
}
</style>