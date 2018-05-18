<!--分类列表-->
<template>
	<div >

            <section class="dsf_jh_sdsd mui-row cen btm" v-if="!dingbu">
        <section class="mui-col-xs-3 fz13 z6" v-for="(sr,idx) in s_sd_dr" :class="sr.cls" @click="df_ugh(idx)">
             <span class="pr">
                 {{sr.name}}
            <span v-if="sr.toge" class="sd_jh_derxc" :class="sr.toge==1?'':'act'">
                  <i class="dx icon-down1 aa"></i><br>
                  <i class="dx icon-down1 ab"></i>
            </span>
            </span>
        </section>

    </section>

        <section v-if="jg_loisdr">
          <kongbai :kb="kb_ab"  @ziding="$router.back(-1)" v-if="list_data.length<=0"></kongbai>

     <section v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" v-else>

        <commodity_list :lt_data="list_data"  :mode="mode" :loading="loading" :is_down="is_down"></commodity_list>
         </section>




     </section>
                   <loadin v-else></loadin>




	</div>
</template>
<script>
    import commodity_list from "./commodity_list.vue"
    import kongbai from "./kongbai.vue"
    import loadin from "../components/loadin.vue"
    export default {
        props: {
            dingbu: "",
            keyword: "",
            cat_id: "",
            ty_pe: "",
            mode:"",
            global_category_id:"",
            cptext:""
        },
        data() {
            return {
                sort: "",
                jg_loisdr: false,
                page: 1, //分页
                kb_ab: { //空白
                    icom: "dsf_jh_si",
                    msg: "商品过期或者不存在",
                    btn_name: "返回上一页",
                    btn_url: "-1"
                },
                s_sd_dr: [{
                        name: "默认",
                        cls: 'red',
                        dn_na: "",
                        toge: ""
                    },
                    {
                        name: "价格",
                        cls: '',
                        dn_na: "shop_price",
                        toge: 2 //2升序  1降序
                    },
                    {
                        name: "销量",
                        cls: '',
                        dn_na: "sales_goods_number",
                        toge: 2
                    },
                    {
                        name: "人气",
                        cls: '',
                        dn_na: "click_count",
                        toge: 2
                    }
                ],
                loading: false, //是否下拉 true禁止
                is_down: false,
                list_data: [], //列表数据
                sd_sdf: 2
            }
        },
        components: {
            commodity_list: commodity_list,
            kongbai: kongbai,
            loadin: loadin
        },
        methods: {
            chushi() { //初始状态
                this.list_data = []
                this.page = 1
                this.loading = false
                this.is_down = false
            },
            df_ugh(idx) {
                this.s_sd_dr.map(function(a) {
                    a.cls = ""
                })
                this.s_sd_dr[idx].cls = "red"
                if (!this.s_sd_dr[idx].toge) {
                    this.sort = ""
                    this.chushi()
                    this.getlist("")
                    return
                }

                if (this.s_sd_dr[idx].toge == 2) { //升序
                    this.s_sd_dr[idx].toge = 1
                    this.sort = (this.s_sd_dr[idx].dn_na + " asc");
                } else { //降序
                    this.s_sd_dr[idx].toge = 2
                    this.sort = (this.s_sd_dr[idx].dn_na + " desc");
                }
                this.chushi()
                this.getlist("")


            },
            loadMore() {
                let th = this
                if (th.is_down) {
                    this.loading = true;
                    th.page++
                        th.getlist('', function() { //下拉
                            th.loading = false;
                        })
                }

            },
            gund_sdf(idx) {
                console.log(222)
            },
            getlist(cat_id, call_back, keyword) { //获取列表数据
                let p_list = {},
                    th = this
                p_list.token = this.token
                p_list.cat_id = this.cat_id
                if (keyword) {
                    p_list.keyword = keyword
                }
                p_list.type = this.ty_pe
                p_list.sort = this.sort
                p_list.keyword = this.keyword
                p_list.mode=this.mode
                p_list.global_category_id=this.global_category_id
                p_list.current_page = this.page //页码
                if (!this.loading) {
                    this.jg_loisdr = ""
                }

                if(this.ty_pe==1){
                    this.kb_ab.msg="没有店铺上新"
                }
                      if(this.ty_pe==2){
                    this.kb_ab.msg="没有促销商品"
                }
                this.post('product/list', p_list, function(data) {
                    th.is_loadin = true
                    data.data.map(a => {
                        th.list_data.push(a)
                    })
                    if (data.data.length >= 10) {
                        th.is_down = true
                    } else {
                        th.is_down = false
                    }
                    th.jg_loisdr = true
                    try {
                        call_back()
                    } catch (e) {

                    }

                })
            },
        },
        created() {
            this.kb_ab.msg=this.cptext
            let th = this
            setTimeout(function() {
                if (!th.keyword && !th.cat_id && !th.type) {
                    th.getlist('')
                }

            }, 0);


            this.Title("产品列表")
        },
        watch: {
            keyword: {
                handler: function() {
                    this.chushi()
                    this.getlist("")
                },
                deep: true
            },
            cat_id: {
                handler: function() {
                    this.chushi()
                    this.getlist(this.cat_id)
                },
                deep: true
            },
            ty_pe: {
                handler: function() {
                    this.chushi()


                    this.getlist(this.cat_id)
                },
                deep: true
            }



        }
    }

</script>
<style scoped>
    .asd_uy_dftx {
        z-index: 9999
    }

    .dsf_jh_sdsd {
        height: 45px;
        background: #fff;
        position: sticky;
        width: 100%;
        top: 44px;
        line-height: 45px;
        z-index: 1000
    }

    .sd_jh_derxc {
        line-height: 1;
        right: -20px;
        top: -11px;
        position: absolute;
        display: inline-block;
    }

    .sd_jh_derxc i {
        font-size: 15px;
        color: #666
    }

    .sd_jh_derxc i.aa {
        display: inline-block;
        transform: rotate(180deg);
        position: relative;
        top: 5px;
        left: 0.8px;
    }

    .dsf_jh_sdsd .mui-col-xs-3.red i.aa {
        color: #F44336!important;
    }

    .dsf_jh_sdsd .mui-col-xs-3.red .sd_jh_derxc.act i.ab {
        color: #F44336!important;
    }

    .dsf_jh_sdsd .mui-col-xs-3.red .sd_jh_derxc.act i.aa {
        color: #666!important;
    }

</style>
