<!--我的余额-->
<template>
	<div >
        <section class="shop_top pd pt15 pm10 pr ">
            <user_top_z :user_dta="user_dta"></user_top_z>


            <section class="mt10 mui-row">
                    <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{t_balance.count||0}}</span>
                        <p class="fz12 cf">店铺</p>
                    </section>
                   <section class="mui-col-xs-6 sdf_kjh_sd cen">
                       <span class="fz16 cf"><span v-html="price_guo(t_balance.price||0)" ></span></span>
                        <p class="fz12 cf">预存款总额</p>
                    </section>



            </section>


        </section>

        <section class="bgff d_jg_dert  pt10 ">
            <ul>
                <li v-for="sd in t_balance.list" class="bbm pm10" @click="hfer(sd.shop_id+'.html?router=myqianbao#/myqianbao')">
                    <section class="pl10">
                            <img :src="sd.shop_logo" class="s_ikujh_dert fl">
                        <section class="ov pl10 pr10">
                            <p class="fz14">{{sd.shop_name}} <span class="fr dinbpui_er"><i class="f_i qian_sert"></i><span v-html="price_guo(sd.money)" class="fz16"></span> <i class="f_i right_inos"></i></span></p>
                            <p class="qc"></p>
                            <p class="z9 fz12 d_jh_dert"><span class="sd_jh_erdert">{{sd.industry}} </span>
                                <span class="fr sd_jh_erdert">预存款余额</span></p>



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
                t_balance: "",
                user_dta: "",
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
            this.Title("我的余额")
            let balance = {},
                th = this
            balance.token = this.token
            this.post("portal/balance", balance, function(data) {
                th.user_dta = data
                th.t_balance = data
                 th.cdu_er=data.list.length
                $(".loadin_s").removeClass("show")
            })
        },
    }

</script>
<style scoped>
    .qian_sert {
        width: 14px;
        height: 14px;
        background-position: -216px -50px;
        position: relative;
        top: -2px;
        margin-right: 5px;
    }

</style>
