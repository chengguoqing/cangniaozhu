<!--商品列表-->
<template>
   <section>

            <p class="dsf_jgh_e fz12" v-if="title">
                <span>{{title}}</span>
            </p>
       <section class=" mui-row dsf_jh_erx" :class="!title||'mt15'" >

           <section class="mui-col-xs-6" v-for="ldat in lt_data" @click="tiaozahs(ldat.goods_id,ldat.shop_id)  ">
                <section class="bgff">
                    <p class="liyu_tuwen">
                        <img  v-lazy="ldat.goods_thumb" >
                    </p>
                    <p class="dian pd pt5 pm5 fz12 ">
                         {{ldat.goods_name}}
                    </p>
                    <p class="btm pd pt5 pm5 fz12 ">
                    <span class="red fz16 zonhgxiaose ab">￥<span v-html="price_guo(ldat.shop_price)"></span> </span>
                        <span class="ls fr zonhgxiaose">总销量{{ldat.sales_goods_number||0}}</span>
                    </p>
                </section>
            </section>
           <p class="qc"></p>

           <section class="qc pt10 pm10 btm fz13 cen" v-if="loading">
               <section v-if="is_down">
               <mt-spinner color="#26a2ff" :size="20" class="f_b cz"></mt-spinner>
               <span class="ml10">加载中...</span>
                   </section>
            </section>




                <section class="qc pt10 pm10 btm fz13 cen" v-if="!is_down&&lt_data.length>10&&!loading">

               <section >
      <span>没有更多数据了...</span>
    </section>


            </section>



    </section>

    </section>
</template>
<script>
    export default {
        props: {
            title: "",
            lt_data: "",
            loading: "",
            mode:"",
            is_down: ""
        },
        data() {
            return {
                shopinfo_p: ""
            }
        },
        methods: {
            tiaozahs(goods_id, shop_id) {
               let th=this
//                判断是否本店
               this.hfer(shop_id+'.html?router=commodity_details#/commodity_details?goods_id='+goods_id)

//                    let clickSource={}
//                    clickSource.token=this.token
//                    clickSource.goods_id=goods_id
//                    this.post("product/clickSource",clickSource,function(data){
//                          th.hf(th.shopinfo_p.server_url + "/shop/"+shop_id+".html#/commodity_details?goods_id=" + goods_id+"&cnsearchid="+data.cnsearchid)
//                    })



            }

        },
        mounted() {
            let th = this
            this.shop_info(function(data) {
                th.shopinfo_p = data.data
            })
        },
    }

</script>



<style scoped>
    .liyu_tuwen {
        height: 11.2rem;
        text-align: center;
        line-height: 11.2rem;
        background: #f8f8f8;
    }

    .liyu_tuwen img {
        width: 100%;
        height: 100%;
    }

    .liyu_tuwen img[lazy=loading] {
        width: 40px;
        height: 40px;

    }

    .dsf_jh_erx .pd {
        padding-left: 5px;
        padding-right: 5px;
    }

    .ls {
        color: #607d8b !important
    }

    .dsf_jh_erx .mui-col-xs-6 {
        padding-right: 3px;
        margin-top: 6px;
    }

    .dsf_jh_erx .mui-col-xs-6:nth-child(2n) {
        padding-right: 0px;
        padding-left: 3px;
    }

    .zonhgxiaose {
        position: relative;
        top: 4px;
    }

    .zonhgxiaose.ab {
        top: 2px;
    }

</style>
