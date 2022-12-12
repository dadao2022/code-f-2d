<template>
  <div class="card-class" :style="{ height: height }">
    <div class="bg"></div>
    <div class="header-title" v-if="showHeader">
      <div class="edge edge-left">
        <slot name="left">
          &nbsp;&nbsp;&nbsp;&nbsp;
        </slot>
      </div>
      <span class="text-class">
        <div class="content">
          <slot name="icon">
          </slot>
          {{ title }}
        </div>
      </span>
      <div class="edge edge-right">
        <slot name="right">
        </slot>
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
    },
    showHeader: {
      type: Boolean,
      default: true
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
  box-shadow: 0px 20px 20px inset rgba($color: #009fff, $alpha: 0.2),
    0px 0px 10px rgba($color: #4dd2ff, $alpha: 0.5);

  .bg{
    background: rgba(0, 0, 0, 0.6);
    position: absolute;left: 0;top: 0;
    width: 100%;height: 100%;z-index: -1;
  }
  .header-title {
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: "HY";

    .text-class {
      .content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        width: auto;
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
    z-index: -1;
  }
  .slot-class {
    width: 100%;
    height: calc(100% - 32px);
  }
  .edge{
    flex: 1;
    font-size: 14px;
  }
  .edge-right{
    padding: 0 5px 0 0;
    text-align: right;
    position: relative;
  }
  .edge-left{
    padding: 0 0 0 10px;
  }
}
</style>
