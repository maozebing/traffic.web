<template>
  <div class="legend">
    <div class="legend-title">
      图例
    </div>
    <div style="padding: 10px;font-size: 14px">
      <Row>
        <Col span="8">
        <div class="legend-graph">
          <div style="width: 40px;height: 5px;background-color: #6CFF00"></div>
        </div>
        </Col>
        <Col span="16">
        <div>畅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通</div>
        </Col>
      </Row>
      <Row style="margin-top: 5px">
        <Col span="8">
        <div class="legend-graph">
          <div style="width: 40px;height: 5px;background-color: #F0E800"></div>
        </div>
        </Col>
        <Col span="16">
        <div>缓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行</div>
        </Col>
      </Row>
      <Row style="margin-top: 5px">
        <Col span="8">
        <div class="legend-graph">
          <div style="width: 40px;height: 5px;background-color: #FF6600"></div>
        </div>
        </Col>
        <Col span="16">
        <div>拥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;挤</div>
        </Col>
      </Row>
      <Row style="margin-top: 5px">
        <Col span="8">
        <div class="legend-graph">
          <div style="width: 40px;height: 5px;background-color: #D20000"></div>
        </div>
        </Col>
        <Col span="16">
        <div>严重拥堵</div>
        </Col>
      </Row>
      <Row style="margin-top: 5px">
        <Col span="8">
        <div class="legend-graph">
          <Icon type="alert-circled" size="18" color="#FE4040"></Icon>
        </div>
        </Col>
        <Col span="16">
        <div>突发事件</div>
        </Col>
      </Row>
      <Row style="margin-top: 5px">
        <Col span="8">
        <div class="legend-graph">
          <Icon type="flag" size="18" color="#F1C600"></Icon>
        </div>
        </Col>
        <Col span="16">
        <div>道路施工</div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted: function () {

    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>
  @import url("../../assets/css/running-legend.css");
</style>
