<template>
	<div>

		<section class="pd bgff pt20 pm20">

<!--
			<section>
				<section class="ov fl dsf_h_dxerttx" :class="ds.cls" v-for="(ds,idx) in d_jh_s" @click="sd_sd(idx)">
					<section class="s_sd_ijuyh_sde">
						<span class="pr">{{ds.name}}</span>
					</section>
				</section>

			</section>
			<p class="qc"></p>
-->

			<section class="mui-row dsf_jh_sdrx">
				<p class="mui-col-xs-10 pr pr10">
					<input type="text" placeholder="请输入关键词" v-model="search_text" class="fz12 dsf_kjh_det">
					<i class="dx icon-sousuo ss_sd_se"></i>
				</p>
				<p class="ov  h100 tr">
					<a class="mui-btn mui-btn-red ss_jh_derrt fz12" @click="search_btn">

						<span>搜索</span>
					</a>
				</p>

			</section>

		</section>
        <section class="sd_jh_der">

		<section class="bgff pl10">

			<section class=" fz12 z6 pr10">
				店铺热搜

				<span class="fr z9"><i class="dx icon-refresh ls fz14"></i> 换一批</span>
			</section>

			<section class="mt10">
				<span class="fz12 br z6 bghs  df_jgh_derxc" v-for="(dsf_sd,idx) in fenlei_s" @click="search_text=dsf_sd.hot_word ;search_btn()">
        {{dsf_sd.hot_word}}
    </span>

				<p class="qc"></p>

			</section>
		</section>

            </section>
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                fenlei_s: [],
                search_text: "", //搜索的关键词
                d_jh_s: [{
                        name: "本店",
                        cls: 'act'
                    },
                    {
                        name: "全站",
                        cls: ''
                    }
                ]
            }
        },
        components: {

        },
        methods: {
            sd_sd(idx) {
                this.d_jh_s.map(function(a) {
                    a.cls = ""
                })
                this.d_jh_s[idx].cls = "act"
            },
            search_btn() { //搜索按钮触发
                let sd_drr = 2
                this.hf("cplist", {
                    keyword: this.search_text,
                    mode: sd_drr
                })

            }
        },
        mounted() {
            this.Title("苍鸟超级电商")

            let category = {},
                th = this
            category.token = this.token
            // 获取左边列表
            //            this.post("product/category", category, function(data) {
            //                data.map(a => {
            //                    a.cls = ""
            //                    th.fenlei_s.push(a)
            //                })
            //            })
            this.post("home/hotwordselect", {
                token: this.token,
                show_hot_word_nums: 10
            }, function(data) {
                console.log(data);
                data.map(a => {
                    a.cls = ""
                    th.fenlei_s.push(a)
                })
            })

        },
    }

</script>
<style scoped>
    .s_sd_ijuyh_sde {
        float: left;
        width: 90px;
        text-align: center;
        line-height: 25px;
        font-size: 12px;
    }

    .s_sd_ijuyh_sde span {
        position: relative;
        left: -10px;
        top: 2px;
        color: #999;
    }

    .s_sd_ijuyh_sde:after {
        content: ' ';
        position: absolute;
        right: 10px;
        top: 0px;
        height: 100%;
        width: 100%;
        background: #EEEEEE;
        border: 1px solid #F0F0F0;
        transform: skewX(35deg);
    }

    .dsf_h_dxerttx {
        position: relative;
        border-left: 1px solid #F0F0F0;
    }

    .dsf_h_dxerttx.act .s_sd_ijuyh_sde:after {
        background: #fff;
    }

    .dsf_h_dxerttx.act .s_sd_ijuyh_sde span {
        color: #333
    }

    .dsf_h_dxerttx:nth-child(2) {
        left: -15px;
    }

    .dsf_jh_se {
        width: 79px;
        line-height: 30px;
        height: 30px;
        text-align: center;
        position: relative;
        float: left;
        font-size: 14px;
        color: #999;
    }

    .dsf_jh_se:first-child .as_ngs {
        width: 118%!important;
        left: -15px !important;
    }

    .dsf_jh_se .as_ngs {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-right: 1px solid #f5f5f5;
        border-top: 1px solid #f5f5f5;
        transform: skewX(45deg);
    }

    .dsf_jh_se.act {
        color: #333;
    }

    .dsf_jh_se.act .as_ngs {
        background: #fff;
    }

    .dsf_jh_sdrx input {
        border: 1px solid #f5f5f5;
        border-radius: 0px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
    }

    .dsf_jh_sdrx a.mui-btn {
        height: 35px;
        padding: 0px;
        line-height: 35px;
    }

    .ss_jh_derrt {
        padding: 0px;
        width: 55px;
        line-height: 32px !important;
        height: 32px !important;
    }

    .ss_sd_se {
        position: absolute;
        left: 5px;
        top: 6px;
        font-size: 19px;
    }

    .df_jgh_derxc {
        /*        padding: 3px 10px 0px 10px;*/
        line-height: 25px;
        padding-left: 8px;
        padding-right: 8px;
        float: left;
        margin-right: 5px;
        margin-bottom: 10px;
    }

    .sd_jh_der {
        min-height: 120px;
        background: #fff;
    }

    .dsf_kjh_det {
        line-height: 1.7 !important;
    }

</style>
