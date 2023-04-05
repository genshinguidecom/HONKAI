<template>
    <div class="flex flex-col bg-[#101633] min-w-screen min-h-screen  ">
      <hea-der />
      <router-view />
      <foo-ter />
    </div>
</template>
  

  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import HeaDer from '@/components/HeaDer.vue'
  import FooTer from '@/components/FooTer.vue'

  import { useCounterStore } from '@/stores/counter';

  
  // Để sử dụng được các thẻ (tag) của các component tương ứng
  // <nav-bar />     -> component NavBar
  // <side-bar />    -> component SideBar
  // <footer-bar />  -> component FooterBar
  // Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
  export default {
    setup() {
      const counter = useCounterStore();
      return {counter}
    },
    mounted:async function(){
      this.counter.Page_H_G();
      this.counter.Data_Web_all();
      this.counter.Data_Link_all();
    },
    methods:{
    },
    components: {
      HeaDer,
      FooTer,
    }
  }
  </script>
  
  
  