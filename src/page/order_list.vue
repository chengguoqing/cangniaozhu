<!--订单-->
<template>
	<div>

		<sear_head @sear_text="search_fun" :placeholder="'搜索订单编号,商品名称'"></sear_head>

		<section class="dsf_jh_ertxc pd box cen pr btm">
			<p class="box_a z3" v-for="(sw,idx) in ss_jh_w" :class="sw.cls" @click="queghua_s(idx,sw.type)">
				<span class="fz14">{{sw.name}}</span>
			</p>

		</section>

		<section v-if="is_loadin">

            <section v-if="!kehu">
			<section class="sd_jhIs pr aa" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">

				<section class="dsf_h_row bgff " v-for="(se,idx) in orderlist_data">

                	<section class="pd  pm5 fz12 z3 dingdn_se">
				<i class="f_i sd_jh_dr " :class="se.company_type|acdr"></i>	   {{se.shop_name}}
					</section>


					<section class="pd  pm5 fz12 z3 dingdn_se btm">
						订单编号：{{se.order_sn}}
						<span class="fr ls" v-if="se.is_comment>0">已评价</span>
						<span class="fr ls" v-else>{{se.status|dinghdn}}</span>
					</section>

					<ul>
						<li class="pd pt10 pm10 btm mui-row pr" v-for="sd in se.goods_list" >

							<p class="cp_icon_sdf fl ">
								<img :src="sd.goods_thumb">
							</p>

							<section class="ov pl10 mui-row pr">
								<section class="mui-col-xs-9">
									<p class="dianer z3 sdf_jh_dertx fz14">{{sd.goods_name}}</p>

									<p class="fz12 dian">
										{{sd.goods_attr}}
									</p>
									<!--
                <p class="">
                    <span class="bgred yj4 cf df_sdfrt fz12">七天退换</span>

                </p>
-->

								</section>
								<section class="ov tr">
									<span class="fz16">￥
                         <span v-html="price_guo(sd.goods_price)"> </span>

									</span>
									<p class="fz12 dsf_hg_dser">
										x{{sd.goods_number}}
									</p>
								</section>

							</section>

						</li>
					</ul>
					<p class="tr fz12 btm pt5 pm5 pd z3">
						共计{{se.goods_list.length}}件商品 合计：
						<span class="red  fz16">￥ <span v-html="price_guo(se.order_amount)"> </span></span> (含运费 ￥{{se.shipping_fee}})
					</p>
					<section class="btm  tr df_jgh_wer pd">

    <a class="mui-btn sd_jhert_dert" @click="hfer(se.shop_id+'.html#/order_form')">前往商城</a>
					</section>

				</section>

				<section class="qc pt10 pm10 btm fz13 cen" v-if="orderlist_data.length>=10">
					<section>
						<mt-spinner color="#26a2ff" :size="20" class="f_b cz" v-if="meitou"></mt-spinner>
						<span class="ml10" v-if="meitou">加载中...</span>
						<span class="ml10" v-else>我是有底线的</span>
					</section>
				</section>




			</section>

			<section class="sd_jhIs pr dsf_jg_detr">

				<kongbai :kb="kb"></kongbai>
			</section>
            </section>

            		<kongbai :kb="kb" v-else></kongbai>



		</section>
		<loadin v-else></loadin>

	</div>
