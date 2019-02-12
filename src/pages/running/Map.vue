<template>
  <div>
    <!-- 地图容器 -->
    <div id="mapNode" :style="{height: mapHeight + 'px'}"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import MapUtil from "../../common/utils/amap-util";
  import Bus from '../../bus/bus'

  let mapHelper = new MapUtil();
  let map;
  let eventLayer;
  let planLayer;
  export default {
    components: {},
    data() {
      return {
        mapHeight: document.body.clientHeight,
        selectedMarker: null
      }
    },
    methods: {
      refreshHeight() {
        this.mapHeight = document.body.clientHeight;
      },
      //初始化地图
      initMap() {
        //地图对象
        let target = 'mapNode';
        let center = window.mapCenter;
        let zooms = window.mapZooms;
        let zoom = window.mapZoom;
        map = mapHelper.createMap(target, center, zooms, zoom);

        //设置地图样式
        let mapStyle = window.mapStyle;
        mapHelper.setMapStyle(map, mapStyle);

        //实时路况图层
        mapHelper.addTrafficLayer(map);

        //初始化突发事件和道路施工图层
        eventLayer = mapHelper.addLayer(map);
        planLayer = mapHelper.addLayer(map);

        //设置甘肃省边界
        //let area = window.mapArea;
        //mapHelper.selectArea(map, area);
      },
      //添加标记位置
      addMarkers(params) {
        let image;
        let layer;
        if (params.type == this.$constant.LAYER_TYPE.突发事件) {
          image = "../../../static/images/marker_accident24.png";
          layer = eventLayer;
        } else {
          image = "../../../static/images/marker_maintain24.png";
          layer = planLayer;
        }

        let markers = [];
        params.data.forEach(v => {
          if (v.longitude != null && v.latitude != null) {
            let marker = mapHelper.createMarker(v.longitude, v.latitude, image, v);
            markers.push(marker);
          }
        });
        mapHelper.addMarkers(layer, markers);
      },
      //资源点击事件
      resourceClick(item) {
        let data = item.data;
        let layer;
        if (item.type == this.$constant.LAYER_TYPE.突发事件) {
          layer = eventLayer;
        } else if (item.type == this.$constant.LAYER_TYPE.道路施工) {
          layer = planLayer;
        } else {
          return
        }

        if (data.longitude != null && data.latitude != null) {
          mapHelper.setZoomAndCenter(map, window.mapMarkerZoom, [data.longitude, data.latitude]);
        } else {
          mapHelper.setZoomAndCenter(map, window.mapZoom, window.mapCenter);
        }
        if (this.selectedMarker != null) {
          mapHelper.removeAnimation(this.selectedMarker);
        }
        layer.eachOverlay(marker => {
          if (marker.getExtData().id === data.id) {
            mapHelper.addAnimation(marker)
            this.selectedMarker = marker;
            return
          }
        });
      },
      //详细面板关闭事件
      detailsClose() {
        if (this.selectedMarker != null) {
          mapHelper.removeAnimation(this.selectedMarker);
          mapHelper.setZoomAndCenter(map, window.mapZoom, window.mapCenter);
        }
      }
    },
    //生命周期钩子函数
    mounted() {
      this.$root.$on('fullScreen', this.refreshHeight);
      Bus.$on("running_resource_marker_add", this.addMarkers);
      Bus.$on("running_resource_marker_click", this.resourceClick);
      Bus.$on("running_details_close", this.detailsClose);
      this.$nextTick(() => {
        //初始化地图
        this.initMap();
      })
    },
    beforeDestroy() {
      this.$root.$off('fullScreen');
      Bus.$off("running_resource_marker_add");
      Bus.$off("running_resource_marker_click");
      Bus.$off("running_details_close");
    }
  }
</script>
<style scoped>

</style>
