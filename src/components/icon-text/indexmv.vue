<template>
  <div class="icon-text-mv">
    <div class="t-line"></div>
    <div class="b-line"></div>
    <img src="@/assets/images/public/text/sj.png" class="sj" />
    <div class="con">
      <div class="lf">
        <div class="net">
          <slot name="image">
            <img src="@/assets/images/public/text/money.png" />
          </slot>
        </div>
        <div class="line"></div>
      </div>
      <div class="mid">
        <span class="num">{{ data.title }}</span>
        <span class="dw">{{ data.dw }}</span>
      </div>
      <div class="rg">
        <span class="num">{{ data.val }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { return { title: '应收账款', dw: '单位：元', val: 56 } }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-text-mv{
  width: 100%;height: 100%;
  background: url('@/assets/images/public/text/txt_bg.png') center center;
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
    height: 100%;
    .lf{
      width: 20%;height: 100%;
      border-top: solid 1px #1653B8;
      border-bottom: solid 1px #1653B8;
      position: relative;
      .line{
        position: absolute;
        bottom: 0;height: 1px;
        background: #03B3CA;right: 0;
        width: 80%;
      }
      .net{
        position: absolute;
        height: 50%;top: 25%;width: 100%;
        background: url('@/assets/images/public/text/txt_net.png') center center;
        background-size: 100% 100%;
        text-align: center;font-size: 12px;
        display: flex;
        align-items: center;
        img{
          width: 80%;
        }
      }
    }
    .mid{
      font-size: 14px;
      color: #BFDFFF;
      text-align: left;
      flex: 1;
      font-family: 'HY';
      display: flex;
      flex-direction: column;
      .dw{
        font-size: 12px;
        color: #77C5FE;
        font-family: '微软雅黑';
      }
    }
    .rg{
      width: 21%;
      text-align: right;
      padding: 0 10px 0 0;
      .num{
        font-family: 'Agency FB';
        font-size: 22px;color: #fff;
      }
    }
  }
}
</style>
