<!--分类-->
<template>
	<div class="df_jh_drettx">
		<section v-if="is_loadin">

			<sear_head @sear_text="search_key" :placeholder="'品牌直购，源头服务，更多商品请搜索苍鸟'"></sear_head>

			<section class="dsf_jh_ertxcadsr">
				<gengduo v-if="gengduo"></gengduo>
				<section class="d_jh_je_lef fl">
					<ul class="d_jhg_erxc ">
						<li v-for="(dsf,idx) in fenlei_s" class="bbm" :class="dsf.cls" @click="left_click(idx,dsf.cat_id)">
							{{dsf.cat_name}}
						</li>
					</ul>
				</section>
				<section class="ov h100">
					<section class="d_jh_eer h100">



							<section v-for="(fs,idx) in fenlei_s" v-if="fs.cat_name!='全部产品'&&!leixing_s">
								<p class="pd pt10 pm10">{{fs.cat_name}} </p>
								<section class="pl10 pt10 pm5 bgff mui-row">
									<section class=" br s_jh_defxc" v-for="sd in fs.sub_cat" @click="hf('cplist',{mode:sd.mode,global_category_id:sd.global_category_id})">
										<p class="mjhh_tipo_sd">
											<img :src="sd.cat_image">
										</p>
										<p class="fz12 cen pt5 dian">
											{{sd.cat_name}}
										</p>

									</section>

								</section>

							</section>

							<section v-for="(fs,idx) in fenlei_s" v-if="leixing_s==idx">
								<p class="pd pt10 pm10" v-if="fs.sub_cat">{{fs.cat_name}} </p>
								<section class="pl10 pt10 pm5 bgff mui-row">
									<section class=" br s_jh_defxc" v-for="sd in fs.sub_cat" @click="hf('cplist',{cat_id:sd.cat_id})">
										<p class="mjhh_tipo_sd">
											<img :src="sd.cat_image">
										</p>
										<p class="fz12 cen pt5 dian">
											{{sd.cat_name}}
										</p>

									</section>

								</section>

							</section>



					</section>

				</section>
			</section>
		</section>
		<loadin v-else></loadin>
    <dibu :kjh_s="'1'"></dibu>
	</div>
</template>
<script>

    import commodity_list from "../components/commodity_list.vue"
    import dibu from "../components/dibu.vue"
    import gengduo from "../components/gengduo.vue"
    import loadin from "../components/loadin.vue"
    import sear_head from "../components/sear_head.vue"
    import cplist_l from "../components/cplist_l.vue"
    export default {
        data() {
            return {
                is_loadin: true,
                cat_type: 1,
                gengduo: false, //是否显示头部的更多
                fenlei_s: [{
                    cat_name: "全部产品",
                    cls: "red"
                }],
                keyword: "",
                fenlei_er: "",
                leixing_s: "", // 二级分类判断分类
                cat_id: 0, //分类id
            }
        },
        components: {
            commodity_list: commodity_list,
            dibu: dibu,
            gengduo: gengduo,
            loadin: loadin,
            sear_head: sear_head,
            cplist_l: cplist_l
        },
        methods: {
            left_click(idx, cat_id) { //左边列表点击事件
                this.fenlei_s.map(function(a) {
                    a.cls = ""
                })
                let th = this
                this.fenlei_s[idx].cls = "red"
                this.cat_id = cat_id
                this.leixing_s = idx
            },
            search_key(data) { //搜索
                this.keyword = data

            }
        },
        mounted() {
            this.Title("分类")
            let category = {},
                th = this
            let ty_pe = null, //路由传过来的值
                c_cat_id = null //路由传过来的值
            try { //处理异常 可能没有传值
                ty_pe = this.$route.query.type
                c_cat_id = this.$route.query.cat_id
            } catch (e) {

            }
            category.token = this.token
            category.show_subcat = 1
            // 获取左边列表
            this.shop_info(function(data) {
                th.cat_type = data.data.cat_type
                if (th.cat_type) {
                    category.show_subcat = 1
                }
                th.post("portal/category", category, function(data) {
                    data.map(a => {
                        a.cls = ""
                        th.fenlei_s.push(a)
                    })

                    if (ty_pe) {
                        th.left_click(ty_pe, c_cat_id)
                    }
                })
            })

        }
    }

</script>
<style>
    .df_jh_drettx .load_am {
        left: 70px;
    }

    .df_jh_drettx p.cen.mt20.pl20.pr20 {
        display: none
    }

</style>
<style scoped>
    .df_jh_ertxc i {
        left: 20px;
    }

    i.dx.icon-caidan.z6.fz22 {
        top: -3px
    }

    .dsf_jh_ertxcadsr {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0px;
        top: 0px;
        padding-top: 44px;
        background: #EFEFF4;
        padding-bottom: 50px;
    }

    .d_jh_je_lef {
        width: 76px;
        height: 100%;
        float: left;
        overflow: auto;
        background: #fff
    }

    .d_jhg_erxc {

        overflow: auto;
    }

    .d_jhg_erxc li {
        line-height: 45px;
        text-align: center;
        font-size: 12px;

    }

    .d_jh_eer {
        padding-left: 4px;
        padding-right: 4px;
        min-height: 500px;
        overflow: auto !important
    }

    .mjhh_tipo_sd {
        height: 5.4rem;
    }

    .mjhh_tipo_sd img {
        width: 100%;
        height: 100%;
    }

    .s_jh_defxc {
        width: 31%;
        float: left;
        margin-right: 6px;
        margin-bottom: 6px;
    }

</style>
