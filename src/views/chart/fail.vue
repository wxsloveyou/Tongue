
<template>
  <!-- 这是群体画像组件 -->
  <div>
    <!-- 群体画像 首-->
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="战败原因">
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="24">
              <el-card class="box-card">
                <div id="ageChart"></div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <!-- 群体画像 尾-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      familyChart: {},
      pregnancyChart: {},
      ageChart: {},
      options: {
        ageChart: {
          color: ['#595959', '#bd493e'],
          title: {
            text: 'Q1品牌战败原因分析',
            subtext: '单位：次、百分比',
            y: '10px',
            x: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{a} <br/>{b} : {c}"
          },
          legend: {
            x: 'center',
            y: '95%',
            data: ['成交量', '对应周期占比']
          },
          grid: {
            left: '3%',
            right: '3%',
            top: '10%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['购车计划搁置', '裸车优惠不满意', '贷款方案不合适', '售后保养费用高', '订车时间长', '其它'],
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              interval: 0
            }
          }],
          yAxis: [{
              splitLine: {
                show: true
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [{
              name: '成交量',
              type: 'bar',
              barWidth : '50%',
              stack: '广告',
              data: [870, 720, 521, 350, 200, 98],
              label: {
                normal: {
                  position: 'top',
                  fontWeight: 'bold',
                  show: true,
                  formatter: function(obj) {
                    return obj.data
                  }
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //初始化购车用户
      this.ageChart = this.returnEchartsOption('ageChart');
      this.setEchartsOption(this.ageChart, this.options.ageChart);
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
  }
};
</script>

<style lang="scss" scoped>
#ageChart {
  width: 1180px;
  height: 600px;
}
</style>
