<!--头部-->
<template>
	<div >
      <header class="mui-bar mui-bar-nav asd_uy_dftx" @click="hf('search')">
        <a class=" mui-pull-left z3 df_jh_ex">
            <img src="http://mall.cangniaowl.com/static_main/img/headF.png" class="headF_icon cz">
        </a>
        <h1 class="mui-title z3 pl5 df_jh_ertxc">
            <i class="dx icon-sousuo z9"></i>
            <input type="search" class="yj20 fz12" placeholder="点击搜索更多产品，聆听品牌声音">
        </h1>
        <a class="mui-pull-right pt5 caimenbg_se" >
            <i class="dx icon-right  fz18 b cf "></i>
        </a>
    </header>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .asd_uy_dftx {
        background: transparent;
        position: relative
    }

    .df_jh_ex {
        position: relative;
        left: 4px;
        top: 0px;
    }

    .headF_icon {
        width: 22px;
    }

    .df_jh_ertxc {
        height: 38px;
        bottom: 7px;
        padding-left: 8px;
        padding-right: 0px;
        padding-bottom: 8px;
    }

    .df_jh_ertxc input {
        height: 100% !important;
  line-height: 1.5 !important;
        font-family: 'SimSun';
    margin: 0px  !important;
        text-indent: 20px;
        text-align: left;
        background: rgba(255,255,255,0.8)
    }


.mui-bar .mui-title{
   height: 40px;
   top: -2px;
}


    .df_jh_ertxc input::-webkit-input-placeholder {
        color: #999;
    }

    .df_jh_ertxc input::-moz-input-placeholder {
        color: #999;
    }



    .mint-button--primary {
        background: #0076EF
    }

    .df_jh_ertxc i.dx {
        position: absolute;
        left: 15px;
        top: 2px;
        font-size: 19px;
        z-index: 100;
    }

    .caimenbg_se {
        margin-top: -3px !important;
    }

</style>
