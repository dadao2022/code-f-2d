<template>
  <div class="map-3d">
    <iframe id="frame3d" src="/3d/#/" width="100%" scrolling="no" height="100%" marginwidth="0" marginheight="0" frameborder="0"></iframe>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
export default {
  props: {
    curPath: {
      type: String,
      default: ''
    }
  },
  watch: {
    curPath: (n, o) => {
      let ifa = document.getElementById('frame3d')
      if (ifa) {
        ifa.contentWindow.postMessage(n, '*')
      }
    }
  },
  mounted() {
    window['Loaded'] = () => {
      let token = getToken()
      let ifa = document.getElementById('frame3d')
      ifa.contentWindow.postMessage('@TOKEN@' + token + '#' + this.$store.getters.roles[0], '*')
      console.log('send token')
    }
    let ifa = document.getElementById('frame3d')
    setTimeout(() => {
      if (ifa) {
        ifa.contentWindow.postMessage(this.curPath, '*')
      }
    }, 1000)
    
    //
    let token = getToken()
    setTimeout(() => {
      if (ifa) {
        ifa.contentWindow.postMessage('@TOKEN@' + token + '#' + this.$store.getters.roles[0], '*')
      }
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
.map-3d{
  position: absolute;
  left: 0;top: 0;
  width: 100%;height: 100%;
  iframe{
    position: absolute;
  left: 0;top: 0;
  }
}
</style>
