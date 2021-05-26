<template>
  <div class="bug0">
    能重现(来回切换点击下面两个按钮，table里"查看"会丢失)

    <el-button @click="changeType(0)">
      type=0
    </el-button>
    <el-button @click="changeType(1)">
      type=1
    </el-button>
    <span>type is {{ type }}</span>
    <div style="height:100px; background:teal;" />

    <el-table :data="contentList">
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="150"
      />
      <el-table-column
        align="center"
        prop="status"
        label="状态"
        width="150"
      />
      <el-table-column
        align="center"
        prop=""
        label="操作"
        width="250"
      >
        <template slot-scope="scope">
          <div
            v-if="type===0"
            class="operate-btns"
          >

            <template v-if="scope.row.status==='SUBMIT'">
              <span
                v-has="&quot;zonghe_plan_approve&quot;"
                @click="clickOperate(scope.row,'make','SUBMIT','shenhe')"
              >审核</span>
              <span @click="clickOperate(scope.row,'make','SUBMIT','chakan')">查看</span>
            </template>

            <template v-else-if="scope.row.status==='APPROVED'">
              <span @click="clickOperate(scope.row,'make','APPROVED','chakan')">查看</span>
            </template>

            <template v-else-if="scope.row.status==='REJECTED'">
              <span
                v-has="&quot;zonghe_plan_edit&quot;"
                @click="clickOperate(scope.row,'make','REJECTED','bianji')"
              >编辑</span>
              <span @click="clickOperate(scope.row,'make','REJECTED','chakan')">查看</span>
            </template>

            <template v-else-if="scope.row.status==='FINISH'">
              <span @click="clickOperate(scope.row,'make','FINISH','chakan')">查看</span>
            </template>
          </div>
          <div
            v-else-if="type===1"
            class="operate-btns"
          >
            <template v-if="scope.row.status==='ACCEPT'">
              <span
                v-has="&quot;zonghe_plan_finish&quot;"
                @click="clickOperate(scope.row,'receive','ACCEPT','luru')"
              >录入检查结果</span>
              <span @click="clickOperate(scope.row,'receive','ACCEPT','chakan')">查看</span>
            </template>

            <template v-else-if="scope.row.status==='UNACCEPT'">
              <span
                v-has="&quot;zonghe_plan_accept&quot;"
                @click="clickOperate(scope.row,'receive','UNACCEPT','jieshou')"
              >接收</span>
              <span @click="clickOperate(scope.row,'receive','UNACCEPT','chakan')">查看</span>
            </template>

            <template v-else-if="scope.row.status==='FINISH'">
              <span @click="clickOperate(scope.row,'receive','FINISH','chakan')">查看</span>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      contentList: [],
      type: 0
    }
  },
  created () {
    this.type = 0
    this.contentList = [
      { name: '111', status: 'SUBMIT' },
      { name: '222', status: 'APPROVED' },
      { name: '333', status: 'REJECTED' },
      { name: '444', status: 'FINISH' }
    ]
  },
  methods: {
    clickOperate () {},
    changeType (v) {
      this.type = v
      if (v === 0) {
        this.contentList = [
          { name: '111', status: 'SUBMIT' },
          { name: '222', status: 'APPROVED' },
          { name: '333', status: 'REJECTED' },
          { name: '444', status: 'FINISH' }
        ]
      } else if (v === 1) {
        this.contentList = [
          { name: '111', status: 'ACCEPT' },
          { name: '222', status: 'UNACCEPT' },
          { name: '333', status: 'FINISH' }
        ]
      }
      // this.$forceUpdate()
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
