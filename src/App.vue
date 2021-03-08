<template>
  <div id="app">
    <div class='btnrb'>
      <el-button @click='clickHD' class='rtbtn'>
        {{isShowHeader ? 'Hide':'Display'}} Header
      </el-button>
    </div>

    <div id="nav" v-show='isShowHeader'>
      <el-button
        v-for='(item,index) in menusArr'
        :key='"btn"+index'
        @click='clickBtn(item)'
        >
        {{item.name}}
      </el-button>
      <div id='creditContainer' v-show='false'></div>


    </div>
    <div class='mainContent' :class='{isShowHeader:!isShowHeader}'>
      <router-view/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {routes} from './router'

export default {
  methods:{
    clickHD(){
      this.$store.commit('setIsShowHeader',!this.isShowHeader)
    },
    clickBtn(item){
      this.$router.push(item.path)
    }
  },
  created(){
    this.menusArr = JSON.parse(JSON.stringify(routes))
    this.menusArr.splice(0,1)
  },
  computed:{
    isShowHeader(){
      return this.$store.state.isShowHeader
    }
  },
  data(){
    return{
      menusArr:[],
    }
  },
  name: 'App',
  components: {
  }
}
</script>
<style lang="stylus">
html,body
  padding 0
  margin 0
  width 100%
  height 100%
</style>
<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  position relative
  .btnrb
    position absolute
    right 0
    top 0
    width 132px
    height 32px
    display flex
    justify-content flex-end
    .rtbtn
      display none
    &:hover
      .rtbtn
        display block
  #nav
    height 100px
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    background-color #ccc
    width 100%
    overflow-x auto
    overflow-y hidden
    .el-button
      margin 10px 15px

  .mainContent
    width 100%
    height calc(100% - 100px)
  .mainContent.isShowHeader
    height 100%
</style>
