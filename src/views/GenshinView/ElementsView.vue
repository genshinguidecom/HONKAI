<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px]"></div> -->
    <div class="flex flex-col bg-[#1c1f46] px-[20px] py-[20px] h-full rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto  mt-[80px]  lg:mt-[120px] mb-[30px] text-gray-200">
        <div class="flex flex-col md:flex-row gap-[30px] justify-between items-center w-full ">
            <h1 class="text-gray-200 text-[25px] font-bold">Phản Ứng Nguyên Tố & Cộng Hưởng Nguyên Tố Genshin Impact</h1>
            <!-- <div class="flex justify-between px-3 items-center bg-[#303b7a] max-w-[300px] h-[40px] rounded" >
                <div class="flex items-center gap-3 w-full">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="cursor-pointer" />
                    <input placeholder="Tìm kiếm nhân vật ..." class="bg-transparent outline-none w-full grow"/>
                </div>
                <font-awesome-icon icon="fa-solid fa-xmark" class="pl-3 cursor-pointer"/>
            </div> -->
        </div>
        <!-- Quang cao -->
        <a v-for="i in counter.Data_Web" :href="i.Link_URL_QC" target="blank" class=" flex justify-center items-center min-h-[90px] w-full bg-[#24285a] font-semibold mt-[30px]">
            <img :src="counter.domain_Backend+i.Avatar_QC" />
        </a>
        <!-- Bang danh sach hiện vật -->
        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Nguyên Tố Bất Lợi</p>
            <p class="font-medium text-gray-300">Mỗi yếu tố trong Genshin Impact có tác động tiêu cực khác nhau lên kẻ thù của bạn.</p>
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[30%] ">Tên</p>
                    <p class="w-[20%]">Nguyên tố</p>
                    <p class="w-[50%] ">Tác dụng</p>
                </div>
                <div v-for="i in counter.Data_GLNT_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <p class="w-[30%] text-[15px]">{{ i.Ten }}</p>
                    <div class="w-[20%]"><img :src="counter.domain_Backend+i.Avatar" class="w-[30px] h-[30px] rounded"/></div>
                    <p class="w-[50%] text-[15px]">{{i.Tac_dung}}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Phản Ứng Nguyên Tố</p>
            <p class="font-medium text-gray-300">Kết hợp các Nguyên tố khác nhau trong chiến đấu là chìa khóa thành công trong Genshin Impact.</p>
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[20%] ">Tên</p>
                    <p class="w-[40%]">Nguyên tố</p>
                    <p class="w-[40%] ">Tác dụng</p>
                </div>
                <div v-for="i in counter.Data_PUNT_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <p class="w-[20%] text-[15px]">{{ i.Ten }}</p>
                    <div class="w-[40%] flex">
                        <img :src="counter.domain_Backend+i.Chi_tiet_danh_sach_Avatar_phan_ung_one.Avatar" class="w-[30px] h-[30px] rounded"/>
                        <p>+</p>
                        <img v-for="j in i.Chi_tiet_danh_sach_Avatar_phan_ung " :src="counter.domain_Backend+j.Avatar" class="w-[30px] h-[30px] rounded"/>
                    </div>
                    <p class="w-[40%] text-[15px]">{{ i.Tac_dung }}</p>
                </div>
            </div>
        </div>
        <!-- <p>///{{ counter.Data_PUNT_all }}</p> -->

        <div class="flex flex-col  w-full h-full mt-[30px] overflow-auto ">
            <p class="text-[22px] font-bold text-gray-300">Cộng Hưởng Nguyên Tố</p>
            <p class="font-medium text-gray-300">Khi cộng hưởng nguyên tố,bạn sẽ nhận được các hiệu ứng,tương ứng với các loại nguyên tố có trong tổ đội</p>
            <div class="flex flex-col text-gray-400 font-medium bg-[#21295b] rounded  mt-[15px] min-w-[822px] h-full pb-5 ">
                <div class="flex items-center gap-3 bg-[#36407b] min-h-[38px] w-full rounded-t text-gray-300 text-[15px] px-3 ">
                    <p class="w-[25%] ">Tên</p>
                    <p class="w-[25%]">Nguyên tố</p>
                    <p class="w-[50%] ">Tác dụng</p>
                </div>
                <div v-for="i in counter.Data_CHNT_all" class="flex flex-row items-center border-b-[1px] gap-3 border-[#3c4682]  py-3 px-3 w-full text-gray-200">
                    <p class="w-[25%] text-[15px]">{{i.Ten}}</p>
                    <div class="w-[25%]"><img :src="counter.domain_Backend+i.Avatar" class="w-[30px] h-[30px] rounded"/></div>
                    <p class="w-[50%] text-[15px]">{{i.Tac_dung}}</p>
                </div>
            </div>
            <!-- <p>///{{ counter.Data_TTTK_all_g }}</p> -->
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
        await this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        this.counter.F_GLNT_g();
        this.counter.F_PUNT_g();
        this.counter.F_CHNT_g();
        document.title = 'Phản Ứng Nguyên Tố & Cộng Hưởng Nguyên Tố Genshin Impact';
    },
    components: {
    }
    }
</script>


