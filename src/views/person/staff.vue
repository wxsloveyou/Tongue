<template>
  <div class="person-staff">
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
          prop="shop_name"
          label="所属经销商"
          width="280">
        </el-table-column>
        <el-table-column
          prop="branch"
          label="所属部门">
        </el-table-column>
        <el-table-column
          prop="business"
          label="职务">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="user_status"
          label="账号状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.user_status == 1" type="success" size="mini">已启用</el-tag>
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
        :total="1">
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
          shop_name: '木叶忍者村',
          branch: '暗部',
          business: '部长',
          phone: '18855556666',
          user_status: 1
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
.person-staff {
  padding: 10px;
}
</style>
