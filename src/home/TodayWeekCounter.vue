<template>
    <section class="today-user-daily-wrap">
        <h2 class="today-user-daily-title">今日考勤情况</h2>
        <ul class="today-user-daily">
            <li>
                <span class="label">出勤人数</span>
                <div class="user-10">
                    <img v-for="v of 5" :key="v" :src="userUrl" class="user-one"/>
                </div>
                <span class="user-num">153</span>
            </li>
            <li>
                <span class="label">迟到人数</span>
                <div class="user-10">
                    <img v-for="v of 3" :key="v" :src="userUrl" class="user-one"/>
                </div>
                <span class="user-num">23</span>
            </li>
            <li>
                <span class="label">缺勤人数</span>
                <div class="user-10">
                    <img v-for="v of 6" :key="v" :src="userUrl" class="user-one"/>
                </div>
                <span class="user-num">21</span>
            </li>
            <li>
                <span class="label">请假人数</span>
                <div class="user-10">
                    <img v-for="v of 3" :key="v" :src="userUrl" class="user-one"/>
                </div>
                <span class="user-num">23</span>
            </li>
            <li>
                <span class="label">早退人数</span>
                <div class="user-10">
                    <img v-for="v of 4" :key="v" :src="userUrl" class="user-one"/>
                </div>
                <span class="user-num">14</span>
            </li>
        </ul>
        <div class="week-normal-rate">
            <h3>一周考勤正常率</h3>
            <LineChart :width="410" :height="150" :chart-data="chartData">
            </LineChart>
        </div>
    </section>
</template>
<script>
  import {Line, mixins} from 'vue-chartjs';
  import user from '../assets/user.png';
  import Mock from 'mockjs';
  import my_mixin from '../my_mixin';

  export default {
    mixins: [my_mixin],
    data: function () {
      return {
        chartData: this.dataSet(Mock.mock({
          'data|7': [{
            'rate|60-99': 1,
            'rate_name': '80%',
            'name|+1': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          }]
        }).data, 'name', 'rate', {borderColor: '#13cdaf'}),
        userUrl: user,
      }
    },
    components: {
      LineChart: {
        extends: Line,
        mixins: [mixins.reactiveProp],
        props: ['options'],
        mounted() {
          this.renderChart(this.chartData, {
            legend: {
              display: false,
            },
            elements: {
              line: {
                borderColor: '#13cdaf',
              },
              point: {
                borderColor: '#13cdaf',
              }
            },
            scales: {
              yAxes: [{
                gridLines: {
                  display: true,
                  lineWidth: 1,
                  color: '#31487a',
                },
                ticks: {
                  maxTicksLimit: 5,
                  callback: function (value) {
                    return value + '%';
                  }
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
    /* -------- 今日用户 -------- */
    .today-user-daily-wrap {
        margin-left: 12px;
        width: 402px;
        border: 1px solid #4b6286;
        color: #fff;
    }

    .today-user-daily-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0 0 4px #fff;
        text-indent: 10px;
    }

    ul.today-user-daily {
        width: 415px;
        padding: 10px;
    }

    ul.today-user-daily li {
        display: inline-flex;
        width: 180px;
        margin: 20px 10px 0 0;
    }

    ul.today-user-daily .user-10 {
        margin-left: 10px;
        display: inline-block;
        min-width: 80px;
    }

    ul.today-user-daily .user-one {
        width: 10px;
    }

    ul.today-user-daily .user-num {
        color: #e1c97e;
        width: 32px;
        font-weight: bold;
        text-align: right;
    }

    /* -------- 一周考勤正常率 -------- */
    .week-normal-rate h3 {
        color: #fff;
        font-size: 12px;
    }

    .today-user-daily-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0 0 4px #fff;
        text-indent: 10px;
    }
</style>