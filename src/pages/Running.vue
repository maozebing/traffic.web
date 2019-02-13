<template>
  <div class="running">
    <div class="running-body">
      <Head></Head>
      <Resource></Resource>
      <Details></Details>
      <Video></Video>
      <Legend></Legend>
      <Map></Map>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Head from './running/Head.vue'
  import Map from './running/Map.vue'
  import Resource from './running/Resource.vue'
  import Video from './running/Video.vue'
  import Details from './running/Details.vue'
  import Legend from './running/Legend.vue'

  export default {
    components: {
      Head, Map, Resource, Video, Details, Legend
    },
    data() {
      return {}
    },
    methods: {},
    mounted: function () {
      this.$nextTick(function () {

      })
    }
  }
</script>
<style scoped>
  @import url("../assets/css/running.css");
</style>


