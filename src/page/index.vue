<template>
	<div class="sd_drttx">
    <section class="header_sdr ">
     <heaer_c></heaer_c>
    </section>

        <section class="sd_jh_det_e">
<!--        轮播图-->



                          <section class="lunbo_s">

    <mt-swipe :auto="4000">

  <mt-swipe-item class=" h100" v-for="(bann,index) in banner" :key="index">
        <img :src="bann.image" @click="hf(bann.url)">
    </mt-swipe-item>


</mt-swipe>

            </section>






        <section class="box w100 ov bgff pt10 pm5">
            <section class="box_a cen jh_jkher_e" v-for="ls in logfo_s" @click="hf(ls.url,{type:ls.type})">
                <p class="loso_jh_d">
                     <img :src="ls.img" class="cz">
                </p>

                <p class="z6 fz12 mt2">{{ls.text}}</p>
            </section>

        </section>


    <p class="mt5 baoyou_hf">
        <img src="http://mall.cangniaowl.com/static_main/img/promotion.png" >
    </p>

<section class="bgff mui-row pt10 pm10">
    <section class="mui-col-xs-4 cen row_kjh_der" v-for="sdr in sd_erts[0].date" @click="hfer(sdr.shop_id+'.html#/commodity_details?goods_id='+sdr.goods_id)">
        <p class="fm_er_ert  ov ">
            <img :src="sdr.goods_thumb" class="w100 cz">
        </p>
        <p class="mt5">
            <span class="red fz16">
     ￥<span v-html="price_guo(sdr.shop_price)"></span>
                <span class="baoyou cz">包邮</span>
        </span>
        </p>
    </section>

    </section>


<!--        苍鸟好店-->
        <section class="ov ycgnd_dser">
    <section class="good_shops pl10">
        <img src="http://mall.cangniaowl.com/static_main/img/good_shops.png" class="good_shop_img cz">
        <section class="f_b sd_case_e bgff cz" v-for="sd in sd_erts[1].date" @click="hfer(sd.shop_id+'.html')">
               <p class="sd_jh_eert fr mt2">
                 <img :src="sd.shop_logo">
            </p>
            <section class="ov  dianou_sder">
                <p class="fz15 dian z3">{{sd.shop_name}}</p>
                <p class="diansan fz12 dianpjer">{{sd.shop_intro}}</p>
            </section>

            <p class="qc"> </p>
        </section>

        <section class="f_b chakh_srt cz" @click="hf('taste_good')">
            <p class="sd_hjg_rt f_b cz ">查看更多</p>
            <i class="dx icon-right cz z9"></i>
        </section>



    </section>

       </section>

    <p class="tuijian_sdr"  @click="hf('direct_purchasing')">
        <img src="http://mall.cangniaowl.com/static_main/img/recommend.png" >
    </p>
    <section class="bgff pt10 pm10 pd mui-row mb5 dfsd_jh_erte" v-for="(sddf,idx) in brandrecommendselect" v-if="idx<4">
            <section class="mui-col-xs-5 cen f_b cz sd_jh_detwrr">
                <p class="pingpai_s">
                    <img :src="sddf.brand_logo_image">
                </p>
                <p class="cen fz15 z3 mt5" >
                {{sddf.brand_name}}
                </p>
            </section>

        <section class="mui-col-xs-7 pr sd_jh_detrtxc">

            <p class="paiyh_ddert" v-for="sd in sddf.goods_detail" :class="sd.cls" @click="hfer(sd.shop_id+'.html#/commodity_details?goods_id='+sd.goods_id)">
                {{sddf.goods_id}}
                <img :src="sd.goods_thumb">
            </p>


        </section>

    </section>


        <p class="fz14 bgff cen pt10 pm10" @click="hf('direct_purchasing')">
            查看更多
        <img src="http://mall.cangniaowl.com/static_main/img/gengduo.png" class="cz geng_dert">
        </p>

            <p class="tuijian_sdr pt10"  @click="hf('commodity_list',{type:3})">
        <img src="http://mall.cangniaowl.com/static_main/img/shangxing.png" >
    </p>


