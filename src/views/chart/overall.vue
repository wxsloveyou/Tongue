<template>
  <div>
    <!-- 有效集客率 首-->
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="有效集客率">
          <el-col :span="24">
            <el-card class="box-card">
              <div id="effectiveRateSet"></div>
            </el-card>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <!-- 有效集客率 尾-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      effectiveRateSet: {}, //有效集客率
      effectiveOption: {
        color: ['#9b0b37'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
          x: 'center',
          y: '95%',
        },
        grid: {
          left: '0',
          right: '10%',
          top: '5%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          axisLabel : {
            formatter: function(){
                  return "";
            }
          },
          data: ['已战败', '已成交', '已到店线索', '已跟进客户', '已分配客户', '有效线索', '线索总量']
        },
        series: [{
          name: '线下订单',
          type: 'bar',
          barWidth: '50%',
          stack: '总量',
          label: {
            normal: {
              show: true,
              color: '#000',
              fontWeight: 'bold',
              formatter: function(obj) {
                return obj.data
              },
              position: 'right'
            }
          },
          data: [700, 115, 969, 36, 333, 349, 83]
        }]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //有效集客率
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
