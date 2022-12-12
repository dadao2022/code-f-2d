<template>
  <div class="time-line">
    <div class="time-point sel">
      <div class="mod">
        <span class="circle"></span>
        <span class="text">口罩200万套任务90%</span>
      </div>
    </div>
    <div class="time-point">
      <div class="mod">
        <span class="circle"></span>
        <span class="text">口罩200万套任务90%</span>
      </div>
    </div>
    <div class="time-point">
      <div class="mod">
        <span class="circle"></span>
        <span class="text">口罩200万套任务90%</span>
      </div>
    </div>
    <div class="time-point">
      <div class="mod">
        <span class="circle"></span>
        <span class="text">口罩200万套任务90%</span>
      </div>
    </div>
    <div class="time-point">
      <div class="mod">
        <span class="circle"></span>
        <span class="text">口罩200万套任务90%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.time-line{
  display: flex;
  flex-direction: column;
  width: 100%;height: 100%;
  .time-point{
    width: 100%;
    flex: 1;position: relative;
    &:before{
      content: ' ';
      position: absolute;left: 3px;top: 17px;
      width: 1px;height: calc(100% - 15px);
      background: #00BDFF;
    }
    &:last-child:before{
      display: none;
    }
    .mod{
      display: flex;
      align-items: center;
      width: 100%;
      .circle{
        width: 5px;height: 5px;
        border-radius: 5px;
        background: linear-gradient(to bottom, #00E4FF, #008CFF);
        box-shadow: 0 0 10px transparent;
        border: solid 1px transparent;
      }
      .text{
        flex: 1;
        color: #fff;
        font-size: 12px;
        margin: 0 0 0 8px;
      }
    }
    &.sel{
      .mod{
        .circle{
          box-shadow: 0 0 10px #00BFFF;
          border: solid 1px #fff;
        }
      }
    }
  }
}
</style>
