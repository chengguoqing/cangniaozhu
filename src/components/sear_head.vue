<!--搜索框的头部-->
<template>
	<div >
        <header class="mui-bar mui-bar-nav asd_uy_dftx bbm">
        <a class=" mui-pull-left z3 dx icon-left mt2" @click="$router.back(-1)">

        </a>
        <h1 class="mui-title z3 pl10 df_jh_ertxc " :class="jiaodian==1?'pr30':''">
            <i class="dx icon-sousuo"></i>
            <input type="search" class="yj20 fz12" :placeholder="placeholder" v-model="keyword"  @focus="jiaodian=1" @blur="search_key();jiaodian=0;">
        </h1>
                   <a class="bgls mui-btn ssj_setxcc" @click="search_key" v-if="jiaodian==1">搜索</a>

<!--
        <a class="mui-pull-right pt5" @click="hf('fenlei')">
    <i class="dx icon-caidan z6 fz22 "></i>
        </a>
-->
    </header>
	</div>
</template>
<script>
    export default {
        props: {
            placeholder: ""
        },
        data() {
            return {
                jiaodian: 0,
                keyword: "" //关键词
            }
        },
        components: {

        },
        methods: {
            search_key() { //搜索
                this.$emit("sear_text", this.keyword)

            }
        },
        mounted() {
            this.Title("苍鸟")
        },
    }

</script>
<style scoped>
    .df_jh_ertxc i {
        left: 20px;
    }

</style>
