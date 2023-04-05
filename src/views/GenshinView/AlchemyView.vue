<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Các Loại Thuốc Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="this.counter.F_TGK_g();" class="cursor-pointer" />
                    <input v-model="counter.Search_Genshin" placeholder="Tìm kiếm Thuốc ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_Genshin=''; this.counter.F_TGK_g();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Món ăn -->
        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Tên</p>
                    <p class="w-[15%]">Độ Hiếm</p>
                    <p class="w-[40%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_TGK_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{i.Ten}}</p>
                    </div>
                    <div class="w-[15%]"><img :src="i.Avatar_So_sao" class="w-[30px] h-[30px]"/></div>
                    <p class="w-[40%] whitespace-pre-line">{{i.Thuong}}</p>
                    <p class="w-[20%] whitespace-pre-line">{{i.Thanh_phan}}</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted:function(){
        this.counter.Page_H_G();
        this.counter.Search_Genshin='';
        this.counter.F_TGK_g();
        document.title = 'Danh Sách Các Loại Thuốc Genshin Impact';
    },
    components: {
    }
    }
</script>


