<!--认证-->
<template>
   <section class="s_jh_wettxc">

    <img src="http://mall.cangniaowl.com/static/img/vip_off.png" class="sdf_j_a" @click="popupVisible=true" v-if="shopinfo_p.caution_money_status==0">

    <img src="http://mall.cangniaowl.com/static/img/vip_on.png" class="sdf_j_a" @click="popupVisible=true" v-else>



    <img src="http://mall.cangniaowl.com/static/img/no_thouth_company.png" class="sdf_j_a ml5" @click="popupVisibleer=true" v-if="shopinfo_p.company_status!=1">

           <img src="http://mall.cangniaowl.com/static/img/enterprise.png" class="sdf_j_a ml5" @click="popupVisibleer=true" v-else>


<!--       未认证保弹出-->
       <mt-popup
  v-model="popupVisible">
           <section class="sd_jh_ert pd">
            <p class="cen mt20">
                 <img src="http://mall.cangniaowl.com/static/img/vip_off.png" class="sd_jh_wer" v-if="shopinfo_p.caution_money_status==0">
                <img src="http://mall.cangniaowl.com/static/img/vip_on.png" class="sd_jh_wer" v-else>
            </p>
               <p class="z3 fz12 cen">
    该店 {{shopinfo_p.caution_money_status==0?"尚未":'已'}}加入苍鸟消费者保障计划
    </p>
               <section class="  df_jh_wertxc mt10">
   <p class="z3 pl10 pt5 pm5 fz13">
    该店{{shopinfo_p.caution_money_status==0?"尚未":'已'}}缴纳1万元苍鸟消费者保证金
            </p>
                   <p class="fz12 f_jh_er_rt pd pt5 pm5">
    苍鸟发起本保障计划，用于监督规范商家的经营行为，确保承诺的各类消费保障行为的实际履行，致力于为消费者创建一个安全放心的公众号购物环境。
    </p>
        </section>

               <p class="mt15 pd pm15">
            <a class="mui-btn mui-btn-red w100" @click="hf('baoxiangqing')">了解详情</a>
            </p>

        </section>
</mt-popup>

       <!--       未认证企业弹出-->

            <mt-popup
  v-model="popupVisibleer">
           <section class="sd_jh_ert pd">
            <p class="cen mt20">
                 <img src="http://mall.cangniaowl.com/static/img/no_thouth_company.png" class="sd_jh_wer" v-if="shopinfo_p.company_status!=1">
                  <img src="http://mall.cangniaowl.com/static/img/enterprise.png" class="sd_jh_wer" v-else>
            </p>
               <p class="z3 fz12 cen">
    该店铺{{shopinfo_p.company_status!=1?"尚未":'已'}}未进行苍鸟企业认证
    </p>
               <section class="  df_jh_wertxc mt10">
            <p class="z3 pl10 pt5 pm5 fz13">
    入驻商家{{shopinfo_p.company_status!=1?"尚未":'已'}}向苍鸟提交相关企业主体经营信息
            </p>
                   <p class="fz12 f_jh_er_rt pd pt5 pm5">
  苍鸟认证为第三方认证，针对入驻苍鸟公众号平台的商家进行相关经营信息审核，目的是建立完善可靠的公众号商城信用机制，保护商家自主品牌，维护广大消费者的权益，打击假冒伪劣，给广大消费者提供一个公平、公正、安全、绿色的公众号购物环境！
    </p>
        </section>

               <p class="mt15 pd pm15">
            <a class="mui-btn mui-btn-red w100" @click="hf('qiyexiangqing')">了解详情</a>
            </p>

        </section>
</mt-popup>
    </section>
</template>
<script>
    export default {
        props: {
            title: "",
            shopinfo_p: ""
        },
        data() {
            return {
                popupVisible: false,
                popupVisibleer: false
            }
        },
        methods: {

        },
        created: function() {

        },
    }

</script>
<style scoped>
    .sdf_j_a {
        width: 22px;
    }

    .sd_jh_ert {
        width: 300px;
        min-height: 200px;
        border-radius: 8px;
    }

    .sd_jh_wer {
        width: 64px;
    }

    .df_jh_wertxc {
        border: 1px dotted #ddd;
    }

    .f_jh_er_rt {
        border-top: 1px dotted #ddd;
    }

</style>
