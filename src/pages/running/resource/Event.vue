<template>
  <div class="event" :style="{height: contentHeight+'px'}">
    <div class="event-content" v-for="(item ,index) in eventData"
         :style="{'marginTop': index==0?'0px':'10px'}">
      <div v-if="item.sourceType==1" class="g-high-road">
        {{item.highSpeedType}}
      </div>
      <div v-else-if="item.sourceType==2" class="s-high-road">
        {{item.highSpeedType}}
      </div>
      <div v-else="" class="g-road">
        {{item.highSpeedType}}
      </div>
      <div class="content">
        <div class="content-title">
          <div class="content-title-body">
            {{item.roadoldid}}{{item.roadName}}
          </div>
          <div class="content-title-time">
            {{item.occtime}}
          </div>
        </div>
        <div class="content-remark">
          {{item.highSpeedName}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Bus from '../../../bus/bus'

  export default {
    components: {},
    data() {
      return {
        contentHeight: 0,
        eventData: []
      }
    },
    methods: {
      refreshTabPannelHeight() {
        this.contentHeight = this.$parent.$parent.$el.offsetHeight - 52;
      },
      initData() {
        this.eventData = [
          {
            sourceType: 1,
            highSpeedType: '国家高速',
            roadoldid: 'G22',
            roadName: '青兰高速',
            endstake: 1872,
            highSpeedName: '青兰高速-柳沟河至树屏立交段    往兰州站',
            occtime: '11:50',
            longitude: "103.92375500000000000",
            latitude: "36.05121100000000000"
          },
          {
            sourceType: 1,
            highSpeedType: '国家高速',
            roadoldid: 'G2012',
            roadName: '定武高速',
            endstake: 323,
            highSpeedName: '定武高速-营盘水至双塔段    往双塔',
            occtime: '15:51',
            longitude: "104.29644500000000000",
            latitude: "37.42427700000000000"
          }
        ];
        let params = {
          layerType: this.$constant.LAYER_TYPE.突发事件,
          data: this.eventData
        }
        Bus.$emit("running_resource_marker_add", params);
      }
    },
    mounted: function () {
      this.$root.$on('fullScreen', this.refreshTabPannelHeight);
      this.$nextTick(() => {
        this.refreshTabPannelHeight();
        this.initData()
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
