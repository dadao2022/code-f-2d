<template>
  <div class="clock-class">
    <div class="clock-left-button" :style="law ? { width: '9%' } : {}">
      <el-date-picker
        v-model="datepicker"
        type="datetime"
        placeholder="选择日期时间"
        size="mini"
        v-if="!law"
      >
      </el-date-picker>

      <div class="time-select" v-if="!isNow">
        <div
          class="time-select-button"
          v-for="item in timeButtonList"
          :key="item"
          :class="{ 'time-select-button-click': item === timeClick }"
          @click="timeClick = item"
        >
          {{ item }}
        </div>
      </div>

      <div class="play-button">
        <img src="@/assets/images/public/playbutton.png" alt="" />
      </div>

      <el-button size="mini" class="el-self-button" v-if="isNow && !law">
        实时
      </el-button>
    </div>
    <div
      class="clock-right-line"
      @click="settime"
      ref="timeline"
      :style="law ? { width: '90%' } : {}"
    >
      <div
        class="time-text"
        v-for="item in 25"
        :key="'timetext_' + item"
        :style="{
          left: (item - 1) * (100 / 24) + '%',
        }"
      >
        {{ gettimeforget(item) }}:00
      </div>
      <div class="in-clock-line" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isNow: {
      type: Boolean,
      default: true,
    },
    law: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // left
      datepicker: "",

      timeButtonList: ["10min", "20min", "30min"],
      timeClick: "10min",

      // right
      percent: 0,

      timeList: {
        hour: 0,
        minute: 0,
        second: 0,
      },
    };
  },
  mounted() {},
  methods: {
    settime(e) {
      // 获取当前鼠标点击位置占timeline的百分比
      let percent = e.offsetX / this.$refs.timeline.offsetWidth;
      console.log(percent);
      this.percent = percent * 100;

      let maxtime = 24 * 60 * 60 * 1000;
      let time = Math.round(maxtime * percent);
      let date = new Date(time);
      let hour = date.getHours() - 8;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      if (hour < 0) {
        hour = hour + 24;
      }
      this.timeList = {
        hour: hour,
        minute: minute,
        second: second,
      };
      this.$parent.initTime(this.timeList);
    },
    gettimeforget(item) {
      //   return item - 1 >= 10 ? item - 1 : "0" + item - 1;
      if (item - 1 >= 10) {
        return item - 1;
      } else {
        return "0" + (item - 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.clock-class {
  width: 98%;
  position: absolute;
  left: 1%;
  bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .clock-left-button {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .play-button {
      background-color: #054071;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #00bfff;
      cursor: pointer;
    }

    .time-select {
      border-bottom: 1px solid #00bfff;
      display: flex;
      align-items: center;
      justify-content: center;
      .time-select-button {
        font-size: 14px;
        color: #fff;
        padding: 5px 10px;
        border-bottom: 3px solid #00000000;
        cursor: pointer;
      }
      .time-select-button-click {
        border-bottom: 3px solid #00bfff;
        // 渐变
        background: linear-gradient(to top, #00bfff99, #00bfff00);
      }
    }
  }
  .clock-right-line {
    position: relative;
    width: 74%;
    height: 5px;
    border-radius: 5px;
    background-color: rgba($color: #000000, $alpha: 0);
    // 背景色渐变
    background-image: linear-gradient(
      to bottom,
      rgba($color: #074576, $alpha: 0.5),
      rgba($color: #0c2643, $alpha: 0.5)
    );
    box-shadow: 0px 20px 50px inset rgba($color: #009fff, $alpha: 0.2),
      0px 0px 10px rgba($color: #4dd2ff, $alpha: 0.5);
    cursor: pointer;
    .in-clock-line {
      border-radius: 5px;
      background: #00b2ff;
      height: 100%;
    }
    .time-text {
      position: absolute;
      top: -20px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      transform: translateX(-20px);
    }
  }
}
</style>
