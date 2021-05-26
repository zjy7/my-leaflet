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
const llp = require("leaflet-pip");

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
      this.functionaltilelayer();
      var normalm = L.tileLayer.chinaProvider("GaoDe.Normal.Map", {
        maxZoom: 18,
        minZoom: 5,
      });
      var imgm = L.tileLayer.chinaProvider("GaoDe.Satellite.Map", {
        maxZoom: 18,
        minZoom: 5,
      });
      var imga = L.tileLayer.chinaProvider("GaoDe.Satellite.Annotion", {
        maxZoom: 18,
        minZoom: 5,
      });
      var glayer = L.tileLayer.chinaProvider("Geoq.Normal.PurplishBlue", {
        maxZoom: 16,
        minZoom: 5,
      });

      var map = L.map(this.$refs.demo0, {
        attributionControl: false,
        center: [30.73600773559796, 120.80257415771486],
        zoom: 17,
        zoomControl: false,
        doubleClickZoom: false,
      });

      normalm.addTo(map);

      const latlons = [
        [30.736376605686402, 120.80033183097841],
        [30.73621983607135, 120.8051919937134],
        [30.735362209545404, 120.80493450164796],
        [30.735435984170294, 120.80041766166688],
      ];
      var polygon = L.polygon(latlons, {
        color: "red",
      }).addTo(map);
      let newA = [];

      for (let j = 0; j < latlons.length; j++) {
        newA.push([latlons[j][1], latlons[j][0]]);
      }

      let gjLayer = L.geoJson({
        features: [
          {
            type: "Feature",
            properties: { name: "", id: "" },
            geometry: {
              type: "Polygon",
              coordinates: [newA],
            },
          },
        ],
        type: "FeatureCollection",
      });

      map.on("click", (e) => {
        let point = [e.latlng.lng, e.latlng.lat];
        let results = llp.pointInLayer(point, gjLayer);
        if (results.length > 0) {
          self.$message.success("点击在多边形区域内");
        } else {
          self.$message.error("点击在多边形区域外");
        }
      });

      self.map = map;
    },
    functionaltilelayer() {
      L.TileLayer.Functional = L.TileLayer.extend({
        _tileFunction: null,

        initialize: function(tileFunction, options) {
          this._tileFunction = tileFunction;
          L.TileLayer.prototype.initialize.call(this, null, options);
        },

        getTileUrl: function(tilePoint) {
          var map = this._map,
            crs = map.options.crs,
            tileSize = this.options.tileSize,
            zoom = tilePoint.z,
            nwPoint = tilePoint.multiplyBy(tileSize),
            sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
            nw = crs.project(map.unproject(nwPoint, zoom)),
            se = crs.project(map.unproject(sePoint, zoom)),
            bbox = [nw.x, se.y, se.x, nw.y].join(",");

          // Setup object to send to tile function.
          var view = {
            bbox: bbox,
            width: tileSize,
            height: tileSize,
            zoom: zoom,
            tile: {
              row: this.options.tms
                ? this._tileNumBounds.max.y - tilePoint.y
                : tilePoint.y,
              column: tilePoint.x,
            },
            subdomain: this._getSubdomain(tilePoint),
          };

          return this._tileFunction(view);
        },

        _loadTile: function(tile, tilePoint) {
          tile._layer = this;
          tile.onload = this._tileOnLoad;
          tile.onerror = this._tileOnError;

          this._adjustTilePoint(tilePoint);
          var tileUrl = this.getTileUrl(tilePoint);

          if (typeof tileUrl === "string") {
            tile.src = tileUrl;
            this.fire("tileloadstart", {
              tile: tile,
              url: tile.src,
            });
          } else if (typeof tileUrl.then === "function") {
            // Assume we are dealing with a promise.
            var self = this;
            tileUrl.then(function(tileUrl) {
              tile.src = tileUrl;
              self.fire("tileloadstart", {
                tile: tile,
                url: tile.src,
              });
            });
          }
        },
      });

      L.tileLayer.functional = function(tileFunction, options) {
        return new L.TileLayer.Functional(tileFunction, options);
      };
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
