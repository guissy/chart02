<template>
    <div class="light-btn" :title="text" ref="lightBtn">
        <span class="label">{{text}}</span>
        <span class="num">{{value}}</span>
    </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: {
      text: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
    },
    mounted() {
      if (this.$refs.lightBtn) {
        const style = document.createElement('style');
        style.innerHTML = `
    .light-btn[title=${this.text}]::before,
    .light-btn[title=${this.text}]::after {
        transform: ${this.$refs.lightBtn.style.transform};
    }
      `;
        document.documentElement.appendChild(style);
        this.$refs.lightBtn.style.transform = 'none';
      }
    }
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
        transition: filter 0.2s;
    }

    .light-btn::after {
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
    }

    .light-btn:hover::before,
    .light-btn:hover::after {
        filter: contrast(1.5) brightness(1.8) hue-rotate(10deg);
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
        text-shadow: 0 0px 1px #fff;
        width: 90px;
        letter-spacing: 1px;
        margin-left: -4px;
    }
    .light-btn:hover > .num {
        font-weight: 900;
        transform: scale(1.1);
    }
</style>