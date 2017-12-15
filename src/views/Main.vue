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
        <el-row :gutter="10" class="media-el-col">
          <el-col :span="4">
            <el-select v-model="selectFormData.car" placeholder="请选择车系">
              <el-option
                v-for="item in optionsCar"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.area" placeholder="请选择大区">
              <el-option
                v-for="item in optionsArea"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.provice" placeholder="请选择省份">
              <el-option
                v-for="item in optionsProvince"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.city" placeholder="请选择城市">
              <el-option
                v-for="item in optionsCity"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="selectFormData.shop" placeholder="请选择经销商">
              <el-option
                v-for="item in optionsShop"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="media-el-col">
          <el-col :span="4">
            <el-input v-model="selectFormData.shopName" placeholder="请输入经销商名称"></el-input>
          </el-col>
          <el-col :span="8">
            <el-date-picker
              v-model="selectFormData.dateRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
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
      pagePath: "portrait", //初始化显示页面 决定显示的数据
      loading: true,
      show: false,
      selectFormData: {
        //数据筛选所有数据
        car: "",
        area: "",
        provice: "",
        city: "",
        shop: "",
        shopName: "", //数据筛选-input-经销商名称
        dateRange: "" //数据筛选-input-筛选时间范围
      },
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
      console.log('This is Main.vue page function init()')
    }
  },
  watch: {
    $route(to, from) {
      console.log('This is Main.vue page')
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
