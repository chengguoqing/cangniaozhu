<!--上传图片-->
<template>
   <section>
 <section class="sd_shnga_s mui-row mt10">
                  <section class="up_ic_sde pr ab" v-for="(tu,idx) in tups">
                       <img :src="tu">
                      <i class="yj dx icon-close1 bgred cf dfg_closeerx" @click="remo_img(idx)"></i>
                    </section>


                    <section class="up_ic_sde pr">
                        <i class="dx icon-xiangji fz32 z9"></i>
                        <input type="file" @change="previewFile()" id="ssd_ooie">
                    </section>

            </section>
    </section>
</template>
<script>
    export default {
        props: {
            title: ""
        },
        data() {
            return {
                    tups:[]
            }
        },
        methods: {
            previewFile() {
                if (this.tups.length >= 3) {
                    return
                }
                var th = this
                var file = document.querySelector('#ssd_ooie').files[0];
                var reader = new FileReader();
                reader.onloadend = function() {
                    let upload={}
                    upload.token=th.token
                    upload.image=reader.result
                    th.post('images/upload',upload,function(data){
                        th.tups.push(data.src)
                    })

                    th.$emit("getimg",th.tups)
                }
                if (file) {
                    reader.readAsDataURL(file);
                } else {

                }
            },
            remo_img(idx) {

                this.tups.splice(idx, 1)
                   this.$emit("getimg",this.tups)
            },
        },
        created: function() {

        },
    }

</script>
<style scoped>
.up_ic_sde{
        border: 1px dashed #e0e0e0;
        width: 85px;
        height: 85px;
        margin-right: 10px;
        text-align: center;
        line-height: 85px;
        float: left;
    }

        #ssd_ooie {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0
    }
    .up_ic_sde img{
        width: 100%;
        height: 100%;
    }
    .dfg_closeerx{
        position: absolute;
        right: -8px;
        top: -8px;
        line-height: 20px;
        font-size: 12px;
        width: 20px;
        height: 20px;
    }

</style>
