<template>
  <div class="com-select">
    <select>
      <option>全国</option>
      <option>中国</option>
      <option>美国</option>
    </select>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.com-select{
  width: 80px;
  height: 25px;
  background: linear-gradient(to bottom, #009FFF, #009FFF00);
  border-radius: 10px;
  box-shadow: 0 0 10px #4DD2FF;
  select{
    width: 100%;height: 100%;padding: 0 5px;
    color: #fff;font-family: 'HK';
    background: transparent;border: none;
    option{
      background: #053050;
      padding: 5px 5px;
      font-size: 14px;
    }
  }
}
</style>
