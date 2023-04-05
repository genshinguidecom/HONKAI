<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Cách Buils Nhân Vật Genshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="counter.F_Thong_tin_nhan_vat_all_g();" class="cursor-pointer" />
                    <input v-model="counter.Search_NV_g" placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="counter.Search_NV_g=''; counter.F_Thong_tin_nhan_vat_all_g();"  class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Ho tro Xay dung nhan vat -->
        <a href="https://genshin-guide.com/" target="_blank" class="flex text-[#52c7b8] text-[15px] cursor-pointer font-medium bg-[#21295b] rounded justify-center items-center mt-[30px] w-full h-[40px]">
            Cách Builds Nhân Vật Genshin Impact tại Genshin Guide →
        </a>
        <!-- THuoc tinh -->
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
        <!-- Danh sach nhan vat -->
        <div v-for="i in counter.Data_BD_all" class="flex flex-col mt-[25px]">
            <div  class="flex flex-col lg:flex-row gap-[15px]  text-gray-400 relative font-medium bg-[#21295b] rounded justify-between items-center min-h-[117px] w-full px-[15px] py-[15px]">
                <router-link :to="'/genshin-impact/characters/'+i.URL_Ten" v-on:click="counter.Ten_NV_g=i.URL_Ten; counter.id_NV_g=i.id" class="flex gap-4">
                    <div class="relative flex flex-col w-[80px] h-[90px]  items-center">
                        <img :src="counter.domain_Backend+i.Avatar" :style="i.Mau_nen_BG" class=" min-w-[80px] h-[90px] hover:scale-110 duration-300  rounded cursor-pointer"/>
                        <img :src="counter.domain_Backend+i.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#272d52] rounded-full px-1 py-1 top-0 left-0"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-gray-100 text-[15px]">{{i.Ten}}</p>
                        <p class="text-[15px] text-gray-300 bg-[#2e3f9f] px-2 rounded whitespace-nowrap">{{i.Vi_tri}}</p>
                    </div>
                </router-link>
                <!-- Bam mui ten lan 1 hien ra bang nay -->
                <!-- <div class="flex flex-col sm:flex-row mx-[15px] w-full justify-end sm:mr-[30px] gap-2">
                    <div class="flex flex-col gap-2 text-gray-200 text-[14px] sm:max-w-[358px] grow">
                        <div class="flex bg-[#2e3f9f] items-center gap-2 rounded cursor-pointer">
                            <img src="@/assets/Cinnabar_Spindle.png" class="min-w-[40px] h-[40px]  bg-gradient-to-t from-violet-500 to-gray-700 rounded"/>
                            <p>Trục Cinnabar</p>
                        </div>
                        <div class="flex bg-[#2e3f9f] items-center gap-2 rounded cursor-pointer">
                            <div class="relative">
                                <img src="@/assets/Cinnabar_Spindle.png" class="min-w-[40px] h-[40px] bg-gradient-to-t from-violet-500 to-gray-700 rounded"/>
                                <p class="flex justify-center items-center absolute bottom-0 right-0 bg-[#181e4f] text-semibold w-[20px] h-[20px] rounded">4</p>
                            </div>
                            <p>Trấu của những giấc mơ sang trọng</p>
                        </div>
                    </div>
                    <div class="flex flex-col bg-[#2e3f9f] text-[14px] px-2 py-1 gap-1 rounded justify-center ">
                        <div class="flex gap-1 text-gray-200"><p class="font-semibold">Cat:</p><p class="font-medium">Phòng thủ %</p></div>
                        <div class="flex gap-1 text-gray-200"><p class="font-semibold">Cốc:</p><p class="font-medium">Geo DGM</p></div>
                        <div class="flex gap-1 text-gray-200"><p class="font-semibold">Vòng tròn:</p><p class="font-medium">Tỷ lệ CRIT / Thiệt hại / DEF%</p></div>
                    </div>
                </div> -->
                <!-- Bam mui ten lan 2 hien ra bang nay -->
                <div class="flex flex-col sm:flex-row w-full gap-3 mt-[25px] relative items-cneter justify-center">
                    <div class="flex flex-col gap-3 w-full md:w-[50%]">
                        <p class="text-[16px] font-semibold text-yellow-300">Vũ khí tốt nhất </p>
                        <div class="flex flex-col relative gap-3 w-full">
                            <div v-for="(j,index) in i.Link_NV_Vu_khi_tot_nhat_nhan_vat" @mouseover="counter.Show_Bang_VKTNNV=j.id" @mouseleave="counter.Show_Bang_VKTNNV=0" class="flex items-center bg-[#384393]   rounded gap-3 w-full cursor-pointer">
                                <!-- <p class="flex w-[24px] h-[24px] justify-center items-center bg-[#5567ec] rounded font-semibold text-gray-100">{{ index+1 }}</p> -->
                                <img :src="counter.domain_Backend+j.Avatar" :style="j.Mau_nen_BG" class="w-[40px] h-[40px] rounded " />
                                <p class="text-gray-200 font-medium">{{ j.Ten }}</p>
                            </div>
                        </div>
                        <div class="flex-col gap-1">
                            <p class="text-gray-300">Chỉ số chính</p>
                            <div class="flex flex-col bg-[#384393] text-gray-100 rounded px-2 py-2 font-normal">
                                <pre class="whitespace-pre-line">{{ i.Thong_ke_chinh }}</pre>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 w-full md:w-[50%]">
                        <p class="text-[16px] font-semibold text-yellow-300">Thánh Di Vật Tốt Nhất</p>
                        <div class="flex flex-col gap-3 w-full">
                            <div v-for="(m,index) in i.Link_NV_Hien_vat_tot_nhat_nhan_vat_change"   class="flex relative items-center bg-[#384393]   rounded gap-3 w-full">
                                <!-- <p class="flex min-w-[24px] h-[24px] justify-center items-center bg-[#5567ec] rounded font-semibold text-gray-100">{{ index+1 }}</p> -->
                                <div v-for="k in m"  class="flex flex-col sm:flex-row gap-1 w-full cursor-pointer"  @mouseover="counter.Show_Bang_HVTNNV_C=k.id;" @mouseleave="counter.Show_Bang_HVTNNV_C=0;">
                                    <div class="flex  items-center gap-2" >
                                        <div class="flex justify-center items-center relative">
                                            <img :src="counter.domain_Backend+k.Avatar" :style="k.Mau_nen_BG" class="relative min-w-[0px] h-[40px]  rounded " />
                                            <p class="flex absolute right-0 bottom-0  font-semibold justify-center items-center w-[20px] h-[20px] rounded bg-[#1c224d] shrink-0 text-[12px] text-gray-100">{{ k.So_luong }}</p>
                                        </div>
                                        <p class="text-gray-200 font-medium">{{ k.Ten }}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="flex-col gap-1">
                            <p class="text-gray-300">Chỉ số phụ</p>
                            <div class="flex flex-col bg-[#384393] text-gray-100 rounded px-2 py-2 font-normal">
                                <pre class="whitespace-pre-line">{{ i.Thong_ke_phu }}</pre>
                            </div>
                        </div>
                    </div>
                    <!-- <p>{{ counter.Show_Bang_HVTNNV_C }}/////{{ counter.Show_Bang_HVTNNV }}</p> -->
                    <!-- Bảng thông tin từng loại vũ khí -->
                    <div v-for=" i in counter.Data_NV_one_h_g.Link_NV_Vu_khi_tot_nhat_nhan_vat" v-show="counter.Show_Bang_VKTNNV==i.id" class="flex flex-col absolute  right-0  bg-[#131945]  w-[50%] rounded px-[15px] py-[15px] gap-4">
                        <div class="flex flex-col sm:flex-row gap-3 justify-between">
                            <div class="flex flex-col gap-2">
                                <p class="font-bold text-gray-100 text-[20px]">{{ i.Ten }}</p>
                                <div class="flex gap-2 items-center">
                                    <img src="@/assets/Cinnabar_Spindle.png" class="w-[40px] h-[40px] bg-[#1d2458] rounded px-2 py-2"/>
                                    <p class="text-gray-300 font-medium">{{ i.Dac_diem }}</p>
                                </div>
                            </div>
                            <img :src="counter.domain_Backend+i.Avatar" :style="i.Mau_nen_BG" class="w-[80px] h-[80px]  rounded"/>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="text-yellow-400 text-[16px] font-semibold">{{ i.Noi_dung.split('---')[0] }}</p>
                            <p class="text-gray-200 font-medium">{{ i.Noi_dung.split('---')[1] }}</p>
                        </div>
                    </div>
                    <!-- Bang thong tin hien vat -->
                    <div  v-for="m in counter.Data_NV_one_h_g.Link_NV_Hien_vat_tot_nhat_nhan_vat" v-show="counter.Show_Bang_HVTNNV_C==m.id"  class="flex flex-col absolute right-0 sm:left-0 w-[50%] bg-[#131945] rounded px-[15px] py-[15px] gap-4 overflow-auto">
                    <div class="flex flex-col sm:flex-row gap-3 justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold text-gray-100 text-[20px]">{{ m.Ten }}</p>
                            <p class="font-semibold text-yellow-400">{{ m.Dac_diem }}</p>
                        </div>
                        <img :src="counter.domain_Backend+m.Avatar" :style="m.Mau_nen_BG" class="w-[80px] h-[80px]  rounded"/>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex gap-3 font-medium">
                            <p class="flex font-semibold justify-center items-center w-[30px] h-[30px] rounded bg-teal-500 shrink-0">2</p>
                            <p>{{ m.Noi_dung.split('\r\n')[0].split('---')[1] }}</p>
                        </div>
                        <div class="flex gap-3 font-medium">
                            <p class="flex font-semibold justify-center items-center w-[30px] h-[30px] rounded bg-teal-500 shrink-0">4</p>
                            <p>{{ m.Noi_dung.split('\r\n')[1].split('---')[1] }}</p>
                        </div>
                    </div>
                </div>
                    
                </div>
                <!-- Mui ten de bam -->
                <!-- <font-awesome-icon icon="fa-solid fa-angle-down" class="absolute text-gray-200 right-[15px] cursor-pointer"/> -->
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
        this.counter.Page_H_G();
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        this.counter.F_Ban_dung_all();
        document.title = 'Cách Buils Nhân Vật Genshin Impact';
    },
    components: {
    }
    }
</script>

<style>
pre{
    font-family: 'KoHo', sans-serif;
  }
</style>
