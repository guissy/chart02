<template>
    <div class="light-btn">
        <span class="label">{{text}}</span>
        <span class="num">{{value}}</span>
    </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      }
    },
  }
</script>
<style scoped>
    .light-btn {
        position: absolute;
        width: 80px;
        height: 80px;
    }

    .light-btn::before,
    .light-btn::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: inset 0 0 10px #4d83d5;
        z-index: 0;
        pointer-events: none;
    }

    .light-btn::after {
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
    }

    .light-btn > .label {
        display: block;
        word-break: keep-all;
        padding-top: 20px;
        font-size: 12px;
        width: 85px;
        text-align: center;
        z-index: 1;
        transition: all 0.3s;
    }

    .light-btn > .num {
        display: block;
        text-align: center;
        font-size: 18px;
        line-height: 28px;
        color: #20ceef;
        z-index: 1;
        transition: all 0.3s;
    }

    .light-btn:hover > .label {
        font-weight: 900;
    }

    .light-btn:hover > .num {
        font-size: 22px;
    }
</style>