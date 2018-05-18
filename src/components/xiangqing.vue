<!--详情-->
<template>
   <section>
     <section class="dsf_jg_ertxc " v-html="goods_desc">



    </section>
    </section>
</template>
<script>
    export default {
        props:{
            title:"",
            goods_desc:''
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
<style >
 .dsf_jg_ertxc p {
     width: 100%;
        margin: 0px;
    }

    .dsf_jg_ertxc img {
        width: 100% !important;
        margin: 0px !important;
    }
</style>
