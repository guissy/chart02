<template>
    <div class="triple-light-btn">
        <div class="borders">
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
        </div>
        <DoubleLightButton :text="text" :value="value" style="left: 7px; top: 7px;"/>
    </div>
</template>
<script>
    import DoubleLightButton from "./DoubleLightButton";

    export default {
      props: {
        text: {
          type: String,
          default: '',
        },
        value: {
          type: String,
          default: '',
        }
      },
      components: {
        DoubleLightButton
      }
    }
</script>
<style scoped>
    .triple-light-btn,
    .borders {
        position: absolute;
    }
    .border1, .border2, .border3 {
        border: 2px solid #408fd9;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        position: absolute;
        top: 0;
        width: 94px;
        height: 94px;
    }
    .triple-light-btn .borders {
        transition: all 0.3s;
        transform-origin: 47px 47px;
    }
    .triple-light-btn:hover .borders {
        transform: rotate(0.5turn);
    }
    .border2 {
        transform: rotate(120deg);
    }
    .border3 {
        transform: rotate(-120deg);
    }
    .triple-light-btn .light-btn > .num {
        color: #e1c97e;
        font-weight: bold;
    }

</style>