<template>
  <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[120px] mb-[30px]"></div> -->
  <div class="bg-[#1c1f46] flex flex-col justify-between rounded max-w-[952px] h-full min-h-[560px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto mt-[80px] lg:mt-[120px] mb-[30px] text-gray-200 px-[15px] py-[15px]">
    <div class="flex-col">
      <div class="flex flex-col md:flex-row justify-between text-[22px] text-violet-300 gap-5 sm:gap-4 font-semibold">
        <router-link :to="'/Tin-tuc/'+i.URL" v-for="i in counter.Data_TT_page.Data_page[0]" v-on:click="counter.Name_New=i.Ten; counter.Data_New()" class="flex flex-col gap-1">
          <img :src="counter.domain_Backend+i.Avatar" class="w-full md:w-[280px] md:h-[200px]  rounded"/>
          <h1>{{ i.Ten }}</h1>
        </router-link>
      </div>
      <div class="flex flex-col md:flex-row justify-between text-[22px] text-violet-300 gap-5 sm:gap-4 font-semibold">
        <router-link :to="'/Tin-tuc/'+i.URL" v-for="i in counter.Data_TT_page.Data_page[1]" v-on:click="counter.Name_New=i.Ten; counter.Data_New()" class="flex flex-col gap-1">
          <img :src="counter.domain_Backend+i.Avatar" class="w-full md:w-[280px] md:h-[200px] rounded"/>
          <h1>{{ i.Ten }}</h1>
        </router-link>
      </div>
    </div>
    <div class="flex gap-5 font-medium mt-5">
      <h1 v-on:click="if(counter.Page_N > 1){counter.Page_N--}; counter.Tin_tuc_page();" class="underline cursor-pointer hover:text-yellow-300">Trước</h1>
      <div class="flex gap-1 ">
        <input v-for="k in counter.Data_TT_page.list_so_trang" type="text" :value="k" :class="{'text-[22px] border-b-[3px] border-lime-500':counter.Page_N==k}"  class=" flex justify-center items-center px-3 text-gray-200 text-center grow bg-blue-600 rounded w-[40px] outline-none pointer-events-none" />
      </div>
      <h1 v-on:click="if(counter.Data_TT_page.So_trang > counter.Page_N){counter.Page_N++}; counter.Tin_tuc_page();" class=" underline cursor-pointer hover:text-yellow-300">Tiếp theo</h1>
    </div>
    <!-- <h1>{{ counter.Data_TT_page.Data_all }}///</h1> -->
      <!-- <h1>{{ counter.Page_N}}///{{ counter.Data_TT_page.So_trang }}</h1> -->
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
    this.counter.Tin_tuc_page();
  },
  components: {
  }
  }
</script>


