<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-[30px] ">
            <h1 class="text-gray-200 text-[25px] font-bold">Bảng Xếp Hạng Nhân Vật Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Danh_sach_cap_bac_all_g();" class="cursor-pointer" />
                    <input placeholder="Tìm kiếm nhân vật ..." v-model="counter.Search_DSCB" class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_DSCB=''; counter.F_Danh_sach_cap_bac_all_g();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- <div class="flex flex-col md:flex-row gap-3  font-bold mt-[30px]">
            <p class=" flex items-center justify-center w-full md:w-2/3 min-h-[40px] rounded font-semibold bg-[#303b7a] text-[15px] px-2 py-1">Dựa trên danh sách cấp của Thầy Usagi . Kiểm tra nội dung của mình !</p>
            <div class="flex w-full  md:w-1/3 gap-3">
                <button class="bg-[#009688] h-[40px] rounded w-full">Sáng tạo của riêng bạn !</button>
            </div>
        </div> -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px]">
            <div class="flex px-5 gap-3 w-full py-3  justify-center  md:border-r-[1px] border-[#566ad9]  ">
                <div v-for="i in counter.Data_TTTK_all_g.So_sao" v-on:click="counter.BG_icon_So_sao_g=i.id; counter.Filter_NV_g[0]='So_sao='+i.Ten+'&'; counter.F_Filter_NV_g();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao_g==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img  @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex  px-5 gap-3 w-full py-3  justify-center border-y-[1px]  md:border-none border-[#566ad9] ">
                <div v-for="i in counter.Data_TTTK_all_g.Nguyen_to"  v-on:click="counter.BG_icon_Nguyen_to_g=i.id; counter.Filter_NV_g[1]='Nguyen_to='+i.Ten+'&'; counter.F_Filter_NV_g();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_to_g==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <div class="flex px-5 gap-3 w-full h-full py-3 justify-center  md:border-l-[1px] border-[#566ad9]">
                <div v-for="i in counter.Data_TTTK_all_g.Vu_khi" v-on:click="counter.BG_icon_Vu_khi=i.id;  counter.Filter_NV_g[2]='Vu_khi='+i.Ten+'&'; counter.F_Filter_NV_g();" :class="{'bg-[#4453a7]':counter.BG_icon_Vu_khi==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col h-full bg-[#212a58] rounded justify-center items-center mt-[30px]">
            <div v-for="i in counter.Data_DSCB_all_g"  class="flex w-full border border-[#2d376d] rounded-t">
                <p :style="i.Mau_nen_BG" class="flex justify-center items-center min-w-[92px] max-w-[92px]  grow  text-[25px] font-bold text-black">{{ i.Cap_bac }}</p>
                <div class="flex flex-wrap justify-center  mx-3 my-3 gap-3">
                    <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="flex flex-col items-center">
                        <div class="relative flex flex-col px-2 py-2  items-center" @mouseover="counter.Show_ten_TVD=j.id + j.Ten + i.id" @mouseleave="counter.Show_ten_TVD=0">
                            <div class="relative">
                                <img :src="j.Avatar" :style="j.Mau_nen_BG" class=" min-w-[60px] h-[65px] hover:scale-110 duration-300  rounded cursor-pointer"/>
                                <p class="absolute bottom-0 right-0 bg-[#414f9b] rounded text-[12px] px-1 font-semibold">{{ j.Cung_menh }}</p>
                            </div>
                            <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                            <p v-show="counter.Show_ten_TVD==j.id + j.Ten + i.id" class="absolute bottom-[80px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 text-[14px] whitespace-nowrap">{{ j.Ten }}</p>
                        </div>
                        <!-- <p class="text-[14px] text-gray-300 font-semibold">{{j.Ten}}</p> -->
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
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        await this.counter.F_Thong_tin_nhan_vat_all_g();
        this.counter.F_Danh_sach_cap_bac_all_g();
        document.title = 'Bảng Xếp Hạng Nhân Vật Genshin Impact';
    },
    components: {
    AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner
    }
    }
</script>


