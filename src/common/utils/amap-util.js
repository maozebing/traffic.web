/**
 * 高度地图帮助类
 */
class MapUtil {

  /**
   * 构造函数
   */
  constructor() {

  }

  /**
   * 创建地图对象
   * @param target 地图元素
   * @param center 中心点
   * @param zooms 缩放范围
   * @param zoom 缩放级别
   * @returns {*}
   */
  createMap(target, center, zooms, zoom) {
    let map = new AMap.Map(target, {
      resizeEnable: true,
      expandZoomRange: true,
      rotateEnable: true,
      zoom: zoom,
      zooms: zooms,
      center: center,
      layers: [
        new AMap.TileLayer(),
      ]
    });
    return map;
  }

  /**
   * 设置地图样式
   * @param map 地图对象
   * @param mapStyle 地图样式
   */
  setMapStyle(map, mapStyle) {
    map.setMapStyle(mapStyle);
  }

  /**
   * 添加路况图层
   * @param map 地图对象
   */
  addTrafficLayer(map) {
    let trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 7,
      autoRefresh: true
    });
    trafficLayer.setMap(map);
  }

  /**
   * 添加图层
   * @param map
   * @returns {AMap.OverlayGroup}
   */
  addLayer(map) {
    let layer = new AMap.OverlayGroup();
    layer.enabled = true;
    layer.setMap(map);
    return layer;
  }

  /**
   * 创建标记点
   * @param longitude
   * @param latitude
   * @param image
   * @param data
   * @returns {AMap.Marker}
   */
  createMarker(longitude, latitude, image, data) {
    let marker = new AMap.Marker({
      zIndex: 9999,
      position: [longitude, latitude],
      icon: image,
      extData: data
    });
    return marker;
  }

  /**
   * 图层添加数据
   * @param layer
   * @param markers
   */
  addMarkers(layer, markers) {
    layer.addOverlays(markers);
  }

  /**
   * 标识点击事件
   * @param marker
   * @param eventFun
   * @returns {*}
   */
  addMarkerEvent(marker, eventFun) {
    let fun = AMap.event.addListener(marker, 'click', function (e) {
      eventFun(e);
    });
    return fun;
  }

  /**
   * 设置地图层级和中心点
   * @param map
   * @param zoom
   * @param center
   */
  setZoomAndCenter(map, zoom, center) {
    map.setZoomAndCenter(zoom, center); //同时设置地图层级与中心点
  }

  /**
   * 添加动画效果
   * @param marker
   */
  addAnimation(marker) {
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');
  }

  /**
   * 删除动画效果
   * @param marker
   */
  removeAnimation(marker) {
    marker.setAnimation('AMAP_ANIMATION_NONE');
  }

  /**
   * 选中行政区划
   * @param map 地图对象
   * @param area 行政区划编码
   */
  selectArea(map, area) {
    let _this = this;
    AMapUI.loadUI(['geo/DistrictExplorer'], function (DistrictExplorer) {
      //创建一个实例
      let districtExplorer = new DistrictExplorer({
        map: map
      });
      let countryCode = 100000; //全国
      districtExplorer.loadMultiAreaNodes(
        //只需加载全国和市，全国的节点包含省级
        [countryCode].concat(),
        function (error, areaNodes) {
          var countryNode = areaNodes[0];
          var path = [];
          //首先放置背景区域，这里是大陆的边界
          path.push(_this.getLongestRing(countryNode.getParentFeature()));
          path.push.apply(path, _this.getAllRings(countryNode.getSubFeatureByAdcode(area)));
          //绘制带环多边形
          new AMap.Polygon({
            bubble: false,
            lineJoin: 'round',
            strokeColor: '#0096ff ', //线颜色
            strokeOpacity: 0.8, //线透明度
            strokeWeight: 3, //线宽
            fillColor: '#0A0F23', //填充色
            fillOpacity: 0.98, //填充透明度
            map: map,
            path: path
          });
        });
    });
  }

  getAllRings(feature) {
    let coords = feature.geometry.coordinates, rings = [];
    for (var i = 0, len = coords.length; i < len; i++) {
      rings.push(coords[i][0]);
    }
    return rings;
  }

  getLongestRing(feature) {
    let rings = this.getAllRings(feature)
    rings.sort(function (a, b) {
      return b.length - a.length;
    });
    return rings[0];
  }

}

export default MapUtil
