<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full  rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-full gap-[30px] ">
            <h1  class="text-gray-200 text-[25px] font-bold">Hướng Dẫn Farm Nguyên Liệu Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon v-on:click="Search_X();" icon="fa-solid fa-magnifying-glass" class="cursor-pointer" />
                    <input v-model="counter.Search_TN_NV_VK_g" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_TN_NV_VK_g=''; Search_X();" class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Thuoc tinh -->
        <!-- <div class="flex flex-col md:flex-row bg-[#303b7a] rounded justify-center items-center mt-[30px]">
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
        </div> -->

        <!-- <div class="flex text-gray-400 font-medium bg-[#21295b] rounded justify-center items-center mt-[30px] w-full h-[251px] sm:h-[91px]">
            This website is supported by ads
        </div> -->

        <!-- <div class="flex flex-col   w-full h-full mt-[35px]">
            <p class="text-[22px] font-bold">Có thể canh tác ngay hôm nay</p>
            <div class="flex flex-col sm:flex-row   w-full h-full gap-5 mt-[15px]">
                <div class="flex flex-col w-full sm:w-2/3 h-full bg-[#242c5d] px-4 py-4 rounded gap-[15px]">
                    <div class="flex border-b-[1px] border-[#3c4682] py-5">
                        <div class="flex items-center gap-4">
                            <img src="@/assets/Ballad.png" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a]   rounded"/>
                            <p class="text-[17px] font-medium">Ballad</p>
                        </div>
                        <div class="flex justify-end  h-[100px] grow ml-[30px] px-3 py-3">
                            <div class="relative flex flex-col px-2 py-2  items-center">
                                <div class="relative">
                                    <img src="@/assets/1008.png" class=" min-w-[60px] h-[65px]  duration-300 bg-gradient-to-t from-violet-400 to-violet-500 rounded cursor-pointer"/>
                                </div>
                                <img src="@/assets/lightning_sm.png" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                <p class="absolute bg-[#3647b6] bottom-[75px] px-2 py-1 rounded font-medium">Alan</p>
                            </div>
                            <div class="relative flex flex-col px-2 py-2  items-center">
                                <div class="relative">
                                    <img src="@/assets/1008.png" class=" min-w-[60px] h-[65px]  duration-300 bg-gradient-to-t from-violet-400 to-violet-500 rounded cursor-pointer"/>
                                </div>
                                <img src="@/assets/lightning_sm.png" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                <p class="absolute bg-[#3647b6] bottom-[75px] px-2 py-1 rounded font-medium">Alan</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex border-b-[1px] border-[#3c4682] py-5">
                        <div class="flex items-center gap-4">
                            <img src="@/assets/Ballad.png" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a]   rounded"/>
                            <p class="text-[17px] font-medium">Ballad</p>
                        </div>
                        <div class="flex justify-end  h-[100px] grow ml-[30px] px-3 py-3">
                            <div class="relative flex flex-col px-2 py-2  items-center">
                                <div class="relative">
                                    <img src="@/assets/1008.png" class=" min-w-[60px] h-[65px]  duration-300 bg-gradient-to-t from-violet-400 to-violet-500 rounded cursor-pointer"/>
                                </div>
                                <img src="@/assets/lightning_sm.png" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                <p class="absolute bg-[#3647b6] bottom-[75px] px-2 py-1 rounded font-medium">Alan</p>
                            </div>
                            <div class="relative flex flex-col px-2 py-2  items-center">
                                <div class="relative">
                                    <img src="@/assets/1008.png" class=" min-w-[60px] h-[65px]  duration-300 bg-gradient-to-t from-violet-400 to-violet-500 rounded cursor-pointer"/>
                                </div>
                                <img src="@/assets/lightning_sm.png" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                                <p class="absolute bg-[#3647b6] bottom-[75px] px-2 py-1 rounded font-medium">Alan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-1/3  bg-[#21295b] px-3 rounded gap-[15px]">
                    <div class="flex items-center border-b-[1px] border-[#3c4682] gap-4 py-5 ">
                        <img src="@/assets/Ballad.png" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a]   rounded"/>
                        <p class="text-[17px] font-medium">Ballad</p>
                    </div>
                    <div class="flex items-center border-b-[1px] border-[#3c4682] gap-4 py-5 ">
                        <img src="@/assets/Ballad.png" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a]   rounded"/>
                        <p class="text-[17px] font-medium">Ballad</p>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="flex flex-col   w-full h-full mt-[30px]">
            <h2 class="text-[22px] font-bold">Nguyên Liệu Thiên Phú Nhân Vật</h2>
            <!-- <p>{{ counter.Data_TLTNNV_all_g }}///{{ counter.Data_NV_all_g }}</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] w-full h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] h-[38px] w-full rounded-t text-gray-300 text-[16px] px-3 ">
                    <div class="w-[50%] flex gap-3">
                        <p class="w-[50%] ">Nguyên liệu</p>
                        <p class="w-[50%]">Ngày</p>
                    </div>
                    <p class="w-[50%]">Nhân vật</p>
                </div>
                <div v-for="i in counter.Data_TLTNNV_all_g" class="flex flex-col sm:flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="w-full sm:w-[50%] flex items-center jus gap-3">
                        <div class="flex flex-col sm:flex-row w-full sm:w-[50%] grow sm:items-center gap-2 sm:gap-4 ">
                            <img :src="i.Avatar" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a] rounded"/>
                            <p class="text-[17px] font-medium">{{ i.Ten }}</p>
                        </div>
                        <p class="w-full sm:w-[50%] ">{{ i.Thoi_gian }}</p>
                    </div>
                    <div class="flex w-full sm:w-[50%] justify-center sm:justify-end  h-[100px] grow  px-3 py-3 mb-[15px]">
                        <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="relative flex flex-col px-2 py-2  items-center">
                            <div class="relative" @mouseover="counter.Show_ten_TVD=j.id + j.Ten + i.id" @mouseleave="counter.Show_ten_TVD=0">
                                <img :src="j.Avatar" :style="j.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                            <p v-show="counter.Show_ten_TVD==j.id + j.Ten + i.id" class="absolute bottom-[80px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 text-[14px] whitespace-nowrap">{{ j.Ten }}</p>
                            <!-- <p>{{ j.Ten }}</p> -->
                        </router-link>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="flex flex-col   w-full h-full mt-[30px]">
            <h2  class="text-[22px] font-bold">Nguyên liệu đột phá nhân vật</h2>
            <!-- <p>{{ counter.Data_TLTTNV_all_g }}</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] w-full h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] h-[38px] w-full rounded-t text-gray-300 text-[16px] px-3 ">
                    <p class="w-[30%] ">Nguyên liệu</p>
                    <p class="w-[70%]">Nhân vật</p>
                </div>
                <div v-for="i in counter.Data_TLTTNV_all_g" class="flex flex-row  items-center border-b-[1px] gap-3 border-[#3c4682]  py-6 px-3 w-full text-gray-200 ">
                    <div class="flex flex-col sm:flex-row  w-[30%] grow sm:items-center gap-2 sm:gap-4 ">
                        <img :src="i.Avatar" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a] rounded"/>
                        <p class="text-[17px] font-medium">{{ i.Ten }}</p>
                    </div>
                    <div class="flex w-[70%] flex-wrap justify-end h-[100px] grow   py-3 ">
                        <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-for="j in i.Chi_tiet_danh_sach_nhan_vat" class="relative flex flex-col px-2 py-2  items-center  ">
                            <div class="relative" @mouseover="counter.Show_ten_TVD=j.id + i.Ten" @mouseleave="counter.Show_ten_TVD=0">
                                <img :src="j.Avatar" class=" min-w-[60px] h-[65px]  duration-300 bg-gradient-to-t from-violet-400 to-violet-500 rounded cursor-pointer"/>
                            </div>
                            <img :src="j.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 left-0"/>
                            <p v-show="counter.Show_ten_TVD==j.id + i.Ten" class="absolute bottom-[80px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 text-[14px] whitespace-nowrap">{{ j.Ten }}</p>
                            <!-- <p >{{ j.Ten }}</p> -->
                        </router-link>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="flex flex-col   w-full h-full mt-[30px]">
            <h2 class="text-[22px] font-bold">Nguyên liệu đột phá vũ khí</h2>
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] w-full h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] h-[38px] w-full rounded-t text-gray-300 text-[16px] px-3 ">
                    <p class="w-[50%] ">Nguyên liệu</p>
                    <p class="w-[50%]">Ngày</p>
                </div>
                <div v-for="i in counter.Data_NLTCVKNV_all_g" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200 ">
                    <div class="flex flex-col sm:flex-row  w-[50%] grow sm:items-center gap-2 sm:gap-4 ">
                        <img :src="i.Avatar" class="w-[65px] h-[65px] px-1 py-1 bg-[#363d6a] rounded"/>
                        <p class="text-[17px] font-medium">{{ i.Ten }}</p>
                    </div>
                    <p class="w-[50%]">{{ i.Thoi_gian }}</p>
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
        this.counter.F_Tai_lieu_tai_nang_NV_all_g();
        this.counter.F_Tai_lieu_thang_thien_NV_all_g();
        this.counter.F_Nguyen_lieu_thang_cap_VK_NV_all_g();
        document.title = 'Hướng Dẫn Farm Nguyên Liệu Genshin Impact';

    },
    methods:{
        Search_X(){
            this.counter.F_Tai_lieu_tai_nang_NV_all_g();
            this.counter.F_Tai_lieu_thang_thien_NV_all_g();
            this.counter.F_Nguyen_lieu_thang_cap_VK_NV_all_g();
        }
    },
    components: {
    }
    }
</script>


