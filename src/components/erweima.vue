<!--二维码弹出层-->
<template>
   <section class="ds_jh_dretxc cz_w" v-if="xian_s">
            <section class=" cz_a ">
                <section class="sd_jh bgff">
                <p class="pt10 pm10 z6 fz12 dsf_kjh_dert">
                    关注店铺微信公众号<br>
                    获取更多优惠
                </p>
                <section class="sd_jh_etc">
                    <img :src="wei_qr_code">
                    <p class="fz12">
                        长按二维码分享
                    </p>
                </section>
                    <p class="btm  mt20 pt10 pm10 red fz16" @click="$emit('sd_jher')">
                        关 闭
                    </p>


                </section>
            </section>
    </section>
</template>
<script>
    export default {
        props: {
            xian_s: "",
            wei_qr_code:""
        },
        data() {
            return {
                shopinfo_p: ""

            }
        },
        methods: {},
        mounted() {
            let th=this



        },
    }

</script>
<style scoped>
    .ds_jh_dretxc {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10001
    }

    .sd_jh {
        width: 300px;
        margin: auto;
        border-radius: 10px;
    }

    .sd_jh_etc {
        width: 180px;
        background: #F7F7F7;
        margin: auto;
        padding: 5px
    }

    .sd_jh_etc img {
        width: 100%;
        height: 160px;
    }

    .dsf_kjh_dert {
        line-height: 1.3
    }

</style>
