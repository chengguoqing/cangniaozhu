<!--全站购物车-->
<template>
	<div  class="sd_drttx">
        <section class="shop_top pd pt15 pm10 pr ">
               <user_top_z :user_dta="user_dta"></user_top_z>

            <section class="mt10 mui-row">
                    <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{cart.carts||0}}</span>
                        <p class="fz12 cf">购物车</p>
                    </section>
                   <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{cart.count||0}}</span>
                        <p class="fz12 cf">商品</p>
                    </section>
                   <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf" v-html="price_guo(cart.price||0)"></span>
                        <p class="fz12 cf">总价</p>
                    </section>
                   <section class="mui-col-xs-3 sdf_kjh_sd cen">
                            <span class="fz16 cf">{{cart.invalid||0}}</span>
                        <p class="fz12 cf">失效商品</p>
                    </section>
            </section>
        </section>

        <section class="bgff d_jg_dert  pt10 pm10">
            <ul>
                <li v-for="sd in cart_list">
                    <section class="pl10">
                            <img :src="sd.shop_logo" class="s_ikujh_dert fl">
                        <section class="ov pl10 pr10">
                            <p class="fz14">{{sd.shop_name}}
                                <span class="fr dinbpui_er" @click="hfer(sd.shop_id+'.html')">进入店铺<i class="f_i right_inos"></i></span>

                            </p>
                            <p class="z9 fz12">访问时间：{{sd.last_login}}<span class="fr">共计{{sd.count}}件商品</span></p>



                    </section>
                        <p class="qc"></p>

                          <section class="btm mt10 pt10 mui-row">
                            <section class="mui-col-xs-4 pr10" v-for="st  in sd.goodslist" @click="hfer(sd.shop_id+'.html?router=commodity_details&goods_id='+st.goods_id+'#/commodity_details?goods_id='+st.goods_id)">
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
             <dibu :kjh_s="'3'"></dibu>
	</div>
</template>
<script>
            import dibu from "../components/dibu"
    import user_top_z from "../components/user_top_z"
    import loadin from "../components/loadin.vue"
          import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                user_dta: "",
                cart: "",
                cart_list: "",
                cdu_er: 0,
                kb: {
                    icom: "dsf_jh_er",
                    msg: "没有数据",
                    btn_name: "返回上一页",
                    btn_url: "-1",

                },
            }
        },
        components: {
            user_top_z,
            loadin,
            kongbai,
            dibu
        },
        methods: {

        },
        mounted() {
            this.Title("全站购物车")
            let cart = {},
                th = this
            cart.token = this.token
            this.post("portal/cart", cart, function(data) {
                th.user_dta = data
                th.cart = data
                th.cart_list = data.list
                th.cdu_er=data.list.length
                $(".loadin_s").removeClass("show")
            })
        },
    }

</script>
<style scoped>
    .sd_drttx{
        padding-bottom: 100px;
    }

</style>
