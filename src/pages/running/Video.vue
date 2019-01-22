<template>
  <div class="video">
    <div class="video-control-button" v-show="!showVideoList" @click="showVideoList=true"></div>
    <div class="video-list" v-show="showVideoList">
      <Tabs type="card">
        <Tab-pane label="视频列表">

        </Tab-pane>
        <Button @click="showVideoList=false" size="small" slot="extra">折叠</Button>
      </Tabs>
    </div>
  </div>
</template>
<script>

  export default {
    components: {},
    data() {
      return {
        showVideoList: true
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
  .video .video-control-button {
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 10000;
    position: absolute;
    right: 5px;
    top: 50px;
    background-image: url("../../../static/images/btn_lukuang.png");
  }

  .video .video-list {
    width: 300px;
    height: calc(100% - 50px);
    position: absolute;
    cursor: pointer;
    right: 0px;
    top: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10000;
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

  .ivu-tabs-nav-right {
    float: right;
    margin-left: 5px;
    margin-top: 3px;
  }
</style>
