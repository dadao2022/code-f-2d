<template>
  <div class="com-slider-bar">
    <el-slider v-model="value" vertical :marks="marks" :step="25" :show-tooltip="false"></el-slider>

    <span class="com-button">全部年份</span><br/>
    <span class="com-button">停止自动播放</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      marks: {
        0: { style: { color: "#ffffff", fontFamily: 'Agency FB', fontSize: 30 }, label: '2022' },
        25: { style: { color: "#ffffff", fontFamily: 'Agency FB', fontSize: 30 }, label: '2021' },
        50: { style: { color: "#ffffff", fontFamily: 'Agency FB', fontSize: 30 }, label: '2020' },
        75: { style: { color: "#ffffff", fontFamily: 'Agency FB', fontSize: 30 }, label: '2019' },
        100: { style: { color: "#ffffff", fontFamily: 'Agency FB', fontSize: 30 }, label: '2018' },
      },
    };
  },
};
</script>
<style lang="scss">
.com-slider-bar{
  height: 300px;
  .el-slider{
    height: calc(100% - 90px);
    left: 36px;
  }
  .el-slider__bar{
    background: #00BDFF;
    width: 1px !important;
  }
  .el-slider__runway{
    background: #00BDFF;
    width: 1px !important;
  }
  .el-slider.is-vertical .el-slider__stop{
    background: linear-gradient(to bottom, #00E4FF, #008CFF);
    left: -3px;border: solid 1px #fff;
  }
  .el-slider.is-vertical .el-slider__button-wrapper{
    background: url('@/assets/images/icons/btn_year.png') no-repeat 0 0;
    background-size: 100% 100%;
    width: 60px;height: 30px;
    left: -60px;
    .el-slider__button{display: none;}
  }
}
.com-button{
  width: 100px;height: 30px;margin: 15px 0 0 0;
  display: inline-block;line-height: 30px;text-align: center;
  border: solid 1px #1385E1;background: linear-gradient(to bottom, #094A80, #0A3F66);
  font-size: 16px;color: #fff;cursor: pointer;
  border-radius: 5px;
}
</style>
