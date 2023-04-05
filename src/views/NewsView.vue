<template>
    <div class="flex flex-col bg-[#1c1f46] gap-2  rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto mt-[80px] lg:mt-[120px] mb-[30px] text-gray-200 px-[15px] py-[15px]">
        <h1 class="text-[25px] font-bold text-gray-300">{{ counter.Data_New.Ten }}</h1>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_1 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_1 }}</h1>
        </div>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_2 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_2 }}</h1>
        </div>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_3 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_3 }}</h1>
        </div>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_4 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_4 }}</h1>
        </div>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_5 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_5 }}</h1>
        </div>
        <div class="flex flex-col text-[18px] font-semibold text-yellow-300">
            <h1>{{ counter.Data_New.Muc_so_6 }}</h1>
            <h1 class="whitespace-pre-line text-[15px] font-normal text-gray-200">{{ counter.Data_New.Noi_dung_6 }}</h1>
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
    // this.counter.Tin_tuc_page();
  },
  components: {
  }
  }
</script>