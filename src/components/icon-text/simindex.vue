<template>
  <div class="icon-text-sim">
    <div class="t-line"></div>
    <div class="b-line"></div>
    <img src="@/assets/images/public/text/sj.png" class="sj" />
    <div class="con">
      <div class="lf">
        <div class="net">
          原材料合格率/不良率
        </div>
        <div class="line"></div>
      </div>
      <div class="rg">
        <span class="num">98%/2%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.icon-text-sim{
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
      width: 50%;height: 100%;
      border-top: solid 1px #1653B8;
      border-bottom: solid 1px #1653B8;
      position: relative;padding: 0 10px;
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
        text-align: center;font-size: 14px;
        color: #BFDFFF;
        font-family: 'HY';
        display: flex;
        align-items: center;
        img{
          height: 100%;
        }
      }
    }
    .mid{
      font-size: 14px;
      color: #BFDFFF;
      text-align: left;
      flex: 1;
      font-family: 'HY';
    }
    .rg{
      width: 50%;padding: 0 10px 0 0;
      text-align: right;
      .num{
        font-family: 'Agency FB';
        font-size: 22px;color: #fff;
      }
      .dw{
        font-size: 14px;
        color: #77C5FE;
        font-family: '微软雅黑';
        margin: 0 0 0 5px;
      }
    }
  }
}
</style>
