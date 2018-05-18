<!--立即购买 购物车弹出层-->

<template>
   <section>
       <section class="d_kj_eetxc" @click="$emit('close')" v-if="popupVisible"></section>
         <mt-popup
  v-model="popupVisible"
  position="bottom"
            :modal="false"
                   >

        <section class="bgff">

            <section class="pd pt10 pm10 mui-row df_jh_er_dsr pr">
                <i class="dx icon-close1 close_jh_ert fz14 z9" @click="$emit('close')"></i>

                <img :src="purchase.goods_thumb" class="cp_ih_drxc">
                <section class="ov pl20 pt5">
                    <p class="red ">￥<span class="fz22" v-html="price_guo(purchase.shop_price)"></span></p>
                    <p class="z9 mt2 fz12">
                        库存:<span class="z6">{{purchase.goods_number}}件</span>
                    </p>

                     <p class="z9 fz12" v-if="purchase.properties" id="df_jh_drttxc">
                         <span v-if="!xz_sdf">
                       请选择:
                             <span class="z6 mr10" v-for="(ix,idx) in purchase.properties">{{ix.name}}</span>
                             </span>
                         <span v-else>

                        已选择:{{xz_sdf}}

                        </span>
                    </p>
                </section>

            </section>

    <section class="btm mt10 pl10 " v-if="purchase.properties">
        <section v-for="(ix,idx) in purchase.properties" class="sd_jgh_ertop">
            <p class="pt5 pm5 z3 fz12 name_uiy_sdf">{{ix.name}}</p>
        <section class="mui-row sdf_jh_ertxc">
            <a class="mui-btn df_jy_ertxc"  v-for="(sc,idxer) in ix.values
