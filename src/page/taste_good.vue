<!--苍鸟好店-->
<template>
	<div >
        <section class="header_er pd pr bbm">
            <i class="dx icon-left fz16 b" @click="$router.back(-1)"></i>
            <img src="http://mall.cangniaowl.com/static_main/img/haodian.png" class="zhigoulogo">
        </section>

        <section v-if="is_dert">
        <section class="pd" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                <ul class="sd_kh_slist">
                    <li  class="pl10 mt10 pt10 pm10 pr ov" v-for="sd in saveshopsandgoodsselect" @click="hfer(sd.shop_id+'.html')">
                            <img :src="sd.shop_logo" class="sd_kjj_der fl mt5 br yj4">
                        <section class="ov cen dsf_jh_dertx pr10 pt10 ab">

                                <span class="fz16 ">{{sd.shop_name}}</span><br>
<!--                            <span class="fz12 z9 sd_sdr_er">箱包鞋帽>男士皮鞋</span>-->
                            <p class="z6 fz12 sd_jh_dettx">
    {{sd.shop_intro}}
                            </p>

                        </section>
                        <i class="dx icon-right sd_rigerr "></i>
                        <p class="qc"></p>
                    </li>
                </ul>

        </section>
             <p class="jgh_ddre_er ">
            <span v-if="!loading">加载中...</span>
               <span v-else>已经到底了</span>
        </p>



        <section class="foiu_de_dr cen pm5 ov mt20">

            <img src="http://mall.cangniaowl.com/static_main/img/headF.png" class="sd_logo_er">
            <p class="f_b fz12 dibu_dertdc">
                <span class="fz14">苍鸟超级电商</span><br>
                 <span class="sd_kjyh_eet">Copyright2017 All Rights Reserved</span>
            </p>

        </section>
         </section>
        <loadin v-else></loadin>

	</div>
</template>
<script>
       import loadin from "../components/loadin.vue"
    export default {
        data() {
            return {
                page: 1,
                is_dert:false,
                loading: true,
                saveshopsandgoodsselect: []
            }
        },
        components: {
            loadin:loadin
        },
        methods: {
            sd_er() {
                let saveshopsandgoodsselect = {},
                    th = this
                saveshopsandgoodsselect.token = this.token
                saveshopsandgoodsselect.type = 2
                saveshopsandgoodsselect.page = this.page
                th.loading = false;
                this.post('home/saveshopsandgoodsselect', saveshopsandgoodsselect, function(data) {
                    th.is_dert=true
                    if (data) {
                        data.map(a => {
                            th.saveshopsandgoodsselect.push(a)
                        })
                    } else {
                        th.loading = true;
                    }

                })
            },
            loadMore() {
                if (this.saveshopsandgoodsselect.length > 9) {
                    this.page++
                        this.sd_er()
                }
            }
        },
        mounted() {
            this.Title("苍鸟超级电商")
            this.sd_er()

        },
    }

</script>
<style scoped>
    .sd_kjj_der {
        width: 70px;
        height: 70px;
    }

    .sd_sdr_er {
        display: inline-block;
        transform: scale(0.9);
        position: relative;
        bottom: 6px;
    }

    .dsf_jh_dertx {

        line-height: 1.4
    }

    .sd_jh_dettx {
        display: inline-block;
        transform: scale(0.9);
        position: relative;
        bottom: 3px;
        margin-top: 10px;
        width: 180px;
    }
    .dsf_jh_dertx.ab{
        bottom: 0px;
    }

    .sd_rigerr {
        position: absolute;
        right: 10px;
        top: 40px;
    }

</style>
