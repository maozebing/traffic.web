<template>
  <div class="resource">
    <vue-tabs class="resource-card">
      <v-tab title="突发事件" class="resource-card">
        <Event></Event>
      </v-tab>
      <v-tab title="道路施工" class="resource-card">
        <Plan></Plan>
      </v-tab>
      <v-tab title="整点路况" class="resource-card">
        <Tmc></Tmc>
      </v-tab>
      <v-tab title="预警信息" class="resource-card">
        <Warning></Warning>
      </v-tab>
    </vue-tabs>
  </div>
</template>
<script>
  import {VueTabs, VTab} from 'vue-nav-tabs'
  import Event from './resource/Event.vue'
  import Plan from './resource/Plan.vue'
  import Tmc from './resource/Tmc.vue'
  import Warning from './resource/Warning.vue'

  export default {
    components: {
      VueTabs, VTab, Event, Plan, Tmc, Warning
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
  .resource {
    width: 368px;
    height: calc(100% - 50px);
    position: absolute;
    cursor: pointer;
    left: 0px;
    top: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 999;
  }

  .resource-card {
    height: calc(100%);
  }

</style>
<style>
  .vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {
    color: #ffffff !important;
    background-color: #1B4C7B !important;
    border: 1px solid #1B4C7B !important;
    cursor: default;
  }

  .vue-tabs .nav-tabs > li > a {
    margin-right: 0 !important;
    line-height: 1.42857;
    border: 1px solid transparent;
    border-radius: 0 !important;
  }

  .vue-tabs .nav > li > a {
    position: relative;
    display: block;
    padding: 7px 21px !important;
    height: 32px !important;
  }

  .vue-tabs .nav-tabs {
    border-bottom: 1px solid #dddee1 !important;
  }


</style>
