<template>
  <div class="media">
    <el-row :gutter="10">
      <el-col :span="24">
        <el-card class="box-card">
          <el-row :gutter="10">
            <el-col :span="22">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="2">
              <el-button v-if="show" class="main-button" type="text" @click="show = !show">收起搜索</el-button>
              <el-button v-if="!show" class="main-button" type="text" @click="show = !show">展开搜索</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <div v-show="show">
        <el-row :gutter="10" class="media-el-col" v-if="pagePath == '/website/monitor'">
          <el-col :span="4">
            <el-input v-model="selectFormData.mediaName" placeholder="请输入媒体名称"></el-input>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.car" placeholder="请选择查询媒体">
              <el-option
                v-for="item in optionsMedia"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-date-picker
              v-model="selectFormData.dateRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="统计开始日期"
              end-placeholder="统计结束日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="media-el-col" v-if="pagePath == '/website/delivery'">
          <el-col :span="4">
            <el-select v-model="selectFormData.car" placeholder="请选择查询车型">
              <el-option
                v-for="item in optionsCar"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.car" placeholder="请选择查询项目类型">
              <el-option
                v-for="item in optionsCar"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-date-picker
              v-model="selectFormData.dateRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="统计开始日期"
              end-placeholder="统计结束日期">
            </el-date-picker>
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
      pagePath: "/website/monitor", //初始化显示页面 决定显示的数据
      range: [],
      loading: true,
      show: false,
      selectFormData: {
        //数据筛选所有数据
        car: ""
      },
      optionsMedia: [
        {
          value: "百度",
          label: "百度"
        },
        {
          value: "腾讯",
          label: "腾讯"
        },
        {
          value: "网易",
          label: "网易"
        }
      ],
      optionsCar: [
        {
          value: "H7",
          label: "H7"
        },
        {
          value: "L5",
          label: "L5"
        }
      ]
    };
  },
  mounted() {
    // this.pagePath = this.$route.params.username;
  },
  methods: {
    init() {
      console.log('This is Main.vue page function init()')
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      this.pagePath = to.path;
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
