<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-[1200px] rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full mb-[30px] ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Nhân Vật Ghensin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Thong_tin_nhan_vat_all_g();" class="cursor-pointer" />
                    <input v-model="counter.Search_NV_g" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_NV_g=''; counter.F_Thong_tin_nhan_vat_all_g();"  class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold my-[45px]">
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
        <!-- <p>{{ counter.Data_NV_all_g }}///</p> -->
        <!-- <p>{{ counter.Filter_NV_g }}</p> -->
        <div class="flex justify-around flex-wrap gap-[15px] h-full bg-[#303b7a] rounded mt-[30px] px-[30px] py-[30px]">
            <router-link :to="'/genshin-impact/characters/'+i.URL_Ten" v-for="i in counter.Data_NV_all_g" v-on:click="counter.Ten_NV_g=i.URL_Ten; counter.id_NV_g=i.id" class="relative flex flex-col w-[80px] h-[90px]  items-center">
                <img :src="i.Avatar" :style="i.Mau_nen_BG" class=" w-[80px] h-[90px] hover:scale-110 duration-300  rounded"/>
                <p class="font-semibold mt-2 shrink-0 whitespace-nowrap text-[15px]">{{ i.Ten }}</p>
                <img :src="i.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] top-[1px] left-[1px] bg-[#303b7a] rounded"/>
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
    mounted: function(){
        this.counter.Page_H_G();
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        this.counter.F_Thong_tin_nhan_vat_all_g();
        document.title = 'Danh Sách Nhân Vật Ghensin Impact';
    },
    components: {
    }
    }
</script>


