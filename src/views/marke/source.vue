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
      <el-col :span="6" >
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:20px;">
          <img src="http://www.faw-hongqi.com.cn/pcs/images/cx_h7/h7_i(1).jpg" class="image">
          <div style="padding: 14px;">
            <span>H7新版海报</span>
            <div class="bottom clearfix">
              <time class="time">2017-11-30 18:28</time>
              <el-button type="text" class="button">删除</el-button>
              <el-button type="text" class="button">下载</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:20px;">
          <img src="https://matterport.oss-cn-shenzhen.aliyuncs.com/misc/hongqi/pc/image/black/hongqi_0.jpg" class="image">
          <div style="padding: 14px;">
            <span>H7配置介绍海报</span>
            <div class="bottom clearfix">
              <time class="time">2017-11-30 18:28</time>
              <el-button type="text" class="button">删除</el-button>
              <el-button type="text" class="button">下载</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:20px;">
          <img src="http://www.faw-hongqi.com.cn/pcs/images/fwzc/1_02.jpg" class="image">
          <div style="padding: 14px;">
            <span>售后服务海报</span>
            <div class="bottom clearfix">
              <time class="time">2017-11-30 18:28</time>
              <el-button type="text" class="button">删除</el-button>
              <el-button type="text" class="button">下载</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:20px;">
          <img src="http://www.faw-hongqi.com.cn/pcs/images/cx_h7/h7_i(2).jpg" class="image">
          <div style="padding: 14px;">
            <span>H7内饰海报</span>
            <div class="bottom clearfix">
              <time class="time">2017-11-30 18:28</time>
              <el-button type="text" class="button">删除</el-button>
              <el-button type="text" class="button">下载</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:20px;">
          <img src="http://www.faw-hongqi.com.cn/pcs/images/cx_h7/h1.jpg" class="image">
          <div style="padding: 14px;">
            <span>新H7上市海报</span>
            <div class="bottom clearfix">
              <time class="time">2017-11-30 18:28</time>
              <el-button type="text" class="button">删除</el-button>
              <el-button type="text" class="button">下载</el-button>
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

.source-card {
  height: 200px;
}

.time {
  font-size: 13px;
  color: #999;
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
  padding: 1;
  float: right;
  margin-left: 20px;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
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
