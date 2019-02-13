<template>
  <div class="resource-page" :style="{height: contentHeight+'px'}">
    <div class="item-card" v-for="(item ,index) in planData"
         :style="{'marginTop': index==0?'0px':'10px'}"
         @click="planClick(item)">
      <Row>
        <Col span="4" class="item-card-title">
        <div v-if="item.highSpeedType=='国家高速'" class="g-high-road">
          {{item.highSpeedType}}
        </div>
        <div v-else-if="item.sourceType=='省级高速'" class="s-high-road">
          {{item.highSpeedType}}
        </div>
        <div v-else="" class="g-road">
          {{item.highSpeedType}}
        </div>
        </Col>
        <Col span="20" class="item-card-content">
        <Row class="item-card-content-title">
          <Col span="20" class="item-card-content-title-p">
          {{item.roadoldid}}{{item.roadName}}
          </Col>
          <Col span="4" class="item-card-content-title-time">
          {{item.time}}
          </Col>
        </Row>
        <Row class="item-card-content-remark">
          <Col span="24">
          {{item.highSpeedName}}
          </Col>
        </Row>
        </Col>
      </Row>
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
  @import url("../../../assets/css/resource.css");
</style>