</template>
<script>
    import dibu from "../components/dibu.vue"
    import kongbai from "../components/kongbai.vue"
    import loadin from "../components/loadin.vue"
    import sear_head from "../components/sear_head.vue"
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                shopinfo_p: "",
                is_loadin: "",
                num_sd: -1,
                kehu: "",
                current_page: 1,
                keyword: "",
                type: "",
                meitou: true,
                loading: false,
                search_text: "", //搜索
                ss_jh_w: [{
                        "name": "全部",
                        cls: "act",
                        type: ""
                    },
                    {
                        "name": "待付款",
                        cls: "",
                        type: 6
                    },
                    {
                        "name": "待发货",
                        cls: "",
                        type: 1
                    },
                    {
                        "name": "待收货",
                        cls: "",
                        type: 2
                    },
                    {
                        "name": "待评价",
                        cls: "",
                        type: 11
                    }
                ],
                sd_dr_e: [{
                        type: 0,
                        zt: "等待卖家付款"
                    },
                    {
                        type: 1,
                        zt: "买家已付款"
                    },
                    {
                        type: 2,
                        zt: "卖家已发货"
                    },
                    {
                        type: 3,
                        zt: "交易成功"
                    }
                ],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "您还没有商品订单，快去逛逛吧",
                    btn_name: "前去逛逛",
                    btn_url: ""
                },
                orderlist_data: []
            }
        },
        components: {
            dibu: dibu,
            kongbai: kongbai,
            loadin: loadin,
            sear_head: sear_head
        },
        methods: {
            queghua_s(idx, type) {

                this.ss_jh_w.map(function(a) {
                    a.cls = ""
                })
                this.meitou = true
                this.ss_jh_w[idx].cls = "act"
                this.num_sd = idx - 1
                this.orderlist_data = []
                this.current_page = 1
                this.loading = true;
                this.type = type
                this.getdata()
            },
            loadMore() {
                this.current_page++
                    let th = this
                this.loading = true;
                this.getdata()
            },
            getdata() {

                let orderlist = {},
                    th = this
                orderlist.token = this.token
                orderlist.current_page = this.current_page
                orderlist.keyword = this.keyword
                orderlist.type = this.type

                this.post("user/orderlist", orderlist, function(data) {
                    th.is_loadin = true
                    data.data.map(a => {
                        a.heji = 0
                        a.goods_list.map(b => {
                            a.heji += parseFloat(b.goods_price) * b.goods_number
                        })
                        a.heji += parseFloat(a.shipping_fee)
                        th.orderlist_data.push(a)

                        th.loading = false
                    })
                    console.log(data.data.length);
                    if (data.data.length < 10) {
                        th.meitou = false

                    }
                    if (th.orderlist_data.length <= 0) {
                        setTimeout(function() {
                            $(".dsf_jg_detr").addClass("show")
                        }, 100);

                    } else {
                        $(".dsf_jg_detr").removeClass("show")
                    }

                })
            },
            search_fun(data) { //搜索按钮触发

                this.orderlist_data = []
                this.current_page = 1
                this.loading = true;
                this.keyword = data
                this.getdata()

            },
            fukuang(g_list) {
                let dats_e = {}
                dats_e.order_id = g_list.order_id
                dats_e.order_sn = g_list.order_sn
                dats_e.goods_money = g_list.heji
                let orderpay = {},
                    th = this
                orderpay.token = this.token
                orderpay.order_id = g_list.order_id

                this.post("user/orderpay", orderpay, function(data, dater) {
                    dats_e.user_money = data.user_money
                    dats_e.total_money = g_list.heji
                    if (data.error_type == 2) {
                        MessageBox("提示", dater.return_msg);
                        return
                    }
                    dats_e.wxpay = data.wxpay
                    let url_de = `https://api.cangniaowl.com/payment.html?token=${th.token}&order_id=${g_list.order_id}`
                    window.location.href = url_de




                })

            },
            dinghdn(t) {

                switch (t) {
                    case 1:
                        return "待发货"
                        break;
                    case 2:
                        return "待收货"
                        break;
                    case 3:
                    case 11:
                        return "已关闭"
                        break;
                    case 6:
                        return "待付款"
                        break;
                    case 5:
                    case 9:
                    case 10:
                        return "售后中"
                        break;
                    case 11:
                        return "已退款"
                        break;

                    case 8:
                    case 12:
                    case 13:
                        return "待评价"
                        break;
                }
            },
            order_formgx(order_id, type, idx) { //订单更新
                let th = this
                if (type == "delete") {
                    MessageBox.confirm('确定要删除吗？').then(action => {
                        if (action) {
                            th.digengs(order_id, type, function() {
                                th.orderlist_data.splice(idx, 1)
                            })

                        }
                    });
                    return
                }
                if (type == "cancel") {
                    MessageBox.confirm('确定要取消该订单吗？').then(action => {
                        if (action) {

                            th.digengs(order_id, type, function() {
                                th.orderlist_data[idx].status = 11
                            })
                        }
                    });
                    return
                }
                if (type == "confirm") {
                    MessageBox.confirm('确认收货？').then(action => {
                        if (action) {

                            th.digengs(order_id, type, function() {
                                th.orderlist_data[idx].status = 12
                            })
                        }
                    });
                    return
                }

            },
            digengs(order_id, type, call) {
                let orderupdate = {}
                orderupdate.token = this.token
                orderupdate.order_id = order_id
                orderupdate.type = type
                this.post("user/orderupdate", orderupdate, function() {
                    call()
                })
            }
        },
        mounted() {
            try {
                window.scrollTo(0, 0);
            } catch (e) {

            }
            let th = this
            this.shop_info(function(data) {
                th.shopinfo_p = data.data
            })

            if (this.$route.query.type) {
                this.queghua_s(this.$route.query.type, this.$route.query.types)
            } else {
                this.getdata()
            }
            th.Title("我的订单")
            if (this.$route.query.kehu) {
                this.Title("客户订单")

                this.kehu = this.$route.query.kehu
            } else {
                this.kehu = ""
            }
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })




        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            dinghdn(t) {
                switch (t) {
                    case 1:
                        return "待发货"
                        break;
                    case 2:
                        return "待收货"
                        break;
                    case 3:
                    case 11:
                        return "已关闭"
                        break;
                    case 6:
                        return "待付款"
                        break;
                    case 5:
                    case 9:
                    case 10:
                        return "售后中"
                        break;
                    case 11:
                        return "已退款"
                        break;

                    case 8:

                    case 12:
                    case 13:
                        return "待评价"
                        break;
                }
            },
            acdr(td){
                let sdrt=""
                if(td==1){
                    sdrt="ac"
                }
                    if(td==2){
                    sdrt="ab"
                }
                return sdrt
            }
        }
    }

