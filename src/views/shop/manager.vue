<template>
  <div class="website-monitor">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="code"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="shop_name"
          width="320"
          label="忍村">
        </el-table-column>
        <el-table-column
          prop="area"
          label="位面">
        </el-table-column>
        <el-table-column
          prop="province"
          label="国家">
        </el-table-column>
        <el-table-column
          prop="city"
          label="村子">
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
          code: '1',
          shop_name: '木叶忍者村',
          area: '火影位面',
          province: '大陆',
          city: '火之国'
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
