<template>
  <div class="index-container">
    <el-alert title="欲戴王冠,必承其重" type="success"> </el-alert>
    <div class="top-panel">
      <el-row :gutter="32">
        <el-col :span="6" class="top-panel1">
          <div class="top-panel-content byui-clearfix">
            <img class="img-box" src="@/assets/project/project1.png" />
            <div class="txt-box">
              <p>已产出数据总量</p>
              <p class="num-box"><span>XXX</span>个</p>
            </div>
          </div>
          <div class="bottom-panel-content">
            <div class="txt-box">
              <el-row>
                <el-col :span="18" class="byui-alignLeft"
                  >已产出数据总量
                </el-col>
                <el-col :span="6" class="byui-alignRight">XXX个 </el-col>
              </el-row>
            </div>
            <div class="progress-box">
              <el-progress
                :percentage="100"
                color="#2f4bff"
                :show-text="false"
              ></el-progress>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="top-panel2">
          <div class="top-panel-content byui-clearfix">
            <img class="img-box" src="@/assets/project/project2.png" />
            <div class="txt-box">
              <p>需求数量</p>
              <p class="num-box"><span>XXX</span>个</p>
            </div>
          </div>
          <div class="bottom-panel-content">
            <div class="txt-box">
              <el-row>
                <el-col :span="18" class="byui-alignLeft">进行中数量 </el-col>
                <el-col :span="6" class="byui-alignRight">XXX个 </el-col>
              </el-row>
            </div>
            <div class="progress-box">
              <el-progress
                :percentage="100"
                color="#00ce93"
                :show-text="false"
              ></el-progress>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="top-panel3">
          <div class="top-panel-content byui-clearfix">
            <img class="img-box" src="@/assets/project/project3.png" />
            <div class="txt-box">
              <p>团队数量</p>
              <p class="num-box"><span>XXX</span>个</p>
            </div>
          </div>
          <div class="bottom-panel-content">
            <div class="txt-box">
              <el-row>
                <el-col :span="18" class="byui-alignLeft">活跃团队数量 </el-col>
                <el-col :span="6" class="byui-alignRight">XXX个 </el-col>
              </el-row>
            </div>
            <div class="progress-box">
              <el-progress
                :percentage="100"
                color="#ffc000"
                :show-text="false"
              ></el-progress>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="top-panel4">
          <div class="top-panel-content byui-clearfix">
            <img class="img-box" src="@/assets/project/project4.png" />
            <div class="txt-box">
              <p>执行人数</p>
              <p class="num-box"><span>XXX</span>个</p>
            </div>
          </div>
          <div class="bottom-panel-content">
            <div class="txt-box">
              <el-row>
                <el-col :span="18" class="byui-alignLeft"
                  >活跃执行人员数量
                </el-col>
                <el-col :span="6" class="byui-alignRight">XXX人 </el-col>
              </el-row>
            </div>
            <div class="progress-box">
              <el-progress
                :percentage="80"
                color="#08cde9"
                :show-text="false"
              ></el-progress>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="15">
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header">
            <span>访问量</span>
          </div>
          <byui-chart theme="byui-echarts-theme" :options="fwl" />
          <div class="bottom">
            <span
              >日均访问量:

              <byui-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header">
            <span>授权数</span>
          </div>
          <byui-chart theme="byui-echarts-theme" :options="sqs" />
          <div class="bottom">
            <span
              >总授权数:
              <byui-count
                :start-val="config2.startVal"
                :end-val="config2.endVal"
                :duration="config2.duration"
                :separator="config2.separator"
                :prefix="config2.prefix"
                :suffix="config2.suffix"
                :decimals="config2.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header">
            <span>词云</span>
          </div>
          <byui-chart
            @zr:click="handleZrClick"
            @click="handleClick"
            theme="byui-echarts-theme"
            :options="cy"
          />
          <div class="bottom">
            <span
              >词云数量:<byui-count
                :start-val="config3.startVal"
                :end-val="config3.endVal"
                :duration="config3.duration"
                :separator="config3.separator"
                :prefix="config3.prefix"
                :suffix="config3.suffix"
                :decimals="config3.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import byuiChart from "@/plugins/echarts";
