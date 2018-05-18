<template>
   <section>
   <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" style="background-image: url('static/img/bofangh_a.png')"></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" style="background-image: url('static/img/bofangh_b.png')"></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" style="background-image: url('static/img/bofangh_c.png')"></div>
  </div>
</div>

    </section>
</template>
<script>
    export default {
        props:{
            title:""
        },
        data() {
            return {

            }
        },
        methods: {

        },
        created: function() {

        },
    }

</script>
<style scoped>
@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
/*    bottom: -30px;*/
       opacity: 0.2;
}
.bgTop {
    z-index: 15;
    opacity: 0.2;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.2;
}
.bgBottom {
    z-index: 5;
}
.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
   background-size: 500px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
   background-size: 500px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
   background-size: 500px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</style>
