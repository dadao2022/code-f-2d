<template>
  <div class="app-container">
    <div class="left-container" style="height: auto;top: 60px;">
      <!-- <div class="builds-btn">
        <div class="md">
          <span class="fk"></span>
          <div class="build-btn sel"><span>口罩生产</span></div>
        </div>
        <div class="md">
          <span class="fk" style="background: #66CCCC;"></span>
          <div class="build-btn"><span>防护服生产</span></div>
        </div>
        <div class="md">
          <span class="fk" style="background: #FFFF77;"></span>
          <div class="build-btn"><span>检测剂生产</span></div>
        </div>
        <div class="md">
          <span class="fk" style="background: #CC66FF;"></span>
          <div class="build-btn"><span>立体仓库</span></div>
        </div>
        <div class="md">
          <span class="fk" style="background: #FF80C0;"></span>
          <div class="build-btn"><span>休闲娱乐</span></div>
        </div>
      </div> -->

    </div>

  </div>
</template>
<script>
export default {
  components: {
  }
}
</script>
<style lang="scss" scoped>
.builds-btn{
  .md{
    display: flex;
    align-items: center;
    .fk{
      width: 18px;height: 18px;margin: 0 10px 0 0;
      background: #416BDC;
    }
  }
}
.nor-button{
  margin: 20px 0 0 10px;
}
@media screen and (min-width: 2560px) {
  .md{
    .fk{
      width: 24px;height: 24px;margin: 0 20px 0 0;
    }
  }
}
@media screen and (min-width: 3840px) {
  .md{
    .fk{
      width: 24px;height: 24px;margin: 0 20px 0 0;
    }
  }
}
</style>
