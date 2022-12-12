<template>
  <div class="map-class">
    <div :id="'map' + selfId" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  props: {
    selfId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      map: null,
      lineColor: {
        // 拥挤度颜色
        1: { color: "#00FF00", label: "顺畅" },
        2: { color: "#FFFF00", label: "轻微拥堵" },
        3: { color: "#FD6E06", label: "拥堵" },
        4: { color: "#FF0000", label: "非常拥堵" },
        5: { color: "#FF0000", label: "非常拥堵" },
      },
    };
  },
  mounted() {},
  methods: {
    initMap() {
      AMapLoader.load({
        key: "cc3b511fe63730498e1f10cdb860f833", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("map" + this.selfId, {
            mapStyle: "amap://styles/darkblue", //设置地图的显示样式
            zoom: 12, //设置地图的缩放级别
          });

          // this.init();
          this.$parent.mapinit(this.selfId);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    init(data) {
      // 清空地图上所有覆盖物
      this.map.clearMap();
      for (let i of data) {
        // 状态
        let status = i.status;
        // 线路点位列表
        let lineArr = i.coordList;

        // 线路对象列表
        let lineArrObj = [];

        for (let pNum = 0; pNum < lineArr.length; pNum += 2) {
          let lineObj = new AMap.LngLat(lineArr[pNum], lineArr[pNum + 1]);
          lineArrObj.push(lineObj);
        }

        let polyline = new AMap.Polyline({
          path: lineArrObj,
          // borderWeight: 5, // 线条宽度，默认为 1
          strokeWeight: 5,
          strokeColor: this.lineColor[status].color, // 线条颜色
          lineJoin: "round", // 折线拐点连接处样式
          // 设置线路透明度
          strokeOpacity: 1,
        });

        this.map.add(polyline);
      }

      // 使用this.j绘制点位,经纬度为log:"",lat:""格式
      // for (let i of this.j) {
      //   let marker = new AMap.Marker({
      //     position: new AMap.LngLat(i[0].lon, i[0].lat),
      //     icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      //     offset: new AMap.Pixel(-12, -12),
      //   });
      //   this.map.add(marker);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.map-class {
  width: 100%;
  height: 100%;
}
</style>
