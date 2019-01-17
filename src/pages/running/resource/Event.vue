<template>
  <div class="event" :style="{height: contentHeight+'px'}">
    <div class="event-content">
      <div class="g-high-road">
        国家高速
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            G30连霍高速K1698+100
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          连霍高速-柳河沟至树屏立交段 往机场
        </div>
      </div>
    </div>
    <div class="event-content margin-top">
      <div class="g-high-road">
        国家高速
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            G30连霍高速K1698+100
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          连霍高速-柳河沟至树屏立交段 往机场
        </div>
      </div>
    </div>
    <div class="event-content margin-top">
      <div class="g-high-road">
        国家高速
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            G30连霍高速K1698+100
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          连霍高速-柳河沟至树屏立交段 往机场
        </div>
      </div>
    </div>
    <div class="event-content margin-top">
      <div class="s-high-road">
        省级高速
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            S1兰营高速K461+200
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          武都区透房村
        </div>
      </div>
    </div>
    <div class="event-content margin-top">
      <div class="g-road">
        国省干线
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            G212兰渝线K461+200
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          武都区透房村
        </div>
      </div>
    </div>
    <div class="event-content margin-top">
      <div class="g-road">
        国省干线
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            G212兰渝线K461+200
          </div>
          <div class="content-title-time">
            08:35
          </div>
        </div>
        <div class="content-remark">
          武都区透房村
        </div>
      </div>
    </div>
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
      refreshTabPannelHeight() {
        this.contentHeight = this.$parent.$parent.$el.offsetHeight-52;
      }
    },
    mounted: function () {
      this.$root.$on('fullScreen', this.refreshTabPannelHeight);
      this.$nextTick(() => {
        this.refreshTabPannelHeight()
      });
    },
    beforeDestroy() {
      this.$root.$off('fullScreen');
    }
  }
</script>
<style scoped>
  .event {
    padding: 0px 5px 0px 5px;
    height: calc(100%);
    overflow-y: auto;
  }

  .event-content {
    height: 72px;
    border: 1px solid #CBCEDC;
    border-radius: 10px;
    padding: 10px;
  }

  .event-content .g-high-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #24B234;
    font-size: 17px;
    color: #ffffff
  }

  .event-content .s-high-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #E3B709;
    font-size: 17px;
    color: #ffffff
  }

  .event-content .g-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #09A3E3;
    font-size: 17px;
    color: #ffffff
  }

  .event-content .content {
    display: block;
    float: left;
    width: 278px;
    height: 50px;
    padding-left: 10px;
  }

  .event-content .content .content-title {
    width: 268px;
    height: 30px;
  }

  .event-content .content .content-title-body {
    display: block;
    float: left;
    width: 228px;
    height: 30px;
    text-align: left;
    font-size: 16px;
    color: #1B4C7B;
  }

  .event-content .content .content-title-time {
    display: block;
    float: left;
    width: 40px;
    height: 30px;
    text-align: right;
    font-size: 16px;
    color: #1B4C7B;
  }

  .event-content .content .content-remark {
    width: 268px;
    height: 20px;
    text-align: left;
    font-size: 13px;
  }

  .margin-top {
    margin-top: 10px;
  }
</style>
