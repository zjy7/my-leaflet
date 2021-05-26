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

      var mymap = L.map(this.$refs.demo0).setView([51.505, -0.09], 13);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: "pk.eyJ1Ijoiemp5NyIsImEiOiJja20wN2JwNDEyOGlwMnBtc205b3owOXYxIn0.yP30QKnxNauo-U__i1HXog",
        }
      ).addTo(mymap);

      var marker = L.marker([51.5, -0.09],{
        icon:
          L.icon({
            iconUrl: MarkerDeafultIcon,
            // iconSize: [38, 95],
            iconAnchor: [12, 14],
            // popupAnchor: [-3, -76],
            // shadowUrl: 'my-icon-shadow.png',
            // shadowSize: [68, 95],
            // shadowAnchor: [22, 94]
          })
      }).addTo(mymap);

      var circle = L.circle([51.508, -0.11], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(mymap);

      var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ]).addTo(mymap);

      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

      circle.bindPopup("I am a circle.");

      polygon.bindPopup("I am a polygon.");

      var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(mymap);

      function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
      }

      mymap.on("click", onMapClick);
      
      self.map = mymap;
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
