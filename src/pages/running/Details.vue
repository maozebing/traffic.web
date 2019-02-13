<template>
  <div class="details" v-if="showDetails">
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
      <Button @click="closeClick" size="small" slot="extra">收起</Button>
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
          case _this.$constant.LAYER_TYPE.整点路况:
            this.tabLabel = "整点路况";
          case _this.$constant.LAYER_TYPE.预警信息:
            this.tabLabel = "预警信息";
          default:
            this.tabLabel = "突发事件"
        }

        //格式化时间
        params.data.occtimeStr = _this.$moment(params.data.occtime).format("YYYY-MM-DD HH:mm:ss");
        params.data.updatetimeStr = params.data.updatetime == null ? null : _this.$moment(params.data.updatetime).format("YYYY-MM-DD HH:mm:ss");

        //赋值
        _this.detailsData = params.data;
      },
      closeClick() {
        this.showDetails = false;
        Bus.$emit("running_details_close");
      }
    },
    mounted: function () {
      Bus.$on("running_resource_marker_click", this.resourceClick);
    },
    beforeDestroy() {
      Bus.$off("running_resource_marker_click");
    }
  }
</script>
<style scoped>
  @import url("../../assets/css/running-details.css");
</style>
