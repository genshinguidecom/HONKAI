<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Hướng Dẫn Farm Nguyên Liệu Honkai Star Rail</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="Search();" class="cursor-pointer" />
                    <input v-model="counter.Search_Honkai" placeholder="Tìm kiếm vật liệu ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_Honkai=''; Search_X();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- <p>{{ counter.Data_HDCT_all }}</p> -->
        <h2 class="text-[18px] font-bold mt-[30px]">Vật liệu nhân vật</h2>
        <div class="flex flex-col mt-[30px] bg-[#212a58]">
            <div class="flex text-[15px] text-gray-400 font-semibold bg-[#38447f] h-[36px] items-center px-[30px] rounded-t">
                <p class="w-1/2">Vật liệu</p>
                <p class="w-1/2">Nhân vật</p>
            </div>
            <div v-for="i in counter.Data_HDCT_all" class="flex py-[15px] px-[30px] border-b-[1px] border-[#3a457d]">
                <div class="flex w-1/2 items-center gap-2 pr-[20px] ">
                    <img :src="i.Avatar" :style="i.Mau_nen_BG" class="px-[5px] py-[5px]  rounded w-[50px] h-[50px] cursor-pointer"/>
                    <p class="text-[15px] font-semibold text-gray-200">{{ i.Ten }}</p>
                </div>
                <div class="flex flex-wrap gap-[15px] w-1/2 ">
                    <router-link :to="'/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV=j.URL_Ten;  counter.id_NV=j.id;  " v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="relative flex flex-col items-center">
                        <img :src="j.Avatar" :style="j.Mau_nen_BG" @mouseover="counter.Show_ten_HDCT=j.id+i.Ten" @mouseleave="counter.Show_ten_HDCT=0" class=" cursor-pointer w-[55px] h-[62px] duration-300  rounded"/>
                        <img :src="j.Icon_Nguyen_to" class="absolute w-[16px] h-[16px] top-0 left-0"/>
                        <p v-show="counter.Show_ten_HDCT==j.id+i.Ten" class="absolute  bottom-[66px] bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{j.Ten}}</p>
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


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    mounted:async function(){
        this.counter.Page_H_G();
        this.Search_Honkai='';
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        await this.counter.F_Thong_tin_nhan_vat_all();
        this.counter.F_Huong_dan_canh_tac_all();
        document.title = 'Hướng Dẫn Farm Nguyên Liệu Honkai Star Rail';

    },
    methods:{
        async Search(){
            this.counter.F_Thuoc_tinh_tim_kiem_all();
            await this.counter.F_Thong_tin_nhan_vat_all();
            this.counter.F_Huong_dan_canh_tac_all();
        },
        async Search_X(){
            this.counter.F_Thuoc_tinh_tim_kiem_all();
            await this.counter.F_Thong_tin_nhan_vat_all();
            this.counter.F_Huong_dan_canh_tac_all();
        }
    },
    components: {
    }
    }
</script>


