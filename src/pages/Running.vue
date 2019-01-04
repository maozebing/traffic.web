<template>
  <div class="running">
    <div class="running-body">
      <Map></Map>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Map from './running/Map.vue'

  export default {
    components: {
      Map
    },
    data() {
      return {

      }
    },
    methods: {},
    mounted: function () {
      this.$nextTick(function () {

      })
    }
  }
</script>
<style scoped>
  .running {
    height: 100%;
  }

  .running-body {
    height: calc(100% - 46px);
  }
</style>