<!--            最新上线-->

               <section class="ov ycgnd_dser ab">
    <section class="good_shops pl10 ab">

    <section class="sd_jhhg_dsfd bgff f_b pr mr10 cz" v-for="sd in sd_erts[2].date" @click="hfer(sd.shop_id+'.html#/commodity_details?goods_id='+sd.goods_id)">
                    <img src="http://mall.cangniaowl.com/static_main/img/new.png" class="new_img_dert">
        <p class="sd_der_ertx fl  cen ov ">
            <img  :src="sd.goods_thumb" class="cz">

        </p>
        <section class="ov pl10 ds_jh_certxc pr">
            <p class="fz16 z3 dianer df_jh_dert">{{sd.goods_name}}</p>
            <p class="mt10 fz12 z9 dsf_jhh_dert">
                火爆抢购中<br>
                <span class="red">上新开抢价</span><br>
                <span class="red d_jh_detx">￥<span v-html="price_guo(sd.shop_price)" class="
                    fz16 b st"></span></span>

    </p>
            <img src="http://mall.cangniaowl.com/static_main/img/qiang.png" class="qiangsd_s">

        </section>
        <p class="qc"></p>
    </section>


            <section class="f_b chakh_srt cz ab" @click="hf('commodity_list',{type:3})">
            <p class="sd_hjg_rt f_b cz">查看更多</p>
            <i class="dx icon-right cz z9"></i>
        </section>




    </section>

       </section>



                 <p class="tuijian_sdr pt10" @click="hf('commodity_list',{type:4})">
        <img src="http://mall.cangniaowl.com/static_main/img/tuijian.png" >
    </p>

        <section class="mui-row pl10">
        <section class="mui-col-xs-6 pr10 mt10" v-for="ddf in sd_erts[3].date" @click="hfer(ddf.shop_id+'.html#/commodity_details?goods_id='+ddf.goods_id)">

            <section class="sd_jh_dertxfr">
        <p class="sd_jh_det">
            <img :src="ddf.goods_thumb" class="cz">
        </p>
            <section class="pd pr">
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

         <p class="fz14 bgff cen pt10 pm10 mt10" @click="hf('commodity_list',{type:4})">
            查看更多
        <img src="http://mall.cangniaowl.com/static_main/img/gengduo.png" class="cz geng_dert">
        </p>
<!--
        <p class="jgh_ddre_er ">
            <span>已经到底了</span>
        </p>
-->


        <section class="foiu_de_dr cen pm5 ov mt20">

            <img src="http://mall.cangniaowl.com/static_main/img/headF.png" class="sd_logo_er">
            <p class="f_b fz12 dibu_dertdc">
                <span class="fz14">苍鸟超级电商</span><br>
                 <span class="sd_kjyh_eet">Copyright2017 All Rights Reserved</span>
            </p>

        </section>

        </section>
        <loadin class="loadin_s show"></loadin>
            <dibu :kjh_s="'0'"></dibu>
	</div>
