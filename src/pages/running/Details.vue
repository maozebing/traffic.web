<template>
  <div class="details" v-show="showDetails">
    <Tabs type="card">
      <Tab-pane :label="tabLabel">
        <div class="details-content">
          <table class="details-content-table">
            <tr>
              <td class="details-content-lable">信息内容：</td>
              <td>{{detailsData.reportout}}</td>
            </tr>
            <tr>
              <td>发生时间：</td>
              <td>{{detailsData.occtimeStr}}</td>
            </tr>
            <tr>
              <td>更新时间：</td>
              <td>{{detailsData.updatetimeStr}}</td>
            </tr>
          </table>
        </div>

      </Tab-pane>
      <Button @click="showDetails=false" size="small" slot="extra">收起</Button>
    </Tabs>
  </div>
</template>
<script>
  import Bus from '../../bus/bus'

  export default {
    components: {},
    data() {
      return {
        showDetails: false,
        tabLabel: '',
        detailsData: {}
      }
    },
    methods: {
      resourceClick(params) {
        let _this = this;

        //显示面板
        if (!this.showDetails) {
          this.showDetails = true;
        }

        //面板标题赋值
        switch (params.type) {
          case _this.$constant.LAYER_TYPE.突发事件:
            this.tabLabel = "突发事件";
          case _this.$constant.LAYER_TYPE.道路施工:
            this.tabLabel = "道路施工";
          default:
            this.tabLabel = "突发事件"
        }

        //格式化时间
        params.data.occtimeStr = _this.$moment(new Date(params.data.occtime)).format("YYYY-MM-DD HH:mm:ss");
        params.data.updatetimeStr = params.data.updatetime == null ? null : _this.$moment(new Date(params.data.updatetime)).format("YYYY-MM-DD HH:mm:ss");

        //赋值
        _this.detailsData = params.data;
      }
    },
    mounted: function () {
      Bus.$on("running_resource_marker_click", this.resourceClick);
    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>
  .details {
    height: 200px;
    position: absolute;
    cursor: pointer;
    left: 378px;
    right: 310px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10000;
  }

  .details-content {
    height: 150px;
    overflow-y: auto
  }

  .details-content-table {
    text-align: left;
    padding: 5px;
    color: #1B4C7B;
    font-size: 14px;
  }

  .details-content-lable {
    width: 70px;
    vertical-align: text-top
  }

  .ivu-tabs-nav-right {
    float: right;
    margin-left: 5px;
    margin-top: 3px;
  }
</style>
