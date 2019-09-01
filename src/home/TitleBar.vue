<template>
    <header class="App-header">
        <CircleArc />
        <span class="App-header-time">
            <img class="App-header-clock" src="../assets/clock.png"/>
          <span class="App-header-week">{{format('dddd')}}</span>
          <time class="App-header-now">{{format('YYYY/MM/DD hh:mm')}}</time>
        </span>
        <h1 class="App-header-title">智慧校园大数据中心</h1>
        <div class="App-header-weather">
            <span class="App-header-weather-text">多云</span>
            <span>10 ~ 13℃</span>
        </div>
    </header>
</template>
<script>
  import Dayjs from 'dayjs';
  import CircleArc from "@/bg/CircleArc";

  export default {
    methods: {
      format: function (fmt) {
        return Dayjs(Date.now()).format(fmt);
      }
    },
    components: {
      CircleArc
    }
  }
</script>
<style scoped>
    .App-header {
        display: flex;
        align-content: center;
    }

    .App-header-time {
        vertical-align: middle;
        margin-left: 15px;
        width: 268px;
        font-size: 14px;
        z-index: 10;
    }

    .App-header-clock {
        display: inline-block;
        padding-right: 10px;
        height: 30px;
        vertical-align: middle;
    }

    .App-header-week {
        vertical-align: middle;
        font-size: 20px;
        margin-right: 10px;
        line-height: 50px;
    }

    .App-header-now {
        vertical-align: sub;
    }

    .App-header-title {
        flex: 1;
        display: inline-block;
        margin: 10px 0;
        text-align: center;
        color: #cbf6fe;
        font-size: 30px;
        text-shadow: 0 0 4px #b2dbff;
    }

    .App-header-weather {
        line-height: 50px;
        width: 268px;
        font-size: 16px;
        font-weight: bold;
    }

    .App-header-weather-text {
        padding-right: 10px;
    }
</style>

