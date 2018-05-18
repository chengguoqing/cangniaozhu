<!--我的收藏-->
<template>
	<div >
        <section class="shop_top pd pt15 pm10 pr ">
               <user_top_z :user_dta="user_dta"></user_top_z>

            <section class="mt10 mui-row">
                    <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{collection.goods_num||0}}</span>
                        <p class="fz12 cf">收藏店铺</p>
                    </section>
                   <section class="mui-col-xs-6 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{collection.shop_num||0}}</span>
                        <p class="fz12 cf">收藏商品</p>
                    </section>



            </section>


        </section>

        <section class="bgff d_jg_dert ab pt10 pm10">
            <ul>
                <li v-for="sd in collection.list" @click="hfer(sd.shop_id+'.html?router=wodesc#/wodesc')">
                    <section class="pl10">
                            <img :src="sd.shop_logo" class="s_ikujh_dert fl">
                        <section class="ov pl10 pr10">
                            <p class="fz14">{{sd.shop_name}}
                                    <span class="fr dinbpui_er"> <i class="f_i jiaoya_icon"></i>  x{{sd.count}}<i class="f_i right_inos"></i></span></p>


                            <p class="z9 fz12 sd_jh_erdert">访问时间：{{sd.last_login}}</p>



                    </section>
                        <p class="qc"></p>

                          <section class="btm mt5 pt10 mui-row">
                            <section class="mui-col-xs-4 pr10" v-for="st  in sd.goodslist" >
                                <section class="sd_jh_dertd pr br">
                                    <img :src="st.goods_thumb">

                                    <p class="dian cen fz12 di_jh_der">
    <span>{{st.goods_name}}</span>
                            </p>
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
	</div>
</template>
<script>
    import user_top_z from "../components/user_top_z"
    import loadin from "../components/loadin.vue"
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                user_dta: "",
                collection: "",
                cdu_er: 0,
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "您还没收藏记录，快去逛逛吧",
                    btn_url: "-1",
                    btn_name: "返回上一页",


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
            this.Title("我的收藏")
            let collection = {},
                th = this
            collection.token = this.token
            this.post("portal/collection", collection, function(data) {
                th.user_dta = data
                th.collection = data
                th.cdu_er = data.list.length
                $(".loadin_s").removeClass("show")
            })
        },
    }

</script>
<style scoped>
    .dinbpui_er {
        position: relative;
        top: 10px;
    }

    .jiaoya_icon {
        width: 15px;
        height: 12px;
        background-position: -189px -53px;
    }

</style>
