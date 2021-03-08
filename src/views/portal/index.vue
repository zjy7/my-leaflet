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
    }
  }
}
</script>
