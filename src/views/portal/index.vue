<template>
  <div>
    <el-button @click='clickProvider'>tileLayer Provider</el-button>
  </div>
</template>
<script>


export default {
  methods:{
    clickProvider(){
      window.open('https://leaflet-extras.github.io/leaflet-providers/preview/','_blank')
    },
    clickPhoto(){
      window.open('https://blog.mastermaps.com/2014/08/showing-geotagged-photos-on-leaflet-map.html','_blank')
      // http://turban.github.io/Leaflet.Photo/examples/cartodb.html
    },
    clickPluseIcon(){
      window.open('https://github.com/mapshakers/leaflet-icon-pulse','_blank')
    },
    clickSelectArea(){
      window.open('http://heyman.github.io/leaflet-areaselect/example/','_blank')
    },
    clickHotline(){
      window.open('https://iosphere.github.io/Leaflet.hotline/demo/','_blank')
    },
    clickTrackPlayBack(){
      window.open('https://linghuam.github.io/Leaflet.TrackPlayBack/#','_blank')
    },
    clickAntPath(){
      window.open('https://rubenspgcavalcante.github.io/leaflet-ant-path/','_blank')
    },
    clickLeafletChart(){
      window.open('http://wandergis.com/leaflet-echarts/','_blank')
    },
    clickStoryMap(){
      window.open('http://atlefren.github.io/storymap/','_blank')
    }
  }
}
</script>
