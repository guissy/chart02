<template>
    <div class="arc-box">
        <div class="arc-wrap">
            <div class="arc1"></div>
            <div class="arc2"></div>
            <div class="arc3"></div>
            <div class="arc4"></div>
            <div v-for="v of 14" :key="v" class="rect1" :style="{transform: 'translateX(49px) rotate('+v*12+'deg)'}"></div>
            <div class="arc5"></div>
        </div>
        <img src="../assets/line3.svg"/>
        <img src="../assets/line3.svg" class="right"/>
    </div>
</template>

<script>
  export default {
    name: "circle"
  }
</script>

<style scoped>

    .arc-box {
        position: absolute;
        width: 100%;
    }
    .arc-wrap {
        position: absolute;
        left: 150px;
        top: -60px;
    }
    .arc1,
    .arc2,
    .arc3,
    .arc4,
    .arc5
    {
        position: absolute;
        width: 80px;
        height: 80px;
        border: 1px solid #315575;
        border-radius: 50%;
    }
    .arc1 {
        width: 52px;
        height: 52px;
        top: 14px;
        left: 14px;
    }
    .arc2 {
        width: 66px;
        height: 66px;
        top: 7px;
        left: 7px;
    }
    .arc4 {
        width: 110px;
        height: 110px;
        top: -15px;
        left: -15px;
    }
    .arc5 {
        width: 148px;
        height: 148px;
        top: -34px;
        left: -34px;
    }
    .rect1 {
        position: absolute;
        width: 14px;
        height: 5px;
        border: 1px solid #315575;
        top: 40px;
        left: 40px;
        transform-origin: -49px 0;
    }
    .arc-box img {
        position: absolute;
        top: 52px;
        width: 265px;
    }
    .arc-box img.right {
        position: absolute;
        top: 52px;
        right: 0;
        width: 265px;
        transform: scaleX(-1);
    }
</style>