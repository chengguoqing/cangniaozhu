<!--我的钱包-->
<template>
	<div >
        <section class="shop_top pd pt15 pm10 pr ">
                    <user_top_z :user_dta="user_dta"></user_top_z>

                <section class="mt10 mui-row">
                    <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{wallet.count||0}}</span>
                        <p class="fz12 cf">交互店铺</p>
                    </section>
                   <section class="mui-col-xs-6 sdf_kjh_sd cen">
                       <span class="fz16 cf" v-html="price_guo(wallet.price||0)"></span>
                        <p class="fz12 cf">当前现金</p>
                    </section>



            </section>






    </section>


              <section class="bgff d_jg_dert  pt10 ab">
            <ul>
                <li v-for="sd in wallet.list" @click="hfer(sd.shop_id+'.html?router=myqianbao#/myqianbao')">
                    <section class="pl10">
                            <img :src="sd.shop_logo" class="s_ikujh_dert fl">
                        <section class="ov pl10 pr10">
                            <p class="fz14">{{sd.shop_name}} <span class="fr dinbpui_er" >进入店铺<i class="f_i right_inos"></i></span></p>
                            <p class="z9 fz12"><span class="sd_jh_erdert"> {{sd.industry}}</span> <span class="fr sd_jh_erdert">{{sd.last_login}}</span></p>



                    </section>
                        <p class="qc"></p>

                          <section class=" mt10 pt10 mui-row dsf_jh_dertt">


                    <section class="mui-col-xs-4 sdf_kjh_sd cen">
                          <span class="fz16 z9" v-html="price_guo(sd.total_commissions)"></span>
                        <p class="fz12 z9">累计现金</p>
                    </section>
                   <section class="mui-col-xs-4 sdf_kjh_sd cen">
                       <span class="fz16 z9" v-html="price_guo(sd.count_commissions)"></span>
                        <p class="fz12 z9">已提现金</p>
                    </section>

                   <section class="mui-col-xs-4 sdf_kjh_sd cen">
                       <span class="fz16 z9" v-html="price_guo(sd.count_un_commissions)"></span>
                        <p class="fz12 z9">可提现金</p>
                    </section>



                        </section>

                        <section class="pr10 tr fz12 dsf_jh_dset mt10  ">

        当前现金 ￥<span class="fz16 " v-html="price_guo(sd.current_commissions)"></span>
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
	</div>
</template>
<script>
    import user_top_z from "../components/user_top_z"
    import loadin from "../components/loadin.vue"
      import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                user_dta: "",
                wallet: "",
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
            kongbai
        },
        methods: {

        },
        mounted() {
            this.Title("我的钱包")
            let wallet = {},
                th = this
            wallet.token = this.token
            this.post("portal/wallet", wallet, function(data) {
                th.user_dta = data
                th.wallet = data
                th.cdu_er=data.list
                $(".loadin_s").removeClass("show")
            })
        },
    }

</script>
<style scoped>
    .dsf_jh_dset {
        color: #E15D59
    }

</style>
