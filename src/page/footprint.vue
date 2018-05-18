<!--我的足迹-->



<template>
	<div >
    <section class="shop_top pd pt15 pm10 pr ">
                   <user_top_z :user_dta="user_dta"></user_top_z>

                 <section class="mt10 mui-row">
                    <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.count||0}}</span>
                        <p class="fz12 cf">浏览店铺</p>
                    </section>
                   <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.goods_num||0}}</span>
                        <p class="fz12 cf">浏览商品</p>
                    </section>



            </section>
</section>

              <section class="bgff d_jg_dert  pt10 ">
            <ul>
                <li v-for="sd in t_balance.list" class="bbm pm10"  @click="hfer(sd.shop_id+'.html?router=footprint#/footprint')">
                    <section class="pl10">
                            <img :src="sd.shop_logo" class="s_ikujh_dert fl">
                        <section class="ov pl10 pr10">
                            <p class="fz14">{{sd.shop_name}}
                                <span class="fr dinbpui_er"> <i class="f_i jiaoya_icon"></i>  x{{sd.num}}<i class="f_i right_inos"></i></span></p>

                            <p class="z9 fz12 sd_jh_seer "><span class="sd_jh_erdert">{{sd.industry}} </span> </p>



                    </section>
                        <p class="qc"></p>


                    </section>
                </li>
            </ul>

        </section>


               <p class="jgh_ddre_er " v-if="cdu_er>9">
         <span>我是有底线的</span>
        </p>

        	<kongbai :kb="kb" v-if="cdu_er<=0" @ziding="$router.back(-1)"></kongbai>
        <section>

        </section>
               <loadin class="loadin_s show"></loadin>
	</div>
</template>
<script>
    import user_top_z from "../components/user_top_z"
    import loadin from "../components/loadin"
        import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                user_dta: "",
                t_balance: "",
                cdu_er:"",
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "您还没有留下足迹，快去逛逛吧",
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
            this.Title("我的足迹")

            let balance = {},
                th = this
            balance.token = this.token
            this.post("portal/history", balance, function(data) {
                th.user_dta = data
                th.t_balance = data
                th.cdu_er=data.list.length
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

    .sd_jh_seer {
        height: 20px;
    }

</style>
