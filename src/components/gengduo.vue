<template>
  <div class="mui-row dsf_d_dibu  cen">
        <section class="mui-col-xs-3" v-for="(du,idx) in dubvu"  @click="hf(du.href)">
            <p class="sd_jhg_ert ">
                <i class="dx   cf cz" :class="[du.icon,du.size]"></i>
            </p>
            <p class="cf fz12">
    {{du.name}}
    </p>
        </section>







	</div>
</template>
<script>
    export default {
        props:{
            title:""
        },
        data() {
            return {
                 dubvu: [{
                    name: "首页",
                    icon: "icon-zhuye",
                    size: "fz20",
                    href: "",
                    cls: "act"
                }, {
                    name: "分类",
                    icon: "icon-caidan",
                    size: "fz22",
                    href: "fenlei",
                    cls: ""
                }, {
                    name: "我的",
                    icon: "icon-wode",
                    size: "fz22",
                    href: "user",
                    cls: ""
                }, {
                    name: "购物车",
                    icon: "icon-gouwuche",
                    size: "fz22",
                    href: "gwc",
                    cls: ""
                }, ]
            }
        },
        methods: {

        },
        created: function() {

        },
    }

</script>
<style scoped>
       .dsf_d_dibu {
        position: relative;
        width: 100%;
        left: 0px;
        bottom: 0px;
        z-index: 999;
        background: #404042;
    }

    .sd_jhg_ert {
        line-height: 28px;
        position: relative;
        top: 2px;
    }


    .dsf_d_dibu .mui-col-xs-3.act .z3 {
        color: #F44336 !important
    }

    .dsf_d_dibu .mui-col-xs-3.act .dx {
        color: #F44336 !important
    }

</style>
