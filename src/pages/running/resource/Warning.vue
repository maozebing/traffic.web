<template>
  <div class="resource-page" :style="{height: contentHeight+'px'}">
    <div class="item-card" v-for="(item ,index) in warningData"
         @click="warningClick(item)">
      <Row>
        <Col span="4" class="item-card-title">
        <img :src="item.roadImage[0]" class="g-img"/>
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
  import {api_getWarnings} from '../../../axios/api/traffic_api'

  export default {
    components: {},
    data() {
      return {
        contentHeight: 0,
        warningData: []
      }
    },
    methods: {
      refreshTabPannelHeight() {
        this.contentHeight = this.$parent.$parent.$el.offsetHeight - 52;
      },
      initData() {
        api_getWarnings({
          pageIndex: 1
        }).then(res => {
          //格式化时间
          res.data.forEach(v => {
            if (this.$moment(v.occtime) >= this.$moment().startOf('day')) {
              v.time = this.$moment(v.occtime).format("HH:mm")
            } else if (this.$moment(v.occtime) >= this.$moment().subtract(1, 'days').startOf('day')) {
              v.time = '昨天'
            } else if (this.$moment(v.occtime) >= this.$moment().subtract(2, 'days').startOf('day')) {
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
          this.warningData = res.data;
        }).catch(err => {
        });
      },
      warningClick(item) {
        let params = {
          type: this.$constant.LAYER_TYPE.预警信息,
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
