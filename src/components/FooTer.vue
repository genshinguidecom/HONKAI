<template>
    <div class="flex justify-between flex-col items-center bg-[#1c1f46] h-full  w-screen text-gray-200 px-6">
        <div class="flex font-semibold text-[17px] flex-col md:flex-row text-gray-300 mx-auto gap-5 max-w-[952px] h-full justify-between pt-[50px] ">
            <div v-for="i in counter.Data_Web" class="flex flex-col w-full md:w-1/2  gap-3 pr-[10px] sm:pr-[20px] text-justify md:pr-[64px]">
                <h3 class="font-bold  text-gray-200 text-[18px]">{{ i.Ten_Web }}</h3>
                <pre class="whitespace-pre-line w-full">{{ i.Ten_Web }} không được liên kết với hoặc xác nhận bởi miHoYo. {{ i.Ten_Web }} là trang web hướng dẫn cách Build Honkai Star Rail và Genshin Impact</pre>
                <p>© {{ i.Ten_Web }} 2023</p>
            </div>
            <div v-for="i in counter.Data_Web" class="flex flex-col md:flex-row  w1/2 justify-between grow gap-5">
                <div class="flex flex-col gap-3 w-1/2">
                    <!-- <a v-for="i in counter.Data_Link " :href="i.Link_URL" target="blank" -->
                    <h3 class="font-bold text-[18px] text-gray-200">Liên kết cộng đồng</h3>
                    <a :href="i.Link_URL_Youtobe" target="blank_" class="cursor-pointer hover:text-yellow-300">Youtube</a>
                    <a :href="i.Link_URL_Facebook" target="blank_" class="cursor-pointer hover:text-yellow-300">Facebook</a>
                </div>
                <div class="flex flex-col gap-3 w-1/2 ">
                    <h3 class="font-bold text-[18px] text-gray-200">Thêm liên kết</h3>
                    <!-- <p>Liên hệ</p> -->
                    <router-link to="/privacy" class="cursor-pointer hover:text-yellow-300">Chính sách bảo mật</router-link>
                    <!-- <p>Quản lý Cookie</p> -->
                </div>
            </div>
        </div>
        <div class="flex gap-1 mb-[20px] w-[952px]">
            <a v-for="i in counter.Data_Link " :href="i.Link_URL" target="blank" class="cursor-pointer hover:text-yellow-300 underline">{{ i.Ten_nha_QC }}</a>
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
    }
</script>

<style>
  pre{
    font-family: 'KoHo', sans-serif;
  }
  ul{
    font-family: 'KoHo', sans-serif;
  }
  li{
    font-family: 'KoHo', sans-serif;
  }
  </style>