import byuiCount from "@/plugins/byuiCount";

export default {
  name: "Index",
  components: {
    byuiChart,
    byuiCount,
  },
  data() {
    return {
      config1: {
        startVal: 0,
        endVal: 43,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config2: {
        startVal: 0,
        endVal: 82,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config3: {
        startVal: 0,
        endVal: 12,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },

      //访问量
      fwl: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "访问量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22],
            smooth: true,
            areaStyle: {},
          },
        ],
      }, //授权数
      sqs: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            /*boundaryGap: false,*/
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "授权数",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 20, 33, 39, 33, 22],
          },
        ],
      },
      //词云
      cy: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 15,
            sizeRange: [12, 40],
            rotationRange: [0, 0],
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color() {
                  const arr = [
                    "#1890FF",
                    "#36CBCB",
                    "#4ECB73",
                    "#FBD437",
                    "#F2637B",
                    "#975FE5",
                  ];
                  let index = Math.floor(Math.random() * arr.length);
                  return arr[index];
                },
                /*color: function() {
                                                            return `rgb(
                                                            ${Math.round(
                                                                Math.random() * 255
                                                            )} , ${Math.round(
                                                                Math.random() * 255
                                                            )} , ${Math.round(Math.random() * 255)} )`;
                                                        }*/
              },
            },
            data: [
              {
                name: "XXXX",
                value: 15000,
              },
              {
                name: "byui",
                value: 10081,
              },
              {
                name: "beautiful",
                value: 9386,
              },

              {
                name: "国防白皮书",
                value: 6500,
              },
              {
                name: "创新",
                value: 6000,
              },
              {
                name: "民主革命",
                value: 4500,
              },
              {
                name: "文化强国",
                value: 3800,
              },
              {
                name: "国家主权",
                value: 3000,
              },
              {
                name: "领土完整",
                value: 2300,
              },
              {
                name: "安全",
                value: 2000,
              },
              {
                name: "从严治党",
                value: 1900,
              },
              {
                name: "现代化经济体系",
                value: 1800,
              },
              {
                name: "国防动员",
                value: 1700,
              },
              {
                name: "信息化战争",
                value: 1600,
              },
              {
                name: "局部战争",
                value: 1500,
              },
              {
                name: "教育",
                value: 1200,
              },
              {
                name: "职业教育",
                value: 1100,
              },
              {
                name: "兵法",
                value: 900,
              },
              {
                name: "一国两制",
                value: 800,
              },
              {
                name: "特色社会主义思想",
                value: 700,
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    handleClick(e) {
      this.baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  box-sizing: border-box !important;
  background: #f2f2f2;
  overflow-x: hidden !important;

  .top-panel {
    width: 100%;
    height: 251px;
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 28px 20px;

    .top-panel-content {
      margin-bottom: 34px;

      .img-box {
        width: 80px;
        height: 80px;
        float: left;
        margin-right: 20px;
      }

      .txt-box {
        width: calc(100% - 100px);
        float: left;
        font-size: 18px;
        line-height: 38px;
        color: #999;

        p.num-box {
          span {
            font-size: 40px;
            line-height: 42px;
            color: #666;
            margin-right: 10px;
          }
        }
      }
    }

    .bottom-panel-content {
      width: 100%;
      height: 81px;
      background-color: #f6f8fc;
      border-radius: 4px;
      padding: 20px 25px;

      .txt-box {
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        color: #999;
        margin-bottom: 20px;
      }
    }
  }

  ::v-deep {
    .el-card__body {
      height: 200px;

      .echarts {
        width: 100%;
        height: 140px;
      }
    }
  }

  .bottom {
    margin-top: 5px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid $base-border-color;
    text-align: left;
    color: #595959;
  }
}
</style>