</template>
<script>
    import heaer_c from "../components/head_c.vue"
    import loadin from "../components/loadin.vue"
  import dibu from "../components/dibu.vue"

    export default {
        data() {
            return {
                banner: "", //轮播图
                is_dert: false,
                sd_erts: [{
                    type: 1, //1 9.9包邮 2 苍鸟好店 3 最近上新 4 苍鸟推荐（商品
                    max: 6, //最多显示几条
                    date: [], //获取数据
                }, {
                    type: 2, //1 9.9包邮 2 苍鸟好店 3 最近上新 4 苍鸟推荐（商品
                    max: 10, //最多显示几条
                    date: [], //获取数据
                }, {
                    type: 3, //1 9.9包邮 2 苍鸟好店 3 最近上新 4 苍鸟推荐（商品
                    max: 10, //最多显示几条
                    date: [], //获取数据
                }, {
                    type: 4, //1 9.9包邮 2 苍鸟好店 3 最近上新 4 苍鸟推荐（商品
                    max: 0, //最多显示几条
                    date: [], //获取数据
                }],
                brandrecommendselect: "",
                logfo_s: [{
                    text: "品牌直购",
                    url: "direct_purchasing",
                    img: "http://mall.cangniaowl.com/static_main/img/index_l_a.png"
                }, {
                    text: "苍鸟好店",
                    url: "taste_good",
                    img: "http://mall.cangniaowl.com/static_main/img/index_l_b.png"
                }, {
                    text: "苍鸟推荐",
                    url: "commodity_list",
                    type: 4,
                    img: "http://mall.cangniaowl.com/static_main/img/index_l_c.png"
                }, {
                    text: "最近上新",
                    url: "commodity_list",
                    type: 3,
                    img: "http://mall.cangniaowl.com/static_main/img/index_l_d.png"
                }, {
                    text: "9.9包邮",
                    url: "commodity_list",
                    type: 1,
                    img: "http://mall.cangniaowl.com/static_main/img/index_l_e.png"
                }]
            }
        },
        components: {
            heaer_c: heaer_c,
            loadin: loadin,
            dibu
        },
        methods: {
            initgd(sd_e) { //初始滚动
                let sd_dr = 0
                setInterval(function() {
                    ++sd_dr
                    if (sd_dr == 1) {
                        sd_e[0].cls = "ac"
                        sd_e[1].cls = "aa"
                        sd_e[2].cls = "ab"
                    }
                    if (sd_dr == 2) {
                        sd_e[0].cls = "ab"
                        sd_e[1].cls = "ac"
                        sd_e[2].cls = "aa"
                    }
                    if (sd_dr == 3) {
                        sd_e[0].cls = "aa"
                        sd_e[1].cls = "ab"
                        sd_e[2].cls = "ac"
                        sd_dr = 0
                    }

                }, 2000);
            },
            loadMore() {
                console.log(2222);
            },
            get_sdf(canshu) {
                let saveshopsandgoodsselect = {}
                saveshopsandgoodsselect.token = this.token
                saveshopsandgoodsselect.type = canshu.type
                if (canshu.max != 0) {
                    saveshopsandgoodsselect.page_size = canshu.max
                }

                this.post("home/saveshopsandgoodsselect", saveshopsandgoodsselect, function(data) {
                    canshu.date = data
                })
            }
        },
        mounted() {
            this.Title("苍鸟超级电商")


            window.scrollTo(0, 0);
            let carouselfigureselect = {},
                th = this
            carouselfigureselect.token = this.token
            //            获取banner
            this.post("home/carouselfigureselect", carouselfigureselect, function(data) {
                th.banner = data
                $(".sd_jh_det_e").addClass("show")
                $(".loadin_s").removeClass("show")
            })

            this.sd_erts.map(a => {
                this.get_sdf(a)
            })


            let brandrecommendselect = {}
            brandrecommendselect.token = this.token
            brandrecommendselect.show_goods_nums = 3

            this.post('home/brandrecommendselect', brandrecommendselect, function(data) {
                data.map(a => {
                    a.goods_detail.map((b, c) => {
                        if (c == 0) {
                            b.cls = "aa"
                        }
                        if (c == 1) {
                            b.cls = "ab"
                        }
                        if (c == 2) {
                            b.cls = "ac"
                        }
                    })
                })

                th.brandrecommendselect = data



                th.brandrecommendselect.map(a => {
                    th.initgd(a.goods_detail)
                })




            })

            window.addEventListener('scroll', e => {
                try {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    if (scrollTop > 280) {
                        $(".header_sdr").addClass("act")
                    } else {
                        $(".header_sdr").removeClass("act")
                    }
                } catch (e) {

                }
            })
        },
    }

