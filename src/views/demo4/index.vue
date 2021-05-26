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
import "leaflet.chinatmsproviders";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
// import "leaflet-draw/dist/leaflet.draw-src.css";
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
      // var modifiedDraw = L.drawLocal.extend({
      //   draw: {
      //     toolbar: {
      //       buttons: {
      //         polygon: "中文画个多边形",
      //       },
      //     },
      //   },
      // });
      var map = L.map(this.$refs.demo0, { drawControl: true }).setView(
        [51.505, -0.09],
        13
      );
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      let drawnItems = L.featureGroup().addTo(map);
      map.addControl(new L.Control.Draw({
          edit: {
              featureGroup: drawnItems,
              poly: {
                  // allowIntersection: false
              }
          },
          draw: {
              polygon: {
                  // allowIntersection: false,
                  showArea: true
              }
          }
      }));

      map.on(L.Draw.Event.CREATED, function (event) {
          var layer = event.layer;

          drawnItems.addLayer(layer);
      });

      self.map = map;

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
