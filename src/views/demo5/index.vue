<template>
  <div
    ref="demo0"
    class="demo0"
  >
    leaflet-demo
  </div>
</template>
<script>
/* eslint-disable */
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'proj4'
import 'proj4leaflet'
import "leaflet.chinatmsproviders";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initDemo0();
  },
  methods: {
    initDemo0() {
      var normalMap = L.tileLayer.chinaProvider("Baidu.Normal.Map", {
          maxZoom: 18,
          minZoom: 1,
        }),
        satelliteMap = L.tileLayer.chinaProvider("Baidu.Satellite.Map", {
          maxZoom: 18,
          minZoom: 1,
        }),
        annotionMap = L.tileLayer.chinaProvider("Baidu.Satellite.Annotion", {
          maxZoom: 18,
          minZoom: 1,
        });

      var baseLayers = {
        地图: normalMap,
        影像: satelliteMap,
      };

      var overlayLayers = {
        标注: annotionMap,
      };

      var map = L.map(this.$refs.demo0, {
        crs: L.CRS.Baidu,
        minZoom: 3,
        maxZoom: 18,
        attributionControl: false,
        center: [31.59, 120.29],
        zoom: 12,
      });
      normalMap.addTo(map)
      L.control.layers(baseLayers, overlayLayers).addTo(map);
      L.control
        .zoom({
          zoomInTitle: "放大",
          zoomOutTitle: "缩小",
        })
        .addTo(map);
    },
  },
};
</script>
<style lang="stylus" scoped>
.demo0
  width 100%
  height 100%
  background #aaa
  display flex
  flex-direction columns
  align-items center
  justify-content center
</style>