</script>
<style scoped>
    .lunbo_s {
        height: 11rem;
    }

    .lunbo_s img {
        width: 100%;
        height: 100%;
    }

    .loso_jh_d {
        width: 45px;
        margin: auto;
        height: 35px;
        line-height: 35px;
    }

    .loso_jh_d img {
        max-width: 100%;
        width: 28px;
    }

    .jh_jkher_e:nth-child(4) img {
        width: 38px;
    }

    .jh_jkher_e:nth-child(5) img {
        width: 26px;
    }

    .fm_er_ert {
        height: 7.9rem;
    }

    .fm_er_ert img {
        height: 100%;
        width: 100%;
    }

    .baoyou_hf {
        height: 4.6rem;
        min-height: 60px;
    }

    .sd_jh_det_e {
        /*        display: none*/
    }

    .baoyou_hf img {
        width: 100%;
        height: 100%;
    }

    .row_kjh_der {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .ycgnd_dser {
        height: 112px;
        background: #F0F0F0;
    }

    .ycgnd_dser.ab {
        height: 158px;
    }

    .good_shops {
        padding-top: 10px;
        padding-bottom: 40px;
        overflow: auto;
        white-space: nowrap;
    }


    .good_shop_img {
        width: 55px;
    }

    .sd_case_e {
        background: #fff;
        padding: 10px;
        padding-bottom: 5px;
        margin-right: 10px;
        box-shadow: 0 0px 5px rgba(0, 0, 0, .1);
    }

    .chakh_srt {
        box-shadow: 0 0px 5px rgba(0, 0, 0, .1);
        background: #fff;
        height: 90px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .chakh_srt.ab {
        height: 136px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .loadin_s {
        display: none
    }

    .sd_hjg_rt {
        width: 15px;
        height: 100%;
        padding-top: 8px;
        padding-left: 5px;
        margin-right: 2px;
        white-space: normal;
        line-height: 1.3
    }

    .chakh_srt.ab .sd_hjg_rt {
        padding-top: 35px;
    }

    .sd_jh_eert {
        width: 65px;
        height: 65px;
    }

    .sd_jh_eert img {
        width: 100%;
        height: 100%;
    }

    .dianou_sder {
        width: 130px;
    }

    .dianpjer {
        line-height: 1.4;
        margin-top: 5px;
        height: 50px;
    }


    .pingpai_s {
        width: 72px;
        height: 72px;
        margin: auto;
    }

    .pingpai_s img {
        width: 100%;
        height: 100%;
    }

    .sd_jh_detrtxc {
        height: 114px;
    }

    .sd_jh_detrtxc .paiyh_ddert.aa {
        z-index: 4
    }

    .sd_jh_detrtxc .paiyh_ddert.ab {
        width: 100px;
        height: 100px;
        right: 40px;
        top: 14px;
        z-index: 3
    }

    .sd_jh_detrtxc .paiyh_ddert.ac {
        width: 90px;
        height: 90px;
        right: 70px;
        top: 24px;
        z-index: 1
    }

    .paiyh_ddert {
        width: 114px;
        height: 114px;
        position: absolute;
        right: 0px;
        transition: all .5s;
        box-shadow: 0 0px 5px rgba(0, 0, 0, .1);
    }

    .paiyh_ddert img {
        max-width: 100%;
        max-height: 100%;
        text-align: center;
    }

    .dfsd_jh_erte:nth-child(odd) .mui-col-xs-5 {
        float: right
    }

    .dfsd_jh_erte:nth-child(odd) .paiyh_ddert {
        right: inherit;
        left: 0px;
    }

    .dfsd_jh_erte:nth-child(odd) .paiyh_ddert.ab {
        left: 40px;
    }

    .dfsd_jh_erte:nth-child(odd) .paiyh_ddert.ac {
        left: 70px;
    }

    .sd_jh_detwrr {
        padding-top: 12px;
    }

    .sd_jhhg_dsfd {
        background: #fff;
        padding: 10px;
        box-shadow: 0 0px 5px rgba(0, 0, 0, .1);
        border-radius: 8px;

    }

    .sd_der_ertx {
        width: 110px;
        height: 110px;
        line-height: 100px;
    }

    .sd_der_ertx img {
        max-width: 100%;
        max-height: 100%;
    }

    .ds_jh_certxc {
        width: 180px;
    }

    .biaoqian_er span {
        font-size: 12px;
        background: #F0F0F0;
        color: #999;
        margin-right: 5px;
        border-radius: 4px;
        padding: 1px 4px;
    }

    .dsf_jhh_dert {
        line-height: 1.5
    }

    .d_jh_detx {
        position: relative;
        bottom: 3px;
    }

    .qiangsd_s {
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 50px;
    }

    .new_img_dert {
        width: 56px;
        position: absolute;
        left: 0px;
        top: 10px;
    }

    .df_jh_dert {
        height: 40px;
    }

     .sd_drttx{
        padding-bottom: 60px;
    }

</style>
