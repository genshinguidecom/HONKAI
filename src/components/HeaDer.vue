<template>
    <!-- Danh cho may tinh -->
    <div  class="hidden lg:flex lg:flex-col h-[90px] pl-6 fixed z-50 top-0 left-0 right-0" v-bind:class="{'bg-[#64305f]':counter.Path_Route.path==counter.Path_H.h0||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h1||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h2||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h3||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h4||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h5||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h6||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h7||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h8||
                                                                                                                            counter.Path_Route.path.split('/')[1]!='genshin-impact','bg-[#2a529d]':counter.Path_Route.path==counter.Path_G.g0||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g1||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g2||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g3||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g4||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g5||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g6||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g7||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g8||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g9||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g10||
                                                                                                                                                                                        counter.Path_Route.path.split('/')[1]=='genshin-impact'}">
        <!-- Logo va bieu tuong Honkai_Ghensin-->
        <router-link to="/" v-if="counter.Path_Route.path==counter.Path_H.h0||
                                  counter.Path_Route.path==counter.Path_H.h1||
                                  counter.Path_Route.path==counter.Path_H.h2||
                                  counter.Path_Route.path==counter.Path_H.h3||
                                  counter.Path_Route.path==counter.Path_H.h4||
                                  counter.Path_Route.path==counter.Path_H.h5||
                                  counter.Path_Route.path==counter.Path_H.h6||
                                  counter.Path_Route.path==counter.Path_H.h7||
                                  counter.Path_Route.path==counter.Path_H.h8||
                                  counter.Path_Route.path.split('/')[1]!='genshin-impact'" class="flex items-center  h-[40px] bg-[#0b1029] cursor-pointer">
            <p class=" flex justify-center items-center font-bold text-white text-[20px] h-full bg-[#64305f] " >{{ counter.Data_Web[0].Ten_Web }}</p>
            <div class="flex items-center justify-center bg-[#64305f] gap-3  h-full w-[180px]">
                <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
            </div>
            <router-link to="/genshin-impact" class="flex items-center justify-center gap-3  h-[30px] w-[180px] hover:bg-[#303475] mx-1  rounded">
                <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
            </router-link>
        </router-link>
        <div  v-if="counter.Path_Route.path.split('/')[1]=='genshin-impact'||
                    counter.Path_Route.path==counter.Path_G.g0||
                    counter.Path_Route.path==counter.Path_G.g1||
                    counter.Path_Route.path==counter.Path_G.g2||
                    counter.Path_Route.path==counter.Path_G.g3||
                    counter.Path_Route.path==counter.Path_G.g4||
                    counter.Path_Route.path==counter.Path_G.g5||
                    counter.Path_Route.path==counter.Path_G.g6||
                    counter.Path_Route.path==counter.Path_G.g7||
                    counter.Path_Route.path==counter.Path_G.g8||
                    counter.Path_Route.path==counter.Path_G.g9||
                    counter.Path_Route.path==counter.Path_G.g10" class="flex items-center  h-[40px] bg-[#0b1029] cursor-pointer">
            <p class=" flex justify-center items-center font-bold text-white text-[20px] h-full bg-[#2a529d]" >{{ counter.Data_Web[0].Ten_Web }}</p>
            <div class="flex items-center justify-center gap-3  bg-[#2a529d] h-full w-[180px]">
                <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
            </div>
            <router-link to="/" class="flex items-center justify-center  gap-3   w-[180px] h-[30px] hover:bg-[#303475] mx-1  rounded">
                <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
            </router-link>
        </div>
        <!-- <p>{{ counter.Menu_Honkai_Genshin }}</p> -->

        <!-- Tab Honkai_Ghensin -->
        <div  v-if="counter.Path_Route.path==counter.Path_H.h0||
                    counter.Path_Route.path==counter.Path_H.h1||
                    counter.Path_Route.path==counter.Path_H.h2||
                    counter.Path_Route.path==counter.Path_H.h3||
                    counter.Path_Route.path==counter.Path_H.h4||
                    counter.Path_Route.path==counter.Path_H.h5||
                    counter.Path_Route.path==counter.Path_H.h6||
                    counter.Path_Route.path==counter.Path_H.h7||
                    counter.Path_Route.path==counter.Path_H.h8||
                    counter.Path_Route.path.split('/')[1]!='genshin-impact'" class="text-[16px] text-gray-200 flex font-semibold h-[50px] items-center justify-center ">
            <!-- <router-link to="/" :class="{'bg-[#923c89]':counter.Path_Route.path=='/'&& counter.Menu_Honkai_genshin-impact=='Honkai'}" class="flex items-center justify-center px-6 hover:bg-[#923c89] h-full">Trang chủ</router-link> -->
            <router-link to="/" :class="{'bg-[#923c89]':counter.Path_Route.path==counter.Path_H.h0}" class="flex items-center justify-center px-6 hover:bg-[#923c89] h-full">Nhân vật</router-link>
            <router-link to="/tier-list" :class="{'bg-[#923c89]':counter.Path_Route.path==counter.Path_H.h2}" v-on:click="counter.F_Danh_sach_cap_bac_all();" class="flex items-center justify-center px-6 hover:bg-[#923c89] h-full">Xếp hạng</router-link>
            <router-link to="/farming-guide" :class="{'bg-[#923c89]':counter.Path_Route.path==counter.Path_H.h3}" class="flex items-center justify-center px-6 hover:bg-[#923c89] h-full">Farm Nguyên liệu</router-link>
            <router-link to="/character-stats" :class="{'bg-[#923c89]':counter.Path_Route.path==counter.Path_H.h4||counter.Path_Route.path==counter.Path_H.h5}" class="flex relative items-center justify-center px-6 hover:bg-[#923c89] h-full gap-1" @mouseover="counter.Hover_Honkai=2" @mouseleave="counter.Hover_Honkai=1">
                <p>Chỉ số</p>
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[12px]"/>
                <div v-show="counter.Hover_Honkai==2" class="absolute top-[50px] left-0 w-[208px] bg-[#923c89] px-6 ">
                    <router-link to="/character-stats" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_H.h4}" class="flex items-center h-[50px]">Chỉ số Nhân vật</router-link>
                    <router-link to="/light-cone-stats" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_H.h5}" class="flex items-center h-[50px]" v-on:click="counter.F_Chi_so_hinh_non_anh_sang();">Chỉ số Nón ánh sáng</router-link>
                </div>
            </router-link>
            <router-link to="/light-cones" :class="{'bg-[#923c89]':counter.Path_Route.path==counter.Path_H.h6||counter.Path_Route.path==counter.Path_H.h7||counter.Path_Route.path==counter.Path_H.h8}" v-on:click="counter.F_Non_anh_sang();" class="flex relative items-center justify-center px-6 hover:bg-[#923c89] h-full gap-1 " @mouseover="counter.Hover_Honkai=3" @mouseleave="counter.Hover_Honkai=1">
                <p>Wiki</p>
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[12px]"/>
                <div v-show="counter.Hover_Honkai==3" class="absolute top-[50px] left-0 w-[155px]  bg-[#923c89] px-6 ">
                    <router-link to="/light-cones" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_H.h6}" v-on:click="counter.F_Non_anh_sang();" class="flex items-center h-[50px]">Nón ánh sáng</router-link>
                    <router-link to="/relics" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_H.h7}" v-on:click="counter.F_Xa_loi();" class="flex items-center h-[50px]">Di vật</router-link>
                    <router-link to="/ornaments" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_H.h8}" v-on:click="counter.F_Do_trang_tri();" class="flex items-center h-[50px]">Nguyên liệu</router-link>
                </div>
            </router-link>
        </div>
        <div v-if="counter.Path_Route.path==counter.Path_G.g0||
                   counter.Path_Route.path==counter.Path_G.g1||
                   counter.Path_Route.path==counter.Path_G.g2||
                   counter.Path_Route.path==counter.Path_G.g3||
                   counter.Path_Route.path==counter.Path_G.g4||
                   counter.Path_Route.path==counter.Path_G.g5||
                   counter.Path_Route.path==counter.Path_G.g6||
                   counter.Path_Route.path==counter.Path_G.g7||
                   counter.Path_Route.path==counter.Path_G.g8||
                   counter.Path_Route.path==counter.Path_G.g9||
                   counter.Path_Route.path==counter.Path_G.g10||
                   counter.Path_Route.path.split('/')[1]=='genshin-impact'" class="text-[16px] text-gray-200 flex font-semibold h-[50px] items-center justify-center ">
            <!-- <router-link to="/" :class="{'bg-[#923c89]':counter.Path_Route.path=='/'&& counter.Menu_Honkai_genshin-impact=='genshin-impact'}" class="flex items-center justify-center px-6 hover:bg-[#923c89] h-full">Trang chủ</router-link> -->
            <router-link to="/genshin-impact" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g0}"  class="flex items-center justify-center px-6 hover:bg-blue-600 h-full">Nhân vật</router-link>
            <router-link to="/genshin-impact/builds" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g2}" class="flex items-center justify-center px-6 hover:bg-blue-600 h-full">Builds</router-link>
            <router-link to="/genshin-impact/teams" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g3}" class="flex items-center justify-center px-6 hover:bg-blue-600 h-full">Đội hình</router-link>
            <router-link to="/genshin-impact/tier-list" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g4}" class="flex items-center justify-center px-6 hover:bg-blue-600 h-full">Xếp hạng</router-link>
            <router-link to="/genshin-impact/farming-guide" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g5}" class="flex items-center justify-center px-6 hover:bg-blue-600 h-full">Farm nguyên liệu</router-link>
            <router-link to="/genshin-impact/weapons" :class="{'bg-blue-600':counter.Path_Route.path==counter.Path_G.g6||
                                                                        counter.Path_Route.path==counter.Path_G.g7||
                                                                        counter.Path_Route.path==counter.Path_G.g8||
                                                                        counter.Path_Route.path==counter.Path_G.g9||
                                                                        counter.Path_Route.path==counter.Path_G.g10}" class="flex relative items-center justify-center px-6 hover:bg-blue-600 h-full gap-1 " @mouseover="counter.Hover_Genshin=2" @mouseleave="counter.Hover_Genshin=1">
                <p>Wiki</p>
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[12px]"/>
                <div v-show="counter.Hover_Genshin==2" class="absolute top-[50px] left-0 w-[155px] bg-blue-600 px-6">
                    <router-link to="/genshin-impact/weapons" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_G.g6}" class="flex items-center h-[50px]">Vũ khí</router-link>
                    <router-link to="/genshin-impact/artifacts" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_G.g7}" class="flex items-center h-[50px]">Thánh di vật</router-link>
                    <router-link to="/genshin-impact/elements" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_G.g8}" class="flex items-center h-[50px]">Nguyên tố</router-link>
                    <router-link to="/genshin-impact/cooking" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_G.g9}" class="flex items-center h-[50px]">Thực phẩm</router-link>
                    <router-link to="/genshin-impact/alchemy" :class="{'text-yellow-300':counter.Path_Route.path==counter.Path_G.g10}"  class="flex items-center h-[50px]">Thuốc</router-link>
                </div>
            </router-link>
        </div>
    </div>

    <!-- Danh cho mobile -->
    <div  class="fixed z-40 button-0 flex flex-col md:hidden " :class="{'min-h-screen grow':counter.Tab_Mobile==true}">
        <!-- Menu Honkai_Ghensin -->
        <div class="h-[50px] w-screen  flex items-center justify-between  pl-2 pr-5 shrink-0" v-bind:class="{'bg-[#64305f]':counter.Path_Route.path==counter.Path_H.h0||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h1||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h2||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h3||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h4||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h5||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h6||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h7||
                                                                                                                            counter.Path_Route.path==counter.Path_H.h8||
                                                                                                                            counter.Path_Route.path.split('/')[1]!='genshin-impact',' bg-[#2a529d]':counter.Path_Route.path==counter.Path_G.g0||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g1||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g2||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g3||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g4||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g5||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g6||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g7||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g8||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g9||
                                                                                                                                                                                        counter.Path_Route.path==counter.Path_G.g10||
                                                                                                                                                                                        counter.Path_Route.path.split('/')[1]=='genshin-impact'}">
            <p class="text-[18px] font-bold text-white">{{ counter.Data_Web[0].Ten_Web }}</p>
            <router-link to="/" class="flex items-center justify-center  bg-[#64305f] gap-3  h-full " v-show="counter.Path_Route.path==counter.Path_H.h0||
                                                                                                                counter.Path_Route.path==counter.Path_H.h1||
                                                                                                                counter.Path_Route.path==counter.Path_H.h2||
                                                                                                                counter.Path_Route.path==counter.Path_H.h3||
                                                                                                                counter.Path_Route.path==counter.Path_H.h4||
                                                                                                                counter.Path_Route.path==counter.Path_H.h5||
                                                                                                                counter.Path_Route.path==counter.Path_H.h6||
                                                                                                                counter.Path_Route.path==counter.Path_H.h7||
                                                                                                                counter.Path_Route.path==counter.Path_H.h8||
                                                                                                                counter.Path_Route.path.split('/')[1]!='genshin-impact'">
                <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
            </router-link>
            <router-link to="/genshin-impact" class="flex items-center justify-center gap-3  bg-[#2a529d] h-full w-[180px]" v-show="counter.Path_Route.path==counter.Path_G.g0||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g1||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g2||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g3||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g4||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g5||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g6||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g7||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g8||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g9||
                                                                                                                                counter.Path_Route.path==counter.Path_G.g10||
                                                                                                                                counter.Path_Route.path.split('/')[1]=='genshin-impact'">
                <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
            </router-link>
            <div class="flex items-center ">
                <font-awesome-icon icon="fa-solid fa-bars"  class="text-gray-300 text-[24px] cursor-pointer w-[25px]" v-show="counter.Tab_Mobile==false" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"/>
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-gray-300 text-[30px] cursor-pointer w-[25px]" v-show="counter.Tab_Mobile==true" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"/>
            </div>
        </div>

        <!-- Tab Menu Honkai_Ghensin -->
        <div v-if="counter.Path_Route.path==counter.Path_H.h0&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h1&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h3&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h4&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h5&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h6&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h7&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h8 && counter.Tab_Mobile==true||
                    counter.Path_Route.path.split('/')[1]!='genshin-impact'&& counter.Tab_Mobile==true" class="flex flex-col divide-y divide-[#2b3294] items-center bg-[#1c1e42]  w-screen h-full grow text-gray-200 font-semibold justify-evenly">
            <router-link to="/" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Nhân vật</router-link>
            <router-link to="/tier-list" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Xếp hạng</router-link>
            <router-link to="/farming-guide" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Farm Nguyên liệu</router-link>
            <router-link to="/light-cones" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Nón ánh sáng</router-link>
            <router-link to="/relics" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Di vật</router-link>
            <router-link to="/ornaments" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Nguyên liệu</router-link>
            <router-link to="/character-stats" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Chỉ số nhân vật</router-link>
            <router-link to="/light-cone-stats" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Chỉ số Nón ánh sáng</router-link>
            <router-link to="/genshin-impact" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center gap-3  h-[30px]  bg-[#303475] mx-1 w-full grow cursor-pointer" >
                <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
            </router-link>
        </div>
        <div v-if="counter.Path_Route.path==counter.Path_G.g0&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g1&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g2&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g3&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g4&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g5&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g6&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g7&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g8&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g9&& counter.Tab_Mobile==true||
                   counter.Path_Route.path==counter.Path_G.g10 && counter.Tab_Mobile==true||
                   counter.Path_Route.path.split('/')[1]=='genshin-impact'&& counter.Tab_Mobile==true" class="flex flex-col divide-y divide-[#2b3294] items-center bg-[#1c1e42]  w-screen h-full grow text-gray-200 font-semibold justify-evenly" >
            <!-- <router-link to="/" class="flex items-center justify-center px-6  h-full w-full grow">Trang chủ</router-link> -->
            <router-link to="/genshin-impact" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Nhân vật</router-link>
            <router-link to="/genshin-impact/builds" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Builds</router-link>
            <router-link to="/genshin-impact/teams" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Đội hình</router-link>
            <router-link to="/genshin-impact/tier-list" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Xếp hạng</router-link>
            <router-link to="/genshin-impact/farming-guide" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Farm Nguyên liệu</router-link>
            <router-link to="/genshin-impact/weapons" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Vũ khí</router-link>
            <router-link to="/genshin-impact/artifacts" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"  class="flex items-center justify-center px-6  h-full w-full grow">Thánh di vật</router-link>
            <router-link to="/genshin-impact/elements" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Nguyên tố</router-link>
            <router-link to="/genshin-impact/cooking" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Thực phẩm</router-link>
            <router-link to="/genshin-impact/alchemy" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center px-6  h-full w-full grow">Thuốc</router-link>
            <router-link to="/" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"  class="flex items-center justify-center gap-3    bg-[#303475]  w-full grow cursor-pointer" >
                <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
            </router-link>
        </div>
    </div>

    <!-- Dành cho máy tính bảng -->
    <div  class="hidden md:flex md:flex-col lg:hidden fixed z-30 button-0 " :class="{'min-h-screen grow':counter.Tab_Mobile==true}">
        <!-- Menu Honkai_Ghensin -->
        <div class="h-[50px] w-screen bg-[#0b1029] flex items-center justify-between shrink-0 pr-8" >
            <router-link to="/" v-show="counter.Path_Route.path==counter.Path_H.h0||
                                        counter.Path_Route.path==counter.Path_H.h1||
                                        counter.Path_Route.path==counter.Path_H.h2||
                                        counter.Path_Route.path==counter.Path_H.h3||
                                        counter.Path_Route.path==counter.Path_H.h4||
                                        counter.Path_Route.path==counter.Path_H.h5||
                                        counter.Path_Route.path==counter.Path_H.h6||
                                        counter.Path_Route.path==counter.Path_H.h7||
                                        counter.Path_Route.path==counter.Path_H.h8||
                                        counter.Path_Route.path.split('/')[1]!='genshin-impact'" class="flex h-full items-center">
                <p class=" flex items-center h-full text-[18px] font-bold text-white bg-[#64305f] px-3">{{ counter.Data_Web[0].Ten_Web }}</p>
                <div class="flex items-center justify-center  gap-3  h-full bg-[#64305f] px-3 " >
                    <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                    <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                    <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
                </div>
                <router-link to="/genshin-impact"  class="flex cursor-pointer items-center justify-center gap-3  h-[30px] w-[180px] hover:bg-[#303475] mx-1  rounded">
                    <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                    <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
                </router-link>
            </router-link>
            <router-link to="/" v-show="counter.Path_Route.path==counter.Path_G.g0||
                                        counter.Path_Route.path==counter.Path_G.g1||
                                        counter.Path_Route.path==counter.Path_G.g2||
                                        counter.Path_Route.path==counter.Path_G.g3||
                                        counter.Path_Route.path==counter.Path_G.g4||
                                        counter.Path_Route.path==counter.Path_G.g5||
                                        counter.Path_Route.path==counter.Path_G.g6||
                                        counter.Path_Route.path==counter.Path_G.g7||
                                        counter.Path_Route.path==counter.Path_G.g8||
                                        counter.Path_Route.path==counter.Path_G.g9||
                                        counter.Path_Route.path==counter.Path_G.g10||
                                        counter.Path_Route.path.split('/')[1]=='genshin-impact'" class="flex h-full items-center">
                <p class=" flex items-center h-full text-[18px] font-bold text-white  bg-[#2a529d] px-3">{{ counter.Data_Web[0].Ten_Web }}</p>
                <div class="flex items-center justify-center gap-3   bg-[#2a529d] h-full w-[180px]">
                    <img src="@/assets/logo-icon.png" class="w-[24px] h-[24px] rounded"/>
                    <p class="font-semibold text-gray-300 text-[15px] shrink-0">Genshin Impact</p>
                </div>
                <router-link to="/"  class="flex cursor-pointer items-center justify-center  gap-3   w-[240px] h-[30px] hover:bg-[#303475] mx-1  rounded">
                    <img src="@/assets/logo1.png" class="w-[24px] h-[24px] rounded"/>
                    <p class="font-semibold text-gray-200 text-[15px] shrink-0">Honkai: Star Rail</p>
                    <!-- <p class="flex items-center justify-center bg-[#009688] text-gray-300 rounded h-[18px] w-[35px] font-semibold text-[12px]">Mới</p> -->
                </router-link>
            </router-link>
            <div class="flex items-center ">
                <font-awesome-icon icon="fa-solid fa-bars"  class="text-gray-300 text-[24px] cursor-pointer" v-show="counter.Tab_Mobile==false" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"/>
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-gray-300 text-[30px] cursor-pointer" v-show="counter.Tab_Mobile==true" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"/>
            </div>
        </div>
        <!-- Tab Menu Honkai_Ghensin -->
        <div v-if="counter.Path_Route.path==counter.Path_H.h0&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h1&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h2&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h3&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h4&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h5&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h6&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h7&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_H.h8 && counter.Tab_Mobile==true||
                    counter.Path_Route.path.split('/')[1]!='genshin-impact'&& counter.Tab_Mobile==true" class="flex flex-col h-screen w-screen bg-[#1c1e42] cursor-pointer">
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <router-link to="/" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px]">Trang chủ</router-link>
                <router-link to="/characters" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px] border-[#2b3294] border-l-[1px] border-r-[1px]">Nhân vật</router-link>
                <router-link to="/tier-list" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 ">Xếp hạng</router-link>
            </div>
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <router-link to="/farming-guide" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Farm Nguyên liệu</router-link>
                <router-link to="/light-cones" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px] border-[#2b3294] border-l-[1px] border-r-[1px]">Nón ánh sáng</router-link>
                <router-link to="/relics" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 ">Di vật</router-link>
            </div>
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <router-link to="/ornaments" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Nguyên liệu</router-link>
                <router-link to="/character-stats" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px] border-[#2b3294] border-l-[1px] border-r-[1px]">Chỉ số nhân vật</router-link>
                <router-link to="/light-cone-stats" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Chỉ số Nón ánh sáng</router-link>
            </div>
        </div>

        <div v-if="counter.Path_Route.path==counter.Path_G.g0&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g1&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g2&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g3&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g4&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g5&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g6&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g7&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g8&& counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g9 && counter.Tab_Mobile==true||
                    counter.Path_Route.path==counter.Path_G.g10 && counter.Tab_Mobile==true||
                    counter.Path_Route.path.split('/')[1]=='genshin-impact'&& counter.Tab_Mobile==true" class="flex flex-col h-screen w-screen bg-[#1c1e42] cursor-pointer">
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <!-- <router-link to="/" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px]">Trang chủ</router-link> -->
                <router-link to="/genshin-impact/characters" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile"  class="flex items-center justify-center w-1/3 h-[52px] ">Nhân vật</router-link>
                <router-link to="/genshin-impact/builds" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 border-[#2b3294] border-l-[1px] border-r-[1px] ">Builds</router-link>
                <router-link to="/genshin-impact/teams" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Đội hình</router-link>
            </div>
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <!-- <router-link to="/Genshin/Teams" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Đội hình</router-link> -->
                <router-link to="/genshin-impact/tier-list" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px] ">Xếp hạng</router-link>
                <router-link to="/genshin-impact/farming-guide" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 border-[#2b3294] border-l-[1px] border-r-[1px]">Farm Nguyên liệu</router-link>
                <router-link to="/genshin-impact/weapons" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Vũ khí</router-link>
            </div>
            <div class="flex text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <!-- <router-link to="/Genshin/Weapons" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Vũ khí</router-link> -->
                <router-link to="/genshin-impact/artifacts" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 h-[52px] ">Thánh di vật</router-link>
                <router-link to="/genshin-impact/elements" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3 border-[#2b3294] border-l-[1px] border-r-[1px]">Nguyên tố</router-link>
                <router-link to="/genshin-impact/cooking" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/3">Thực phẩm</router-link>
            </div>
            <div class="flex justify-center items-center text-gray-200 font-semibold border-[#2b3294] border-b-[1px]">
                <!-- <router-link to="/genshin-impact/Cooking" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center w-1/2">Thực phẩm</router-link> -->
                <router-link to="/genshin-impact/alchemy" v-on:click="counter.Tab_Mobile=!counter.Tab_Mobile" class="flex items-center justify-center  h-[52px]  ">Thuốc</router-link>
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
    // destroyed () {
    // document.body.classList.remove('overflow-hidden')
    // },
    mounted:async function(){
    //   this.counter.Page_H_G();
    //   this.counter.Data_Web_all();
    //   this.counter.Data_Link_all();
    },
    methods:{
        add() {document.body.classList.add('overflow-hidden')},
        remove() {document.body.classList.remove('overflow-hidden')},
        scrollBehavior(){window.scrollTo(0,0);},
    }
    }
</script>

<!-- <style v-if="counter.Open_Scroll==2">
  body {
   overflow: default;
  }
</style> -->

<!-- <style v-if="true">
  body {
   overflow: hidden;
  }
</style> -->