<!--选择城市-->
<template>
 <section class="selected_city ">
     <p class="pup_jkjh_drer" v-if="popupVisible"  @click="$emit('close_sele')"></p>
      <mt-popup v-model="popupVisible" position="bottom" >
          <p class="cen fz16 z3 pt10 pm10">
              配送至
              <i class="dx icon-close1 z9 close_icon  fz14" @click="$emit('close_sele')"></i>
         </p>
        <section class="pd btm">
            <p class="city_selection">
                <span :class="dt.cls" v-for="(dt,idx) in district" @click="huoqu(idx)">
                    {{dt.name}}
                </span>

                    <span :class="qingxuan" v-if="zuihou" @click="xuanzebtn">
                    请选择
                </span>

            </p>
            <section class="quyu_kh_er">

                <p class="dih_row " v-for="(sd,idx) in diqu" :class="sd.cls" @click="area_click(idx)">
                    {{sd.region_name}}

                    <i class="dx icon-gou fr fz14"></i>
                </p>


                <p class="qc"></p>

            </section>


        </section>


    </mt-popup>


    </section>
</template>

<script>
    import city from "../js/city.data";
    export default {
        props: {
            popupVisible: ""
        },
        data() {
            return {
                district: [], //用户选择的地区
                diqu: [], //后台返回的地址
                jindu: 0, //进度
                zuihou: true,
                qingxuan: "act"

            }
        },
        methods: {
            getdiqu(idx, parent_id) {
                let arealist = {},
                    th = this
                arealist.token = this.token
                if (idx > 0) {
                    arealist.parent_id = parent_id
                }
                this.post("user/arealist", arealist, function(data) {
                    th.diqu = []
                    try {
                        data.map(function(a) {
                            a.cls = ""
                            th.diqu.push(a)
                        })
                    } catch (e) {
                        th.zuihou = false
                    }


                })
            },
            area_click(idx) { //地区列表点击事件
                this.jindu++
                    if (this.jindu < 3) {
                        this.getdiqu(1, this.diqu[idx].region_id)

                    }
                let df_ous = {}
                df_ous.cls = ""
                df_ous.name = this.diqu[idx].region_name
                df_ous.parent_id = this.diqu[idx].region_id
                df_ous.parent_ider = this.diqu[idx].parent_id

                if (this.jindu == 1 && this.district.length >= 1) {
                    this.district.splice(0, 1);
                    this.zuihou = true
                    this.qingxuan = "act"
                }
                if (this.jindu == 2) {
                    this.district.splice(1, 1);
                    this.zuihou = true
                    this.qingxuan = "act"
                }
                let sd_hd=false
                if (this.jindu == 3) {
                    this.district.splice(2, 1);
                    this.zuihou = false
                    this.jindu = 2
                    this.qingxuan = ""
                    sd_hd=true

                }
                this.district.push(df_ous)
                if (sd_hd) {

                    this.$emit("city", this.district)
                }

            },
            huoqu(idx) { //选中的城市点击
                this.district.map(function(a) {
                    a.cls = ""
                })
                this.qingxuan = ""
                this.district[idx].cls = "act"
                this.zuihou = true

                var doe_e = this.district[0]
                if (idx == 0) {
                    this.district = []
                    this.district[0] = doe_e
                }
                if (idx == 1 && this.district.length > 2) {
                    this.district.pop()
                }
                this.jindu = idx
                this.getdiqu(1, this.district[idx].parent_ider)

            },
            xuanzebtn() { //请选择触发
                this.district.map(a => {
                    a.cls = ""
                })
                this.qingxuan = "act"
                this.jindu = this.district.length;
                this.getdiqu(1, this.district[this.district.length - 1].parent_id)
            }
        },
        mounted() {
            this.getdiqu()

        }
    }

</script>
<style>
    .selected_city .v-modal{
        display: none
    }
</style>
<style scoped>
    .close_icon {
        position: absolute;
        right: 10px;
        top: 12px;
    }

    .city_selection {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .city_selection span {
        color: #333;
        font-size: 15px;
        padding: 10px;
    }

    .city_selection span.act {
        color: #EE6938;
        border-bottom: 1px solid #EE6938;
    }

    .quyu_kh_er {
        height: 240px;
        overflow: auto
    }

    .dih_row {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .dih_row i {
        display: none
    }

    .dih_row.act {
        color: #EE6938;
    }

    .dih_row.act i {
        display: block
    }

    .pup_jkjh_drer{
        background: rgba(0,0,0,0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100
    }
</style>
