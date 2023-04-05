<template>
    <!-- <div class="bg-[#1c1f46] w-[952px] h-[1200px] rounded mx-auto  mt-[120px] mb-[30px]"></div> -->
    <div class="bg-[#1c1f46]  rounded max-w-[952px] lg:min-w-[952px] shrink-0 grow md:mx-[30px] lg:mx-auto mt-[80px] lg:mt-[120px] mb-[30px] text-gray-200 px-[15px] py-[15px]">
        <div class="bg-[#282c61] w-full  rounded px-[15px] py-[15px]">
            <div class="flex relative ">
                <div class="flex flex-col sm:flex-row items-center gap-5 w-full">
                    <img :src="counter.domain_Backend+counter.Data_NV_one_h_g.Avatar" :style="counter.Data_NV_one_h_g.Mau_nen_BG" class=" w-[100px] h-[100px] rounded"/>
                    <div class="flex flex-col w-full gap-2">
                        <h1 class="text-gray-200 text-[22px] font-bold ">{{ counter.Data_NV_one_h_g.Ten }} Genshin Impact | Hướng Dẫn Build</h1>
                        <div class="flex text-gray-300 font-medium gap-2 w-full sm:max-w-[360px]">
                            <div class="flex w-1/2 bg-[#39409e] rounded justify-center items-center px-2 gap-1">
                                <img :src="counter.domain_Backend+counter.Data_NV_one_h_g.Icon_Vu_khi" class=" w-[26px] h-[26px]"/>
                                <p>{{ counter.Data_NV_one_h_g.Vu_khi }}</p>
                            </div>
                            <p class="flex bg-[#39409e] rounded justify-center items-center w-1/2 min-h-[40px] px-2">{{ counter.Data_NV_one_h_g.Vi_tri }}</p>
                        </div>
                    </div>
                </div>
                <img :src="counter.domain_Backend+counter.Data_NV_one_h_g.Icon_Nguyen_to" class="top-0 right-0 absolute w-[50px] h-[50px]" />
            </div>
            <pre class="whitespace-pre-line text-justify flex justify-center items-center h-full w-full bg-[#2f3370] px-2 py-1 text-gray-300 mt-[15px] rounded font-medium text-[16px]">{{ counter.Data_NV_one_h_g.Mo_ta }}</pre>
            <p>{{ counter.title }}</p>
            <div class="flex flex-col gap-3 mt-[25px]">
                <h2 class="text-[16px] font-semibold text-yellow-300">Nguyên Liệu Đột Phá {{ counter.Data_NV_one_h_g.Ten }}</h2>
                <div class="flex flex-col gap-3 ">
                    <div class="flex w-full flex-col md:flex-row gap-3 ">
                        <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Vat_lieu_nang_cap_nhan_vat.slice(0,3)"   class="flex items-center bg-[#384393] px-2 py-1 rounded gap-2 w-full md:w-[50%]">
                            <img :src="counter.domain_Backend+i.Avatar" class="w-[36px] h-[36px]" />
                            <p class="text-gray-300 font-medium">{{ i.Ten }}</p>
                        </div>
                    </div>
                    <div class="flex w-full flex-col md:flex-row gap-3 ">
                        <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Vat_lieu_nang_cap_nhan_vat.slice(3,6)"   class="flex items-center bg-[#384393] px-2 py-1 rounded gap-2 w-full md:w-[50%]">
                            <img :src="counter.domain_Backend+i.Avatar" class="w-[36px] h-[36px]" />
                            <p class="text-gray-300 font-medium">{{ i.Ten }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row w-full gap-3 mt-[25px] relative items-cneter justify-center">
                <div class="flex flex-col gap-3 w-full md:w-[50%]">
                    <h2 class="text-[16px] font-semibold text-yellow-300">Vũ Khí Tốt Nhất Cho {{ counter.Data_NV_one_h_g.Ten }}</h2>
                    <div class="flex flex-col relative gap-3 w-full">
                        <div v-for="(i,index) in counter.Data_NV_one_h_g.Link_NV_Vu_khi_tot_nhat_nhan_vat" @mouseover="counter.Show_Bang_VKTNNV=i.id" @mouseleave="counter.Show_Bang_VKTNNV=0" class="flex items-center bg-[#384393] px-3  rounded gap-3 w-full cursor-pointer">
                            <p class="flex w-[24px] h-[24px] justify-center items-center bg-[#5567ec] rounded font-semibold">{{ index+1 }}</p>
                            <img :src="counter.domain_Backend+i.Avatar" :style="i.Mau_nen_BG" class="w-[50px] h-[50px] rounded " />
                            <p class="text-gray-200 font-medium flex gap-2">{{ i.Ten }}<p v-show="i.R1_R5!=null" class="bg-[#5567ec] px-1 rounded text-[14px] ">{{ i.R1_R5 }}</p></p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-3 w-full md:w-[50%]">
                    <h2 class="text-[16px] font-semibold text-yellow-300">Thánh Di Vật Tốt Nhất Cho {{ counter.Data_NV_one_h_g.Ten }}</h2>
                    <div class="flex flex-col gap-3 w-full">
                        <div v-for="(i,index) in counter.Data_NV_one_h_g.Link_NV_Hien_vat_tot_nhat_nhan_vat_change"   class="flex relative items-center bg-[#384393] px-3  rounded gap-3 w-full">
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
            <div v-for="i in counter.Data_NV_one_h_g.So_lieu_thong_ke_tot_nhat" class="flex flex-col mt-[30px]">
                <h2 class="text-[16px] font-semibold text-yellow-300">Chỉ Số Tốt Nhất Cho {{ counter.Data_NV_one_h_g.Ten }}</h2>
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
            <a class="flex justify-end items-center gap-1 text-[#52c7b8] mt-[15px] cursor-pointer font-semibold text-[13px]" :href="counter.Data_NV_one_h_g.Link_Nguon" target="blank" >Cách Builds Nhân vật tại Genshin Impact Helper <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="mt-[4px]" /></a>

            <h2 class="text-[16px] font-semibold text-yellow-300 mt-[30px]">Ưu Tiên Thiên Phú {{ counter.Data_NV_one_h_g.Ten }}</h2>
            <div v-for="i in counter.Data_NV_one_h_g.Uu_tien_thien_phu" class="flex flex-col items-center justify-center bg-[#384393]  w-full rounded mt-[15px] px-2 py-2 gap-2">
                <div class="flex items-center gap-5">
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[20px] px-2 h-[20px] rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[0].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[0].split('---')[1] }}</p>
                    </div>
                    <p>></p>
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[20px] px-2 h-[20px] rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[1].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[1].split('---')[1] }}</p>
                    </div>
                    <p>></p>
                    <div class="flex items-center gap-1">
                        <p class="flex justify-center items-center min-w-[30px] px-2 h-[20px] rounded bg-[#232958] font-medium text-[15px]">{{ i.split('>')[2].split('---')[0] }}</p>
                        <p class="font-medium">{{ i.split('>')[2].split('---')[1] }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row  bg-[#384393] justify-center text-gray-100  rounded mt-[30px] items-center font-semibold">
            <div class="flex w-full justify-evenly">
                <p v-on:click=" Scrool_G('CC1');"  class="flex grow px-2 min-h-[50px]  items-center justify-center hover:bg-[#515db5] cursor-pointer  sm:rounded-l  shrink-0">Đội Hình</p>
                <p v-on:click=" Scrool_G('CC2');" class="flex grow px-2 min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer  shrink-0">Thiên Phú</p>
            </div>
            <div class="flex w-full justify-evenly">
                <p v-on:click=" Scrool_G('CC3');" class="flex grow px-2 min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer  shrink-0">Thiên Phú Cố Định</p>
                <p v-on:click=" Scrool_G('CC4');" class="flex grow px-2 min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer  shrink-0">Cung Mệnh</p>
            </div>
            <div class="flex w-full justify-evenly">
                <p v-on:click=" Scrool_G('CC5');" class="flex grow px-2 min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer  shrink-0">Đột Phá</p>
                <p v-on:click=" Scrool_G('CC6');" class="flex grow px-2 min-h-[50px] items-center justify-center hover:bg-[#515db5] cursor-pointer  sm:rounded-r  shrink-0">Video</p>
            </div>
        </div>
        
        <div id="CC1" class="flex flex-col mt-[30px] ">
            <div class="flex text-gray-200 text-[20px] font-bold gap-1"><h2>Đội Hình Tốt Nhất Cho {{ counter.Data_NV_one_h_g.Ten }}</h2></div>
            <div class="flex flex-col  mt-[10px] flex-wrap w-full gap-3 justify-center items-center ">
                <div class="flex flex-col  gap-3 w-full justify-center items-center">
                    <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat" class="flex flex-col bg-[#2b326a] min-w-[75%] rounded  ">
                        <p class="flex justify-center items-center  bg-[#3c468c] rounded-t min-h-[30px] font-medium">{{ i.Ten_doi }}</p>
                        <div class="flex px-2 py-2 justify-between">
                            <router-link :to="'/genshin-impact/characters/'+j.URL_Ten" v-on:click="counter.Ten_NV_g=j.URL_Ten; counter.id_NV_g=j.id; counter.F_Thong_tin_nhan_vat_one_g();" v-for="j in i['Chi_tiet_thanh_vien_doi']"  class="flex flex-col relative items-center cursor-pointer ">
                                <div @mouseover="counter.Show_ten_TVD=j.id + i.id" @mouseleave="counter.Show_ten_TVD=0"  class="flex relative px-2 py-2">
                                    <img :src="j.Avatar" class=" w-[50px] h-[50px] duration-300 bg-gradient-to-t from-yellow-200 to-yellow-700 rounded"/>
                                    <div class="flex w-[20px] h-[20px] rounded-full justify-center items-center absolute top-0 left-0 bg-[#1426b1]">
                                        <img :src="j.Icon_Nguyen_to" class=" w-[16px] h-[16px]"/>
                                    </div>
                                </div>
                                <p class="font-semibold  text-[12px]">{{ j.Vi_tri }}</p>
                                <p v-show="counter.Show_ten_TVD==j.id + i.id" class="absolute bottom-[80px] bg-[#4d5fc4] rounded font-semibold px-2 py-1 text-[14px] whitespace-nowrap">{{ j.Ten }}</p>
                            </router-link>
                        </div>
                    </div>
                    <!-- <p>{{ counter.Data_NV_one_h }}</p> -->
                </div>
            </div>
        </div>
        <div  class="flex flex-col mt-[30px] ">
            <!-- Tài năng -->
            <div id="CC2" class="flex text-gray-200 text-[20px] font-bold gap-1"><h2>Thiên Phú</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h_g.Ten }}</p></div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Tai_nang_nhan_vat" class="flex flex-col items-center sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center w-full  sm:w-[150px] gap-2">
                        <img :src="counter.domain_Backend+i.Avatar"  class="w-[70px] h-[70px] px-2 py-2 bg-[#394499]  rounded-full"/>
                        <h3 class="text-[18px] font-bold text-gray-300 hitespace-nowrawp">{{ i.Ten }}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{ i.Tieu_de }}</h4>
                        <p class="font-medium whitespace-pre-line ">{{ i.Noi_dung }}</p>
                    </div>
                </div>
            </div>
            <!-- Thụ động -->
            <div id="CC3" class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px]"><h2>Thiên Phú Cố Định</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h_g.Ten }}</p></div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Thu_dong_nhan_vat" class="flex flex-col items-center sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center w-full  sm:w-[150px] gap-2">
                        <img :src="counter.domain_Backend+i.Avatar" class="w-[70px] h-[70px] px-2 py-2 bg-[#394499] rounded-full"/>
                        <h3 class="text-[18px] font-bold text-gray-300 hitespace-nowrawp">{{ i.Ten }}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{ i.Noi_dung.split('---')[0] }}</h4>
                        <p class="font-medium whitespace-pre-line">{{ i.Noi_dung.split('---')[1] }}</p>
                    </div>
                </div>
            </div>
            <!-- Chòm sao Diluc -->
            <div id="CC4" class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px]"><h2>Cung Mệnh</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h_g.Ten }}</p></div>
            <div class="flex flex-col w-full mt-[15px] gap-[15px]">
                <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Chom_sao_nhan_vat" class="flex flex-col items-center sm:flex-row  bg-[#262d65] rounded w-full px-[20px] py-[20px] gap-[35px] ">
                    <div class="flex flex-col items-center w-full  sm:w-[150px] gap-2">
                        <img :src="counter.domain_Backend+i.Avatar" class="w-[70px] h-[70px] px-2 py-2 bg-[#394499] rounded-full"/>
                        <h3 class="text-[18px] font-bold text-gray-300 hitespace-nowrawp">{{ i.Ten }}</h3>
                    </div>
                    <div class="flex flex-col w-full gap-2">
                        <h4 class="text-[18px] text-gray-200 font-bold ">{{ i.Noi_dung.split('---')[0] }}</h4>
                        <p class="font-medium whitespace-pre-line">{{ i.Noi_dung.split('---')[1] }}</p>
                    </div>
                </div>
            </div>
            <!-- Chi phí thăng thiên Diluc -->
            <div id="CC5" class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px]"><h2>Số lượng Nguyên Liệu Đột Phá</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h_g.Ten }}</p></div>
            <div class="flex flex-col w-full bg-[#262f61] h-full mt-[15px]">
                <div class="flex flex-col w-full ">
                    <div v-for="i in counter.Data_NV_one_h_g.Link_NV_Chi_phi_thang_thien" class="flex w-full border-b-[1px] border-[#4150a5] min-h-[70px] sm:min-h-[80px]  px-2  items-center gap-2">
                        <p class=" flex justify-center ite w-[10%]">{{ i.Cap_do }}</p>
                        <div class="flex flex-col relative w-[14%] justify-center items-center  ">
                            <img src="@/assets/mora.webp" class=" w-[45px] h-[49px] md:w-[60px] md:h-[64px]  bg-[#5d6bb7] rounded"/>
                            <div class="absolute w-[45px] md:w-[60px] bottom-0  cursor-pointer">
                                <div class="relative flex justify-center items-center w-[45px] md:w-[60px]">
                                    <div class="w-[45px] md:w-[60px] bg-[#232535] hover:bg-[#101118] duration-300  h-[20px] md:h-[25px] rounded-b opacity-60"></div>
                                    <p class="absolute bottom-[2px] text-[10px]  md:text-[12px]">{{ i.So_tien }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-[65%] flex gap-2 grow justify-evenly">
                            <div class="flex w-[19%]  items-center gap-2">
                                <div v-show="i.Vat_lieu_1.split('---')[0]!=''" class="flex justify-center items-center relative">
                                    <img :src="counter.domain_Backend+i.Avatar_VL1" :style="i.Mau_nen_BG1" class="relative w-[45px] h-[49px] md:min-w-[60px] md:h-[64px]  rounded " />
                                    <div class="absolute w-[45px] md:w-[60px] bottom-0 cursor-pointer">
                                        <div class="relative flex justify-center items-center w-[45px] md:w-[60px]">
                                            <div class="w-[45px] md:w-[60px] bg-[#232535] hover:bg-[#101118] duration-300  h-[20px] md:h-[25px] rounded-b opacity-60"></div>
                                            <p class="absolute bottom-[2px] text-[10px]  md:text-[12px]">{{ i.Vat_lieu_1.split('---')[0] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-200 font-medium hidden sm:flex text-[14px]">{{ i.Vat_lieu_1.split('---')[1] }}</p>
                            </div>
                            <div class="flex w-[19%]  items-center gap-2">
                                <div v-show="i.Vat_lieu_2.split('---')[0]!=''" class="flex justify-center items-center relative">
                                    <img :src="counter.domain_Backend+i.Avatar_VL2" :style="i.Mau_nen_BG2" class="relative w-[45px] h-[49px] md:min-w-[60px] md:h-[64px]  rounded " />
                                    <div class="absolute w-[45px] md:w-[60px] bottom-0 cursor-pointer">
                                        <div class="relative flex justify-center items-center w-[45px] md:w-[60px]">
                                            <div class="w-[45px] md:w-[60px] bg-[#232535] hover:bg-[#101118] duration-300  h-[20px] md:h-[25px] rounded-b opacity-60"></div>
                                            <p class="absolute bottom-[2px] text-[10px]  md:text-[12px]">{{ i.Vat_lieu_2.split('---')[0] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-200 font-medium hidden sm:flex text-[14px]">{{ i.Vat_lieu_2.split('---')[1] }}</p>
                            </div>
                            <div class="flex w-[19%]  items-center gap-2">
                                <div v-show=" i.Vat_lieu_3.split('---')[0]!=''" class="flex  items-center relative">
                                    <img :src="counter.domain_Backend+i.Avatar_VL3" :style="i.Mau_nen_BG3" class="relative w-[45px] h-[49px] md:min-w-[60px] md:h-[64px]  rounded " />
                                    <div class="absolute w-[45px] md:w-[60px] bottom-0 cursor-pointer">
                                        <div class="relative flex justify-center items-center w-[45px] md:w-[60px]">
                                            <div class="w-[45px] md:w-[60px] bg-[#232535] hover:bg-[#101118] duration-300  h-[20px] md:h-[25px] rounded-b opacity-60"></div>
                                            <p class="absolute bottom-[2px] text-[10px]  md:text-[12px]">{{ i.Vat_lieu_3.split('---')[0] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-200 font-medium hidden sm:flex text-[14px]">{{ i.Vat_lieu_3.split('---')[1] }}</p>
                            </div>
                            <div  class="flex w-[19%] justify-center items-center gap-2">
                                <div v-show=" i.Vat_lieu_4.split('---')[0]!=''" class="flex justify-center items-center relative">
                                    <img :src="counter.domain_Backend+i.Avatar_VL4" :style="i.Mau_nen_BG4" class="relative w-[45px] h-[49px] md:min-w-[60px] md:h-[64px]  rounded " />
                                    <div class="absolute w-[45px] md:w-[60px] bottom-0 cursor-pointer">
                                        <div class="relative flex justify-center items-center w-[45px] md:w-[60px]">
                                            <div class="w-[45px] md:w-[60px] bg-[#232535] hover:bg-[#101118] duration-300  h-[20px] md:h-[25px] rounded-b opacity-60"></div>
                                            <p class="absolute bottom-[2px] text-[10px]  md:text-[12px]">{{ i.Vat_lieu_4.split('---')[0] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-200 font-medium hidden sm:flex text-[14px]">{{ i.Vat_lieu_4.split('---')[1] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video Builds Nhân vật -->
            <div id="CC6" class="flex text-gray-200 text-[20px] font-bold gap-1 mt-[30px]"><h2>Video cách Builds</h2><p class="text-yellow-400">{{ counter.Data_NV_one_h_g.Ten }}</p></div>
            <div class="flex flex-col w-full bg-[#262f61] h-[500px] mt-[15px]">
                <iframe :src="counter.Data_NV_one_h_g.URL_Video_Builds" frameborder="0" class="w-full h-full"></iframe>
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
    // created(){
    //     document.title = this.counter.Ten_NV_g+' Genshin Impact | Hướng Dẫn Build'
    // },
    data() {
    return {
      clbg: null,
      title: "",
      
    }
    },
    metaInfo() {
        return {
            title: this.counter.title,
            // ...
        };
    },
    mounted:async function(){
        this.counter.Page_H_G();
        this.counter.Show_Bang_HVTNNV_C=0;
        this.counter.Show_Bang_VKTNNV=0;
        this.counter.Ten_NV_g = this.$route.params.user;
        this.counter.F_Thuoc_tinh_tim_kiem_all_g();
        await this.counter.F_Thong_tin_nhan_vat_all_g();
        await this.counter.F_Thong_tin_nhan_vat_one_g();
        // this.clbg='bg-lime-600',
        document.title = this.counter.Data_NV_one_h_g.Ten +' Genshin Impact | Hướng Dẫn Build';

    },
    methods:{
        Scrool_G(aa){
            const el = document.getElementById(aa);
            el.scrollIntoView();
        }
    },
    components: {
    },
    // metaInfo() {
    //     return {
    //         title: this.counter.Data_NV_one_h_g.Ten + ' Genshin Impact | Hướng Dẫn Build',
    //     }
    // },
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
  


