<template>
  <div class="top-left-right-layout">
    <div class="t-md">
      <slot name="top"></slot>
    </div>
    <div class="ch-md">
      <div class="lf" :style="{ width: widths[0] }">
        <slot name="t-left"></slot>
      </div>
      <div class="rg" :style="{ width: widths[1] }">
        <slot name="t-right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    widths: {
      type: Array,
      default: () => ["25%", "73%"],
    },
  },
};
</script>
<style lang="scss" scoped>
.top-left-right-layout {
  height: 100%;
  width: 100%;
  .t-md{
    margin: 0 0 5px 0;
  }
  .ch-md{
    display: flex;justify-content: space-between;
    height: calc(100% - 45px);
    .lf{
      width: 25%;
      height: 100%;
      padding-left: 15px;
    }
    .rg{
      width: 73%;
      height: 100%;
    }
  }
}

@media screen and (min-width: 2560px) {
  .top-left-right-layout {
    .ch-md{
      height: calc(100% - 65px);
    }
  }
}
@media screen and (min-width: 3840px) {
  .top-left-right-layout {
    .ch-md{
      height: calc(100% - 80px);
    }
  }
}
</style>
