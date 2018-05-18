import router from './router'
var wx = require('weixin-js-sdk');
import md5 from './js/md5'
import {
    MessageBox
} from 'mint-ui';
var sd_iux = "https://api.cangniaowl.com/v1/",
    shopinfo = false,
    spurl = "https://api.cangniaowl.com/shop/"


export default {
    install(Vue, options) {
        let name = "token"
        Vue.prototype.token = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
        //        if (Vue.prototype.token) {
        //            localStorage.token = Vue.prototype.token
        //        } else {
        //            Vue.prototype.token = localStorage.token
        //        }

        Vue.prototype.token = token
        Vue.prototype.spurl = spurl
        // Vue.prototype.token = "kf7AcoF67rhSNQPvn3EiX3Z22O1p5tKUozc1UwjyIwDA4DL_zhc-mBwjcQpo"
        //Vue.prototype.token ="m4xPkM5TRUcXNH37azKgIQ5DA2B8S0sLozc1UwlSXgajwincRkTMVx8vA79I"
        Vue.prototype.ge_t = function (url, cn, xy) {
            this.$http.get(sd_iux + url, {
                params: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }
        Vue.filter("baoliu", function (t) {
            return parseFloat(t).toFixed(2)
        })

        Vue.filter("shixiao", function (t) {
            switch (t) {
                case 1:
                    return '已删除';
                    break;
                case 2:
                    return '商品已下架';
                    break;
                case 3:
                    return '已售馨';
                    break;
                default:
                    break;
            }

        })
        Vue.prototype.shopinfo = ""
        Vue.prototype.shop_info = function (call_bs) {
            if (!Vue.prototype.shopinfo) {
                let shopinfo = {},
                    th = this
                shopinfo.token = this.token
                this.$http.get(sd_iux + "home/shopinfo", {
                    params: shopinfo
                }).then((response) => {
                    Vue.prototype.shopinfo = response.data
                    call_bs(Vue.prototype.shopinfo)
                }, (response) => {
                    alert("请求失败");
                });
            } else {
                call_bs(Vue.prototype.shopinfo)
            }
        }
        Vue.prototype.car_number = ""
        Vue.prototype.carnumber = function (call_e) { //购物车
            let carnumber = {}
            carnumber.token = this.token
            this.$http.get(sd_iux + "user/carnumber", {
                params: carnumber
            }).then((response) => {
                Vue.prototype.car_number = response.data.data.number //获取购物车数量
                try {
                    call_e(response.data.data.number)
                } catch (e) {

                }
            }, (response) => {
                alert("请求失败");
            });


        }





        Vue.prototype.price_guo = function (t) {
            t = parseFloat(t).toFixed(2)
            t += ""
            let price_a = t.split(".")[0],
                price_b = t.split(".")[1]
            return `${price_a}.<span class="fz12">${price_b}</span>`
        }


        Vue.prototype.post = function (url, cn, xy, cal) {
            this.$http.post(sd_iux + url, cn, {
                emulateJSON: true //跨域
            }).then((response) => {
                if (response.data.return_code == "000001") { //跳转首页
                    router.push({
                        path: "/"
                    })
                    return
                }

                if (response.data.return_code != "SUCCESS") {
                    if (cal) {
                        return
                    }
                    MessageBox('提示', response.data.return_msg);
                    return
                }
                xy(response.data.data, response.data)
            }, (response) => {
                MessageBox('提示', "请求接口失败");
            });
        }
        Vue.prototype.Title = function (title) {
            document.title = title

        }
        Vue.prototype.time_c = function (t) {
            let time = new Date()
            time.setTime(t * 1000)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate()
            return Year + "-" + Month + "-" + Data
        }




        Vue.prototype.setuser_info = function (user) {
            localStorage.user = JSON.stringify(user)
        }

        Vue.prototype.hf = function (url, cu) { //路由跳转

            if(url==-1){
                return
            }
            if (url.indexOf("http") >= 0) {
                window.location.href = url
                return
            }
            router.push({
                path: "/" + url,
                query: cu
            })
        }
        Vue.prototype.hfer = function (url, cu) { //路由跳转

            window.location.href = spurl + url
        }


        //获取cookie
        Vue.prototype.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }
        Vue.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            console.info(document.cookie);
        }

        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };

        //company=分享标题  sd_us=分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 imgUrl分享图标 desc=详情介绍
        Vue.prototype.fenxiang = function (company, sd_us, shop_logo, desc) {
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: company, // 分享标题
                    link: sd_us, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shop_logo, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: company,
                    desc: desc,
                    link: sd_us,
                    imgUrl: shop_logo,
                    trigger: function (res) {

                    },
                    success: function (res) {

                    },
                    cancel: function (res) {

                    }
                });
            })
        }

        Vue.prototype.wx_config = function (data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'onVoicePlayEnd',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
            });

        }







    }
}
