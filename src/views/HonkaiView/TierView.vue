<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-[30px] ">
            <h1 class="text-gray-200 text-[25px] font-bold">Xếp Hạng Nhân Vật Honkai Star Rail</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Danh_sach_cap_bac_all();" class="cursor-pointer" />
                    <input placeholder="Tìm kiếm nhân vật ..." v-model="counter.Search_DSCB_H" class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_DSCB_H=''; counter.F_Danh_sach_cap_bac_all();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- <div class="flex flex-col md:flex-row gap-3  font-bold mt-[30px]">
            <p class=" flex items-center justify-center w-full md:w-1/2 min-h-[40px] rounded font-semibold bg-[#303b7a] text-[15px] px-2 py-1">Danh sách cấp độ của riêng chúng tôi sắp đến ngày phát hành.</p>
            <div class="flex w-full  md:w-1/2 gap-3">
                <button class="bg-[#009688] h-[40px] rounded w-1/2">Thông thoáng</button>
                <button class="bg-[#009688] h-[40px] rounded w-1/2">Chia sẻ</button>
            </div>
        </div> -->
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px]">
            <div class="flex px-5 gap-3 w-full py-3 justify-center  md:border-r-[1px] border-[#566ad9]  ">
                <div v-for="i in counter.Data_TTTK_all['So_sao']" v-on:click="if(counter.BG_icon_So_sao==0){counter.BG_icon_So_sao=i.STT}else{counter.BG_icon_So_sao=0}; if(counter.BG_icon_So_sao>0){counter.Filter_NV[0]='So_sao='+i.Ten+'&'}else{counter.Filter_NV[0]=''};  Filter_DSCB(); counter.F_Danh_sach_cap_bac_all();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao==i.STT}"  class="relative flex flex-col justify-center items-center  rounded px-1 py-1">
                    <img  @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex  px-5 gap-3 w-full py-3 justify-center border-y-[1px]  md:border-none border-[#566ad9] ">
                <div v-for="i in counter.Data_TTTK_all['Nguyen_to']" v-on:click="if(counter.BG_icon_Nguyen_to==0){counter.BG_icon_Nguyen_to=i.STT}else{counter.BG_icon_Nguyen_to=0};  if(counter.BG_icon_Nguyen_to>0){counter.Filter_NV[1]='Nguyen_to='+i.Ten+'&'}else{counter.Filter_NV[1]=''}; counter.F_Filter_NV();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_to==i.STT}"  class="relative flex flex-col justify-center items-center rounded px-1 py-1">
                    <img @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex px-5 gap-3 w-full justify-center  md:border-l-[1px] border-[#566ad9]">
                <div v-for="i in counter.Data_TTTK_all['Nguyen_chat']" v-on:click="if(counter.BG_icon_Nguyen_chat==0){counter.BG_icon_Nguyen_chat=i.STT}else{counter.BG_icon_Nguyen_chat=0};  if(counter.BG_icon_Nguyen_chat>0){counter.Filter_NV[2]='Nguyen_chat='+i.Ten+'&'}else{counter.Filter_NV[2]=''}; counter.F_Filter_NV();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_chat==i.STT}" class="relative flex flex-col justify-center items-center rounded px-1 py-1">
                    <img @mouseover="counter.Information_Icon=i.id" @mouseleave="counter.Information_Icon=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Information_Icon==i.id" class="absolute bottom-[56px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <!-- <p>{{ counter.Data_DSCB_all }}</p> -->
        <div class="flex flex-col h-full bg-[#212a58] rounded justify-center items-center mt-[30px]">
            <div v-for="i in counter.Data_DSCB_all"  class="flex w-full border border-[#2d376d] rounded-t">
                <p :style="i.Mau_nen_BG" class="flex justify-center items-center min-w-[92px] max-w-[92px]  grow  text-[25px] font-bold text-black">{{ i.Cap_bac }}</p>
                <div class="flex flex-wrap justify-center  mx-3 my-3 gap-3">
                    <router-link :to="'/characters/'+j.URL" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="flex flex-col items-center">
                        <div class="relative flex flex-col px-2 py-2  items-center">
                            <div class="relative">
                                <img :src="j.Avatar" :style="j.Mau_nen_BG" class=" min-w-[60px] h-[65px] hover:scale-110 duration-300  rounded cursor-pointer"/>
                                <p class="absolute bottom-0 right-0 bg-[#414f9b] rounded text-[12px] px-1 font-semibold">{{ j.Cung_menh }}</p>
                            </div>
                            <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                        </div>
                        <p class="text-[14px] text-gray-300 font-semibold">{{j.Ten}}</p>
                        <p class="text-[14px] text-gray-400 font-semibold">{{ j.Vi_tri }}</p>
                    </router-link>
                </div>
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
    mounted:async function(){
        this.counter.Page_H_G();
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        await this.counter.F_Thong_tin_nhan_vat_all();
        this.counter.F_Danh_sach_cap_bac_all();
        document.title = 'Xếp Hạng Nhân Vật Honkai Star Rail';
    },
    methods:{
        async Filter_DSCB(){
            await this.counter.F_Filter_NV();
            this.counter.F_Danh_sach_cap_bac_all();
        },
    },
    components: {
    AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner
    }
    }
</script>


