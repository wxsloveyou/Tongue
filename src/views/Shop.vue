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
              <el-button v-if="pagePath == '/shop/manager'" class="main-button" type="text">新建门店</el-button>
              <el-button v-else class="main-button" type="text">新建店员</el-button>
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
          <el-col :span="4">
            <el-select v-model="selectFormData.car" placeholder="请选择大区">
              <el-option
                v-for="item in optionsCar"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.area" placeholder="请选择省份">
              <el-option
                v-for="item in optionsArea"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.provice" placeholder="请选择城市">
              <el-option
                v-for="item in optionsProvince"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.city" placeholder="请选择经销商">
              <el-option
                v-for="item in optionsCity"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.shop" placeholder="请选择职务">
              <el-option
                v-for="item in optionsShop"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-input v-model="selectFormData.shopName" placeholder="请输入员工姓名"></el-input>
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
      pagePath: "/person/staff", //初始化显示页面 决定显示的数据
      range: [],
      loading: true,
      show: false,
      selectFormData: {},
      optionsCar: [
        {
          value: "H7",
          label: "H7"
        }
      ],
      optionsArea: [
        {
          value: "东北区",
          label: "东北区"
        }
      ],
      optionsProvince: [
        {
          value: "辽宁省",
          label: "辽宁省"
        }
      ],
      optionsCity: [
        {
          value: "沈阳市",
          label: "沈阳市"
        }
      ],
      optionsShop: [
        {
          value: "沈阳通立华邦汽车销售服务有限公司",
          label: "沈阳通立华邦汽车销售服务有限公司"
        }
      ]
    };
  },
  mounted() {
    // this.pagePath = this.$route.params.username;
  },
  methods: {
    init() {
      console.log('This is Person.vue page function init()')
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
