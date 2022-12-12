<template>
  <div class="line-text">
    <span class="circle"></span>
    <span class="txt">{{ data.title }}</span>
    <div class="process"><div class="val" :style="{ width: data.width }"></div></div>
    <span class="val">{{ data.val }}</span>
    <span class="dw">{{ data.dw }}</span>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { return { title: '入职3年以下', val: '800', width: '50%', dw: '人' } }
    }
  }
}
</script>
<style lang="scss" scoped>
.line-text{
  display: flex;
  align-items: center;
  .circle{
    width: 5px;height: 5px;
    background: #00D1FF;border-radius: 5px;
  }
  .txt{
    font-size: 14px;color: #BFDFFF;
    margin: 0 5px;
  }
  .val{
    font-family: 'Agency FB';font-size: 20px;
    color: #00CCFF;
  }
  .dw{
    font-size: 12px;color: #DCE5EB;
    margin: 0 0 0 5px;
  }
  .process{
    flex: 1;height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin: 0 5px 0 0;
    .val{
      height: 100%;width: 55%;border-radius: 8px;
      background: linear-gradient(to right, #008CFF, #00E4FF);
    }
  }
}
@media screen and (min-width: 2560px) {
  .line-text{
    .txt{
      font-size: 16px;
    }
    .val{
      font-size: 26px;
    }
  }
}
@media screen and (min-width: 3840px) {
  .circle{
    width: 7px;height: 7px;
    background: #00D1FF;border-radius: 7px;
  }
  .line-text{
    .txt{
      font-size: 18px;
    }
    .val{
      font-size: 30px;
    }
  }
}
</style>