</script>
<style scoped>
    .df_jh_ertxc i {
        left: 20px;
    }

    .dsf_jh_ertxc {
        line-height: 40px;
        top: 42px;
    }

    .sd_jhIs {
        padding-top: 50px !important;
    }

    .sd_jhIs.aa {
        padding-top: 79px !important;
    }

    .df_jgh_wer {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .df_jgh_wer a {
        width: 80px
    }

    .df_jgh_wer a.ls_bor {
        color: #0076ef;
        border: 1px solid #0076ef;
    }

    .df_jgh_wer a {
        margin-left: 5px;
    }

    .df_jgh_wer a.ab {
        width: 90px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .df_jgh_wer .mui-btn {
        width: auto;
        padding: 5px 10px 5px 10px !important;
        font-size: 12px;
    }

    .fems_sdf {
        width: 30px;
        height: 16px;
        background-position: -170px -750px;
    }

    .fems_sdf.act {
        width: 49px;
        background-position: -175px -722px;
    }

    .dsf_jg_detr {
        display: none;
        padding-bottom: 20px;
        margin-top: -80px;
    }

    .dsf_h_row {
        margin-top: 5px;
    }

    .sd_jhert_dert{
        border: 1px solid #EE5550;
        color: #EE5550;
    }
    .sd_jh_dr{
        width: 17px;
        height: 16px;
        background-position: -251px -322px
    }
    .sd_jh_dr.ab{
        width: 17px;
        height: 19px;
        background-position: -257px -47px;
    }

    .sd_jh_dr.ac{
        width: 17px;
        height: 19px;
        background-position: -6px -85px;
    }
</style>
