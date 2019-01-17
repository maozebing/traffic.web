<template>
  <div class="details">
    <Tabs type="card">
      <Tab-pane label="突发事件">

      </Tab-pane>
      <Button @click="" size="small" slot="extra">折叠</Button>
    </Tabs>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        contentHeight: 0
      }
    },
    methods: {

    },
    mounted: function () {

    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>
  .details {
    height: 150px;
    position: absolute;
    cursor: pointer;
    left: 378px;
    right: 310px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10000;
  }
  .ivu-tabs-nav-right {
    float: right;
    margin-left: 5px;
    margin-top: 3px;
  }
</style>
