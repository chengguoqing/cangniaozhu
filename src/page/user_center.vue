<!--用户中心-->
<template>
	<div class="sd_h_drtx">



    <section class="shop_top pd pt15 pm10 pr  ">

            <user_top_z :user_dta="user_dta" :is_use="true"></user_top_z>

    </section>


        <section class="sd_jyh_der">

            <section class="bgff pd yj4 mt30 pr">
                <span class="lofgo_troe">
                    <img src="http://mall.cangniaowl.com/static_main/img/copy_bottom_bg.png" class="cz"></span>
                <p class="z6 fz14 sd_kjh_der">用户服务中心</p>

                 <section class="mui-row btm cen pm10">

                <section class="iuy_derts pr" v-for="(uu,idx) in user_ou " @click="hf(uu.url)">
                        <p class="ico_sd_p">
                            <i class="f_i sdd_jh_d" :class="uu.icond"></i>
                        </p>
                        <p class="fz12 ">
                            {{uu.text}}
                        </p>

                    <img src="http://mall.cangniaowl.com/static_main/img/rightse.png" class="rightse " v-if="idx%5==4">

                </section>

            </section>
            </section>



                 <section class="bgff pd yj4 mt10 pr">

                <p class="z6 fz14 sd_kjh_der">常用工具</p>

                 <section class="mui-row btm cen pm10">

                <section class="iuy_derts ab" v-for="uu in user_ou_b " @click="hf(uu.url)">
                        <p class="ico_sd_p">
                            <span v-if="uu.num||uu.num==0" class="b fz16 st">{{uu.num}}</span>
                            <i class="f_i sdd_jh_d_w " :class="uu.icond" v-else></i>
                        </p>
                        <p class="fz12 ">
                            {{uu.text}}
                        </p>
                </section>

            </section>
            </section>






        </section>


    <dibu :kjh_s="'4'"></dibu>
	</div>
</template>
<script>
    import user_top_z from "../components/user_top_z"
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                user_dta: "",
                user_ou: [{
                        icond: "",
                        url: "order_list?type=1&types=0",
                        text: "待付款"
                    },
                           {
                        icond: "qa",
                        url: "order_list?type=2&types=1",
                        text: "待发货"
                    },
                    {
                        icond: "ab",
                        url: "order_list?type=3&types=2",
                        text: "待收货"
                    }, {
                        icond: "ac",
                        url: "order_list?type=4&types=3",
                        text: "待评价"
                    }, {
                        icond: "ae",
                        url: "-1",
                        text: "我的订单"
                    }, {
                        icond: "af",
                        url: "balance",
                        text: "余  额"
                    }, {
                        icond: "ag",
                        url: "my_wallet",
                        text: "钱  包"
                    }, {
                        icond: "ah",
                        url: "integral",
                        text: "积  分"
                    }, {
                        icond: "aj",
                        url: "card_voucher",
                        text: "卡  券"
                    }, {
                        icond: "ak",
                        url: "-1",
                        text: "我的账户"
                    }
                ],
                user_ou_b: [{
                        icond: "",
                        url: "mail",
                        text: "信箱"
                    },
                    {
                        icond: "ab",
                        url: "collect",
                        text: "收藏"
                    }, {
                        icond: "ac",
                        url: "footprint",
                        text: "足迹"
                    }, {
                        icond: "ad",
                        url: "dynamic",
                        text: "动态"
                    }, {
                        icond: "ae",
                        url: "bird_nest",
                        num: "0",
                        text: "已关注"
                    }, {
                        icond: "af",
                        url: "bird_nest",
                        num: "0",
                        text: "已购买"
                    }, {
                        icond: "ag",
                        url: "bird_nest",
                        num: "0",
                        text: "未关注"
                    }, {
                        icond: "ah",
                        url: "bird_nest",
                        num: "0",
                        text: "公众号"
                    }
                ]
            }
        },
        components: {
            user_top_z,
            dibu
        },
        methods: {

        },
        mounted() {

        },
        activated() {
            this.Title("鸟巢")
            let balance = {},
                th = this
            balance.token = this.token
            this.post("portal/niaochao", balance, function(data) {
                th.user_dta = data
                th.user_ou_b[4].num = data.subscribe_num
                th.user_ou_b[5].num = data.buyed_num
                th.user_ou_b[6].num = data.unsubscribe_num
                th.user_ou_b[7].num = data.count

            })
        }
    }

</script>
<style scoped>
    .sd_jyh_der {
        padding: 4px;
    }

    .lofgo_troe {
        width: 52px;
        height: 52px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        text-align: center;
        line-height: 52px;
        top: -20px;
    }

    .lofgo_troe img {
        width: 39px;
    }

    .iuy_derts {
        width: 20%;
        float: left;
        padding-top: 5px;
        padding-bottom: 0px;

    }

    .iuy_derts.ab {
        width: 25%;
    }

    .ico_sd_p {
        line-height: 35px;
        height: 35px;
    }

    .sdd_jh_d {
        width: 21px;
        height: 22px;
        background-position: -268px -230px;
    }

    .sdd_jh_d.ab {
        width: 23px;
        height: 17px;
        background-position: -109px -89px;
    }

    .sdd_jh_d.ac {
        width: 22px;
        height: 19px;
        background-position: -156px -85px;
    }
    .sdd_jh_d.qa{
        width: 23px;
        height: 19px;
        background-position: -215px -189px;
    }

    .sdd_jh_d.ad {
        width: 17px;
        height: 19px;
        background-position: -195px -87px;
    }


    .sdd_jh_d.ae {
        width: 18px;
        height: 19px;
        background-position: -232px -86px;
    }

    .sdd_jh_d.af {
        width: 22px;
        height: 21px;
        background-position: -271px -84px;
    }

    .sdd_jh_d.ag {
        width: 19px;
        height: 19px;
        background-position: -71px -87px;
    }

    .sdd_jh_d.ah {
        width: 19px;
        height: 18px;
        background-position: -322px -86px;
    }

    .sdd_jh_d.aj {
        width: 21px;
        height: 16px;
        background-position: -177px -135px;
    }

    .sdd_jh_d.ak {
        width: 17px;
        height: 21px;
        background-position: -216px -130px;
    }

    .sd_kjh_der {
        padding-top: 10px;
        padding-bottom: 6px;
    }

    .rightse {
        height: 100%;
        position: absolute;
        top: 0px;
        left: -5px;
    }

    .sdd_jh_d_w {
        width: 22px;
        height: 17px;
        background-position: -261px -132px
    }

    .sdd_jh_d_w.ab {
        width: 23pox;
        height: 21px;
        background-position: -300px -128px;

    }

    .sdd_jh_d_w.ac {
        width: 17px;
        height: 24px;
        background-position: -332px -127px;
    }

    .sdd_jh_d_w.ad {
        width: 26px;
        height: 26px;
        background-position: -177px -180px;
    }

    .sd_h_drtx{
        padding-bottom: 80px;
    }
</style>
