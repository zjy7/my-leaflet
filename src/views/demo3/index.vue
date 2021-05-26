<template>
  <div class="demo0">
    <div
      ref="demo0"
      class="demo"
    />
    <div class="btns">
      <el-button @click="toggleHeat">
        toggle 热力图
      </el-button>
      <el-button @click="toggleCluster">
        toggle 聚合图
      </el-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import L from "leaflet";
import "leaflet.heat";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.chinatmsproviders";
import "leaflet/dist/leaflet.css";
import addressPoints from "./realword.10000";
import MarkerDeafultIcon from '@/assets/marker-icon.png'

export default {
  data() {
    return {};
  },
  mounted() {
    this.initDemo0();
  },
  methods: {
    initDemo0() {
      let self = this;

      this.map = L.map(this.$refs.demo0).setView([-37.87, 175.475], 12);

      var tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
    },
    toggleHeat() {
      if (this.heat) {
        this.map.removeLayer(this.heat);
        this.heat = null;
      } else {
        const arr = addressPoints.map(function(p) {
          return [p[0], p[1]];
        });

        this.heat = L.heatLayer(arr).addTo(this.map);
      }
    },
    toggleCluster() {
      if (this.cluster) {
        this.map.removeLayer(this.cluster);
        this.cluster = null;
      } else {
        this.cluster = L.markerClusterGroup();

        for (var i = 0; i < addressPoints.length; i++) {
          var a = addressPoints[i];
          var title = a[2];
          var marker = L.marker(
            new L.LatLng(a[0], a[1], {
              icon: L.icon({
                iconUrl: MarkerDeafultIcon,
                iconAnchor: [12, 14],
              }),
            }),
            { title: title }
          );
          marker.bindPopup(title);
          this.cluster.addLayer(marker);
        }

        this.map.addLayer(this.cluster);
      }
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
  position relative
  .demo
    width 100%
    height 100%
  .btns
    position absolute
    width 100%
    height 100px
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    z-index 999
</style>
