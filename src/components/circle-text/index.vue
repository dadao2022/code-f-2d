<template>
  <div class="circle-text" :class="{'big': isBig}">
    <div class="txt">{{ data.label }}</div>
    <div class="bg-info">{{ data.val }}<span v-if="data.unit">{{ data.unit }}</span></div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { return {
          label: '医疗器械',
          val: '35.2%',
          unit: ''
        }
      }
    },
    isBig: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.circle-text{
  width: 100%;height: 100%;
  text-align: center;
  
  .txt{font-size: 12px;color: #BFDFFF;}
  .bg-info{
    margin: 5px 0 0 0;
    background: url('@/assets/images/public/cir-text/gj.png') no-repeat center top;
    background-size: contain;
    font-size: 18px;color: #fff;
    font-family: 'Agency FB';
    width: 100%;height: calc(100% - 20px);
    padding: 0 0 10px 0;
    span{
      font-size: 12px;margin: 0 0 0 5px;
    }
  }
  &.big{
    .txt{font-size: 16px;}
    .bg-info{font-size: 33px;margin: 15px 0 0 0;}
  }
}
@media screen and (min-width: 2560px) {
  .circle-text{
    .txt{font-size: 14px;}
    .bg-info{font-size: 20px;}
  }
}
@media screen and (min-width: 3840px) {
  .circle-text{
    .txt{font-size: 16px;}
    .bg-info{font-size: 33px;}
  }
}
</style>
