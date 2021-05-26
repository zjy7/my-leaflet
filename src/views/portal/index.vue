<template>
  <div class="portal">
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item
        title="第一个地图应用"
        name="1"
      >
        <el-button @click="click0">
          地图应用Hello World
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="百度"
        name="2"
      >
        <el-button @click="click5">
          百度地图-不同坐标系
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="判断是否区域内"
        name="3"
      >
        <el-button @click="click2">
          判断是否区域内
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="天地图、高德、openStreet"
        name="4"
      >
        <el-button @click="click1">
          click1
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="聚合、热力"
        name="5"
      >
        <el-button @click="click3">
          click3
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="画"
        name="6"
      >
        <el-button @click="click4">
          click4
        </el-button>
      </el-collapse-item>
      <el-collapse-item
        title="插件"
        name="7"
      >
        <div class="plugins-btns">
          <el-button @click="clickProvider">
            clickProvider
          </el-button>
          <!-- <el-button @click="clickPhoto">clickPhoto</el-button> -->
          <el-button @click="clickPluseIcon">
            clickPluseIcon
          </el-button>
          <el-button @click="clickSelectArea">
            clickSelectArea
          </el-button>
          <el-button @click="clickHotline">
            clickHotline
          </el-button>
          <el-button @click="clickTrackPlayBack">
            clickTrackPlayBack
          </el-button>
          <el-button @click="clickAntPath">
            clickAntPath
          </el-button>
          <el-button @click="clickLeafletChart">
            clickLeafletChart
          </el-button>
          <el-button @click="clickStoryMap">
            clickStoryMap
          </el-button>
          <el-button @click="clickEdgeMarker">
            clickEdgeMarker
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: []
    }
  },
  methods: {
    click0 () {
      this.$router.push('/demo0')
    },
    click5 () {
      this.$router.push('/demo5')
    },
    click2 () {
      this.$router.push('/demo2')
    },
    click1 () {
      this.$router.push('/demo1')
    },
    click3 () {
      this.$router.push('/demo3')
    },
    click4 () {
      this.$router.push('/demo4')
    },
    handleChange () {},
    clickProvider () {
      window.open(
        'https://leaflet-extras.github.io/leaflet-providers/preview/',
        '_blank'
      )
    },
    clickPhoto () {
      window.open(
        'https://blog.mastermaps.com/2014/08/showing-geotagged-photos-on-leaflet-map.html',
        '_blank'
      )
      // http://turban.github.io/Leaflet.Photo/examples/cartodb.html
    },
    clickPluseIcon () {
      window.open('http://mapshakers.com/projects/leaflet-pulse-icon/', '_blank')
    },
    clickSelectArea () {
      window.open(
        'http://heyman.github.io/leaflet-areaselect/example/',
        '_blank'
      )
    },
    clickHotline () {
      window.open('https://iosphere.github.io/Leaflet.hotline/demo/', '_blank')
    },
    clickTrackPlayBack () {
      window.open(
        'https://linghuam.github.io/Leaflet.TrackPlayBack/#',
        '_blank'
      )
    },
    clickAntPath () {
      window.open(
        'https://rubenspgcavalcante.github.io/leaflet-ant-path/',
        '_blank'
      )
    },
    clickLeafletChart () {
      window.open('http://wandergis.com/leaflet-echarts/', '_blank')
    },
    clickStoryMap () {
      window.open('http://atlefren.github.io/storymap/', '_blank')
    },
    clickEdgeMarker () {
      window.open('http://ubergesundheit.github.io/Leaflet.EdgeMarker/', '_blank')
    }
  }
}
</script>
<style lang="stylus" scoped>
.portal
  width 100%
  box-sizing border-box
  display flex
  flex-direction column
  padding 100px 300px
</style>
<style lang="stylus">
.plugins-btns
  display flex
  flex-direction column
  align-items center
  .el-button
    width 200px
    margin 30px
</style>
