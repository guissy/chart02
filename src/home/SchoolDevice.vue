<template>
    <div class="school-device-wrap">
        <h3 class="school-device-title">校园设备</h3>
        <ul class="school-device-list">
            <li v-for="(v, i) of data6" :key="i">
                <img src="../assets/phone.png" :style="{ opacity: v.status === 'on' ? 1 : 0.2 }"/>
                <p>
                    <span>{{v.device}}</span><br/>
                    <span :style="{ color: v.status === 'on' ? '#13cdaf' : '#e1c97e' }">
                        {{v.status === 'on' ? '在线' : '离线'}}
                    </span>
                </p>
            </li>
        </ul>
        <section :style="{background: 'radial-gradient(#1b4b9d, #0d2750)'}">
            <Earth/>
        </section>
    </div>
</template>
<script>
  import Mock from 'mockjs';
  import Earth from "@/earth/Earth";

  export default {
    data: function () {
      return {
        data6: Mock.mock({
          'data|6': [{
            'device|1': ['学校大门', '学校后门', '图书馆', '宿舍'],
            'status|1': ['on', 'off'],
          }]
        }).data
      }
    },
    components: {
      Earth
    }
  }
</script>
<style scoped>
    .school-device-wrap {
        margin-left: 12px;
        width: 427px;
        border: 1px solid #4b6286;
    }

    .school-device-title {
        font-size: 14px;
        color: #fff;
        padding: 5px;
        border: 1px solid #4b6286;
        text-shadow: 0 0 4px #fff;
        text-indent: 10px;
    }

    ul.school-device-list {
        height: 100px;
        padding: 20px 10px;
        overflow-x: scroll;
        white-space: nowrap;
    }

    ul.school-device-list li {
        display: inline-flex;
        font-size: 12px;
    }

    ul.school-device-list li p {
        padding-top: 10px;
        line-height: 14px;
        margin: 0 20px 0 5px;
    }

    ul.school-device-list li img {
        width: 28px;
        height: auto;
    }
</style>