<!--选择城市-->
<template>
 <section class="selected_city">
      <section class="d_kj_eetxc" @click="$emit('close')" v-if="popupVisible"></section>
      <mt-popup v-model="popupVisible" position="bottom"  :modal="false"  >

      <mt-picker :slots="slots" :showToolbar="true" @change="onValuesChange" valueKey="level_name" >

         <section class="city_btn   mui-row ov bbm">
             <a class="mint-datetime-action mint-datetime-cancel" @click="$emit('close')">取消</a>
              <a class="mint-datetime-action mint-datetime-confirm" @click="city_confirm">确定</a>


        </section>

    </mt-picker>


    </mt-popup>


    </section>
</template>

<script>
    import city from "../js/city.data";
    export default {
        props: {
            popupVisible: "",
            data_r: ""
        },
        data() {
            return {
                district: "",
                slots: [{
                    flex: 1,
                    values: this.data_r,
                    className: 'slot1',
                    textAlign: 'center'
                }]
            }
        },
        methods: {
            city_confirm: function() {
                this.$emit("sex", this.district)
            },

            onValuesChange(picker, values) {
                this.district = values[0]

            }
        },
        mounted() {
            console.log(this.data_r + "2");
        },
        watch: {
            data_r: {
                handler: function() {
                    this.slots[0].values=  this.data_r

                },
                deep: true
            }
        }
    }

</script>

<style scoped>
    .d_kj_eetxc {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5)
    }

    .city_btn {

        position: relative;
        z-index: 999;
        height: 45px;
        line-height: 45px;
        padding-top: 5px;
    }

</style>
