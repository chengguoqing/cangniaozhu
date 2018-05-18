<!--验证新用户-->
<template>
	<div >
		<mt-popup v-model="popupVisibleer_e" class="d_ederrtt">
              <span class="yj close_eer" @click="$emit('close_e')"><i class="dx icon-close1 cf"></i></span>


                <section class="bgff wd_jh_dr ov  d_ederrtt pr pm30">

                    <p class="cen z3 fz16 b pt ">新用户验证</p>

                    <section class="mui_forw mt30">
                    <p class="pr">
                        <input type="tel" placeholder="请输入手机号码"  v-model="form_s.phone">

                    </p>
                    <p class="pr">
                        <input type="text" placeholder="请输入验证码" v-model="form_s.yzm">
                   <button class="mui-btn-red huw_wet fz12" @click="djsh" :class="daoji==60?'':'act'">
                            <span v-if="daoji==60"> 获取验证码</span>
				<span v-else>{{daoji+"s后重新获取"}}</span></button>
                    </p>

                        <p class="mt10">
                            <button class="mui-btn-red w100" @click="bangding_s">立即验证</button>
                            </p>

                    </section>

                </section>
        </mt-popup>
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        props: {
            pher_er: "",
              popupVisibleer_e: ""
        },
        data() {
            return {

                form_s: {
                    phone: "",
                    yzm: ""
                },
                daoji: 60, //倒计时
                jhgg: true,
            }
        },
        components: {

        },
        methods: {
            djsh() {
                if (!this.yazs()) {
                    return
                }

                let th = this
                //                发送短信
                let bindsendsms = {}
                bindsendsms.token = this.token
                bindsendsms.mobile_phone = this.form_s.phone
                this.post("user/bindsendsms", bindsendsms, function(a, b) {

                })

                if (th.jhgg == true) {
                    th.jhgg = false
                    th.daoji--
                        var sdf_wer = setInterval(function() {
                            th.daoji--
                                if (th.daoji < 0) {
                                    th.daoji = 60
                                    th.jhgg = true
                                    clearTimeout(sdf_wer)
                                }
                        }, 1000)
                }

            },
            bangding_s() { //绑定按钮触发
                    let bindphone = {},
                    th = this

                    th.$emit('tijiao')
                if (!this.yazs()) {
                    return
                }
                if (!this.form_s.yzm) {
                    Toast('请输入验证码');
                    return
                }

                bindphone.token = this.token
                bindphone.mobile_phone = this.form_s.phone
                bindphone.phone_code = this.form_s.yzm
                this.post('user/bindphone', bindphone, function(a, b) {
                    Toast({
                        message: b.return_msg,
                        iconClass: 'dx icon-gou fz40'
                    });
                    th.$emit('tijiao')

                })


            },
            yazs() {
                if (!this.form_s.phone) {
                    Toast('请输入手机号');
                    return false
                }
                if (!this.yanza.phone(this.form_s.phone)) {
                    Toast('手机号格式错误');
                    return false
                }
                return true
            }
        },
        mounted() {
            setTimeout( a=> {
                this.form_s.phone = this.pher_er
            }, 500);
        }
    }

</script>
<style scoped>
    .wd_jh_dr {
        width: 300px;
        padding: 15px;
        z-index: 10000;
    }

    .wd_jh_dr  input{
        font-size: 12px;
        line-height: 50px;
        height: 50px;
    }
    .huw_wet {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 30px;
        line-height: 1px;
        padding-top: 5px;
        padding-bottom: 0px;
    }

    .huw_wet.act {
        background: #999 !important;
        border: 1px solid #999 !important;
    }

    .close_eer {
        position: absolute;
        right: -10px;
        top: -10px;
        background: #F94F4F;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        z-index: 100000
    }

    .close_eer i {
        font-size: 12px;
    }
    .wd_jh_dr input{
        text-indent: 0px;
    }
    .d_ederrtt{
        border-radius: 10px;
    }
</style>
