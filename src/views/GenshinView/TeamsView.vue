<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-[1200px] rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Đội Hình Genshin Impact Tốt Nhất</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon v-on:click="counter.F_Doi_tot_nhat_nhan_vat_all_g();" icon="fa-solid fa-magnifying-glass" class="cursor-pointer" />
                    <input v-model="counter. Search_DHTN_g" placeholder="Tìm kiếm đội,nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter. Search_DHTN_g=''; counter.F_Doi_tot_nhat_nhan_vat_all_g();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Danh sach cac doi -->
        <!-- <p>{{ counter.Data_DTNNV_all_g }}</p> -->
        <div class="flex flex-col md:flex-row  text-gray-400 font-medium  rounded  mt-[30px] w-full  gap-[15px]">
            <div class="flex flex-col w-full md:w-[50%] gap-[15px]">
                <div v-for="i in counter.Data_DTNNV_all_g.slice(0,counter.Data_DTNNV_all_g.length/2+1)" class="flex flex-col w-full  gap-2 rounded bg-[#21295b] px-3 py-2">
                    <h2 class="text-[15px] text-gray-200">{{ i.Ten_doi }}</h2>
                    <div>
                        <div class="flex justify-evenly">
                            <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="flex flex-col items-center">
                                <div class="relative flex flex-col px-2 py-2  items-center">
                                    <div><img :src="j.Avatar" :style="j.Mau_nen_BG" class=" min-w-[60px] h-[65px] hover:scale-110 duration-300  rounded cursor-pointer"/></div>
                                    <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                </div>
                                <p class="text-[14px] text-gray-300">{{ j.Ten }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full md:w-[50%] gap-[15px]">
                <div v-for="i in counter.Data_DTNNV_all_g.slice(counter.Data_DTNNV_all_g.length/2+1,counter.Data_DTNNV_all_g.length)" class="flex flex-col w-full  gap-2 rounded bg-[#21295b] px-3 py-2">
                    <p class="text-[15px] text-yellow-400">{{ i.Ten_doi }}</p>
                    <div>
                        <div class="flex justify-evenly">
                            <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="flex flex-col items-center">
                                <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id" class="relative flex flex-col px-2 py-2  items-center">
                                    <div><img :src="j.Avatar" :style="j.Mau_nen_BG" class=" min-w-[60px] h-[65px] hover:scale-110 duration-300  rounded cursor-pointer"/></div>
                                    <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                </router-link>
                                <p class="text-[14px] text-gray-300">{{ j.Ten }}</p>
                            </router-link>
                        </div>
                    </div>
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
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        await this.counter.F_Thong_tin_nhan_vat_all_g();
        this.counter.F_Doi_tot_nhat_nhan_vat_all_g();
        document.title = 'Đội Hình Genshin Impact Tốt Nhất';
    },
    components: {
    }
    }
</script>


