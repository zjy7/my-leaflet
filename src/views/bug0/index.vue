<template>
  <div class="bug0">
    未能重现
    <span v-has="&quot;permssion0&quot;">permssion0显示</span>
    <span v-has="&quot;permssion00&quot;">permssion00不显示</span>
    <span v-has="&quot;permssion0&quot;">permssion0显示</span>

    <el-button @click="type=0">
      type=0
    </el-button>
    <el-button @click="type=1">
      type=1
    </el-button>
    <div style="height:100px; background:teal;" />
    <div
      v-if="type===0"
      class="bug00"
    >
      <template v-if="status===&quot;SUBMIT&quot;">
        <span v-has="&quot;zonghe_plan_approve&quot;">审核</span>
        <span>查看</span>
      </template>

      <template v-else-if="status===&quot;APPROVED&quot;">
        <span>查看</span>
      </template>

      <template v-else-if="status===&quot;REJECTED&quot;">
        <span v-has="&quot;zonghe_plan_edit&quot;">编辑</span>
        <span class="rck">查看</span>
      </template>

      <template v-else-if="status===&quot;FINISH&quot;">
        <span>查看</span>
      </template>
    </div>
    <div
      v-if="type===1"
      class="bug01"
    >
      <template v-if="status===&quot;SUBMIT&quot;">
        <span v-has="&quot;zonghe_plan_approve&quot;">审核</span>
        <span>查看</span>
      </template>

      <template v-else-if="status===&quot;APPROVED&quot;">
        <span>查看</span>
      </template>

      <template v-else-if="status===&quot;REJECTED&quot;">
        <span v-has="&quot;zonghe_plan_edit&quot;">编辑</span>
        <span class="rck">查看</span>
      </template>

      <template v-else-if="status===&quot;FINISH&quot;">
        <span>查看</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 0,
      status: 'REJECTED'
    }
  }
}
</script>
<style lang="stylus" scoped>
.bug0
  display flex
  flex-direction column
  >span
    height 100px
    display flex
    justify-content center
    align-items center
</style>
