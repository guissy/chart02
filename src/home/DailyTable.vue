<template>
    <section class="every-class-wrap">
        <h3 class="every-class-wrap-title">各班考勤统计</h3>
        <table class="every-class">
            <thead>
            <tr>
                <th>班级名称</th>
                <th>正常率</th>
                <th>正常</th>
                <th>缺勤</th>
                <th>迟到</th>
                <th>早退</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(v, i) of tableData" :key="i">
                <td class="grade-name">{{v.name}}</td>
                <td class="grade-rate">{{v.rate.toFixed(1) + '%'}}</td>
                <td>{{v.normal}}</td>
                <td>{{v.empty}}</td>
                <td>{{v.late}}</td>
                <td>{{v.early}}</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
  import Mock from 'mockjs';
  // import './DailyTable.css';
    export default {
      data: () => {
        return {
          tableData: Mock.mock({
            'data|5': [{
              'name': '5(' + Mock.Random.integer(1, 5) + ')班',
              'rate|66-99': 1,
              'normal|60-99': 1,
              'empty|1-19': 1,
              'late|1-19': 1,
              'early|1-19': 1,
            }]
          }).data
        }
      }
    }
</script>
<style scoped>
    /* -------- 各班考勤统计 -------- */
    .every-class-wrap {
        margin-left: 12px;
        margin-top: 15px;
        width: 402px;
        border: 1px solid #4b6286;
        color: #fff;
    }

    .every-class-wrap-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0px 0px 4px #fff;
        text-indent: 10px;
    }
    .every-class-wrap-title::before {
        content: '';
        display: inline-block;
        border: 2px solid #00dbfd;
        border-radius: 50%;
        transform: translate(-5px, -3px);
        box-shadow: 0 0 4px #73eafd, 0 0 8px #fff;
    }

    table.every-class {
        width: 400px;
        text-align: center;
    }
    table.every-class th {
        color: #25d8f3;
        line-height: 36px;
    }
    table.every-class .grade-name {
        color: #fff;
    }
    table.every-class .grade-rate {
        color: #e1c97e;
    }
    table.every-class tbody td {
        color: #13cdaf;
        line-height: 36px;
    }
    table.every-class tbody tr:nth-child(odd) {
        background: #071f55;
    }
    
</style>