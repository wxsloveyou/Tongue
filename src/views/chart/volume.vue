<template>
  <!-- 这是群体画像组件 -->
  <div>
    <!-- 群体画像 首-->
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="车型销量">
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <div id="familyChart"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div id="pregnancyChart"></div>
              </el-card>
            </el-col>
          </el-row>
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
        familyChart: {
          color: ['#7f7f7f', '#9b0b37'],
          title: {
            text: '品牌车型销量',
            subtext: '单位：辆',
            y: '10px',
            x: 'center'
          },
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
            data: ['线上订单', '线下订单']
          },
          grid: {
            left: '3%',
            right: '3%',
            top: '15%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['H7', 'H5']
          },
          series: [{
              name: '线上订单',
              type: 'bar',
              barWidth : '50%',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  formatter: function(obj) {
                    return '线上订单,' + obj.data
                  },
                  position: 'insideRight'
                }
              },
              data: [320, 302]
            },
            {
              name: '线下订单',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  formatter: function(obj) {
                    return '线下订单,' + obj.data
                  },
                  position: 'insideRight'
                }
              },
              data: [820, 832]
            }
          ]
        },
        pregnancyChart: {
          color: ['#595959', '#9b0b37'],
          title: {
            text: '品牌车型销量比例',
            subtext: '单位：百分比',
            y: '10px',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            x: 'center',
            y: '95%',
            data: ['L5', 'H7']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '65%',
              center: ['50%', '53%'],
              data: [{
                value: 70,
                name: 'H7',
                selected: true
              },
              {
                value: 30,
                name: 'L5'
              }],
              itemStyle: {
                normal: {
                  label: {
                    position: 'inner',
                    formatter: '{d}%',
                    show: true
                  }
                }
              }
            }
          ]
        },
        ageChart: {
          color: ['#595959', '#bd493e'],
          title: {
            text: '品牌成交来源统计',
            subtext: '单位：辆',
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
            //                  name: '单位：笔',
            data: ['官网', '汽车之家', '易车网', '爱卡汽车', '太平洋汽车', '今日头条'],
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
            },

          ],

          series: [{
              name: '成交量',
              type: 'bar',
              barWidth : '50%',
              stack: '广告',
              data: [2515, 32827, 26432, 20601, 15255, 8915],
              label: {
                normal: {
                  position: 'top',
                  color: '#000',
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

      this.familyChart = this.returnEchartsOption('familyChart');
      this.pregnancyChart = this.returnEchartsOption('pregnancyChart');
      this.ageChart = this.returnEchartsOption('ageChart');

      this.setEchartsOption(this.familyChart, this.options.familyChart);
      this.setEchartsOption(this.pregnancyChart, this.options.pregnancyChart);
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
#familyChart {
  width: 550px;
  height: 400px;
}

#ageChart {
  width: 1180px;
  height: 600px;
}

#pregnancyChart {
  width: 550px;
  height: 400px;
}
</style>
