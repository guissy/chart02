<template>
    <canvas :id="id" width="280" height="280"></canvas>
</template>
<script>
  let direct = 1;
  export default {
    data() {
      return {
        raf: 0,
      }
    },
    props: {
      pos: {
        type: Array,
      },
    },
    computed: {
      id() {
        return '_' + this.pos.join('')
      }
    },
    mounted() {
      const canvas = document.querySelector('#'+this.id);
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = Math.random();
      ctx.beginPath();
      ctx.moveTo(226, 69);
      ctx.quadraticCurveTo(...this.pos);
      ctx.stroke();
      const animate = () => {
        if (ctx.lineWidth <= 0.07) {
          direct = 1;
          ctx.lineWidth = 0.07;
        }
        if (ctx.lineWidth >= 0.55) {
          direct = -1;
          ctx.lineWidth = 0.55;
        }
        ctx.lineWidth += 0.02 * Math.random() * direct;
        ctx.clearRect(0, 0, 280, 280);
        ctx.beginPath();
        ctx.moveTo(226, 69);
        ctx.quadraticCurveTo(...this.pos);
        ctx.stroke();
        this.raf = requestAnimationFrame(animate);
      }
      this.raf = requestAnimationFrame(animate);
    },
    destroy() {
      return cancelAnimationFrame(this.raf);
    }
  }
</script>
