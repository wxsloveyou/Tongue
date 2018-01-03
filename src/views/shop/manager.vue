<template>
  <div class="website-monitor">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="poi_id"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="business_name"
          width="320"
          label="门店名称">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份">
        </el-table-column>
        <el-table-column
          prop="city"
          label="城市">
        </el-table-column>
        <el-table-column
          prop="address"
          width="320"
          label="地址">
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
        tableData: []
      }
    },
    mounted() {
      axios
        .get("http://wechat.run/business/list")
        .then(response => {
          console.log(response.data);
          this.tableData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
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
