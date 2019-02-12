<template>
  <div class="plan" :style="{height: contentHeight+'px'}">
    <div class="plan-content" v-for="(item ,index) in planData"
         :style="{'marginTop': index==0?'0px':'10px'}"
         @click="planClick(item)">
      <div v-if="item.highSpeedType=='国家高速'" class="g-high-road">
        {{item.highSpeedType}}
      </div>
      <div v-else-if="item.sourceType=='省级高速'" class="s-high-road">
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
            {{item.time}}
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
  import {api_getPlans} from '../../../axios/api/traffic_api'

  export default {
    components: {},
    data() {
      return {
        contentHeight: 0,
        planData: []
      }
    },
    methods: {
      refreshTabPannelHeight() {
        this.contentHeight = this.$parent.$parent.$el.offsetHeight - 52;
      },
      initData() {
        api_getPlans({}).then(res => {
          //格式化时间
          res.data.forEach(v => {
            if (new Date(v.occtime) >= this.$moment(new Date()).startOf('day')) {
              v.time = this.$moment(new Date(v.occtime)).format("HH:mm")
            } else if (new Date(v.occtime) >= this.$moment(new Date()).subtract(1, 'days').startOf('day')) {
              v.time = '昨天'
            } else if (new Date(v.occtime) >= this.$moment(new Date()).subtract(2, 'days').startOf('day')) {
              v.time = '前天'
            } else {
              v.time = '更早'
            }
          });
          //时间排序
          res.data.sort(function (a, b) {
            return new Date(a.occtime) < new Date(b.occtime) ? 1 : -1;
          });
          //赋值
          this.planData = res.data;

          //通知地图标注事件位置
          let params = {
            type: this.$constant.LAYER_TYPE.道路施工,
            data: this.planData
          };
          Bus.$emit("running_resource_marker_add", params);
        }).catch(err => {
        });
      },
      planClick(item) {
        let params = {
          type: this.$constant.LAYER_TYPE.道路施工,
          data: item
        };
        Bus.$emit("running_resource_marker_click", params);
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
  .plan {
    padding: 0px 5px 0px 5px;
    height: calc(100%);
    overflow-y: auto;
  }

  .plan-content {
    height: 72px;
    border: 1px solid #CBCEDC;
    border-radius: 10px;
    padding: 10px;
  }

  .plan-content .g-high-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #24B234;
    font-size: 17px;
    color: #ffffff
  }

  .plan-content .s-high-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #E3B709;
    font-size: 17px;
    color: #ffffff
  }

  .plan-content .g-road {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    background-color: #09A3E3;
    font-size: 17px;
    color: #ffffff
  }

  .plan-content .content {
    display: block;
    float: left;
    width: 278px;
    height: 50px;
    padding-left: 10px;
  }

  .plan-content .content .content-title {
    width: 268px;
    height: 30px;
  }

  .plan-content .content .content-title-body {
    display: block;
    float: left;
    width: 228px;
    height: 30px;
    text-align: left;
    font-size: 16px;
    color: #1B4C7B;
  }

  .plan-content .content .content-title-time {
    display: block;
    float: left;
    width: 40px;
    height: 30px;
    text-align: right;
    font-size: 16px;
    color: #1B4C7B;
  }

  .plan-content .content .content-remark {
    width: 268px;
    height: 20px;
    text-align: left;
    font-size: 13px;
  }

  .margin-top {
    margin-top: 10px;
  }
</style>
