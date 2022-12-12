<template>
  <div class="sub-title" :class="{ 'simple': simple }">
    <img src="@/assets/images/public/subtitle/icon.png" />
    <span class="txt">{{ title }}</span>
    <div class="line"></div>
    <slot name="right">
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    simple: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
<style lang="scss" scoped>
.sub-title{
  display: flex;
  align-items: center;

  img{
    height: 25px;
  }
  .txt{
    color: #fff;
    font-size: 20px;
    font-family: 'HY';
    margin: 0 5px;
    text-shadow: 0 0 10px #0080FF;
  }
  .line{
    height: 2px;
    flex: 1;
    background: linear-gradient(to right, #15a9ff00 0, #15a9ff99 30%, #15A9FF00 100%);
  }
  &.simple{
    .txt{
      color: #00D1FF;
      font-family: '微软雅黑';
    }
    .line{
      display: none;
    }
  }
}
@media screen and (min-width: 2560px) {
  .sub-title{
    img{
      height: 30px;
    }
    .txt{
      font-size: 16px;
    }
  }
}
@media screen and (min-width: 3840px) {
  .sub-title{
    img{
      height: 30px;
    }
    .txt{
      font-size: 18px;
    }
  }
}
</style>
