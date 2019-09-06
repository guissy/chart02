<template>
    <div class="App">
        <TitleBar/>
        <div class="layout">
            <article>
                <TotalCounter/>
                <TodayWeekCounter/>
                <DailyTable/>
            </article>
            <article>
                <SchoolDevice/>
                <LocationChart/>
            </article>
            <article>
                <FamilySchool/>
                <LiveData/>
            </article>
        </div>
    </div>
</template>
<script>
  import TitleBar from "@/home/TitleBar";
  import TotalCounter from "@/home/TotalCounter";
  import TodayWeekCounter from "@/home/TodayWeekCounter";
  import DailyTable from "@/home/DailyTable";
  import SchoolDevice from "@/home/SchoolDevice";
  import LocationChart from "@/home/LocationChart";
  import FamilySchool from "@/home/FamilySchool";
  import LiveData from "@/home/LiveData";
  import Chart from 'chart.js';
  import Dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  Dayjs.locale('zh-cn');

  Chart.defaults.global.scales = {
    xAxes: [{
      ticks: {
        fontColor: '#ffffff',
      },
    }],
    yAxes: [{
      ticks: {
        fontColor: '#ffffff',
      }
    }]
  };
  Chart.defaults.global.legend = {
    ...Chart.defaults.global.legend,
    // fullWidth: false,
    labels: {
      ...Chart.defaults.global.legend.labels,
      boxWidth: 10,
      fontColor: '#fff',
      fontSize: 10,
      padding: 5,
    }
  }
  export default {
    mounted: function () {
    },
    provide: () => {
      return {
        getGradient(color) {
          const canvas = document.querySelector('canvas'); //this.$refs.canvas;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 220);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.1, color);
            gradient.addColorStop(0.6, 'transparent');
            return gradient;
          } else {
            return color;
          }
        }
      }
    },
    components: {
      TitleBar,
      TotalCounter,
      TodayWeekCounter,
      DailyTable,
      SchoolDevice,
      LocationChart,
      FamilySchool,
      LiveData,
    },
  };
</script>
<style>
    body h3,
    body h4,
    body h5 {
        color: #fff;
    }

    .App {
        background: #030b30 radial-gradient(#174c9a, #050b2f 65%);
        color: #fff;
    }

    .App * {
        box-sizing: border-box;
    }

    .layout {
        display: flex;
    }

</style>