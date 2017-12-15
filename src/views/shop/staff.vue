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
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="shop"
          width="320"
          label="所属门店">
        </el-table-column>
        <el-table-column
          prop="department"
          label="所属部门">
        </el-table-column>
        <el-table-column
          prop="role"
          label="职位">
        </el-table-column>
        <el-table-column
          prop="status"
          label="账号状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 1" type="success" size="mini">已启用</el-tag>
            <el-tag v-else type="danger" size="mini">已禁用</el-tag>
          </template>
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
          name: '宇智波佐助',
          phone: '18655556666',
          shop: '木叶忍者村',
          department: '暗部',
          role: '部长',
          status: 1
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
