<template>
  <div>
    <el-row :gutter="10" class="media-el-col">
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button-group>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button type="primary" icon="el-icon-plus">新建</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="media-el-col">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>开场白</span>
            <time class="time">2017-11-30 18:28</time>
          </div>
          <div class="content">伦理学、政治学的基本范畴。在伦理学中，通常指人们按一定道德标准所应当做的事，也指一种道德评价，即公正。</div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-row>
                <el-col :span="8">
                  <el-button type="primary" size="mini">查看</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="warning" size="mini">修改</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="danger" size="mini">删除</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>结束语</span>
            <time class="time">2017-11-30 18:28</time>
          </div>
          <div class="content">伦理学、政治学的基本范畴。在伦理学中，通常指人们按一定道德标准所应当做的事，也指一种道德评价，即公正。</div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-row>
                <el-col :span="8">
                  <el-button type="primary" size="mini">查看</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="warning" size="mini">修改</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="danger" size="mini">删除</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data() {
    return {
      show: true,
      input: ''
    };
  },
  mounted() {
  },
  methods: {
    init(username) {}
  }
};
</script>

<style lang='scss' scoped>
.media-el-col {
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 10px;
}

.time {
  font-size: 13px;
  color: #999;
  margin-left: 40px;
}

.content {
  font-size: 13px;
  color: #999;
  margin: 20px 0;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
