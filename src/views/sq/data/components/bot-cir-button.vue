<template>
  <div class="cir-buttons">
    <div class="md" v-for="item in cirDatas" :key="item.id" @click="handleChooseItem(item)">
      <img v-if="item.choose" src="@/assets/images/public/cirbut/sek.png" class="bg" />
      <img v-else src="@/assets/images/public/cirbut/btn.png" class="bg" />
      <div class="txt1" :class="{'fb1': !item.choose}" v-if="!item.total">{{ item.val }}</div>
      <div class="txt1 fb" v-else><b>{{ item.val }}</b><span>/{{ item.total }}</span></div>
      <div class="txt2" :class="{'fb': !item.choose}">{{ item.name }}</div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      cirDatas: [],
    }
  },
  mounted() {
    this._init()
  },
  methods: {
    _init() {
      this.cirDatas = [
        { id: 1, name: '全部产品', val: '一键还原', total: '', choose: true },
        { id: 2, name: '医疗器械', val: '1', total: '2', choose: false },
        { id: 3, name: '健康护理', val: '1', total: '2', choose: false },
        { id: 4, name: '医用卫生', val: '1', total: '2', choose: false },
        { id: 5, name: '清洁卫生', val: '1', total: '2', choose: false },
        { id: 6, name: '日常民用', val: '1', total: '2', choose: false },
        { id: 7, name: '特种劳保', val: '1', total: '2', choose: false },
        { id: 8, name: '工业防护', val: '1', total: '2', choose: false },
      ]
    },
    handleChooseItem(item) {
      this.cirDatas.forEach((v) => {
        v.choose = false
      })
      item.choose = true
    }
  }
}
</script>
<style lang="scss" scoped>
.cir-buttons{
  position: absolute;
  bottom: 0;height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9;

  .md{
    position: relative;
    width: 109px;height: 100%;
    cursor: pointer;
    .bg{
      position: absolute;bottom: 0;
      height: 100px;width: 109px;
    }
    .txt2{
      position: absolute;bottom: 0;width: 109px;
      text-align: center;font-size: 14px;color: #FFB973;
      font-family: 'HY';text-shadow: 0 0 4px #000000;
      &.fb{color: #BFDFFF;}
    }
    .txt1{
      position: absolute;top: 10px;font-size: 14px;color: #FFB973;
      font-family: 'Agency FB';text-shadow: 0 0 4px #000000;width: 40px;
      left: 40px;
      &.fb{
        top:15px;
        b{
          color: #26C9FF;
        }
      }
      &.fb1{
        color: #fff;
      }
      b{
        color: #FFB973;font-size: 28px;
      }
      span{
        color: #fff;font-size: 28px;
      }
    }
  }
}
</style>
