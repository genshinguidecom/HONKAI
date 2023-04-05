<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-[1200px] rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between  w-full items-center ">
            <h1 class="text-gray-200 text-[25px] font-bold ">Chỉ Số Nón Ánh Sáng Honkai Star Rail</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="Search_X();" class="cursor-pointer" />
                    <input v-model="counter.Search_NAS_H" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_NAS_H='';Search_X();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px]">
            <div class="flex px-5 gap-3 w-full py-3 justify-center    ">
                <div v-for="i in counter.Data_TTTK_all['So_sao']" v-on:click="counter.BG_icon_So_sao=i.id; counter.Filter_NAS_H[0]='So_sao='+i.Ten+'&'; counter.F_Non_anh_sang_Filter();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao==i.id}"  class="relative flex flex-col justify-center items-center  rounded px-1 py-1">
                    <img  @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex px-5 gap-3 w-full py-3 justify-center border-t-[1px] md:border-t-[0px]  md:border-l-[1px] border-[#566ad9]">
                <div v-for="i in counter.Data_TTTK_all['Nguyen_chat']" v-on:click="counter.BG_icon_Nguyen_chat=i.id;  Filter_NAS_H[0]='Nguyen_chat='+i.Ten+'&'; counter.F_Non_anh_sang_Filter();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_chat==i.id}" class="relative flex flex-col justify-center items-center rounded px-1 py-1">
                    <img @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute bottom-[56px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <!-- <p class="text-[18px] font-bold mt-[30px]">Vật liệu nhân vật</p> -->
        <div class="flex flex-col mt-[30px] bg-[#212a58]">
            <div class="flex w-full text-[15px] text-gray-400 font-semibold bg-[#38447f] py-2  px-[15px] rounded-t">
                <p class="w-[52%] ">LV Tối đa Nón ánh sáng</p>
                <p class="w-[16%] ">HP</p>
                <p class="w-[16%] ">ATK</p>
                <p class="w-[16%] ">DEF</p>
            </div>
            <div v-for="i in counter.Data_NAS_all" class="flex w-full py-[10px] px-[15px] items-center ">
                <div class="flex gap-3 items-center w-[52%]">
                    <div class="relative flex flex-col items-center">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class=" cursor-pointer w-[50px] h-[50px] duration-300   rounded"/>
                    </div>
                    <p class="text-semibold whitespace-nowrap">{{i.Ten}}</p>
                </div>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.HP}}</p>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.Tan_cong}}</p>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.DEF}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'
    import {AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner} from 'epic-spinners'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted:function(){
        this.counter.Page_H_G();
        this.counter.Search_NAS_H='';
        this.counter.Filter_NAS_H = ['', ''];
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        this.counter.F_Non_anh_sang_Search();
        document.title = 'Chỉ Số Nón Ánh Sáng Honkai Star Rail';
        
    },
    methods:{
        Search(){
            this.counter.F_Thuoc_tinh_tim_kiem_all();
            this.counter.F_Non_anh_sang_Search();
        },
        Search_X(){
            // this.counter.Search_NAS_H='';
            this.counter.F_Thuoc_tinh_tim_kiem_all();
            this.counter.F_Non_anh_sang_Search();
        }
    },
    components: {
    AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner
    }
    }
</script>


