<template>
  <div>
    <!-- 成交量统计 首-->
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="成交量统计">
          <el-col :span="24">
            <el-card class="box-card">
              <div id="effectiveRateSet"></div>
            </el-card>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <!-- 成交量统计 尾-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      effectiveRateSet: {}, //成交量统计
      effectiveOption: {
        color: ['#9b0b37'],
        title: {
          text: '品牌全国车型成交量',
          subtext: '单位：百分比',
          y: '10px',
          x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[1, 1.2, 3.2, 3, 1.1, 2, 1, 1.2, 3.2, 3, 1.1, 2]
            }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //成交量统计
      this.effectiveRateSet = this.returnEchartsOption('effectiveRateSet');
      this.setEchartsOption(this.effectiveRateSet, this.effectiveOption);
    },
    setEchartsOption(chart, option) {
      chart.clear();
      chart.hideLoading();
      // 为echarts对象加载数据
      chart.setOption(option);
      window.onresize = chart.resize;
    },
    returnEchartsOption(id) {
      return this.$echarts.init(
        document.getElementById(id)
      );
    }
  },
  watch: {
    $route(to, from) {
      this.pagePath = to.params.username;
      this.init();
      console.log(this.pagePath);
    }
  }
};
</script>

<style lang="scss" scoped>
#effectiveRateSet {
  width: 1180px;
  height: 480px;
}
</style>
