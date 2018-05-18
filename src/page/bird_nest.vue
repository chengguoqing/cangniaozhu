
<!--鸟巢-->
<template>
	<div class="sd_drttx">
    <section class="shop_top pd pt15 pm10 pr ">
                   <user_top_z :user_dta="user_dta"></user_top_z>

                 <section class="mt10 mui-row">
                    <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.count||0}}</span>
                        <p class="fz12 cf">全  部</p>
                    </section>
                   <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.subscribe_num||0}}</span>
                        <p class="fz12 cf">已关注</p>
                    </section>

                            <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.buyed_num||0}}</span>
                        <p class="fz12 cf">曾购买</p>
                    </section>

                            <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.unsubscribe_num||0}}</span>
                        <p class="fz12 cf">未关注</p>
                    </section>



            </section>







</section>

              <section class="pd ">
                    <ul>
                        <li class="mt10" v-for="sdf in t_balance.list">
                            <section class="yj4 ov bgff">
                                <section class="pd   to_jh_dsert mui-row pt5 pm5">
                                    <section class="mui-col-xs-8">
                                                <p class="fz14  z6">{{sdf.shop_name}}</p>
                                        <p class="fz12 z9"><i class="f_i zhaunshier"></i> <span class="huiyuan_sd">{{sdf.user_group_name}}</span></p>
                                        </section>
                                    <section class="mui-col-xs-4 tr pt5">
                                        <i class="f_i sdjh_sdd" v-if="sdf.company_type==2"></i>
                                         <i class="f_i sdjh_sdd ab" v-if="sdf.caution_money_status==1"></i>
                                            <i class="f_i sdjh_sdd ac" v-if="sdf.company_type==1"></i>
                                        <i class="f_i gengduoer" @click="gengduoer(sdf.wei_qr_code)"></i>

                                    </section>

                                    </section>

                                <section class="mui-row cen pt10  pm10">
                                    <section class="mui-col-xs-3">
                                            <img :src="sdf.shop_logo" class="br usd_logo_e">
                                            <p>
                                                <span class="fz12 yugyansd">{{sdf.subscribe==1?'已关注':'未关注'}} </span>
                                            </p>

                                    </section>

                                    <section class="mui-col-xs-3 fz15 z6 ">
                                        <section class="sdf_jh_fetr">
                                          <p>{{sdf.cart_num}} </p>
                                         <p class="fz12 z9">购物车</p>

                                       </section>



                                         <section class="sdf_jh_fetr mt5">
                                          <p>{{sdf.coupon_num}} </p>
                                         <p class="fz12 z9">优惠券</p>

                                       </section>

                                    </section>


                                      <section class="mui-col-xs-3 fz15 z6 ">
                                        <section class="sdf_jh_fetr">
                                          <p>{{sdf.order_num}} </p>
                                         <p class="fz12 z9">进行中订单</p>

                                       </section>



                                         <section class="sdf_jh_fetr mt5">
                                          <p>{{sdf.collection_num}} </p>
                                         <p class="fz12 z9">收  藏</p>

                                       </section>

                                    </section>



                                      <section class="mui-col-xs-3 fz15 z6 ">
                                        <section class="sdf_jh_fetr">
                                          <p>{{sdf.pay_points}} </p>
                                         <p class="fz12 z9">积  分</p>

                                       </section>



                                         <section class="sdf_jh_fetr mt5">
                                          <p v-html="price_guo(sdf.user_money)" class="red"> </p>
                                         <p class="fz12 red">余  额</p>

                                       </section>

                                    </section>



                                </section>


                            </section>
                        </li>
                    </ul>

                </section>


  <p class="jgh_ddre_er " v-if="cdu_er>9">
         <span>我是有底线的</span>
        </p>

        	<kongbai :kb="kb" v-if="cdu_er<=0" @ziding="$router.back(-1)"></kongbai>
               <loadin class="loadin_s show"></loadin>
        <erweima :xian_s="iser_d" :wei_qr_code="wei_qr_code" @sd_jher="iser_d=false"></erweima>

            <dibu :kjh_s="'2'"></dibu>
	</div>
</template>
<script>
        import dibu from "../components/dibu"
    import user_top_z from "../components/user_top_z"
    import loadin from "../components/loadin"
        import erweima from "../components/erweima"
          import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                user_dta: "",
                t_balance:"",
                iser_d:false,
                wei_qr_code:"",
                cdu_er: 0,
                   kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有数据",
                    btn_name: "返回上一页",
                    btn_url: "-1",

                },
            }
        },
        components: {
            user_top_z,
            loadin,
            erweima,
            kongbai,
            dibu
        },
        methods: {
            gengduoer(wei_qr_code){
                this.iser_d=true
                this.wei_qr_code=wei_qr_code
            }
        },
        mounted() {
            this.Title("鸟巢")

            let balance = {},
                th = this
            balance.token = this.token
            this.post("portal/niaochao", balance, function(data) {
                th.user_dta = data
                th.t_balance = data
                  th.cdu_er=data.list
                $(".loadin_s").removeClass("show")
            })
        },
    }

</script>
<style scoped>
    .jiaoya_icon {
        width: 14px;
        height: 18px;
        background-position: -159px -47px;
        position: relative;
        bottom: 2px;
    }

    .dinbpui_er {
        position: relative;
        top: 10px;
    }
    .sd_jh_seer{
        height: 20px;
    }

    .to_jh_dsert{
        background: #F4F4F4;
        line-height: 1.4
    }
    .zhaunshier{
        width: 11px;
        height: 10px;
        background-position: -337px -53px;
        position: relative;
        bottom: 1px;
    }
    .huiyuan_sd{
        display: inline-block;
        transform: scale(0.9)
    }

    .sdjh_sdd{
        width: 17px;
        height: 18px;
        background-position: -257px -47px;
        margin-right: 4px;
    }
    .sdjh_sdd.ab{
        width: 16px;
        height: 18px;
        background-position: -285px -47px;
    }
    .sdjh_sdd.ac{
        width: 17px;
        height: 19px;
        background-position: -6px -85px;
    }
    .gengduoer{
        width: 18px;
        height: 18px;
        background-position: -312px -45px;
    }
    .usd_logo_e{
        width: 48px;
        height: 48px;
        position: relative;
        top: 2px
    }
    .yugyansd{
        background: #E05D59;
        color: #fff;
        display: inline-block;
        width: 54px;
        line-height:20px ;
        transform: scale(0.8);
        position: relative;
        bottom: 2px;
    }
    .sdf_jh_fetr{
        position: relative;
        line-height: 1.3;
        bottom: 2px;
    }
    .sdf_jh_fetr:after{
        content: ' ';
        position: absolute;
        right: 0px;
        height: 25px;
        width: 1px;
        background: #F5F5F5;
        top: 5px;
    }
    .sdf_jh_fetr.mt5{
        margin-top: 8px !important;
    }
    .sd_drttx{
        padding-bottom: 100px;
    }
</style>
