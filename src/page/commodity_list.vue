<!--商品列表-->
<template>
	<div >

                <section class="header_er pd pr bbm">
            <i class="dx icon-left fz16 b" @click="$router.back(-1)"></i>
              <img src="http://mall.cangniaowl.com/static_main/img/tui_a.png" class="zhigoulogo" v-if="types_e==4">
                     <img src="http://mall.cangniaowl.com/static_main/img/tui_b.png" class="zhigoulogo" v-if="types_e==3">
                     <img src="http://mall.cangniaowl.com/static_main/img/tui_c.png" class="zhigoulogo" v-if="types_e==1">
        </section>


        <section v-if="is_dert">
        <section class="mui-row pl10"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
        <section class="mui-col-xs-6 pr10 mt10" v-for="ddf in sd_Drt" @click="hfer(ddf.shop_id+'.html#/commodity_details?goods_id='+ddf.goods_id)">

            <section class="sd_jh_dertxfr">
        <p class="sd_jh_det">
            <img :src="ddf.goods_thumb" class="cz">
        </p>
            <section class="pd pr pt5">
               <p class="z3 fz14 dianer df_jh_er">
    {{ddf.goods_name}}
    </p>

        <p class="mt10 pm5">
    <span class="fz14 red">￥<span v-html="price_guo(ddf.shop_price)"></span></span>
<!--            <i class="dx icon-gengduo z3 d_jh_dertfr"></i>-->
    </p>

    </section>


    </section>


    </section>
        </section>





                <p class="jgh_ddre_er ">
            <span v-if="!loading&&sd_Drt.length>9">加载中...</span>
               <span v-else>已经到底了</span>
        </p>


        <section class="foiu_de_dr cen pm5 ov mt20">

            <img src="http://mall.cangniaowl.com/static_main/img/headF.png" class="sd_logo_er">
            <p class="f_b fz12 dibu_dertdc">
                <span class="fz14">苍鸟超级电商</span><br>
                 <span class="sd_kjyh_eet">Copyright2017 All Rights Reserved</span>
            </p>

        </section>
          </section>
        <loadin v-else></loadin>
	</div>
</template>
<script>
    import loadin from "../components/loadin.vue"
    export default {
        data() {
            return {
                 is_dert:false,
                types_e: 1,
                sd_Drt: [],
                loading: true,
                page: 1
            }
        },
        components: {
loadin:loadin
        },
        methods: {
            get_sdf() {
                let saveshopsandgoodsselect = {},
                    th = this
                saveshopsandgoodsselect.token = this.token
                saveshopsandgoodsselect.type = this.types_e
                saveshopsandgoodsselect.page = this.page
                th.loading = false;
                this.post("home/saveshopsandgoodsselect", saveshopsandgoodsselect, function(data) {
                    th.is_dert=true
                    if (data) {
                        data.map(a => {
                            th.sd_Drt.push(a)
                        })
                    } else {
                        th.loading = true;
                    }

                })
            },
            loadMore() {
                if (this.sd_Drt.length > 9) {
                    this.page++
                        this.get_sdf()
                }

            },
        },
        mounted() {
            this.types_e = this.$route.query.type
            this.get_sdf()
            window.scrollTo(0, 0);
            this.Title("苍鸟超级电商")
        },
    }

</script>
<style scoped>


</style>
