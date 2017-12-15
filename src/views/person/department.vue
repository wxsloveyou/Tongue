<template>
  <div class="website-monitor">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="department_name"
          label="部门名称">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="note"
          label="备注">
        </el-table-column>
        <el-table-column
          prop="person_num"
          label="部门人数">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top: 20px;"
        :current-page="1"
        :page-sizes="[25, 50, 100, 200]"
        :page-size="25"
        layout="total, sizes, prev, pager, next, jumper"
        :total="3">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          department_name: '总经办',
          create_time: '2017-12-01 12:22',
          note: '总经办',
          person_num: 12
        }, {
          id: 2,
          department_name: '销售部',
          create_time: '2017-12-01 12:22',
          note: '销售部',
          person_num: 12
        }, {
          id: 3,
          department_name: '市场部',
          create_time: '2017-12-01 12:22',
          note: '市场部',
          person_num: 12
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style lang="scss" scoped>
.website-monitor {
  padding: 10px;
}
</style>
