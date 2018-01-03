<template>
  <div class="person-staff">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="page_id"
          label="页面ID">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="description"
          label="副标题"
          width="280">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="备注信息">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="configFormEquipment(scope.row)">配置到设备</el-button>
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
      tableData: [
        {
          id: 1,
          name: "宇智波佐助",
          shop_name: "木叶忍者村",
          branch: "暗部",
          business: "部长",
          phone: "18855556666",
          user_status: 1
        }
      ]
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
