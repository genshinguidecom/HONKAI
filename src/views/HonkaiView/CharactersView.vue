<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Nhân Vật Honkai: Star Rail</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Thong_tin_nhan_vat_all();" class="cursor-pointer" />
                    <input v-model="counter.Search_NV" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_NV=''; counter.F_Thong_tin_nhan_vat_all();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- <p>{{ counter.Data_DSCB_all }}</p> -->
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px]">
            <div class="flex px-5 gap-3 w-full py-3 justify-center  md:border-r-[1px] border-[#566ad9]  ">
                <div v-for="i in counter.Data_TTTK_all['So_sao']" v-on:click="counter.BG_icon_So_sao=i.id; counter.Filter_NV[0]='So_sao='+i.Ten+'&'; counter.F_Filter_NV();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao==i.id}"  class="relative flex flex-col justify-center items-center  rounded px-1 py-1">
                    <img  @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex  px-5 gap-3 w-full py-3 justify-center border-y-[1px]  md:border-none border-[#566ad9] ">
                <div v-for="i in counter.Data_TTTK_all['Nguyen_to']" v-on:click="counter.BG_icon_Nguyen_to=i.id;  counter.Filter_NV[1]='Nguyen_to='+i.Ten+'&'; counter.F_Filter_NV();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_to==i.id}"  class="relative flex flex-col justify-center items-center rounded px-1 py-1">
                    <img @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex px-5 gap-3 w-full py-3 justify-center  md:border-l-[1px] border-[#566ad9]">
                <div v-for="i in counter.Data_TTTK_all['Nguyen_chat']" v-on:click="counter.BG_icon_Nguyen_chat=i.id;  counter.Filter_NV[2]='Nguyen_chat='+i.Ten+'&'; counter.F_Filter_NV();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_chat==i.id}" class="relative flex flex-col justify-center items-center rounded px-1 py-1">
                    <img @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute bottom-[56px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <!-- <p>{{ counter.KQ_test }}///</p> -->
        <!-- <p>{{ counter.Filter_NV }}</p> -->
        <div class="flex justify-around flex-wrap gap-[15px]  bg-[#303b7a] rounded mt-[30px] px-[30px] pt-[30px] pb-[50px] grow">
            <router-link :to="'/characters/'+i.URL_Ten" v-for="i in counter.Data_NV_all" v-on:click="counter.Ten_NV=i.URL_Ten;  counter.id_NV=i.id;  " class="relative flex flex-col w-[80px] h-[90px]  items-center">
                <img :src="i.Avatar" :style="i.Mau_nen_BG" class=" w-[80px] h-[90px] hover:scale-110 duration-300 rounded" />
                <p class="font-semibold mt-2">{{ i.Ten }}</p>
                <img :src="i.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] top-[1px] left-[1px]  bg-[#303b7a] rounded"/>
            </router-link>
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
    mounted:async function(){
        this.counter.Page_H_G();
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        this.counter.F_Thong_tin_nhan_vat_all();
        document.title = 'Danh Sách Nhân Vật Honkai: Star Rail';
    },
    components: {
    }
    }
</script>


