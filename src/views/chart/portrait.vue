<template>
  <!-- 这是群体画像组件 -->
  <div>
    <!-- 群体画像 首-->
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="购车用户">
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">购车用户中男性用户占了6成</el-tag>
                <div id="genderChart"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">已婚用户占了大多数，对比未婚用户数几乎翻倍</el-tag>
                <div id="marriageChart"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">已婚的购车用户，9成以上都已经有了孩子</el-tag>
                <div id="familyChart"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">孩子们的年龄阶段相对来说比较平均，处在上学阶段的比例最高</el-tag>
                <div id="pregnancyChart"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="24">
              <el-card class="box-card">
                <el-tag type="info">在购车用户中，中年人比例接近一半</el-tag>
                <div id="ageChart"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">在购车用户中，高收入群体比例接近一半</el-tag>
                <div id="incomeChart"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">从消费水平上来说，购车用户大多过的比较节俭</el-tag>
                <div id="expenditureChart"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">46%的用户在购买时，已是有车一族</el-tag>
                <div id="purchaseChart"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">综合来看，购车用户在手机品牌的选择上，更考虑性价比</el-tag>
                <div id="consumptionChart"></div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="潜客用户">
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">潜客用户中男性用户占了5.5成</el-tag>
                <div id="genderChart-latent"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">未婚潜客用户占了大多数，对比已婚潜客用户数几乎翻倍</el-tag>
                <div id="marriageChart-latent"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">已婚的潜客用户，接近6成已经有了孩子</el-tag>
                <div id="familyChart-latent"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">孩子们的年龄阶段相对来说比较平均，处在上学阶段的比例最高</el-tag>
                <div id="pregnancyChart-latent"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="24">
              <el-card class="box-card">
                <el-tag type="info">在潜客用户中，中年人比例接近一半</el-tag>
                <div id="ageChart-latent"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">在潜客用户中，高收入群体比例有40%</el-tag>
                <div id="incomeChart-latent"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">从消费水平上来说，潜客用户大多过的比较节俭</el-tag>
                <div id="expenditureChart-latent"></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="margin-bottom:10px">
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">37%的潜客用户在购买时，已是有车一族</el-tag>
                <div id="purchaseChart-latent"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <el-tag type="info">综合来看，购车用户在手机品牌的选择上，更考虑性价比</el-tag>
                <div id="consumptionChart-latent"></div>
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
      genderChart: {},
      marriageChart: {},
      familyChart: {},
      pregnancyChart: {},
      ageChart: {},
      incomeChart: {},
      expenditureChart: {},
      purchaseChart: {},
      consumptionChart: {},
      genderChart_latent: {},
      marriageChart_latent: {},
      familyChart_latent: {},
      pregnancyChart_latent: {},
      ageChart_latent: {},
      incomeChart_latent: {},
      expenditureChart_latent: {},
      purchaseChart_latent: {},
      consumptionChart_latent: {},
      options: {
        genderChart: {
          color: ["#595959", "#9b0b37"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            x: "center",
            y: "90%",
            data: ["男", "女"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 59.7,
                  name: "男",
                  selected: true
                },
                {
                  value: 40.3,
                  name: "女"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        marriageChart: {
          color: ["#595959", "#9b0b37"],
          legend: {
            x: "center",
            y: "90%",
            data: ["已婚", "未婚"]
          },
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: [""],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "已婚",
              type: "bar",
              barWidth: "30%",
              data: [35],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "已婚用户 " + obj.data + "%";
                  },
                  position: "top"
                }
              }
            },
            {
              name: "未婚",
              type: "bar",
              barWidth: "30%",
              data: [65],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "未婚用户 " + obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        },
        familyChart: {
          color: ["#9b0b37", "#595959"],
          legend: {
            y: "90%",
            x: "center",
            data: ["已婚有孩子", "已婚没孩子"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["30%", "60%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 93,
                  name: "已婚有孩子",
                  label: {
                    normal: {
                      show: true,
                      fontWeight: "bold",
                      color: "#595959",
                      formatter: "{b}\n{d}%",
                      position: "top"
                    }
                  }
                },
                {
                  value: 7,
                  name: "已婚没孩子",
                  label: {
                    normal: {
                      show: true,
                      fontWeight: "bold",
                      color: "#595959",
                      formatter: "{b}\n{d}%",
                      position: "top"
                    }
                  }
                }
              ]
            }
          ]
        },
        pregnancyChart: {
          color: ["#595959"],
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["孕育期", "婴幼期", "少年儿童", "其他"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "60%",
              data: [10, 23, 45, 21],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        },
        ageChart: {
          color: ["#9b0b37"],
          legend: {
            x: "center",
            y: "95%"
            //          data: ['线上订单', '线下订单']
          },
          grid: {
            left: "3%",
            right: "6%",
            top: "3%",
            bottom: "18%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            }
          },
          yAxis: {
            type: "category",
            data: ["65岁以上", "56-65岁", "41-55岁", "29-40岁", "18-28岁"]
          },
          series: [
            {
              name: "线下订单",
              type: "bar",
              barWidth: "50%",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  color: "#000",
                  fontWeight: "bold",
                  //              formatter: '{c}'+'{b}%',
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "right"
                }
              },
              data: [5, 15, 23, 44, 13]
            }
          ]
        },
        incomeChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "90%",
            data: ["高收入", "中高收入", "普通收入", "未知收入"]
          },
          series: [
            {
              // name: '访问来源',
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 67,
                  name: "高收入",
                  selected: true
                },
                {
                  value: 19,
                  name: "中高收入"
                },
                {
                  value: 32,
                  name: "普通收入"
                },
                {
                  value: 23,
                  name: "未知收入"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        expenditureChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "90%",
            data: ["高支出", "中高支出", "普通支出", "未知支出"]
          },
          series: [
            {
              //          name: '访问来源',
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 13,
                  name: "高支出",
                  selected: true
                },
                {
                  value: 33,
                  name: "中高支出"
                },
                {
                  value: 50,
                  name: "普通支出"
                },
                {
                  value: 14,
                  name: "未知支出"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        purchaseChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "95%",
            data: ["首次购车", "非首次购车"]
          },
          grid: {
            left: "3%",
            right: "15%",
            top: "3%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            }
          },
          yAxis: {
            type: "category",
            data: [""]
          },
          series: [
            {
              name: "首次购车",
              type: "bar",
              barWidth: "30%",
              data: [46],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "首次购车" + obj.data + "%";
                  },
                  position: "right"
                }
              }
            },
            {
              name: "非首次购车",
              type: "bar",
              barWidth: "30%",
              data: [54],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "非首次购车" + obj.data + "%";
                  },
                  position: "right"
                }
              }
            }
          ]
        },
        consumptionChart: {
          color: ["#9b0b37"],
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["低端", "中低端", "中端", "中高端", "高端"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "50%",
              data: [17, 14, 33, 25, 10],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        }
      },
      latent: {
        genderChart: {
          color: ["#595959", "#9b0b37"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            x: "center",
            y: "90%",
            data: ["男", "女"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 55.2,
                  name: "男",
                  selected: true
                },
                {
                  value: 44.8,
                  name: "女"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        marriageChart: {
          color: ["#595959", "#9b0b37"],
          legend: {
            x: "center",
            y: "90%",
            data: ["已婚", "未婚"]
          },
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: [""],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "已婚",
              type: "bar",
              barWidth: "30%",
              data: [23],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "已婚用户 " + obj.data + "%";
                  },
                  position: "top"
                }
              }
            },
            {
              name: "未婚",
              type: "bar",
              barWidth: "30%",
              data: [46],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "未婚用户 " + obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        },
        familyChart: {
          color: ["#9b0b37", "#595959"],
          legend: {
            y: "90%",
            x: "center",
            data: ["已婚有孩子", "已婚没孩子"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["30%", "60%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 58,
                  name: "已婚有孩子",
                  label: {
                    normal: {
                      show: true,
                      fontWeight: "bold",
                      color: "#595959",
                      formatter: "{b}\n{d}%",
                      position: "top"
                    }
                  }
                },
                {
                  value: 42,
                  name: "已婚没孩子",
                  label: {
                    normal: {
                      show: true,
                      fontWeight: "bold",
                      color: "#595959",
                      formatter: "{b}\n{d}%",
                      position: "top"
                    }
                  }
                }
              ]
            }
          ]
        },
        pregnancyChart: {
          color: ["#595959"],
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["孕育期", "婴幼期", "少年儿童", "其他"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "60%",
              data: [12, 34, 21, 33],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        },
        ageChart: {
          color: ["#9b0b37"],
          legend: {
            x: "center",
            y: "95%"
            //          data: ['线上订单', '线下订单']
          },
          grid: {
            left: "3%",
            right: "6%",
            top: "3%",
            bottom: "18%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            }
          },
          yAxis: {
            type: "category",
            data: ["65岁以上", "56-65岁", "41-55岁", "29-40岁", "18-28岁"]
          },
          series: [
            {
              name: "线下订单",
              type: "bar",
              barWidth: "50%",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  color: "#000",
                  fontWeight: "bold",
                  //              formatter: '{c}'+'{b}%',
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "right"
                }
              },
              data: [2, 11, 18, 46, 23]
            }
          ]
        },
        incomeChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "90%",
            data: ["高收入", "中高收入", "普通收入", "未知收入"]
          },
          series: [
            {
              // name: '访问来源',
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 43,
                  name: "高收入",
                  selected: true
                },
                {
                  value: 32,
                  name: "中高收入"
                },
                {
                  value: 13,
                  name: "普通收入"
                },
                {
                  value: 12,
                  name: "未知收入"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        expenditureChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "90%",
            data: ["高支出", "中高支出", "普通支出", "未知支出"]
          },
          series: [
            {
              //          name: '访问来源',
              type: "pie",
              radius: "65%",
              center: ["50%", "45%"],
              data: [
                {
                  value: 31,
                  name: "高支出",
                  selected: true
                },
                {
                  value: 22,
                  name: "中高支出"
                },
                {
                  value: 45,
                  name: "普通支出"
                },
                {
                  value: 2,
                  name: "未知支出"
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    position: "top",
                    formatter: "{b}性用户\n{d}%",
                    show: true,
                    fontWeight: "bold",
                    color: "#595959"
                  }
                }
              }
            }
          ]
        },
        purchaseChart: {
          color: ["#595959", "#9b0b37", "#c3c3c3"],
          legend: {
            x: "center",
            y: "95%",
            data: ["首次购车", "非首次购车"]
          },
          grid: {
            left: "3%",
            right: "15%",
            top: "3%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            }
          },
          yAxis: {
            type: "category",
            data: [""]
          },
          series: [
            {
              name: "首次购车",
              type: "bar",
              barWidth: "30%",
              data: [37],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "首次购车" + obj.data + "%";
                  },
                  position: "right"
                }
              }
            },
            {
              name: "非首次购车",
              type: "bar",
              barWidth: "30%",
              data: [63],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return "非首次购车" + obj.data + "%";
                  },
                  position: "right"
                }
              }
            }
          ]
        },
        consumptionChart: {
          color: ["#9b0b37"],
          grid: {
            left: "3%",
            right: "14%",
            bottom: "13%",
            top: "10%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["低端", "中低端", "中端", "中高端", "高端"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} %"
              }
            }
          ],
          series: [
            {
              name: "手机品牌",
              type: "bar",
              barWidth: "50%",
              data: [8, 12, 33, 42, 5],
              label: {
                normal: {
                  show: true,
                  fontWeight: "bold",
                  color: "#595959",
                  formatter: function(obj) {
                    return obj.data + "%";
                  },
                  position: "top"
                }
              }
            }
          ]
        }
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //初始化购车用户
      this.genderChart = this.returnEchartsOption('genderChart');
      this.marriageChart = this.returnEchartsOption('marriageChart');
      this.familyChart = this.returnEchartsOption('familyChart');
      this.pregnancyChart = this.returnEchartsOption('pregnancyChart');
      this.ageChart = this.returnEchartsOption('ageChart');
      this.incomeChart = this.returnEchartsOption('incomeChart');
      this.expenditureChart = this.returnEchartsOption('expenditureChart');
      this.purchaseChart = this.returnEchartsOption('purchaseChart');
      this.consumptionChart = this.returnEchartsOption('consumptionChart');

      this.setEchartsOption(this.genderChart, this.options.genderChart);
      this.setEchartsOption(this.marriageChart, this.options.marriageChart);
      this.setEchartsOption(this.familyChart, this.options.familyChart);
      this.setEchartsOption(this.pregnancyChart, this.options.pregnancyChart);
      this.setEchartsOption(this.ageChart, this.options.ageChart);
      this.setEchartsOption(this.incomeChart, this.options.incomeChart);
      this.setEchartsOption(this.expenditureChart, this.options.expenditureChart);
      this.setEchartsOption(this.purchaseChart, this.options.purchaseChart);
      this.setEchartsOption(this.consumptionChart, this.options.consumptionChart);

      //初始化潜客用户
      this.genderChart_latent = this.returnEchartsOption('genderChart-latent');
      this.marriageChart_latent = this.returnEchartsOption('marriageChart-latent');
      this.familyChart_latent = this.returnEchartsOption('familyChart-latent');
      this.pregnancyChart_latent = this.returnEchartsOption('pregnancyChart-latent');
      this.ageChart_latent = this.returnEchartsOption('ageChart-latent');
      this.incomeChart_latent = this.returnEchartsOption('incomeChart-latent');
      this.expenditureChart_latent = this.returnEchartsOption('expenditureChart-latent');
      this.purchaseChart_latent = this.returnEchartsOption('purchaseChart-latent');
      this.consumptionChart_latent = this.returnEchartsOption('consumptionChart-latent');

      this.setEchartsOption(this.genderChart_latent, this.latent.genderChart);
      this.setEchartsOption(this.marriageChart_latent, this.latent.marriageChart);
      this.setEchartsOption(this.familyChart_latent, this.latent.familyChart);
      this.setEchartsOption(this.pregnancyChart_latent, this.latent.pregnancyChart);
      this.setEchartsOption(this.ageChart_latent, this.latent.ageChart);
      this.setEchartsOption(this.incomeChart_latent, this.latent.incomeChart);
      this.setEchartsOption(this.expenditureChart_latent, this.latent.expenditureChart);
      this.setEchartsOption(this.purchaseChart_latent, this.latent.purchaseChart);
      this.setEchartsOption(this.consumptionChart_latent, this.latent.consumptionChart);
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
#genderChart,
#familyChart,
#incomeChart,
#expenditureChart {
  width: 500px;
  height: 400px;
  margin: 0 auto;
}

#ageChart {
  width: 1180px;
  height: 600px;
}

#marriageChart,
#pregnancyChart,
#purchaseChart,
#consumptionChart {
  width: 700px;
  height: 400px;
}

#genderChart-latent,
#familyChart-latent,
#incomeChart-latent,
#expenditureChart-latent {
  width: 500px;
  height: 400px;
  margin: 0 auto;
}

#ageChart-latent {
  width: 1180px;
  height: 600px;
}

#marriageChart-latent,
#pregnancyChart-latent,
#purchaseChart-latent,
#consumptionChart-latent {
  width: 700px;
  height: 400px;
}
</style>
