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
    },
    clickPluseIcon(){
      window.open('https://github.com/mapshakers/leaflet-icon-pulse','_blank')
    }
    
  }
}
</script>
