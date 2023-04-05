<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[120px] mb-[30px]"></div> -->
    <div class="bg-[#1c1f46]  rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto mt-[80px] lg:mt-[120px] mb-[30px] text-gray-200 px-[15px] py-[15px]">
        <div class="bg-[#282c61] w-full  rounded px-[15px] py-[15px]">
            <div class="flex flex-col items-center md:flex-row gap-[30px]">
                <img :src="counter.domain_Backend+counter.Data_NV_one_h.Avatar" :style="counter.Data_NV_one_h.Mau_nen_BG" class="w-[268px] h-[298px] bg-gradient-to-t rounded px-3 py-3"/>
                <div class="flex flex-col w-full gap-5">
                    <div class="flex justify-between items-center w-full">
                        <h1 class="text-gray-200 font-bold text-[25px]" v-on:click="counter.thai=5">Honkai: Bản dựng Star Rail {{ counter.Data_NV_one_h.Ten }}</h1>
                        <img src="@/assets/element_lightning.png" class="cursor-pointer w-[50px] h-[50px]"/>
                        <!-- <p>////{{ counter.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat }}</p> -->
                    </div>
                    <div class="flex">
                        <div class="flex items-center bg-[#323a72] grow-0 shrink rounded py-1 px-2 gap-2">
                            <img :src="counter.domain_Backend + counter.Data_NV_one_h.Icon_Nguyen_chat" class="w-[30px] h-[30px]"/>
                            <p class="text-[16px] font-semibold text-gray-300">{{ counter.Data_NV_one_h.Nguyen_chat }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <div class="flex justify-center items-center w-full">
                            <div class="w-[10%]"><img src="@/assets/hp.png" class="w-[36px] h-[36px]" /></div>
                            <p class="w-[20%] font-semibold text-gray-300">HP</p>
                            <div class="flex w-[55%] bg-[#3a417d] h-[8px] rounded"><div :class="'w-['+counter.Data_NV_one_h.HP/counter.Data_NV_one_h.Chi_so_toi_da*100+'%]'" class="bg-[#009688]  rounded"></div></div>
                            <p class="flex justify-end w-[15%] font-semibold text-gray-300">{{ counter.Data_NV_one_h.HP }}</p>
                        </div>
                        <div class="flex justify-center items-center w-full">
                            <div class="w-[10%]"><img src="@/assets/hp.png" class="w-[36px] h-[36px]" /></div>
                            <p class="w-[20%] font-semibold text-gray-300">Tấn công</p>
                            <div class="flex w-[55%] bg-[#3a417d] h-[8px] rounded"><div :class="'w-['+counter.Data_NV_one_h.Tan_cong/counter.Data_NV_one_h.Chi_so_toi_da*100+'%]'"  class="bg-[#009688]  h-[8px] rounded"></div></div>
                            <p class="flex justify-end w-[15%] font-semibold text-gray-300">{{ counter.Data_NV_one_h.Tan_cong }}</p>
                        </div>
                        <div class="flex justify-center items-center w-full">
                            <div class="w-[10%]"><img src="@/assets/hp.png" class="w-[36px] h-[36px]" /></div>
                            <p class="w-[20%] font-semibold text-gray-300">DEF</p>
                            <div class="flex w-[55%] bg-[#3a417d] h-[8px] rounded"><div :class="'w-['+counter.Data_NV_one_h.DEF/counter.Data_NV_one_h.Chi_so_toi_da*100+'%]'"  class="bg-[#009688]  h-[8px] rounded"></div></div>
                            <p class="flex justify-end w-[15%] font-semibold text-gray-300">{{ counter.Data_NV_one_h.DEF }}</p>
                        </div>
                        <div class="flex justify-center items-center w-full">
                            <div class="w-[10%]"><img src="@/assets/hp.png" class="w-[36px] h-[36px]" /></div>
                            <p class="w-[20%] font-semibold text-gray-300">Tốc độ</p>
                            <div class="flex w-[55%] bg-[#3a417d] h-[8px] rounded"><div :class="'w-['+counter.Data_NV_one_h.Toc_do/counter.Data_NV_one_h.Chi_so_toi_da*100+'%]'"  class="bg-[#009688] w-[50%] h-[8px] rounded"></div></div>
                            <p class="flex justify-end w-[15%] font-semibold text-gray-300">{{ counter.Data_NV_one_h.Toc_do }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <p>{{ counter.id_NV }}////{{ counter.Data_NV_one_h.Ten }}//{{ counter.Data_HVTNNV_one }}</p> -->
            <div class="flex flex-col gap-3 mt-[25px]">
                <h2 class="text-[16px] font-semibold text-yellow-300">Vật liệu nâng cấp {{ counter.Data_NV_one_h.Ten }}</h2>
                <div class="flex flex-col gap-3 ">
                    <div class="flex w-full flex-col md:flex-row gap-3 ">
                        <div v-for="i in counter.Data_NV_one_h.Link_NV_Vat_lieu_nang_cap_nhan_vat"  class="flex items-center bg-[#384393] px-2 py-1 rounded gap-2 w-full md:w-[50%]">
                            <img :src="counter.domain_Backend+i.Avatar" class="w-[36px] h-[36px]" />
                            <p class="text-gray-300 font-medium">{{ i.Ten }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row w-full gap-3 mt-[25px] relative items-cneter justify-center">
                <div class="flex flex-col gap-3 w-full md:w-[50%]">
                    <h2 class="text-[16px] font-semibold text-yellow-300">Vũ khí tốt nhất của {{ counter.Data_NV_one_h.Ten }}</h2>
                    <div class="flex flex-col relative gap-3 w-full">
                        <div v-for="(i,index) in counter.Data_NV_one_h.Link_NV_Vu_khi_tot_nhat_nhan_vat" @mouseover="counter.Show_Bang_VKTNNV=i.id" @mouseleave="counter.Show_Bang_VKTNNV=0" class="flex items-center bg-[#384393] px-3  rounded gap-3 w-full cursor-pointer">
                            <p class="flex w-[24px] h-[24px] justify-center items-center bg-[#5567ec] rounded font-semibold">{{ index+1 }}</p>
                            <img :src="counter.domain_Backend+i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded " />
                            <p class="text-gray-200 font-medium">{{ i.Ten }}</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-3 w-full md:w-[50%]">
                    <h2 class="text-[16px] font-semibold text-yellow-300">Hiện vật tốt nhất của {{ counter.Data_NV_one_h.Ten }}</h2>
                    <div class="flex flex-col gap-3 w-full">
                        <div v-for="(i,index) in counter.Data_NV_one_h.Link_NV_Hien_vat_tot_nhat_nhan_vat_change"   class="flex relative items-center bg-[#384393] px-3  rounded gap-3 w-full">
                            <p class="flex min-w-[24px] h-[24px] justify-center items-center bg-[#5567ec] rounded font-semibold">{{ index+1 }}</p>
                            <div v-for="j in i"  class="flex flex-col sm:flex-row gap-1 w-full cursor-pointer"  @mouseover="counter.Show_Bang_HVTNNV_C=j.id;" @mouseleave="counter.Show_Bang_HVTNNV_C=0;">
                                <div class="flex justify-center items-center gap-2" >
                                    <div class="flex justify-center items-center relative">
                                        <img :src="counter.domain_Backend+j.Avatar" :style="j.Mau_nen_BG" class="relative min-w-[50px] h-[50px]  rounded " />
                                        <p class="flex absolute right-0 bottom-0  font-semibold justify-center items-center w-[20px] h-[20px] rounded bg-[#1c224d] shrink-0 text-[12px]">{{ j.So_luong }}</p>
                                    </div>
                                    <p class="text-gray-200 font-medium">{{ j.Ten }}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <p>{{ counter.Show_Bang_HVTNNV_C }}/////{{ counter.Show_Bang_HVTNNV }}</p>
                <!-- Bảng thông tin từng loại vũ khí -->
                <div v-for=" i in counter.Data_NV_one_h.Link_NV_Vu_khi_tot_nhat_nhan_vat" v-show="counter.Show_Bang_VKTNNV==i.id" class="flex flex-col absolute  right-0  bg-[#131945]  w-[50%] rounded px-[15px] py-[15px] gap-4">
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
                <div  v-for="j in counter.Data_NV_one_h.Link_NV_Hien_vat_tot_nhat_nhan_vat" v-show="counter.Show_Bang_HVTNNV_C==j.id" class="flex flex-col absolute right-0 sm:left-0 w-[50%] bg-[#131945] rounded px-[15px] py-[15px] gap-4 overflow-auto">
                    <div class="flex flex-col sm:flex-row gap-3 justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold text-gray-100 text-[20px]">{{ j.Ten }}</p>
                            <p class="font-semibold text-yellow-400">{{ j.Dac_diem }}</p>
                        </div>
                        <img :src="counter.domain_Backend+j.Avatar" :style="j.Mau_nen_BG" class="w-[80px] h-[80px]  rounded"/>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex gap-3 font-medium">
                            <p class="flex font-semibold justify-center items-center w-[30px] h-[30px] rounded bg-teal-500 shrink-0">2</p>
                            <p>{{ j.Noi_dung.split('\r\n')[0].split('---')[1] }}</p>
                        </div>
                        <div class="flex gap-3 font-medium">
                            <p class="flex font-semibold justify-center items-center w-[30px] h-[30px] rounded bg-teal-500 shrink-0">4</p>
                            <p>{{ j.Noi_dung.split('\r\n')[1].split('---')[1] }}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div v-for="i in counter.Data_NV_one_h.So_lieu_thong_ke_tot_nhat" class="flex flex-col mt-[30px]">
                <p class="text-[16px] font-semibold text-yellow-300">Số liệu thống kê tốt nhất của {{ counter.Data_NV_one_h.Ten }}</p>
                <div class="flex flex-col gap-3 text-gray-200 mt-[15px]">
                    <div class="flex flex-col sm:flex-row gap-3 w-full">
                        <div class="flex justify-center items-center px-2 gap-1 bg-[#384393] h-[50px] w-full sm:w-1/3 rounded "><p class="font-semibold">{{ i.split('\r\n')[0].split('---')[0] }}</p><p class="font-medium">{{ i.split('\r\n')[0].split('---')[1] }}</p></div>
                        <div class="flex justify-center items-center px-2 gap-1 bg-[#384393] h-[50px] w-full sm:w-1/3 rounded "><p class="font-semibold">{{ i.split('\r\n')[1].split('---')[0] }}</p><p class="font-medium">{{ i.split('\r\n')[1].split('---')[1] }}</p></div>
                        <div class="flex justify-center items-center px-2 gap-1 bg-[#384393] h-[50px] w-full sm:w-1/3 rounded "><p class="font-semibold">{{ i.split('\r\n')[2].split('---')[0] }}</p><p class="font-medium">{{ i.split('\r\n')[2].split('---')[1] }}</p></div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-center items-center px-2 py-1 gap-1 bg-[#384393] min-h-[50px] w-full rounded ">
                        <p class="font-semibold">{{ i.split('\r\n')[3].split('---')[0] }}</p>
                        <div class="flex justify-between gap-2">
                            <p class=" flex justify-center items-center font-medium w-[26%] sm:w-full sm:whitespace-nowrap">{{ i.split('\r\n')[3].split('---')[1].split('>')[0] }}</p>
                            <p class=" flex justify-center items-center font-medium w-[11%]">></p>
                            <p class="flex justify-center items-center font-medium w-[26%] sm:w-full sm:whitespace-nowrap">{{ i.split('\r\n')[3].split('---')[1].split('>')[1] }}</p>
                            <p class="flex justify-center items-center font-medium w-[11%]">></p>
                            <p class="flex justify-center items-center font-medium  w-[26%] sm:w-full sm:whitespace-nowrap">{{ i.split('\r\n')[3].split('---')[1].split('>')[2] }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-[16px] font-semibold text-yellow-300 mt-[30px]">Ưu tiên thiên phú</h2>
            <div v-for="i in counter.Data_NV_one_h.Uu_tien_thien_phu" class="flex flex-col items-center justify-center bg-[#384393]  w-full rounded mt-[15px] px-2 py-2 gap-2">
                <div class="flex items-center gap-5">
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[20px] h-[20px] px-2 rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[0].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[0].split('---')[1] }}</p>
                    </div>
                    <p>></p>
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[20px] px-2 h-[20px] rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[1].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[1].split('---')[1] }}</p>
                    </div>
                    <p>></p>
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[20px] px-2 h-[20px] rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[2].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[2].split('---')[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row  bg-[#384393] justify-center text-gray-100  rounded mt-[30px] items-center font-semibold">
            <div class="flex w-full">
                <p class="flex w-full min-h-[50px]  items-center justify-center hover:bg-[#515db5] cursor-pointer px-5 sm:rounded-l">Đội</p>
                <p class="flex w-full min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer px-5">Tài năng</p>
            </div>
            <div class="flex w-full">
                <p class="flex w-full min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer px-5">Thụ động</p>
                <p class="flex w-full min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer px-5">Chòm sao</p>
            </div>
            <div class="flex w-full">
                <p class="flex w-full min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer px-5">Thăng thiên </p>
                <p class="flex w-full min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer px-5 sm:rounded-r">Chưng bày</p>
            </div>
        </div>
        <!-- DOi tot nhat -->
        <div class="flex flex-col mt-[30px] ">
            <div class="flex text-gray-200 text-[20px] font-bold gap-1"><h2>Đội</h2><h2 class="text-yellow-400">{{ counter.Data_NV_one_h.Ten }}</h2><h2>tốt nhất</h2></div>
            <div class="flex flex-col  mt-[10px] flex-wrap w-full gap-3">
                <div class="flex flex-col  gap-3 w-full">
                    <div v-for="i in counter.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat" class="flex flex-col bg-[#2b326a] max-w-[50%] rounded ">
                        <p class="flex justify-center items-center  bg-[#3c468c] rounded-t min-h-[30px] font-medium">{{ i.Ten_doi }}</p>
                        <div class="flex px-2 py-2 justify-between">
                            <router-link :to="'/Characters/'+j.URL_Ten" v-on:click="counter.Ten_NV=j.URL_Ten; counter.id_NV=j.id; counter.F_Thong_tin_nhan_vat_one();" v-for="j in i['Chi_tiet_thanh_vien_doi']"  class="flex flex-col relative items-center cursor-pointer ">
                                <div @mouseover="counter.Show_ten_TVD=j.id" @mouseleave="counter.Show_ten_TVD=0"  class="flex relative px-2 py-2">
                                    <img :src="j.Avatar" class=" w-[50px] h-[50px] duration-300 bg-gradient-to-t from-yellow-200 to-yellow-700 rounded"/>
                                    <div class="flex w-[20px] h-[20px] rounded-full justify-center items-center absolute top-0 left-0 bg-[#1426b1]">
                                        <img :src="j.Icon_Nguyen_to" class=" w-[16px] h-[16px]"/>
                                    </div>
                                </div>
                                <p class="font-semibold  text-[12px]">{{ j.Vi_tri }}</p>
                                <p v-show="counter.Show_ten_TVD==j.id" class="absolute bottom-[80px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 text-[14px] whitespace-nowrap">{{ j.Ten }}</p>
                            </router-link>
                        </div>
                    </div>
                    <!-- <p>{{ counter.Data_NV_one_h }}</p> -->
                </div>
            </div>
        </div>
        <div class="flex flex-col mt-[30px] ">
            <!-- Kĩ năng -->
            <div class="flex text-gray-200 text-[20px] font-bold gap-1"><h2>Kĩ năng</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h.Ten }}</p></div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="i in counter.Data_NV_one_h.Link_NV_Ki_nang_nhan_vat" class="flex flex-col sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center max-w-[140px] min-w-[140px]">
                        <img :src="counter.domain_Backend+i.Avatar" class="w-[70px] h-[70px]"/>
                        <h3 class="text-[19px] font-bold text-gray-300 ">{{ i.Ten }}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{ i.Noi_dung.split('---')[0] }}</h4>
                        <p class="text-yellow-300 font-medium text-[17px]">{{ i.Noi_dung.split('---')[1] }}</p>
                        <p class="whitespace-pre-line">{{ i.Noi_dung.split('---')[2] }}</p>
                    </div>
                </div>
            </div>
            <!-- Eidolon -->
            <div class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px]"><h2 class="text-yellow-400">{{counter.Data_NV_one_h.Ten}}</h2><h2>Eidolon</h2></div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="m in counter.Data_NV_one_h.Link_NV_Eidolon_nhan_vat" class="flex flex-col sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center max-w-[140px] min-w-[140px]">
                        <img :src="counter.domain_Backend+m.Avatar" class="w-[70px] h-[70px]"/>
                        <h3 class="text-[19px] font-bold text-gray-300 ">{{ m.Ten }}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{m.Noi_dung.split('---')[0]}}</h4>
                        <p class="text-yellow-300 font-medium text-[17px]">{{m.Noi_dung.split('---')[1]}}</p>
                        <p class="whitespace-pre-line">{{m.Noi_dung.split('---')[2]}}</p>
                    </div>
                </div>
            </div>
            <!-- Dấu vết -->
            <div class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px] mb-[15px]"><h2>Dấu vết</h2><h2 class="text-yellow-400">{{ counter.Data_NV_one_h.Ten }}</h2></div>
            <div v-for="i in counter.Data_NV_one_h.Tong_so_lieu_thong_ke" class="flex flex-col bg-[#262d65] rounded w-full px-3 py-2 gap-2">
                <h3 class="flex text-[18px] font-semibold w-full items-center justify-center ">Tổng số liệu thống kê</h3>
                <div class="flex medium gap-3 justify-between">
                    <p class="flex justify-center items-center bg-[#3c468f] rounded w-full min-h-[42px] px-2">{{i.split('---')[0]}}</p>
                    <p class="flex justify-center items-center bg-[#3c468f] rounded w-full min-h-[42px] px-2">{{i.split('---')[1]}}</p>
                    <p class="flex justify-center items-center bg-[#3c468f] rounded w-full min-h-[42px] px-2">{{i.split('---')[2]}}</p>
                </div>
            </div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="i in counter.Data_NV_one_h.Link_NV_Dau_vet_nhan_vat" class="flex flex-col sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center max-w-[140px]  min-w-[140px]">
                        <img :src="counter.domain_Backend+i.Avatar" class="w-[70px] h-[70px]"/>
                        <h3 class="text-[19px] font-bold text-gray-300 ">{{i.Ten}}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{i.Noi_dung.split('---')[0]}}</h4>
                        <p class="text-yellow-300 font-medium text-[17px]">{{i.Noi_dung.split('---')[1]}}</p>
                        <p class="whitespace-pre-line">{{i.Noi_dung.split('---')[2]}}</p>
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
    // import { useRoute } from 'vue-router';
    // const Route = useRoute();

    import { useRouter } from 'vue-router';

    export default {

    setup() {
        const counter = useCounterStore();
        return {counter,}
    },
    mounted:async function(){
        this.counter.Page_H_G();
        this.counter.Show_Bang_HVTNNV_C=0;
        this.counter.Show_Bang_VKTNNV=0;
        this.counter.Ten_NV = this.$route.params.user;
        this.counter.F_Thuoc_tinh_tim_kiem_all();
        await this.counter.F_Thong_tin_nhan_vat_all();
        await this.counter.F_Thong_tin_nhan_vat_one();
        document.title = 'Honkai: Bản dựng Star Rail '+this.counter.Data_NV_one_h.Ten;

    },
    methods:{
        // this.counter.F_Thong_tin_nhan_vat_one();
    
    },
    components: {
    }
    }
</script>


