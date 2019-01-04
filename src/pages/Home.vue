<template>
  <div class="home-page">
    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    computed: {},
    methods: {

    },
    mounted: function () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style>
  .home-page .ivu-select-dropdown {
    background-color: rgba(0, 26, 66, 1) !important
  }

  .home-page .ivu-menu-item-group-title {
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
    font-size: 14px;
    color: #fff;
  }

  .home-page .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: rgb(255, 255, 255, 0.4);
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }

  .home-page .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover {
    color: #ffffff;
    background: #00b0ff;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-page {
    height: 100%;
  }

  .text-gradient {
    display: inline-block;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    opacity: 1;
    font-family: '微软雅黑';
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(255, 255, 255)), to(rgb(105, 121, 168)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .system-title {
    /*position: absolute;*/
    width: 100%;
    height: 46px;
    z-index: 10000;
    color: #ffffff;
  }

  .system-title-menu {
    height: 46px;
    line-height: 46px;
    /*background: rgba(4, 38, 100, 0.2)*/
    background: transparent;
  }

  .content {
    /*position: relative;*/
    /*min-height: 100%;*/
    height: calc(100% - 46px);
    padding-top: 0px;
  }

  .header-logo {
    height: 36px;
    float: left;
    position: relative;
    left: 10px;
    color: #ffffff;
  }
</style>
