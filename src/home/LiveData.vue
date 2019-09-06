<template>
    <section class="live-event-wrap">
        <h3 class="live-event-title">实时数据</h3>
        <ul class="live-event">
            <li v-for="(v,i) of data5" :key="i">
                <div>
                    <img class="avatar" :src="imgUrl()" />
                    <div class="title">
                        <h4>{{v.name}}老师</h4>
                        <h5>{{v.op}}</h5>
                    </div>
                </div>
                <time>{{timer(v.createAt)}}</time>
            </li>
        </ul>
    </section>
</template>
<script>
  import Dayjs from 'dayjs';
  import Mock from 'mockjs';
    export default {
      data: function () {
        return {
          data5: Mock.mock({
            'data|6': [{
              'name': '@cname',
              'op|1': ['发布了一个通知', '布置了一个作业'],
              'createAt': '@date',
            }]
          }).data
        }
      },
      methods: {
        imgUrl() {
          return Mock.Random.image('60x60', '', '', '', 'user');
        },
        timer(t) {
          return Dayjs(t, {format: 'hh:mm:ss'}).format('MM-DD hh:mm')
        }
      }
    }
</script>
<style scoped>
    /* -------- 实时数据 -------- */
    .live-event-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border-bottom: 1px solid #4b6286;
        text-shadow: 0 0 4px #fff;
        text-indent: 10px;
    }
    .live-event-title::before {
        content: '';
        display: inline-block;
        border: 2px solid #00dbfd;
        border-radius: 50%;
        transform: translate(-5px, -3px);
        box-shadow: 0 0 4px #73eafd, 0 0 8px #fff;
    }

    .live-event-wrap {
        margin-left: 15px;
        margin-top: 15px;
        border: 1px solid #4b6286;
    }
    ul.live-event {
        height: 240px;
        overflow: scroll;
        position: relative;
    }
    ul.live-event::after {
        display: block;
        position: sticky;
        bottom: 0;
        content: ' ';
        width: 100%;
        height: 35px;
        background-image: linear-gradient(rgba(5, 6, 30, 0.1) 0%, rgba(5, 6, 30, 0.95) 100%);
        pointer-events: none;
    }
    ul.live-event > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 10px;
    }
    ul.live-event .title {
        margin-left: 15px;
        display: inline-block;
        vertical-align: middle;
    }
    ul.live-event .title > h4 {
        color: #25d8f3;
    }
    ul.live-event .title > h5 {
        font-size: 12px;
        color: #25d8f3;
    }
    .avatar {
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        width: 34px;
    }
</style>