<!--没有数据的展示-->
<template>
   <section>
         <section class="dsf_khj_ert cen">
                <p class="cen mt100">
                    <i class="f_i " :class="kb.icom"></i>
                </p>
              <p class="fz14">

            </p>


              <p class="z9 mt10 ">
          {{kb.msg}}
            </p>

            <p class="cen mt20 pl20 pr20" v-if="kb.type!=1">
                <span v-if="kb.type==2">
                    <a class="mui-btn bgls w100" :class="kb.icom" @click="$router.back(-1)">{{kb.btn_name}}</a>
                </span>
                <span v-else>
                <a class="mui-btn bgls w100"   v-if="kb.btn_url==-1" @click="$emit('ziding')">{{kb.btn_name}}</a>
                <a class="mui-btn bgls w100"  @click="hf(kb.btn_url)" v-else>{{kb.btn_name}}</a>
                    </span>
            </p>
             <section v-else class="mt20 df_jhj_derx">
    <section class="mui-row">
    <p class="mui-col-xs-6 pr10">
    <a class="mui-btn w100" :class="dsf_hss_sr" @click="hf(kb.btn_url)">

        {{kb.btn_name}}
    </a>
    </p>
          <p class="mui-col-xs-6 pl10">
      <a class="mui-btn w100" @click="hf(kb.btn_urler)">

           {{kb.btn_name_er}}
    </a>
    </p>
    </section>

            </section>



              </section>
    </section>
</template>
<script>
    export default {
        props: {
            kb: {
                icom: "",
                msg: "",
                type:"",
                btn_name: "",
                btn_name_er:"",
                btn_url: "",
                btn_urler:""
            }
        },
        data() {
            return {

            }
        },
        methods: {

        },
        created: function() {

        },
    }

</script>
<style>
  .dsf_hss_sr.mui-btn{
      width: auto !important;
      height: auto !important;
        background: #F8AC59 !important;
      border: 1px solid #F8AC59 !important;
    }
</style>
<style scoped>

    .dsf_hss_sd {
        width: 115px;
        height: 124px;
        background-position: -141px -399px;
    }
   .dsf_jh_er{
        width: 114px;
        height: 114px;
        background-position: -6px -404px;
    }
    .dsf_jh_san{
        width: 117px;
        height: 117px;
        background-position: -141px -416px;
    }
    .dsf_jh_si{
        width: 148px;
        height: 148px;
        background-position: -6px -126px;
    }
    .dsf_hss_sr{
        width: 117px;
        height: 117px;
        background-position: -8px -1025px;
    }
    .df_jhj_derx a{

background:transparent;
        font-size: 14px;
        padding-left: 0px;
        padding-right: 0px;
    }
    .df_jhj_derx .mui-col-xs-6:nth-child(1) a{
        color: #999;
        border: 1px solid #DBDBDB
    }
        .df_jhj_derx .mui-col-xs-6:nth-child(2) a{
        color:  #0076EF;
        border: 1px solid  #0076EF
    }
    .bgls{
        background: #EE5550 !important;
        border: 1px solid #EE5550 !important;
    }
</style>
