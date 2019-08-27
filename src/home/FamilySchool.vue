<template>
    <section class="school-parent-wrap">
        <section class="school-parent-total">
            <h3 class="school-parent-title">家校互动</h3>
            <ul>
                <li class="school-parent-card">
                    <h4>家校通知</h4>
                    <dl>
                        <dt class="label">推送次数</dt>
                        <dd class="num">13492</dd>
                        <dt class="label">查看次数</dt>
                        <dd class="num">3147931</dd>
                    </dl>
                </li>
                <li class="school-parent-card">
                    <h4>课后作业</h4>
                    <dl>
                        <dt class="label">推送次数</dt>
                        <dd class="num">13492</dd>
                        <dt class="label">查看次数</dt>
                        <dd class="num">3147931</dd>
                    </dl>
                </li>
                <li class="school-parent-card">
                    <h4>班级动态</h4>
                    <dl>
                        <dt class="label">发布次数</dt>
                        <dd class="num">13492</dd>
                    </dl>
                </li>
                <li class="school-parent-card">
                    <h4>成长记录</h4>
                    <dl>
                        <dt class="label">发布次数</dt>
                        <dd class="num">13492</dd>
                    </dl>
                </li>
            </ul>
        </section>
        <section class="school-parent-chart">
            <div class="school-parent-daily">
                <h4>家校互动趋势</h4>
                <DailyLineChart
                        :chart-data="chartData2"
                        style="width: 250px; height: 140px;"
                />
            </div>
            <div class="school-parent-pie">
                <h4>家校互动类型占比</h4>
                <PieChart
                        :chart-data="chartData"
                        style="width: 140px; height: 120px; margin-left: 2px; margin-top: 20px;" />
            </div>
        </section>
    </section>
</template>
<script>
  import {Pie, Line, mixins} from 'vue-chartjs';
  import Mock from 'mockjs';
  import my_mixin from '../my_mixin';

  const hours = Mock.Random.range(4, 24, 4);
  const data2 = Mock.mock({
    'data|6': [{
      'name|1': hours.map(t => '05/' + t ),
      'notice|1-99': 1,
      'homework|1-99': 1,
      'class|1-99': 1,
      'grow|1-99': 1,
    }]
  }).data;
  const data4 = [
    {name: 'notice', value: Mock.Random.integer(1, 99), fill: "#e54df8"},
    {name: 'homework', value: Mock.Random.integer(1, 99), fill: "#01ccfe"},
    {name: 'class', value: Mock.Random.integer(1, 99), fill: "#02ffd0"},
    {name: 'grow', value: Mock.Random.integer(1, 99), fill: "#e1c97e"},
  ];
  export default {
    mixins: [my_mixin],
    inject: ['getGradient'],
    data: function () {
      return {
        chartData: {
          labels: Object.values({ 'notice': '家校通知', 'homework': '课后作业', 'class': '班级动态', 'grow': '成长记录' }),
          datasets: [
            {
              label: '',
              borderWidth: 0,
              // borderColor: ['#e54df8', '#01ccfe', '#02ffd0', '#e1c97e'],
              backgroundColor: ['#e54df8', '#01ccfe', '#02ffd0', '#e1c97e'],
              data: data4.map(v => v.value),
              weight: 1,
            }
          ]
        },
        chartData2: {
          labels: data2.map(v => v.name),
          datasets: [
            {
              label: '家校通知',
              borderColor: '#e54df8',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#e54df8',
              backgroundColor: 'transparent',
              data: data2.map(v => v.notice),
            },
            {
              label: '课后作业',
              borderColor: '#01ccfe',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#01ccfe',
              backgroundColor: 'transparent',
              data: data2.map(v => v.homework),
            },
            {
              label: '班级动态',
              borderColor: '#02ffd0',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#02ffd0',
              backgroundColor: 'transparent',
              data: data2.map(v => v.class),
            },
            {
              label: '成长记录',
              borderColor: '#e1c97e',
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: '#e1c97e',
              backgroundColor: 'transparent',
              data: data2.map(v => v.grow),
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
            cutoutPercentage: 60,
            rotation: 2,
            legend: {
              position: 'right',
            },
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
      DailyLineChart: {
        extends: Line,
        mixins: [mixins.reactiveProp],
        props: ['options','width','height'],
        mounted() {
          this.renderChart(this.chartData, {
            responsive: true,
            title: {
              display: false,
              text: '家校互动趋势'
            },
            tooltips: {
              mode: 'index',
            },
            hover: {
              mode: 'index'
            },
            scales: {
              yAxes: [{
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
    /* -------- 家校互动 -------- */
    .school-parent-wrap {
        margin-left: 15px;
        width: 400px;
        border: 1px solid #4b6286;
        font-size: 10px;
        color: #fff;
    }

    .school-parent ul {
        display: flex;
        margin-left: 8px;
        margin-bottom: 10px;
    }

    .school-parent-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0px 0px 4px #fff;
        text-indent: 10px;
    }

    .school-parent-total {
        padding: 0;
    }
    .school-parent-total ul {
        margin: 5px 0;
    }

    li.school-parent-card {
        display: inline-block;
        padding: 15px 0;
        width: calc(50% - 20px);
        border: 1px solid #2b89a8;
        box-shadow: inset 0 0 6px #b2dbff;
        margin: 8px;
    }
    .school-parent-card h4 {
        padding-left: 10px;
        color: #25d8f3;
    }
    .school-parent-card dl {
        padding-left: 10px;
    }
    .school-parent-card .label {
        display: inline-block;
    }
    .school-parent-card .num {
        display: inline-block;
        margin-top: 10px;
        font-size: 16px;
        line-height: 18px;
        color: #25d8f3;
        width: 110px;
        text-align: right;
        text-shadow: 0 0 2px #72ecff;
        font-family: entsans;
    }


    .school-parent-chart > div {
        display: inline-block;
    }
    .school-parent-daily h4,
    .school-parent-pie h4 {
        margin-left: 10px;
        font-size: 12px;
        color: #25d8f3;
    }

</style>