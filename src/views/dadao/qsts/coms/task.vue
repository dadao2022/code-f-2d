<template>
  <div class="task-con">
    <div class="sel-con">
      <div class="dd-select shadow">
        <select class="dd-select">
          <option>大门区域</option>
          <option>其他区域</option>
        </select>
      </div>
    </div>
    
    <div class="inner"></div>
    
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      datas: [
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.task-con{
  padding: 0 7px;
  height: 350px;
  .sel-con{
    text-align: right;
  }
  
  .inner{
    width: 480px;height: 315px;
    background: #f00;margin: 10px 0 0 5px;
  }
}
</style>
