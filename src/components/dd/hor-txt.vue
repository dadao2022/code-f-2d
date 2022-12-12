<template>
  <div class="icon-text-h-t">
      {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-text-h-t{
  width: 445px;height: 35px;
  background: url('@/assets/images/dd/txt2bg.png') 0 0;
  background-size: 100% 100%;
  position: relative;line-height: 35px;
  
  font-size: 18px;color: #fff;padding: 0 0 0 15px;
}
</style>
