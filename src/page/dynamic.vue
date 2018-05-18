<!--动态-->

<template>
	<div >

            <section class="shop_top pd pt15 pm10 pr  ">

            <user_top_z :user_dta="user_dta" :is_use="true"></user_top_z>

    </section>


    	<kongbai :kb="kb"  @ziding="$router.back(-1)"></kongbai>

	</div>
</template>
<script>
      import user_top_z from "../components/user_top_z"
    import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                user_dta:"",
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有数据",
                    btn_name: "返回上一页",
                    btn_url: "-1",

                },
            }
        },
        components: {
            kongbai,
            user_top_z
        },
        methods: {

        },
        mounted() {
                       this.Title("动态")
            let balance = {},
                th = this
            balance.token = this.token
            this.post("portal/niaochao", balance, function(data) {
                th.user_dta = data
                th.user_ou_b[4].num = data.subscribe_num
                th.user_ou_b[5].num = data.buyed_num
                th.user_ou_b[6].num = data.unsubscribe_num
                th.user_ou_b[7].num = data.count

            })


        },
    }

</script>
<style scoped>


</style>



