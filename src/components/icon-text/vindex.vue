<template>
  <div class="icon-text">
    <div class="t-line"></div>
    <div class="b-line"></div>
    <img src="@/assets/images/public/text/sj.png" class="sj" />
    <div class="con">
      <slot name="image">
        <!-- <div class="lf">
          <img src="@/assets/images/public/text/person.png" />
        </div> -->
      </slot>
      <div class="mid">
        {{ title }}
      </div>
      <div class="rg" v-if="data.type == 'text'">
        <span class="num">{{ data.val }}
          <img v-if="data.up" height="50%" src="@/assets/images/public/up.png" />
        </span>
        <span class="dw">{{ data.dw ? '单位：' + data.dw : '' }}</span>
      </div>
      <div class="rg status" v-if="data.type == 'status'">
        <span class="sts">正常</span>
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
    data: {
      type: Object,
      default: () => { return { type: 'text', val: 700, dw: '个', up: true } }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-text{
  width: 100%;height: 100%;
  background: url('@/assets/images/public/text/txt_bg.png') 0 0;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 91%;padding: 5px 0;
    .lf{
      height: 25%;
      position: relative;
      img{
        height: 100%;
      }
    }
    .mid{
      font-size: 12px;
      color: #BFDFFF;
      text-align: left;
      font-family: 'HY';
      flex: 1;
      display: flex;
      align-items: center;
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
        font-family: 'HK';
        color: #4DFFD2;
        font-size: 25px;
        text-shadow: 0 0 10px #0080FF;
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
