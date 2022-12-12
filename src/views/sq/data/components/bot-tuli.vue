<template>
  <div class="bot-tuli">
    <div class="line-tl">
      <span class="icons i1"></span>
      <span class="txt">销量目标</span>
      <span class="icons chk sel"></span>
    </div>
    <div class="line-tl">
      <span class="icons i2"></span>
      <span class="txt">实际销量</span>
      <span class="icons chk sel"></span>
    </div>
    <div class="line-tl">
      <span class="icons i3"></span>
      <span class="txt">销售额</span>
      <span class="icons chk sel"></span>
    </div>
    <div class="line-tl">
      <span class="icons i4"></span>
      <span class="txt">集团公司分布</span>
      <span class="icons chk sel"></span>
    </div>
    <div class="line-tl">
      <span class="icons i5"><span class="v">1</span><span class="t">/2</span></span>
      <span class="txt">销售量排/销售额排名</span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.bot-tuli{
  position: absolute;
  bottom: 100px;height: auto;right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;border-radius: 10px;
  width: 220px;
}
.icons{
  background: url('@/assets/images/public/tuli/icons.png') no-repeat 0 0;
}
.line-tl{
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
  .txt{font-size: 16px;color: #BFDFFF;flex: 1;margin: 0 5px 0 0;position: relative;top: -5px;}
  .chk{
    width: 22px;height: 22px;background-position: -56px -47px;
    &.sel{
      background-position: -57px -84px;
    }
  }
}
.i1{
  width: 39px;height: 35px;
  background-position: -2px -3px;
}
.i2{
  width: 39px;height: 35px;
  background-position: -2px -46px;
}
.i3{
  width: 39px;height: 35px;
  background-position: -2px -89px;
}
.i4{
  width: 39px;height: 35px;
  background-position: -2px -131px;
}
.i5{
  width: 39px;height: 29px;
  background-position: -45px 0px;
  position: relative;left: -8px;
  text-align: center;padding: 10px 0 0 0;
  .v{font-size: 14px;color: #26C9FF;font-family: 'Agency FB';}
  .t{font-size: 14px;color: #ffffff;font-family: 'Agency FB';}
}
</style>