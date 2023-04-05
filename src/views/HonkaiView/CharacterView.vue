<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-[1200px] rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex justify-between items-center w-full flex-col md:flex-row gap-[30px]">
            <h1 class="text-gray-200 text-[25px] font-bold">Chỉ Số Nhân Vật Honkai Star Rail</h1>
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
        <!-- <div class="h-[90px] w-full bg-[#24285a]">Quảng cáo</div> -->
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
        <p class="text-[18px] font-bold mt-[30px]">Vật liệu nhân vật</p>
        <div class="flex flex-col mt-[30px] bg-[#212a58]">
            <div class="flex w-full text-[15px] text-gray-400 font-semibold bg-[#38447f] py-2  px-[15px] rounded-t">
                <p class="w-[36%]  ">LV Tối đa tính cách</p>
                <p class="w-[16%] ">HP</p>
                <p class="w-[16%] ">Tấn công</p>
                <p class="w-[16%] ">DEF</p>
                <p class="w-[16%] ">Tốc độ</p>
            </div>
            <div v-for="i in counter.Data_NV_all" class="flex w-full py-[15px] px-[15px] items-center ">
                <router-link :to="'/characters/'+i.URL_Ten" v-on:click="counter.Ten_NV=i.URL_Ten;  counter.id_NV=i.id;  " class="flex flex-col md:flex-row gap-3  w-[36%]">
                    <div class="relative flex flex-col ">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class=" cursor-pointer w-[50px] h-[56px] duration-300  rounded"/>
                        <img :src="i.Icon_Nguyen_to" class="absolute w-[16px] h-[16px] top-0 left-0 bg-[#2c3670] rounded"/>
                    </div>
                    <p class="text-semibold whitespace-nowrap">{{i.Ten}}</p>
                </router-link>s
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.HP}}</p>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.Tan_cong}}</p>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.DEF}}</p>
                <p class="w-[16%] whitespace-nowrap font-semibold text-[14px] text-gray-300">{{i.Toc_do}}</p>
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
    mounted:async function(){
        this.counter.Page_H_G();
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        this.counter.F_Thong_tin_nhan_vat_all();
        document.title = 'Chỉ Số Nhân Vật Honkai Star Rail';
    },
    components: {
    }
    }
</script>


