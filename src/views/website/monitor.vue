<template>
  <div class="website-monitor">
    <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
          prop="media_name"
          label="媒体名称"
          sortable>
        </el-table-column>
        <el-table-column
          prop="browse_num"
          label="浏览量"
          sortable>
        </el-table-column>
        <el-table-column
          prop="visit_num"
          label="访问次数"
          sortable>
        </el-table-column>
        <el-table-column
          prop="visitor_num"
          label="访客数"
          sortable>
        </el-table-column>
        <el-table-column
          prop="new_visitor_num"
          label="新访客"
          sortable>
        </el-table-column>
        <el-table-column
          prop="old_visitor_num"
          label="老访客"
          sortable>
        </el-table-column>
        <el-table-column
          prop="bounce_rate"
          label="跳出率"
          sortable>
        </el-table-column>
        <el-table-column
          prop="page_num"
          label="浏览页数"
          sortable>
        </el-table-column>
        <el-table-column
          prop="page_time"
          label="页面停留时长">
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
          media_name: '腾讯',
          browse_num: 12,
          visit_num: 12,
          visitor_num: 24,
          new_visitor_num: 12,
          old_visitor_num: 12,
          bounce_rate: '68%',
          page_num: 1.32,
          page_time: '45秒'
        },{
          media_name: '百度',
          browse_num: 12,
          visit_num: 12,
          visitor_num: 24,
          new_visitor_num: 12,
          old_visitor_num: 12,
          bounce_rate: '68%',
          page_num: 1.32,
          page_time: '45秒'
        },{
          media_name: '网易',
          browse_num: 12,
          visit_num: 12,
          visitor_num: 24,
          new_visitor_num: 12,
          old_visitor_num: 12,
          bounce_rate: '68%',
          page_num: 1.32,
          page_time: '45秒'
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
