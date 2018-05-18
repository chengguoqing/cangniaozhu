<template>
	<div>
<section class="sd_jh_sd pr">


		<sear_head @sear_text="search_key" :placeholder="'搜索苍鸟更多商品，聆听品牌直接声音'"></sear_head>
    </section>
		<section class="dsf_kjj_sd">
			<gengduo v-if="gengduo"></gengduo>

			<cplist_l :keyword="keyword" :global_category_id="global_category_id" :mode="mode" :cat_id="cat_id"></cplist_l>
		</section>


	</div>
</template>
<script>
	import gengduo from "../components/gengduo.vue"
	import cplist_l from "../components/cplist_l.vue"
	import sear_head from "../components/sear_head.vue"
	export default {
		data() {
			return {
				gengduo: false,
				keyword: "",
				cat_id: "",
				mode: "",
                global_category_id:""
			}
		},
		components: {
			gengduo: gengduo,
			cplist_l: cplist_l,
			sear_head: sear_head
		},
		methods: {
			search_key(data) { //搜索
				this.keyword = data
			}
		},
		mounted() {
			this.keyword = this.$route.query.keyword || ''
			this.cat_id = this.$route.query.cat_id || ''
			this.mode = this.$route.query.mode
            this.global_category_id= this.$route.query.global_category_id
			this.Title("产品列表")
		},
	}
</script>
<style scoped>
	.dsf_kjj_sd {
		padding-top: 44px;
	}

	.asd_uy_dftx {
		z-index: 9999
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
    .sd_jh_sd{
        z-index: 1000;
        background: #fff
    }
</style>
