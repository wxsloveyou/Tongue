<template>
  <div class="person-staff">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="device_id"
          label="设备ID">
        </el-table-column>
        <el-table-column
          prop="uuid"
          label="uuid"
          width="300">
        </el-table-column>
        <el-table-column
          prop="major"
          label="major">
        </el-table-column>
        <el-table-column
          prop="minor"
          label="minor">
        </el-table-column>
        <el-table-column
          prop="status"
          label="设备状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 0" type="danger">未激活</el-tag>
            <el-tag v-else>启用中</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
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
    };
  },
  mounted() {
    axios
      .get("http://wechat.run/beacon/device/list")
      .then(response => {
        console.log(response.data);
        this.tableData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    configFormEquipment(config) {
      console.log(config);
    },
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>

<style lang="scss" scoped>
.person-staff {
  padding: 10px;
}
</style>
