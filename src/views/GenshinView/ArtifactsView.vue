<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Thánh Di Vật Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Search_HV_g();" class="cursor-pointer" />
                    <input v-model="counter.Search_HV_g" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_HV_g=''" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- THuoc tinh -->
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px] ">
            <div class="flex px-5 gap-3 w-full py-3 justify-center   ">
                <div v-for="i in counter.Data_TTTK_all_g.So_sao" v-on:click="counter.BG_icon_So_sao_g=i.id; counter.Filter_HV_g[0]='So_sao='+i.Ten+'&'; counter.F_Filter_HV_g();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao_g==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img  @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <!-- Bang danh sach hiện vật -->
        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <h3 class="w-[20%] ">Bộ</h3>
                    <h3 class="w-[10%]">Độ Hiếm</h3>
                    <h3 class="w-[20%] ">Hiệu Quả 2 Mảnh</h3>
                    <h3 class="w-[50%]">Hiệu Quả 4 Mảnh</h3>
                </div>
                <div v-for="i in counter.Data_HV_all_g" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex flex-col sm:flex-row  w-[20%] grow sm:items-center gap-2 sm:gap-4 ">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[65px] h-[65px] px-1 py-1  rounded"/>
                        <h4 class="text-[17px] font-medium">{{ i.Ten }}</h4>
                    </div>
                    <div class="w-[10%]">
                        <img :src="i.Avatar_So_sao" class="w-[30px] h-[30px] "/>
                    </div>
                    <p class="w-[20%] text-[15px]">{{ i.Tien_thuong_2_manh }}</p>
                    <p class="w-[50%] text-[15px]">{{ i.Tien_thuong_4_manh }}</p>
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
        // this.counter.Information_Icon=0;
        // this.counter.Filter_NV_g=['','',''];
        this.counter.Page_H_G();
        this.counter.BG_icon_Vu_khi=0;
        this.counter.BG_icon_So_sao_g=0;
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        this.counter.F_Search_HV_g();
        document.title = 'Danh Sách Thánh Di Vật Genshin Impact';
    },
    components: {
    }
    }
</script>


