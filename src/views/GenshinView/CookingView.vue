<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Danh Sách Công Thức Món Ăn Ghenshin Impact</h1>
            <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-on:click="Search(); " class="cursor-pointer" />
                    <input placeholder="Tìm kiếm món ăn ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" v-on:click="Search_X(); "  class="pl-3 cursor-pointer"/>
            </div>
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Món ăn -->
        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Món Ăn Đặc Biệt</p>
            <!-- <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Món ăn</p>
                    <p class="w-[20%]">Nhân Vật</p>
                    <p class="w-[35%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_TANVDB_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{ i.Ten }}</p>
                    </div>
                    <div class=" flex w-[20%]">
                        <div class="relative flex flex-col px-2 py-2  items-center shrink-0 grow-0">
                            <div class="relative">
                                <img :src="i.Chi_tiet_Avatar_dau_bep.Avatar" :style="i.Chi_tiet_Avatar_dau_bep.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="i.Chi_tiet_Avatar_dau_bep.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 right-0"/>
                            <p class=" px-2 py-1 rounded font-medium">{{ i.Chi_tiet_Avatar_dau_bep.Ten }}</p>
                        </div>
                    </div>
                    <p class="w-[35%] whitespace-pre-line">{{ i.Thuong }}</p>
                    <p class="w-[20%] whitespace-pre-line">{{ i.Thanh_phan }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Món Ăn Tăng Chỉ Số</p>
            <!-- <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Món ăn</p>
                    <p class="w-[20%]">Nhân Vật</p>
                    <p class="w-[35%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_SLTK_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{ i.Ten }}</p>
                    </div>
                    <div class=" flex w-[20%]">
                        <div class="relative flex flex-col px-2 py-2  items-center shrink-0 grow-0">
                            <div class="relative">
                                <img :src="i.Chi_tiet_Avatar_dau_bep.Avatar" :style="i.Chi_tiet_Avatar_dau_bep.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="i.Chi_tiet_Avatar_dau_bep.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 right-0"/>
                            <p class=" px-2 py-1 rounded font-medium">{{ i.Chi_tiet_Avatar_dau_bep.Ten }}</p>
                        </div>
                    </div>
                    <p class="w-[35%] whitespace-pre-line">{{ i.Thuong }}</p>
                    <p class="w-[20%] whitespace-pre-line">{{ i.Thanh_phan }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Món Ăn Hồi Máu</p>
            <!-- <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Món ăn</p>
                    <p class="w-[20%]">Nhân Vật</p>
                    <p class="w-[35%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_CLTP_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :class="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{ i.Ten }}</p>
                    </div>
                    <div class=" flex w-[20%]">
                        <div class="relative flex flex-col px-2 py-2  items-center shrink-0 grow-0">
                            <div class="relative">
                                <img :src="i.Chi_tiet_Avatar_dau_bep.Avatar" :style="i.Chi_tiet_Avatar_dau_bep.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="i.Chi_tiet_Avatar_dau_bep.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 right-0"/>
                            <p class=" px-2 py-1 rounded font-medium">{{ i.Chi_tiet_Avatar_dau_bep.Ten }}</p>
                        </div>
                    </div>
                    <p class="w-[35%] whitespace-pre-line">{{ i.Thuong }}</p>
                    <p class="w-[20%] whitespace-pre-line">{{ i.Thanh_phan }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Món Ăn Hồi Sinh</p>
            <!-- <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Món ăn</p>
                    <p class="w-[20%]">Nhân Vật</p>
                    <p class="w-[35%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_HSTA_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{ i.Ten }}</p>
                    </div>
                    <div class=" flex w-[20%]">
                        <div class="relative flex flex-col px-2 py-2  items-center shrink-0 grow-0">
                            <div class="relative">
                                <img :src="i.Chi_tiet_Avatar_dau_bep.Avatar" :style="i.Chi_tiet_Avatar_dau_bep.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="i.Chi_tiet_Avatar_dau_bep.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 right-0"/>
                            <p class=" px-2 py-1 rounded font-medium">{{ i.Chi_tiet_Avatar_dau_bep.Ten }}</p>
                        </div>
                    </div>
                    <p class="w-[35%] whitespace-pre-line">{{ i.Thuong }}</p>
                    <p class="w-[20%] whitespace-pre-line">{{ i.Thanh_phan }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Món Ăn Thể Lực</p>
            <!-- <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p> -->
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Món ăn</p>
                    <p class="w-[20%]">Nhân Vật</p>
                    <p class="w-[35%] ">Hiệu Quả</p>
                    <p class="w-[20%] ">Nguyên Liệu</p>
                </div>
                <div v-for="i in counter.Data_TPSB_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <div class="flex items-center gap-2 w-[25%]">
                        <img :src="i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded px-1 py-1 "/>
                        <p>{{ i.Ten }}</p>
                    </div>
                    <div class=" flex w-[20%]">
                        <div class="relative flex flex-col px-2 py-2  items-center shrink-0 grow-0">
                            <div class="relative">
                                <img :src="i.Chi_tiet_Avatar_dau_bep.Avatar" :style="i.Chi_tiet_Avatar_dau_bep.Mau_nen_BG" class=" min-w-[60px] h-[65px]  duration-300  rounded cursor-pointer"/>
                            </div>
                            <img :src="i.Chi_tiet_Avatar_dau_bep.Icon_Nguyen_to" class="absolute w-[24px] h-[24px] bg-[#353d6e] rounded-full px-1 py-1 top-0 right-0"/>
                            <p class=" px-2 py-1 rounded font-medium">{{ i.Chi_tiet_Avatar_dau_bep.Ten }}</p>
                        </div>
                    </div>
                    <p class="w-[35%] whitespace-pre-line">{{ i.Thuong }}</p>
                    <p class="w-[20%] whitespace-pre-line">{{ i.Thanh_phan }}</p>
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
        this.counter.Search_Genshin='';
        await this.counter.F_Thong_tin_nhan_vat_all_g();
        this.counter.F_TANVDB_g();
        this.counter.F_SLTK_g();
        this.counter.F_CLTP_g();
        this.counter.F_HSTA_g();
        this.counter.F_TPSB_g();
        document.title = 'Danh Sách Công Thức Món Ăn Ghenshin Impact';
    },
    methods:{
        async Search(){
            await this.counter.F_Thong_tin_nhan_vat_all_g();
            this.counter.F_TANVDB_g();
            this.counter.F_SLTK_g();
            this.counter.F_CLTP_g();
            this.counter.F_HSTA_g();
            this.counter.F_TPSB_g();
        },
        async Search_X(){
            this.counter.Page_H_G();
            this.counter.Search_Genshin='';
            await this.counter.F_Thong_tin_nhan_vat_all_g();
            this.counter.F_TANVDB_g();
            this.counter.F_SLTK_g();
            this.counter.F_CLTP_g();
            this.counter.F_HSTA_g();
            this.counter.F_TPSB_g();
        }
    },
    components: {
    }
    }
</script>


