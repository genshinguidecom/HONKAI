<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-[1200px] rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold ">Danh Sách Di Vật Honkai Star Rail</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Xa_loi();" class="cursor-pointer" />
                    <input v-model="counter.Search_NAS_H" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_XL='';counter.F_Xa_loi();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <div v-for="i in counter.Data_XL_all" class="flex flex-col md:flex-row gap-[25px] bg-[#252c5a] rounded mt-[30px] px-[25px] py-[25px] ">
            <img :src=" i.Avatar" :style="i.Mau_nen_BG" class="w-[100px] h-[100px] rounded  px-2 py-2" />
            <div class="flex flex-col gap-2">
                <h2 class="text-[20px] font-bold">{{i.Ten}}</h2>
                <div class="flex gap-3">
                    <p class="flex justify-center items-center text-yellow-300 bg-[#323a72] grow-0 shrink-0 rounded w-[30px] h-[30px] gap-2 font-bold">2</p>
                    <p class="text-gray-300 font-semibold">{{ i.Noi_dung.split('---')[0] }}</p>
                </div>
                <div class="flex gap-3">
                    <p class="flex justify-center items-center text-yellow-300 bg-[#323a72] grow-0 shrink-0 rounded w-[30px] h-[30px] gap-2 font-bold">4</p>
                    <p class="text-gray-300 font-semibold">{{ i.Noi_dung.split('---')[1] }}</p>
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
    mounted:function(){
        this.counter.Page_H_G();
        this.counter.Search_XL='';
        this.counter.F_Xa_loi();
        document.title = 'Danh Sách Di Vật Honkai Star Rail';
    },
    components: {
    AtomSpinner,FulfillingSquareSpinner,HalfCircleSpinner,TrinityRingsSpinner,HollowDotsSpinner
    }
    }
</script>


