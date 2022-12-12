<template>
  <div class="app-container">
    
    <div class="left-container animated">
      <sq-card height="100%" :title="'大门系统'">

        
      </sq-card>
    </div>

    <div class="right-container animated">
      <sq-card height="100%" :title="'空调系统'">

      </sq-card>
    </div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";

export default {
  components: {
    SqCard,
  }
}
</script>
<style lang="scss" scoped>
.rg-txt{
  display: inline-block;
  margin: 5px 30px 0 0;
}
</style>

