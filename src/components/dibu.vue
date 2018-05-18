<template>
	<div class="mui-row dsf_d_dibu btm cen">
        <section class="mui-col-xs-3 pr" v-for="(du,idx) in dubvu" :class="idx==kjh_s?'act':''"  @click="hf(du.href)">
            <section :class="idx==2?'as_ddrt':''" class="bgff pr">
            <p class="sd_jhg_ert pr">

              <i class="f_i dskh_d_errt" :class="du.icon"></i>
            </p>
            <p class="z9 fz12 pr sd_jh_dert">
    {{du.name}}
    </p></section>
            <span  class="sd_kjh_dertr" v-if="idx==2"></span>
        </section>







	</div>
</template>
<script>
    export default {
        props: {
            kjh_s: "",
            gwcw: ""
        },
        data() {
            return {
                dubvu: [{
                    name: "首页",
                    icon: "",
                    size: "fz20",
                    href: "",
                    cls: "act"
                }, {
                    name: "分类",
                    icon: "ab",
                    size: "fz22",
                    href: "fenlei",
                    cls: ""
                }, {
                    name: "鸟巢",
                    icon: "ac",
                    size: "fz22",
                    href: "bird_nest",
                    cls: ""
                }, {
                    name: "购物车",
                    icon: "ad",
                    size: "fz22",
                    href: "shopping_cart",
                    number: 0,
                    cls: ""
                }, {
                    name: "个人",
                    icon: "ae",
                    size: "fz20",
                    href: "user_center",
                    cls: ""
                }, ]
            }
        },
        methods: {

        },
        created: function() {
            let th = this
            if (this.car_number) {
                th.dubvu[3].number = this.car_number
            } else {
                th.carnumber(function(data) {
                    th.dubvu[3].number = data
                })
            }


        },
        watch: {
            gwcw: {
                handler: function() {
                    let th = this
                    th.carnumber(function(data) {
                        th.dubvu[3].number = data
                    })
                },
                deep: true
            }
        }
    }

</script>
<style scoped>
    .dsf_d_dibu {
        position: fixed;
        width: 100%;
        left: 0px;
        height: 50px;
        bottom: 0px;
        z-index: 999;
        background: #fff
    }

    .sd_jhg_ert {
        line-height: 30px;
        position: relative;

        padding-bottom: 0px;
    }

    .dsf_d_dibu .mui-col-xs-3 {
        width: 20%;
    }

    .dsf_d_dibu .mui-col-xs-3.act .z9 {
        color: #EE5550 !important
    }
              .dsf_d_dibu .mui-col-xs-3.act .dskh_d_errt {
        background-position: -8px -355px;
    }

           .dsf_d_dibu .mui-col-xs-3.act .dskh_d_errt.ab {
        background-position: -60px -355px;
    }
        .dsf_d_dibu .mui-col-xs-3.act .dskh_d_errt.ac {
        background-position: -102px -355px;
    }

            .dsf_d_dibu .mui-col-xs-3.act .dskh_d_errt.ad {
        background-position: -154px -353px;
    }


    .dsf_d_dibu .mui-col-xs-3.act .dskh_d_errt.ae {
        background-position: -208px -358px;
    }

    .dskh_d_errt{
        width: 24px;
        height: 22px;
        background-position: -8px -316px;
    }
    .dskh_d_errt.ab{
        width: 19px;
        height: 22px;
        background-position: -60px -316px;
    }
    .dskh_d_errt.ac{
        width: 26px;
        height: 24px;
        background-position: -102px -315px

    }


        .dskh_d_errt.ad{
        width: 22px;
        height: 23px;
        background-position: -154px -314px

    }

            .dskh_d_errt.ae{
        width: 17px;
        height: 19px;
        background-position: -208px -319px

    }
    .sd_kjh_dertr{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 0px;
        right: 0px;
        top: -20px;
        margin: auto;
        border: 1px solid #f5f5f5;
        z-index: 1;
    }
    .as_ddrt .sd_jhg_ert{
        position: relative;
        top: -5px;
    }
    .sd_jh_dert{
        bottom: 1px
    }
</style>
