<template>
  <div class="icon-text-n-t">
    <div class="con">
      
      <div class="mid">
        {{ title }}
      </div>

      <div class="rg status">
        <span class="sts">{{ value }}</span>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    value: {
      type: String,
      default: '数据'
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-text-n-t{
  width: 100%;height: 100%;
  background: url('@/assets/images/dd/txtbg.png') 0 0;
  background-size: 100% 100%;
  position: relative;
  .t-line{
    position: absolute;left: 0;top: 0;width: 100%;height: 1px;
    background: linear-gradient(to right, rgba(31, 187, 239, 0), rgba(31, 187, 239, 0.85), rgba(31, 187, 239, 0));
  }
  .b-line{
    position: absolute;left: 0;bottom: 0;width: 100%;height: 1px;
    background: linear-gradient(to right, rgba(31, 187, 239, 0), rgba(31, 187, 239, 0.85), rgba(31, 187, 239, 0));
  }
  .sj{
    position: absolute;left: 0;top: 0;
  }
  .con{
    height: 91%;padding: 5px 0;
    text-align: center;
    line-height: 30px;
    .lf{
      height: 25%;
      position: relative;
      img{
        height: 100%;
      }
    }
    .mid{
      margin-top: 13px;
      font-size: 18px;
      color: #BFDFFF;
      text-align: left;
      font-family: 'HY';
      text-align: center;
    }
    .rg{
      height: auto;
      display: flex;white-space: nowrap;
      flex-direction: column;
      align-items: center;
      .num{
        font-family: 'Agency FB';
        font-size: 24px;color: #fff;
      }
      .dw{
        font-size: 12px;
        color: #77C5FE;
        font-family: '微软雅黑';
        height: 15px;
      }
      .sts{
        color: #ffffff;
        font-size: 18px;
      }
    }
  }
}
@media screen and (min-width: 2560px) {
  .icon-text{
    .con .mid{font-size: 14px;}
    .con .num{font-size: 28px !important;}
    .con .dw{font-size: 12px !important;}
  }
}
@media screen and (min-width: 3840px) {
  .icon-text{
    .con .mid{font-size: 16px;}
    .con .num{font-size: 30px !important;}
    .con .dw{font-size: 14px !important;}
  }
}
</style>
