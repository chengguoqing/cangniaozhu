<!--用户的头部-->
<template>
    <section class="xiaotop_ose cen pr">
            <img :src="user_info.header_image" class="yj user_iconsd  ">
            <p class="cf fz16 mt5">
                {{user_info.user_name||"&nbsp;"}}
            </p>
            <p class="cf fz12 mt5" v-if="!num">
                    我的ID：{{user_info.user_id}}
            </p>

        <p v-else class="mt15 fz26 cf">
            {{num}} <span class="fz14 ml10">{{text}}</span>
        </p>
            <bolang></bolang>
        </section>
</template>
<script>
    import bolang from "./bolang.vue"
    export default {
        props: {
            title: "",
            num: "", //数字
            text: "", //后面的名称
        },
        data() {
            return {
                user_info: ""
            }
        },
        components: {
            bolang: bolang
        },
        methods: {

        },
        mounted() {
            this.user_info = JSON.parse(localStorage.user)
        },
    }

</script>
<style scoped>
    .xiaotop_ose {
        background: #0076EF;
        padding-top: 30px;
        padding-bottom: 40px;
    }

</style>