" :class="sc.cls" :data-attr_id="ix.attr_id" :data-label="sc.label" :data-id="sc.id">{{sc.label}}</a>
        </section>
            </section>
    </section>

            <section class="btm pt10 pd fz12 pr" v-if="!isgm">
        购买数量

                 <section class="yj4 br sdf_hjgh_sdr box ov">
                                    <span class="dsf_jhh_s box_a   aa" @click="sd_nmu>1?sd_nmu--:1">-</span>
                                    <section class="box_a dsf_juh_er blm brm">
                                        <input type="text" :value="sd_nmu<purchase.goods_number?sd_nmu:purchase.goods_number" readonly   >
                                    </section>
                                       <span class="dsf_jhh_s box_a  ab" @click="sd_nmu<purchase.goods_number?sd_nmu++:''">+</span>
                                </section>



        </section>

    <p class="mt20">
        <a class="mui-btn mui-btn-red w100 fz16 dsf_jh_eert" @click="buy_now" v-if="purchase.goods_number!=0">确定</a>

        <a v-else class="mui-btn jinzhi w100 fz16 dsf_jh_eert">无货</a>
    </p>


        </section>

    </mt-popup>


    </section>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        props: {
            popupVisible: "", //显示购物车下拉
            purchase: "",
            isgm: "",
            guce_rt: "",
            jiali: 0, //0添加购物侧 1立即购买
        },
        data() {
            return {
                xz_sdf: "", //获取已选择的商品
                sd_nmu: 1, //购买数量
                way_sd: "",
                goods_attr_id: "" //商品id
            }
        },
        methods: {
            getlist() {
                let getyesprices = {},
                    th = this

                getyesprices.token = this.token
                getyesprices.goods_id = this.purchase.goods_id
                this.post("product/getyesprices", getyesprices, function(data) {
                    th.way_sd = data.yes_links
                })
            },
            buy_now() { //立即购买
                let sh_add = {},
                    th = this
                sh_add.token = this.token
                sh_add.goods_id = this.purchase.goods_id

                if (this.purchase.properties.length > 0) {
                    if (!this.goods_attr_id) {
                        Toast('请选择' + this.purchase.properties[0].name);
                        return
                    }
                    sh_add.goods_attr_id = this.goods_attr_id
                }
                if (!this.isgm) {
                      sh_add.goods_number = this.sd_nmu
                      sh_add.jiali=0
                    if (this.jiali == 0) { //添加购物车

                        this.post("shopping/add", sh_add, function(a) {
                            Toast({
                                message: '添加成功！',
                                iconClass: 'dx icon-gou fz32'
                            });
                             sh_add.jiali=0
                            th.$emit("caozuo",sh_add)
                        })
                    } else {
                         sh_add.jiali=1
                         th.$emit("caozuo",sh_add)

                    }
                } else {
                    let gwc_dat = {}
                    gwc_dat.goods_attr_id = this.goods_attr_id
                    let d_sdert = ""
                    $(".sd_jgh_ertop").map((a, b) => {
                        d_sdert += $(b).find(".name_uiy_sdf").text() + ":"
                        $(b).find(".df_jy_ertxc").map((c, d) => {
                            if ($(d).hasClass("act")) {
                                d_sdert += $(d).text() + " ";
                            }

                        })
                    })
                    gwc_dat.leier = d_sdert
                    gwc_dat.goods_number = this.sd_nmu
                    gwc_dat.goods_id = this.purchase.goods_id
                    gwc_dat.goods_attr_id = this.goods_attr_id
                    th.$emit("caozuo", gwc_dat)
                }
            }
        },
        mounted() {
            let th = this
            $("body").off("click").on("click", ".sdf_jh_ertxc a", function() {
                if ($(this).hasClass("acb")) {
                    return
                }
                $(this).parents(".sd_jgh_ertop").find(".sdf_jh_ertxc a").removeClass("act")
                $(".sdf_jh_ertxc a").removeClass("acb")
                $(this).addClass("act")
                if (th.purchase.properties.length == 1) {

                    let label = $(this).attr("data-label"),
                        attr_id = $(this).attr("data-attr_id")
                    th.xz_sdf = label
                    let getattrprices = {}
                    getattrprices.attrs = (attr_id + ":" + label)
                    getattrprices.goods_id = th.purchase.goods_id
                    getattrprices.token = th.token
                    th.post("product/getattrprices", getattrprices, function(data) {
                        th.purchase.goods_number = data.number
                        th.purchase.shop_price = data.price
                        th.goods_attr_id = data.id
                    })
                }
                let user_cl = $(this).parents(".sd_jgh_ertop").index() //获取用户点击的分类
                let sjh_sdrt = $(this).text() //获取用户点击
                if (th.purchase.properties.length == 2) {
                    console.log(th.way_sd);
                    let sd_ertx = []
                    th.way_sd.map(function(c) {
                        let sd_dra = c.split(",")[0].split(":")[1],
                            sd_drb = c.split(",")[1].split(":")[1],
                            sd_ert = {}
                        sd_ert.sd_dra = sd_dra
                        sd_ert.sd_drb = sd_drb
                        sd_ertx.push(sd_ert)
                    })

                           console.log(th.way_sd);
                    if (user_cl == 0) {//第一行点击
                        $(".sd_jgh_ertop").eq(1).find(".sdf_jh_ertxc a").addClass("acb")

                        sd_ertx.map((a, b) => {

                            if (a.sd_dra == sjh_sdrt) {
                                $(".sd_jgh_ertop").eq(1).find(".sdf_jh_ertxc a").map((p, w) => {
                                    if (a.sd_drb == $(w).text()) {
                                        $(w).removeClass("acb")
                                    }
                                })
                            }
                        })
                    } else if (user_cl == 1) {//第二行点击
                        $(".sd_jgh_ertop").eq(0).find(".sdf_jh_ertxc a").addClass("acb")
                        sd_ertx.map((a, b) => {
                            if (a.sd_drb == sjh_sdrt) {
                                $(".sd_jgh_ertop").eq(0).find(".sdf_jh_ertxc a").map((p, w) => {
                                    if (a.sd_dra == $(w).text()) {
                                        $(w).removeClass("acb")
                                    }
                                })
                            }
                        })
                    }
                    th.xz_sdf = ""
                    var sd_sertx = []
                    $(".df_jy_ertxc").map((a, b) => {
                        if ($(b).hasClass("act")) {
                            th.xz_sdf += $(b).text() + " "
                            let label = $(b).attr("data-label"),
                                attr_id = $(b).attr("data-attr_id")
                            sd_sertx.push(attr_id + ":" + label)
                        }
                    })
                    if (sd_sertx.length >= 2) {
                        let getattrprices = {}
                        getattrprices.attrs = sd_sertx.join(",")
                        getattrprices.goods_id = th.purchase.goods_id
                        getattrprices.token = th.token
                        th.post("product/getattrprices", getattrprices, function(data) {
                            th.purchase.goods_number = data.number
                            th.purchase.shop_price = data.price
                            th.goods_attr_id = data.id
                        })

                    }

                }

                if (th.purchase.properties.length == 3) {
                    let sd_ertx = []
                    th.way_sd.map(function(c) {
                        let sd_dra = c.split(",")[0].split(":")[1],
                            sd_drb = c.split(",")[1].split(":")[1],
                            sd_drc = c.split(",")[2].split(":")[1],
                            sd_ert = {}
                        sd_ert.sd_dra = sd_dra
                        sd_ert.sd_drb = sd_drb
                        sd_ert.sd_drc = sd_drc
                        sd_ertx.push(sd_ert)
                    })



                    th.xz_sdf = ""
                    var sd_sertx = []
                    $(".df_jy_ertxc").map((a, b) => {
                        if ($(b).hasClass("act")) {
                            th.xz_sdf += $(b).text() + " "
                            let label = $(b).attr("data-label"),
                                attr_id = $(b).attr("data-attr_id")
                            sd_sertx.push(attr_id + ":" + label)
                        }
                    })
                    if (sd_sertx.length >= 3) {
                        let getattrprices = {}
                        getattrprices.attrs = sd_sertx.join(",")
                        getattrprices.goods_id = th.purchase.goods_id
                        getattrprices.token = th.token
                        th.post("product/getattrprices", getattrprices, function(data) {
                            th.purchase.goods_number = data.number
                            th.purchase.shop_price = data.price
                            th.goods_attr_id = data.id
                        })

                    }


                }
            })
            setTimeout(function() {
                th.getlist()
                try {
                    if (th.purchase.properties.length == 0) {
                        $("#df_jh_drttxc").remove()
                    }
                } catch (e) {

                }


            }, 1000);



        },
        watch: {
            guce_rt: {
                handler: function() { //购物侧列表下拉点击变化
                    let getattrprices = {},
                        th = this
                    getattrprices.attrs = this.purchase.goods_attr
                    getattrprices.goods_id = this.purchase.goods_id
                    getattrprices.token = this.token
                    this.post("product/getattrprices", getattrprices, function(data) { //获取库存
                        th.purchase.goods_number = data.number
                        th.purchase.shop_price = data.price
                        th.goods_attr_id = data.id
                    })


                    let xuanxiang = this.purchase.goods_attr.split(",")
                    $(".df_jy_ertxc").removeClass("act")
                    setTimeout(function() {
                        th.xz_sdf = ""
                        xuanxiang.map((a, b) => {
                            $(".df_jy_ertxc").map(function(w, c) {
                                if ($(c).text() == a.split(":")[1]) {
                                    $(c).addClass("act")
                                }
                            })

                            th.xz_sdf += a.split(":")[1] + " "
                        })
                    }, 0);

                },
                deep: true
            }
        }
    }

