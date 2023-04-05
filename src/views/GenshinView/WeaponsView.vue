<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Vũ Khí Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Search_VK_g();" class="cursor-pointer" />
                    <input v-model="counter.Search_VK_g" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_VK_g=''" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- THuoc tinh -->
        <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px] ">
            <div class="flex px-5 gap-3 w-full py-3 justify-center   ">
                <div v-for="i in counter.Data_TTTK_all_g.So_sao" v-on:click="counter.BG_icon_So_sao_g=i.id; counter.Filter_NV_g[0]='So_sao='+i.Ten+'&'; counter.F_Filter_VK_g();" :class="{'bg-[#4453a7]':counter.BG_icon_So_sao_g==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img  @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute  bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
            <!-- <div class="flex  px-5 gap-3 w-full py-3 justify-center border-y-[1px]  md:border-none border-[#566ad9] ">
                <div v-for="i in counter.Data_TTTK_all_g.Nguyen_to"  v-on:click="if(counter.BG_icon_Nguyen_to_g==0){counter.BG_icon_Nguyen_to_g=i.id}else{counter.BG_icon_Nguyen_to_g=0};  if(counter.BG_icon_Nguyen_to_g>0){counter.Filter_NV_g[1]='Nguyen_to='+i.Ten+'&'}else{counter.Filter_NV_g[1]=''}; counter.F_Filter_NV_g();" :class="{'bg-[#4453a7]':counter.BG_icon_Nguyen_to_g==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div> -->
            <div class="flex px-5 gap-3 w-full py-3 justify-center border-t-[1px] md:border-l-[1px] md:border-t-[0px] border-[#566ad9]">
                <div v-for="i in counter.Data_TTTK_all_g.Vu_khi" v-on:click="counter.BG_icon_Vu_khi=i.id;  counter.Filter_NV_g[2]='Vu_khi='+i.Ten+'&'; counter.F_Filter_VK_g();" :class="{'bg-[#4453a7]':counter.BG_icon_Vu_khi==i.id}" class="relative flex flex-col justify-center items-center px-1 py-1 rounded">
                    <img @mouseover="counter.Show_Ten_TTTK=i.id" @mouseleave="counter.Show_Ten_TTTK=0" :src="counter.domain_Backend+i.Avatar" class="cursor-pointer w-[30px] h-[30px]"/>
                    <p v-show="counter.Show_Ten_TTTK==i.id" class="absolute bottom-11 bg-[#4d5fc4] rounded font-semibold px-2 py-1 shrink-0 grow  whitespace-nowrap">{{ i.Ten }}</p>
                </div>
            </div>
        </div>
        <!-- <p>{{ counter.Filter_NV_g }}///</p> -->
        <!-- Bang danh sach vu khi -->
        <div class="flex flex-col   w-full h-full mt-[30px] overflow-auto">
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[30%] ">Vũ khí</p>
                    <p class="w-[10%]">Loại</p>
                    <p class="w-[10%] ">Độ Hiếm</p>
                    <p class="w-[10%]">Tấn Công</p>
                    <p class="w-[25%] ">Thuộc Tính</p>
                    <p class="w-[15%]">Cách Sở Hữu</p>
                </div>
                <div v-for="i in counter.Data_VK_all_g"  class="flex flex-row cursor-pointer items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div @mouseover="counter.Show_Bang_VK_g=i.id" @mouseleave="counter.Show_Bang_VK_g=0" class="flex flex-col sm:flex-row  w-[30%] grow sm:items-center gap-2 sm:gap-4 ">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[65px] h-[65px] px-1 py-1  rounded"/>
                        <p class="text-[17px] font-medium">{{ i.Ten }}</p>
                    </div>
                    <div class="w-[10%]">
                        <img :src="i.Avatar_Vu_khi" class="w-[45px] h-[45px] px-[5px] py-[5px] bg-[#363d6a] rounded "/>
                    </div>
                    <div class="w-[10%]">
                        <img :src="i.Avatar_So_sao" class="w-[30px] h-[30px] "/>
                    </div>
                    <p class="w-[10%] text-[15px]">{{ i.Tan_cong }}</p>
                    <p class="w-[25%] text-[15px]">{{ i.So_trung }}</p>
                    <p class="w-[15%] text-[15px]">{{ i.Lam_roi }}</p>
                </div>
                <!-- Bang thong tin vu khi v-show="counter.Show_Bang_VK_g==i.id" -->
                <div v-for=" i in counter.Data_VK_all_g" v-show="counter.Show_Bang_VK_g==i.id"  class="flex flex-col fixed    my-auto bottom-0 top-0 right-0 h-2/3    bg-[#131945] w-[50%]  lg:w-[30%] rounded px-[15px] py-[15px] gap-4">
                    <div class="flex flex-col sm:flex-row gap-3 justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold text-gray-100 text-[20px]">{{ i.Ten }}</p>
                            <div class="flex gap-2 items-center">
                                <img :src="i.Avatar_Vu_khi" class="w-[40px] h-[40px] bg-[#1d2458] rounded px-2 py-2"/>
                                <p class="text-gray-300 font-medium">{{ i.Ten_Vu_khi }}</p>
                            </div>
                        </div>
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[80px] h-[80px]  rounded"/>
                    </div>
                    <div class="flex flex-col gap-4 overflow-auto">
                        <p class="text-yellow-400 text-[16px] font-semibold">{{ i.Noi_dung.split('---')[0] }}</p>
                        <p class="text-gray-200 font-medium">{{ i.Noi_dung.split('---')[1] }}</p>
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
    mounted:function(){
        // this.counter.Information_Icon=0;
        // this.counter.Filter_NV_g=['','',''];
        this.counter.Page_H_G();
        this.counter.BG_icon_Vu_khi=0;
        this.counter.BG_icon_So_sao_g=0;
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        this.counter.F_Search_VK_g();
        document.title = 'Danh Sách Vũ Khí Genshin Impact';
        
    },
    components: {
    }
    }
</script>


