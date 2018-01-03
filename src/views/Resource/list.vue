<template>
  <div class="person-staff">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="page_id"
          label="资源编号">
        </el-table-column>
        <el-table-column
          prop="title"
          label="资源名称">
        </el-table-column>
        <el-table-column
          prop="description"
          label="资源类型">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="播放时长">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="上传时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="configFormEquipment(scope.row)">配置</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
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
      .get("http://wechat.run/beacon/page/list")
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
