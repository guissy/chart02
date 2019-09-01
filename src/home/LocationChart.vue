<template>
    <section class="school-safe-wrap">
        <h3 class="school-safe-title">校园安全数据</h3>
        <div class="school-safe">
            <div>
                <h4 :style="{ textIndent: '10px' }">人群出入比例统计</h4>
                <PieChart
                        :style="{ width: '240px', marginLeft: '-38px' }"
                        :chart-data="chartData"
                >
                </PieChart>
            </div>
            <div :style="{ margin: '0 0 0 -50px' }">
                <h4 :style="{ textIndent: '30px' }">各位置出入次</h4>
                <AreaChart
                        style="width: 280px; height: 150px;"
                        :chart-data="chartData2"
                />
            </div>
        </div>
    </section>
</template>
<script>
  import {Pie, Line, mixins} from 'vue-chartjs';
  import Mock from 'mockjs';
  import my_mixin from '../my_mixin';

  const hours = Mock.Random.range(4, 24, 4);
  const data2 = Mock.mock({
    'data|5': [{
      'name|1': hours.map(t => t + ':00'),
      'gate|66-99': 1,
      'room|60-99': 1,
      'lib|60-99': 1,
    }]
  }).data;
  const studentTeacherParent = [
    {name: '学生', value: 500},
    {name: '老师', value: 100},
    {name: '家长', value: 400}
  ];
  export default {
    mixins: [my_mixin],
    inject: ['getGradient'],
    data: function () {
      return {
        chartData: {
          labels: studentTeacherParent.map(v => v.name),
          datasets: [
            {
              label: '学生',
              borderWidth: 1,
              borderColor: ['#01ccfe', 'transparent', 'transparent'],
              backgroundColor: ['#01ccfe', 'transparent', 'transparent'],
              data: studentTeacherParent.map(v => v.value),
              weight: 1,
            },
            {
              label: '家长',
              borderWidth: 1,
              borderColor: ['#01ccfe', 'transparent', '#02ffd0'],
              backgroundColor: ['#01ccfe', 'transparent', '#02ffd0'],
              data: studentTeacherParent.map(v => v.value),
              weight: 1,
            },
            {
              label: '老师',
              borderWidth: 1,
              borderColor: ['#01ccfe', '#e54df8', '#02ffd0'],
              backgroundColor: ['#01ccfe', '#e54df8', '#02ffd0'],
              data: studentTeacherParent.map(v => v.value),
              weight: 1,
            }
          ]
        },
        chartData2: {
          labels: data2.map(v => v.name),
          datasets: [
            {
              label: '校门',
              borderColor: '#01ccfe',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#01ccfe',
              backgroundColor: this.getGradient('#01ccfe'),
              data: data2.map(v => v.gate),
            },
            {
              label: '宿舍',
              borderColor: '#e54df8',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#e54df8',
              backgroundColor: this.getGradient('#e54df8'),
              data: data2.map(v => v.room),
            },
            {
              label: '图书馆',
              borderColor: '#02ffd0',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#02ffd0',
              backgroundColor: this.getGradient('#02ffd0'),
              data: data2.map(v => v.lib),
            }
          ]
        },
      }
    },

    components: {
      PieChart: {
        extends: Pie,
        mixins: [mixins.reactiveProp],
        props: ['options','width','height'],
        mounted() {
          this.renderChart(this.chartData, {
            cutoutPercentage: 40,
            rotation: 2,
            scales: {
              xAxes: [{
                display: false,
              }],
              yAxes: [{
                display: false,
              }]
            }
          })
        }
      },
      AreaChart: {
        extends: Line,
        mixins: [mixins.reactiveProp],
        props: ['options','width','height'],
        mounted() {
          this.renderChart(this.chartData, {
            responsive: true,
            title: {
              display: false,
              text: '各位置出入次'
            },
            tooltips: {
              mode: 'index',
            },
            hover: {
              mode: 'index'
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: true,
                  lineWidth: 1,
                  color: '#31487a',
                }
              }]
            }
          })
        }
      }
    }
  }
</script>
<style scoped>
    .school-safe-wrap {
        margin-left: 12px;
        margin-top: 15px;
        width: 427px;
        border: 1px solid #4b6286;
        color: #fff;
        font-size: 12px;
    }

    .school-safe-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0 0 4px #fff;
        text-indent: 10px;
    }
    .school-safe-title::before {
        content: '';
        display: inline-block;
        border: 2px solid #00dbfd;
        border-radius: 50%;
        transform: translate(-5px, -3px);
        box-shadow: 0 0 4px #73eafd, 0 0 8px #fff;
    }

    .school-safe {
        display: flex;
    }

    .school-safe h4 {
        padding: 10px 0 5px;
        color: #25d8f3;
    }

    .school-safe > *:nth-child(2) {
        flex: 1;
    }
</style>