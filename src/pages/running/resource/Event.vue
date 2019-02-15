<template>
  <div class="resource-page" :style="{height: contentHeight+'px'}">
    <div class="item-card" v-for="(item ,index) in eventData"
         @click="eventClick(item)">
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
          <Col span="16" class="item-card-content-title-p">
          {{item.roadoldid}}{{item.roadName}}
          </Col>
          <Col span="8" class="item-card-content-title-time">
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
  import {api_getBursts} from '../../../axios/api/traffic_api'

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
        api_getBursts({}).then(res => {
          let _this = this;
          //格式化时间
          res.data.forEach(v => {
            v.time = _this.$moment(v.occtime).format("MM-DD HH:mm")
            /*if (_this.$moment(v.occtime) >= _this.$moment().startOf('day')) {
              v.time = _this.$moment(v.occtime).format("MM月DD日 HH:mm")
            } else if (_this.$moment(v.occtime) >= _this.$moment().subtract(1, 'days').startOf('day')) {
              v.time = '昨天'
            } else if (_this.$moment(v.occtime) >= _this.$moment().subtract(2, 'days').startOf('day')) {
              v.time = '前天'
            } else {
              v.time = '更早'
            }*/
          });
          //时间排序
          res.data.sort(function (a, b) {
            return _this.$moment(a.occtime) < _this.$moment(b.occtime) ? 1 : -1;
          });
          //赋值
          this.eventData = res.data;

          //通知地图标注事件位置
          let params = {
            type: this.$constant.LAYER_TYPE.突发事件,
            data: this.eventData
          };
          Bus.$emit("running_resource_marker_add", params);
        }).catch(err => {
        });
      },
      eventClick(item) {
        let params = {
          type: this.$constant.LAYER_TYPE.突发事件,
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
  @import url("../../../assets/css/running-resource.css");
</style>
