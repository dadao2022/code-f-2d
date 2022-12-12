<template>
  <div class="card-class" :style="{ height: height }">
    <div class="header-title">
      <div class="edge edge-left">
        &nbsp;
      </div>
      <span class="text-class">
        <div class="content">
          <slot name="icon">
          </slot>
          {{ title }}
          <div class="effect">
            <div class="circle"></div>
            <div class="line">
              <img class="lf" src="@/assets/images/effect/card-title/lf.png" />
              <div class="mid"></div>
              <img class="rg" src="@/assets/images/effect/card-title/rg.png" />
            </div>
          </div>
        </div>
      </span>
      <div class="edge edge-right">
        123
      </div>
    </div>
    <div class="slot-class">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "50%",
    },
    title: {
      type: String,
      default: "标题",
    },
    iconName: {
      type: String,
      default: "i1",
    }
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.card-class {
  position: relative;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  border-radius: 10px;
  // 顶部内发光
  box-shadow: 0px 20px 50px inset rgba($color: #009fff, $alpha: 0.2),
    0px 0px 10px rgba($color: #4dd2ff, $alpha: 0.5);
  .header-title {
    width: 100%;
    height: 60px;
    // background-image: url("@/assets/images/public/cardtitle.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    font-family: "HY";
    position: relative;
    // 顶部边框颜色渐变
    // border-top: 2px solid #fff;
    // border-image: linear-gradient(
    //     to right,
    //     rgba($color: #009fff, $alpha: 0),
    //     rgba($color: #009fff, $alpha: 0),
    //     rgba($color: #009fff, $alpha: 1),
    //     #98fafe,
    //     rgba($color: #009fff, $alpha: 1),
    //     rgba($color: #009fff, $alpha: 0),
    //     rgba($color: #009fff, $alpha: 0)
    //   )
    //   30 30;

    .text-class {
      
      height: 100%;
      img{
        height: 70%;
        margin: 0 5px 0 0;
      }
      .content{
        height: 100%;
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        width: auto;
      }
      .effect{
        position: absolute;
        bottom: 0;
        left: 0;width: 100%;
        height: 100%;
        overflow: hidden;
        .circle{
          width: 90%;height: 100%;position: absolute;
          top: 50%;left: 5%;border-radius: 50px;
          background: radial-gradient(#3f8cd886, rgba(9, 73, 121, 0));
        }
        .line{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: absolute;top: 0%;
          width: 100%;height: 100%;
          .lf{
            height: 100%;
            position: absolute;
            left: -100%;
          }
          .mid{}
          .rg{
            height: 100%;
          }
        }
      }
    }
  }
  .header-title::before {
    content: "";
    position: absolute;
    width: 105%;
    height: 41px;
    background-image: url("@/assets/images/public/cardtop.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    left: -2.5%;
    top: -20px;
  }
  .slot-class {
    width: 100%;
    height: calc(100% - 62px);
  }
  .edge{
    width: 16%;
  }
  .edge-right{
    padding: 0 10px 0 0;
  }

  @media screen and (max-width: 2560px) {
    .header-title {
      font-size: 24px;
      height: 36px;
      background-size: 70% auto;
    }
    .slot-class {
      height: calc(100% - 40px);
    }
  }
  //   分辨率小于等于1920时
  @media screen and (max-width: 1920px) {
    .header-title {
      font-size: 16px;
      height: 36px;
      background-size: 70% auto;
    }
    .slot-class {
      height: calc(100% - 38px);
    }
  }
}
</style>
