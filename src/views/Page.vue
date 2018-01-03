<template>
  <div class="media">
    <el-row :gutter="10">
      <el-col :span="24">
        <el-card class="box-card">
          <el-row :gutter="10">
            <el-col :span="20">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="2">
              <el-button class="main-button" type="text">新建设备</el-button>
            </el-col>
            <el-col :span="2">
              <el-button v-if="show" class="main-button" type="text" @click="show = !show">收起搜索</el-button>
              <el-button v-else class="main-button" type="text" @click="show = !show">展开搜索</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <div v-show="show">
        <el-row :gutter="10" class="media-el-col">
          <el-col :span="8">
            <el-input placeholder="请输入页面标题关键词" v-model="selectFormData.shopName" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </el-collapse-transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      show: false,
      selectFormData: {},
    };
  },
  mounted() {
  },
  methods: {
    init() {
      console.log('This is Person.vue page function init()')
    }
  }
};
</script>

<style lang="scss" scoped>
.media-el-col {
  width: 100%;
  background: #fff;
  padding: 10px;
}

.box-card {
  width: 100%;
}

.main-button {
  padding: 0;
  float: right;
}
</style>