</script>
<style scoped>
    .d_kj_eetxc {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5)
    }

    .cp_ih_drxc {
        width: 95px;
        height: 95px;
        border-radius: 4px;
        float: left;
        border: 1px solid #e0e0e0;
        background: #fff;
        margin-top: -30px !important;
    }

    .df_jh_er_dsr {
        height: 80px;
    }

    .close_jh_ert {
        position: absolute;
        right: 10px;
    }

    .sdf_jh_ertxc a {
        float: left;
        margin-right: 10px;
        margin-bottom: 8px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .sdf_jh_ertxc a.act {
        background: #F95151;
        border: 1px solid #F95151 !important;
        color: #fff
    }

    .sdf_jh_ertxc a.acb {
        background: #ddd !important;
        color: #fff
    }

    .sdf_hjgh_sdr {
        position: absolute;
        right: 10px;
        top: 8px;
        width: 100px;
    }

    .dsf_juh_er {
        width: 70px !important;
    }

    .dsf_juh_er input {
        width: 100%;
    }

    .dsf_jhh_s {
        max-width: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 22px;
        position: relative;
    }

    .dsf_jhh_s.aa {
        bottom: 3px;
    }

    .dsf_jhh_s.ab {
        bottom: 0px;
    }

    .dsf_jh_eert {
        border-radius: 0px;
        line-height: 45px;
        height: 45px;
        padding: 0px;
    }

    .jinzhi {
        background: #999;
        color: #fff;
    }

    .df_jy_ertxc {
        font-size: 12px;
        min-width: 40px;
        padding: 3px 10px 2px 10px !important;
        border: 1px solid #D1D2D3 !important;
    }

</style>
