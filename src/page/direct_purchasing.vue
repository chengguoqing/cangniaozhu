<!--直购列表-->
<template>
	<div >
        <section class="header_er pd pr bbm">
            <i class="dx icon-left fz16 b" @click="$router.back(-1)"></i>
            <img src="http://mall.cangniaowl.com/static_main/img/zhigou.png" class="zhigoulogo">
        </section>

        <section class="pd  " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
            <ul class="sd_kh_slist dsf_jh_dert">
                <li class="pl10 mt10 pt10 pm5 pr ov" v-for="sdf  in brandrecommendselect">
                    <span class="cf tuisd_df fz14">推 荐</span>
                    <section class="sd_jh_row">
                        <img :src="sdf.brand_logo_image" class="yj oui_sdH_er fl">
                        <section class="ov pl10">
                            <p class="fz15 z3 mt2">{{sdf.brand_name}}</p>

<!--                            <p class="fz12 z9 mt2">箱包鞋帽>男士皮鞋</p>-->
                        </section>
                        <p class="qc"></p>
                    </section>
<!--
                    <section class="pr10 fz12 z9 mt10 dsf_jh_dert">
                    介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介

                    </section>
-->

                    <section class="mui-row mt10">
                    <p class="mui-col-xs-4 pr10 df_jh_detxf" v-for="wd in sdf.goods_detail" @click="hfer(wd.shop_id+'.html#/commodity_details?goods_id='+wd.goods_id)">
                        <img :src="wd.goods_thumb" class="br">
                    </p>

                </section>

                </li>
            </ul>

    </section>



                   <p class="jgh_ddre_er ">
            <span v-if="!loading">加载中...</span>
               <span v-else>已经到底了</span>
        </p>

        <section class="foiu_de_dr cen pm5 ov mt20">

            <img src="http://mall.cangniaowl.com/static_main/img/headF.png" class="sd_logo_er">
            <p class="f_b fz12 dibu_dertdc">
                <span class="fz14">苍鸟超级电商</span><br>
                 <span class="sd_kjyh_eet">Copyright2017 All Rights Reserved</span>
            </p>

        </section>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1, //页码
                loading: true,
                brandrecommendselect: []
            }
        },
        components: {

        },
        methods: {
            hyty_s(call) {
                let brandrecommendselect = {},
                    th = this
                brandrecommendselect.token = this.token
                brandrecommendselect.page = this.page
                th.loading = false;
                this.post("home/brandrecommendselect", brandrecommendselect, function(data) {

                    try {
                        call()
                    } catch (e) {

                    }
                    if (data) {
                        data.map(a => {
                            th.brandrecommendselect.push(a)
                        })
                    } else {
                        th.loading = true;
                    }


                })
            },
            loadMore() {
                if (this.brandrecommendselect.length > 9) {
                    this.page++
                        this.hyty_s(function() {
                            console.log(222);
                        })
                }

            },
        },
        mounted() {
            window.scrollTo(0, 0)
            this.hyty_s()
            this.Title("苍鸟超级电商")
        },
    }

</script>
<style scoped>
    .oui_sdH_er {
        width: 45px;
        height: 45px;
    }

    .dsf_jh_dert {
        line-height: 1.4
    }

    .df_jh_detxf img {
        width: 100%;
        height: 6.5rem;
        border-radius: 8px;
    }

    .tuisd_df {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 50px;
        text-align: center;
        line-height: 25px;
        height: 25px;
        background: linear-gradient(to right, #FF5469, #FF0030);

        border-bottom-left-radius: 10px;
    }

    .dsf_jh_dert {
        min-height: 600px;
    }
    @media screen and (min-width: 600px){
        .df_jh_detxf img {
               height: 10rem;
        }

    }
</style>
