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
  export default {
    components: {},
    data() {
      return {
        mapHeight: document.body.clientHeight,
      }
    },
    methods: {
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

        //设置甘肃省边界
        //let area = window.mapArea;
        //mapHelper.selectArea(map, area);
      }
    },
    //生命周期钩子函数
    mounted() {
      Bus.$on("running_resource_marker_add", this.addMarkers);
      this.$nextTick(() => {
        //初始化地图
        this.initMap();
      })
    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>

</style>
