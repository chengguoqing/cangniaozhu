<!--用户中心的头部-->
<template>
	<div >
         <p class="tr pr" style="height:20px">
<!--
                    <i class="f_i shezhi_icon"></i>
                    <i class="f_i xiaoxisd"></i>
-->
                </p>
        <section class="z_logo" v-if="!is_use">
            <img src="http://mall.cangniaowl.com/static_main/img/z_logo.png" >
        </section>


<!--
            <section class="d_jh_dfd_drt">
              <img src="/static/img/copy_bottom_bg.png" class="cz">      苍鸟超级电商
            </section>
-->
            <section class="mt40" v-if="!is_use">

                <img :src="user_dta.header_image" class="yj user_icon fl">
                <section class="ov pl20  sdf_kjj_eer">
                    <p class="cf fz16">{{user_dta.user_name}} <i class="f_i right_iocn cz ml5"></i></p>
                    <p class="mt5 cf fz12">
                    <i class="f_i zhuanshi_icon"></i>
                        {{user_dta.group_name}}
                    </p>

                </section>
                <p class="qc"></p>
            </section>
            <section v-else class="cen sd_jh_dert" >

      <img :src="user_dta.header_image" class="yj user_icon ">


                  <p class="cf fz16">{{user_dta.user_name}}</p>
                <p class="mt10">
                <span class="cf fz12 br sd_jh_dert" @click="popupVisibleer_e=true"><i class="f_i pupbhe_d"></i>
                    {{user_dta.mobile_phone||"未绑定"}}
    </span>
                </p>
            </section>

        <p class="qc"></p>

        <section class="dfd_kjh_der" :class="user_dta.mobile_phone==''?'show':''">
         <yanzheng  @tijiao="tijiao" @close_e="popupVisibleer_e=false" :popupVisibleer_e="popupVisibleer_e"></yanzheng>
        </section>

	</div>
</template>
<script>
    import yanzheng from "./yanzheng"
    export default {
        props: {
            user_dta: "",
            is_use: ""
        },
        data() {
            return {
                popupVisibleer_e:true
            }
        },
        components: {
            yanzheng
        },
        methods: {
            tijiao() { //提交订单按钮触发
              location.reload();
            },
        },
        mounted() {

        }


    }

</script>
<style scoped>
    .z_logo {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        text-align: center
    }

    .z_logo img {
        width: 60px;
    }

    .pupbhe_d {
        width: 9px;
        height: 13px;
        background-position: -36px -93px;
        position: relative;
        bottom: 1px;
        margin-right: 5px;
    }

    .sd_jh_dert {
        border-radius: 10px;
        padding: 2px 8px 2px 8px;

    }
    .dfd_kjh_der{
        display: none
    }

</style>
