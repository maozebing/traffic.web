<template>
  <div class="running">
    <div class="running-body">
      <Head></Head>
      <Resource></Resource>
      <Details></Details>
      <Video></Video>
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

  export default {
    components: {
      Head, Map, Resource, Video,Details
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
  .running {
    height: 100%;
  }

  .running-body {
    height: calc(100% - 46px);
  }
</style>


