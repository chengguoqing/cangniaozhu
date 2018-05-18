<template>
  <div id="app">

    <section v-if="invalidRoute">
        <p class="cen mt100">
            <img src="http://mall.cangniaowl.com/static/img/404.png" class="png_sos">
        </p>

        <p class="mt40 cen z3">
    可怜的页面姑娘不小心迷路了~
        </p>

        <p class="cen mt30">
            <mt-button type="danger" class="fz16 pl30 pr30 huis_sdre" @click="hf('')">带她回首页</mt-button>
        </p>

        <p class="cen mt50">
        <img src="http://mall.cangniaowl.com/static/img/404er.png" class="sos_gn">
    </p>


    </section>
    <section v-else class="h100">
    <keep-alive >     <!--使用keep-alive会将页面缓存-->
        <router-view  v-if="$route.meta.keepAlive" ></router-view>
   </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
<!--
     <router-view v-if="!$route.meta.keepAlive"></router-view>

-->
        </section>

  </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            invalidRoute() {
                return !this.$route.matched || this.$route.matched.length === 0;
            }
        },
        mounted() {

            var th = this
            var sd_us = window.location.href,
                getwxsign = {}
            getwxsign.token = this.token
            //            getwxsign.url = sd_us.split("?")[0]
            getwxsign.url = sd_us
            this.post('home/getwxsign', getwxsign, function(data) {

                th.wx_config(data)
                th.fenxiang("苍鸟超级电商", sd_us, "http://mall.cangniaowl.com/static_main/img/copy_bottom_bg.png", '一站式新型购物平台，品牌直购，安全放心。')


            })

        }
    }

</script>
<style scoped>
    .png_sos {
        width: 157px;
    }

    .huis_sdre {
        height: 40px;
    }

    .sos_gn {
        width: 250px;
    }

</style>




