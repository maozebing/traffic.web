<template>
  <div class="resource">
    <Tabs type="card" class="resource-card">
      <Tab-pane label="突发事件" class="resource-card">
        <Event></Event>
      </Tab-pane>
      <Tab-pane label="道路施工">
        <Plan></Plan>
      </Tab-pane>
      <Tab-pane label="整点路况">
        <Tmc></Tmc>
      </Tab-pane>
      <Tab-pane label="预警信息">
        <Warning></Warning>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
  import Event from './resource/Event.vue'
  import Plan from './resource/Plan.vue'
  import Tmc from './resource/Tmc.vue'
  import Warning from './resource/Warning.vue'

  export default {
    components: {
      Event, Plan, Tmc, Warning
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
  .ivu-tabs-bar {
    border-bottom: 1px solid #dddee1;
    margin-bottom: 10px !important;
  }

  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    margin: 0;
    height: 31px;
    padding: 5px 18px 4px;
    border: 0 !important;
    border-radius: 0 !important;
    transition: all .3s ease-in-out;
    background: #f8f8f9;
  }

  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    height: 32px;
    padding-bottom: 5px;
    background: #1B4C7B;
    transform: translateZ(0);
    color: #ffffff;
  }

  .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    /*border-color: #57a3f3!important;*/
  }
</style>
