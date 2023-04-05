import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend: 'https://admin.honkairail.wiki',
      // domain_Backend: 'http://127.0.0.1:8000/',
      domain_Frontend: 'https://www.webtoday.store/', Language: 'vi', Dark: true, Table_Language: false, Table_Language_sm: false, Open_Dark: 'darkk', Table_Nav: 1, Table_Sidebar: 1, Path_Route: useRoute(),
      Link_Path_Route: { "Home": "/", "Web_Template": { Sell_Accounts: "/Product/SellAccounts", Construction_Industry: "/Product/ConstructionIndustry", Cosmetics_Industry: "/Product/CosmeticsIndustry", Fashion_Industry: "/Product/FashionIndustry", Electronic_Industry: "/Product/ElectronicIndustry", Food_Industry: "/Product/FoodIndustry" }, Introduce: "/Introduce", Contact: "/Contact" },
      Link_Image: ["https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg", "https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg", "https://d1hjkbq40fs2x4.cloudfront.net/2020-01-09/files/canon-landscape-photography-preparation-tips_1968-1s.jpg"],
      Oder_Image: 0, count: 0, Table_Informations: false, Image_Language: '/assets/vn-2ac15179.svg', Text_Array: ['Facebook', 'Zalo', 'Gọi điện'], class_1: 'bg-gray-100 w-[15px] h-[5px] rounded opacity-50',
      class_2: 'bg-gray-100 w-[15px] h-[5px] rounded opacity-100', Data_List_Product: [{ 'Category_Industry': '' }], Data_List_Product_Home: [], Loading: 1, Search: '', Show_Search: 1, Search_ListProduct_Today1: null, Open_Scroll: 2,

      Menu_Honkai_Genshin: 'Honkai', Desktop_Mobile_Tablet: 2, Tab_Mobile: false, Tab_Mobile_Honkai_Ghensin: true, Hover_Honkai: 1, Hover_Genshin: 1, Information_Icon: 0,
      thai: 1, BG_icon_So_sao: 0, BG_icon_Nguyen_to: 0, BG_icon_Nguyen_chat: 0, KQ_test: '', title: 'Honkai',
      Path_H: {
        h0: '/',
        h1: '/characters',
        h2: '/tier-list',
        h3: '/farming-guide',
        h4: '/character-stats',
        h5: '/light-cone-stats',
        h6: '/light-cones',
        h7: '/relics',
        h8: '/ornaments',
      },
      Path_G: {
        g0: '/genshin-impact',
        g1: '/genshin-impact/characters',
        g2: '/genshin-impact/builds',
        g3: '/genshin-impact/teams',
        g4: '/genshin-impact/tier-list',
        g5: '/genshin-impact/farming-guide',
        g6: '/genshin-impact/weapons',
        g7: '/genshin-impact/artifacts',
        g8: '/genshin-impact/elements',
        g9: '/genshin-impact/cooking',
        g10: '/genshin-impact/alchemy'
      },

      // Honkai
      Ten_NV: '', id_NV: '', Nguyen_to_NV: '', Data_TTTK_all: [{ So_sao: [] }, { Nguyen_to: [] }, { Nguyen_chat: [] }], Data_NV_all: [1, 2, 3],
      Data_NV_one: { So_lieu_thong_ke_tot_nhat: 'Cát:---nạp năng lượng\r\nCốc:---Anemo DMG\r\nVòng tròn:---Tỷ lệ CRIT / CRIT DMG\r\nChỉ số phụ:---Nạp Năng lượng>Tỷ lệ CRIT / Sát thương CRIT>ATK%', Tong_so_lieu_thong_ke: '---', Uu_tien_thien_phu: "Q---Kỹ năng Nộ>E---Kỹ năng Nộ>ATK---Kỹ năng Nộ" },
      Data_VLNCNV_one: '', Search_NV: '', Filter_NV: ['', '', ''], Data_NV_one_h: { So_lieu_thong_ke_tot_nhat: [], Tong_so_lieu_thong_ke: [], Uu_tien_thien_phu: [] },
      Data_VKTNNV_one: [{ 'Noi_dung': 'Đức hạnh của người bảo vệ___Tôi tạo một biến có tên là fruit và gán nó vào một chuỗi raspberry, sau đó tôi truyền fruit đến một hàm tạo và trả về một hàm được gọi là logger hàm này sẽ ghi lại quả khi được gọi.Khi tôi gọi hàm đó, tôi nhận được đầu ra console.log của raspberry như mong đợi.' }],
      Show_Bang_VKTNNV: 0, Data_HVTNNV_one: [[], [], [], [], []], Show_Bang_HVTNNV: 0, Show_Bang_HVTNNV_C: 0, Show_ten_TVD: 0, Show_ten_HDCT: 0,
      Data_SLTKTNNV_one: '', Data_KNNV_one: '', Data_Eidolon_NV_one: '', Data_DVNV_one: '', Data_DSCB_all: '', Data_HDCT_all: '', Data_CSHNAS_all: '', Data_NAS_all: '', Data_XL_all: '', Data_DTT_all: '',
      Doi_NV: [], Search_Honkai: '',
      Search_NAS_H: '', Filter_NAS_H: ['', ''],
      Search_XL: '', Search_DTT: '', Search_DSCB_H: '',

      // Genshin
      Data_TTTK_all_g: [{ So_sao: [] }, { Nguyen_to: [] }, { Vu_khi: [] }], Show_Ten_TTTK: 0, Data_NV_all_g: '', Search_NV_g: '', Filter_NV_g: ['', '', ''], BG_icon_So_sao_g: 0, BG_icon_Nguyen_to_g: 0, BG_icon_Vu_khi: 0,
      Ten_NV_g: '', id_NV_g: '', Data_NV_one_h_g: {
        So_lieu_thong_ke_tot_nhat: [], Tong_so_lieu_thong_ke: [], Uu_tien_thien_phu: [], Link_NV_Vat_lieu_nang_cap_nhan_vat: ['', '', '', '', '', '']
      }, Data_DSCB_all_g: '',
      Search_VK_g: '', Filter_VK_g: ['', ''], Data_VK_all_g: '', Show_Bang_VK_g: 0,
      Search_HV_g: '', Filter_HV_g: [''],
      Data_GLNT_all: '', Data_PUNT_all: '', Data_CHNT_all: '',
      Data_TANVDB_all: '', Data_SLTK_all: '', Data_CLTP_all: '', Data_HSTA_all: '', Data_TPSB_all: '', Show_ten_NV: 0,
      Data_TGK_all: '', Search_Genshin: '',
      Data_BD_all: '', Search_TN_NV_VK_g: '', Search_DSCB: '',
      Data_TLTTNV_all_g: '', Data_TLTNNV_all_g: '', Data_NLTCVKNV_all_g: '', Data_DTNNV_all_g: '', Search_DHTN_g: '', Chia_cot_team: '',

      Data_TT_page: { Data_page: [[], []] }, Page_N: 1, Name_New: '', Data_New: {
        "id": 1,
        "Ten": "Mạnh mẽ",
        "URL": "Manh-me",
        "Avatar": "/upload/News/avatar/web-design-background.png",
        "Mau_nen_BG": "bg-gradient-to-t from-violet-400 to-violet-500",
        "Muc_so_1": "1.Chim sẻ",
        "Noi_dung_1": "ádfdsgsdfgsgsdgsdgsgsg",
        "Muc_so_2": "Chim ri",
        "Noi_dung_2": "kgakgdgaskgdsajkgd",
        "Muc_so_3": null,
        "Noi_dung_3": "",
        "Muc_so_4": null,
        "Noi_dung_4": "",
        "Muc_so_5": null,
        "Noi_dung_5": "",
        "Muc_so_6": null,
        "Noi_dung_6": ""
      },
      Data_Web: [
        {
          "id": 1,
          "Nguoi_so_huu": "Pham Hoang",
          "Email": null,
          "So_DT": "0866.558.626",
          "Ten_Web": "HONKAI.COM",
          "Link_URL": null
        }
      ],
      Data_link: '', Data_link_Sitemap: '', th: 0,
    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
    // Menu_Honaki_Ghenshin(){
    //   if(this.counter.Menu_Honkai_Genshin){
    //     this.Menu_Honkai_Genshin='Honkai'
    //   }
    //   else{
    //     this.Menu_Honkai_Genshin='Honkai'
    //   }
    // },
    // Tin_tuc /////////////////////
    async Tin_tuc_page() {
      this.Data_TT_page = await axios({ method: 'get', url: this.domain_Backend + '/Tin_tuc_page?Ten_page=' + this.Page_N });
      this.Data_TT_page = await this.Data_TT_page.data;
    },
    async Data_New() {
      this.Data_New = this.Data_TT_page.Data_all.find(x => x.Ten === this.Name_New);
    },
    async Data_Web_all() {
      this.Data_Web = await axios({ method: 'get', url: this.domain_Backend + '/Thong_tin_trang_Web_all' });
      this.Data_Web = await this.Data_Web.data;
    },
    async Data_Link_all() {
      this.Data_Link = await axios({ method: 'get', url: this.domain_Backend + '/Link_URL_all' });
      this.Data_Link = await this.Data_Link.data;
    },
    async Data_link_Sitemap_all() {
      this.Data_link_Sitemap = await axios({ method: 'get', url: this.domain_Backend + '/Link_SiteMap_all' });
      this.Data_link_Sitemap = await this.Data_link_Sitemap.data;
    },
    //////////////////
    Page_H_G() {
      let test_path = '/Genshin'
      this.KQ_test = this.Path_Route.path.includes(test_path);
      if (this.KQ_test == true) { this.Menu_Honkai_Genshin = 'Genshin' } else { this.Menu_Honkai_Genshin = 'Honkai' };
    },
    // Honkai ///////////////////////////////////////////////////////////////////////////////////

    async F_Thuoc_tinh_tim_kiem_all() {
      this.Data_TTTK_all = await axios({ method: 'get', url: this.domain_Backend + '/Thuoc_tinh_tim_kiem_all' });
      this.Data_TTTK_all = await this.Data_TTTK_all.data;
    },
    async F_Thong_tin_nhan_vat_all() {
      // this.Data_NV_all = await axios({ method: 'get', url: this.domain_Backend + '/Thong_tin_nhan_vat_all' });
      this.Data_NV_all = await axios({ method: 'get', url: this.domain_Backend + '/Search_NV?search=' + this.Search_NV });
      this.Data_NV_all = await this.Data_NV_all.data;
    },
    async F_Filter_NV() {
      // this.domain_Backend = '';
      this.Search_NV = '';
      this.Data_NV_all = await axios({ method: 'get', url: this.domain_Backend + '/Filter_NV?' + this.Filter_NV[0] + this.Filter_NV[1] + this.Filter_NV[2] });
      this.Data_NV_all = await this.Data_NV_all.data;
    },

    async F_Thong_tin_nhan_vat_one() {
      this.Data_NV_one_h = await axios({ method: 'get', params: { Ten_NV: this.Ten_NV }, url: this.domain_Backend + '/Thong_tin_nhan_vat_one' });
      this.Data_NV_one_h = await this.Data_NV_one_h.data;
      this.id_NV = await this.Data_NV_one_h.id;

      for (let i = 0; i < this.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat.length; i++) {
        this.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat[i]['Chi_tiet_thanh_vien_doi'] = [];
        for (let j = 0; j < this.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat[i].Ten_thanh_vien_doi.split('---').length; j++) {
          let user = this.Data_NV_all.find(x => x.Ten === this.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat[i].Ten_thanh_vien_doi.split('---')[j]);
          // let user = 'thg';
          this.Data_NV_one_h.Link_NV_Doi_tot_nhat_nhan_vat[i]['Chi_tiet_thanh_vien_doi'].push(user);
        }
      }
    },
    async F_Ban_dung_all() {
      this.Data_BD_all = await axios({ method: 'get', url: this.domain_Backend + '/Ban_dung_all_genshin' });
      this.Data_BD_all = await this.Data_BD_all.data;
    },
    async F_Vat_lieu_nang_cap_nhan_vat_one() {
      this.Data_VLNCNV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Vat_lieu_nang_cap_nhan_vat_one' });
      this.Data_VLNCNV_one = await this.Data_VLNCNV_one.data;
    },
    // F_Phu_NV(y) {
    //   this.Nguyen_to_NV = this.Data_TTTK_all['Nguyen_chat'].find(x => x.Ten === y);
    // },
    async F_Vu_khi_tot_nhat_nhan_vat() {
      this.Data_VKTNNV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Vu_khi_tot_nhat_nhan_vat_one' });
      this.Data_VKTNNV_one = await this.Data_VKTNNV_one.data;
    },
    async F_Hien_vat_tot_nhat_nhan_vat() {
      this.Data_HVTNNV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Hien_vat_tot_nhat_nhan_vat_one' });
      this.Data_HVTNNV_one = await this.Data_HVTNNV_one.data;
    },
    async F_Ki_nang_nhan_vat() {
      this.Data_KNNV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Ki_nang_nhan_vat_one' });
      this.Data_KNNV_one = await this.Data_KNNV_one.data;
    },
    async F_Eidolon_nhan_vat() {
      this.Data_Eidolon_NV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Eidolon_nhan_vat_one' });
      this.Data_Eidolon_NV_one = await this.Data_Eidolon_NV_one.data;
    },
    async F_Dau_vet_nhan_vat() {
      this.Data_DVNV_one = await axios({ method: 'get', params: { id_NV: this.id_NV }, url: this.domain_Backend + '/Dau_vet_nhan_vat_one' });
      this.Data_DVNV_one = await this.Data_DVNV_one.data;
    },
    async F_Danh_sach_cap_bac_all() {
      this.Data_DSCB_all = await axios({ method: 'get', url: this.domain_Backend + '/Danh_sach_cap_bac_all?search=' + this.Search_DSCB_H });
      this.Data_DSCB_all = await this.Data_DSCB_all.data;

      for (let i = 0; i < this.Data_DSCB_all.length; i++) {
        this.Data_DSCB_all[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_DSCB_all[i].Danh_sach_nhan_vat.split('---').length; j++) {
          try {
            let user = this.Data_NV_all.find(x => x.Ten === this.Data_DSCB_all[i].Danh_sach_nhan_vat.split('---')[j]);
            this.Data_DSCB_all[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
          }
          catch {
            console.log('Error')
          }
        }
      }
    },
    async F_Huong_dan_canh_tac_all() {
      this.Data_HDCT_all = await axios({ method: 'get', url: this.domain_Backend + '/Huong_dan_canh_tac_all?search=' + this.Search_Honkai });
      this.Data_HDCT_all = await this.Data_HDCT_all.data;

      for (let i = 0; i < this.Data_HDCT_all.length; i++) {
        this.Data_HDCT_all[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_HDCT_all[i].Danh_sach_nhan_vat.split('---').length; j++) {
          let user = this.Data_NV_all.find(x => x.Ten === this.Data_HDCT_all[i].Danh_sach_nhan_vat.split('---')[j]);
          this.Data_HDCT_all[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
        }
      }
    },
    async F_Non_anh_sang_Search() {
      this.Data_NAS_all = await axios({ method: 'get', url: this.domain_Backend + '/Non_anh_sang_all_Search?search=' + this.Search_NAS_H });
      this.Data_NAS_all = await this.Data_NAS_all.data;
    },
    async F_Non_anh_sang_Filter() {
      this.Data_NAS_all = await axios({ method: 'get', url: this.domain_Backend + '/Non_anh_sang_all_Filter?' + this.Filter_NAS_H[0] + this.Filter_NAS_H[1] });
      this.Data_NAS_all = await this.Data_NAS_all.data;
    },
    async F_Xa_loi() {
      this.Data_XL_all = await axios({ method: 'get', url: this.domain_Backend + '/Xa_loi_all?search=' + this.Search_XL });
      this.Data_XL_all = await this.Data_XL_all.data;
    },
    async F_Do_trang_tri() {
      this.Data_DTT_all = await axios({ method: 'get', url: this.domain_Backend + '/Do_trang_tri_all?search=' + this.Search_DTT });
      this.Data_DTT_all = await this.Data_DTT_all.data;
    },

    // Genshin ///////////////////////////////////////////////////////////////////////////////////

    async F_Thuoc_tinh_tim_kiem_all_g() {
      this.Data_TTTK_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Thuoc_tinh_tim_kiem_all_genshin' });
      this.Data_TTTK_all_g = await this.Data_TTTK_all_g.data;
    },
    async F_Thong_tin_nhan_vat_all_g() {
      this.Data_NV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Search_NV_genshin?search=' + this.Search_NV_g });
      this.Data_NV_all_g = await this.Data_NV_all_g.data;
    },
    async F_Filter_NV_g() {
      // this.domain_Backend = '';
      this.Search_NV_g = '';
      this.Data_NV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Filter_NV_genshin?' + this.Filter_NV_g[0] + this.Filter_NV_g[1] + this.Filter_NV_g[2] });
      this.Data_NV_all_g = await this.Data_NV_all_g.data;
    },
    async F_Thong_tin_nhan_vat_one_g() {
      this.Data_NV_one_h_g = await axios({ method: 'get', params: { Ten_NV: this.Ten_NV_g }, url: this.domain_Backend + '/Thong_tin_nhan_vat_one_genshin' });
      this.Data_NV_one_h_g = await this.Data_NV_one_h_g.data;
      this.id_NV = await this.Data_NV_one_h_g.id;

      for (let i = 0; i < this.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat.length; i++) {
        this.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat[i]['Chi_tiet_thanh_vien_doi'] = [];
        for (let j = 0; j < this.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat[i].Ten_thanh_vien_doi.split('---').length; j++) {
          let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat[i].Ten_thanh_vien_doi.split('---')[j]);
          // let user = 'thg';
          this.Data_NV_one_h_g.Link_NV_Doi_tot_nhat_nhan_vat[i]['Chi_tiet_thanh_vien_doi'].push(user);
        }
      }

    },
    async F_Danh_sach_cap_bac_all_g() {
      this.Data_DSCB_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Danh_sach_cap_bac_all_genshin?search=' + this.Search_DSCB });
      this.Data_DSCB_all_g = await this.Data_DSCB_all_g.data;

      for (let i = 0; i < this.Data_DSCB_all_g.length; i++) {
        this.Data_DSCB_all_g[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_DSCB_all_g[i].Danh_sach_nhan_vat.split('---').length; j++) {
          try {
            let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_DSCB_all_g[i].Danh_sach_nhan_vat.split('---')[j]);
            this.Data_DSCB_all_g[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
          }
          catch {
            console.log('Error')
          }
        }
      }
    },
    async F_Tai_lieu_tai_nang_NV_all_g() {
      this.Data_TLTNNV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Tai_lieu_tai_nang_NV_all?search=' + this.Search_TN_NV_VK_g });
      this.Data_TLTNNV_all_g = await this.Data_TLTNNV_all_g.data;

      for (let i = 0; i < this.Data_TLTNNV_all_g.length; i++) {
        this.Data_TLTNNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_TLTNNV_all_g[i].Danh_sach_nhan_vat.split('---').length; j++) {
          let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TLTNNV_all_g[i].Danh_sach_nhan_vat.split('---')[j]);
          this.Data_TLTNNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
        }
      }
    },
    async F_Tai_lieu_thang_thien_NV_all_g() {
      this.Data_TLTTNV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Tai_lieu_thang_thien_NV_all?search=' + this.Search_TN_NV_VK_g });
      this.Data_TLTTNV_all_g = await this.Data_TLTTNV_all_g.data;

      for (let i = 0; i < this.Data_TLTTNV_all_g.length; i++) {
        this.Data_TLTTNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_TLTTNV_all_g[i].Danh_sach_nhan_vat.split('---').length; j++) {
          let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TLTTNV_all_g[i].Danh_sach_nhan_vat.split('---')[j]);
          this.Data_TLTTNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
        }
      }
    },
    async F_Nguyen_lieu_thang_cap_VK_NV_all_g() {
      this.Data_NLTCVKNV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Nguyen_lieu_thang_cap_VK_all?search=' + this.Search_TN_NV_VK_g });
      this.Data_NLTCVKNV_all_g = await this.Data_NLTCVKNV_all_g.data;

      for (let i = 0; i < this.Data_NLTCVKNV_all_g.length; i++) {
        this.Data_NLTCVKNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_NLTCVKNV_all_g[i].Danh_sach_nhan_vat.split('---').length; j++) {
          let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_NLTCVKNV_all_g[i].Danh_sach_nhan_vat.split('---')[j]);
          this.Data_NLTCVKNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
        }
      }
    },
    async F_Doi_tot_nhat_nhan_vat_all_g() {
      this.Data_DTNNV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Doi_tot_nhat_nhan_vat_all?search=' + this.Search_DHTN_g });
      this.Data_DTNNV_all_g = await this.Data_DTNNV_all_g.data;

      for (let i = 0; i < this.Data_DTNNV_all_g.length; i++) {
        this.Data_DTNNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'] = [];
        for (let j = 0; j < this.Data_DTNNV_all_g[i].Ten_thanh_vien_doi.split('---').length; j++) {
          let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_DTNNV_all_g[i].Ten_thanh_vien_doi.split('---')[j]);
          this.Data_DTNNV_all_g[i]['Chi_tiet_danh_sach_nhan_vat'].push(user);
        }
      }
    },
    async F_Search_VK_g() {
      this.Data_VK_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Search_VK_genshin?search=' + this.Search_VK_g });
      this.Data_VK_all_g = await this.Data_VK_all_g.data;
    },
    async F_Filter_VK_g() {
      // this.domain_Backend = '';
      this.Search_VK_g = '';
      this.Data_VK_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Filter_VK_genshin?' + this.Filter_NV_g[0] + this.Filter_NV_g[1] + this.Filter_NV_g[2] });
      this.Data_VK_all_g = await this.Data_VK_all_g.data;
    },
    async F_Search_HV_g() {
      this.Data_HV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Search_HV_genshin?search=' + this.Search_HV_g });
      this.Data_HV_all_g = await this.Data_HV_all_g.data;
    },
    async F_Filter_HV_g() {
      // this.domain_Backend = '';
      this.Search_HV_g = '';
      this.Data_HV_all_g = await axios({ method: 'get', url: this.domain_Backend + '/Filter_HV_genshin?' + this.Filter_HV_g[0] });
      this.Data_HV_all_g = await this.Data_HV_all_g.data;
    },
    async F_GLNT_g() {
      this.Data_GLNT_all = await axios({ method: 'get', url: this.domain_Backend + '/Go_loi_nguyen_to_all_genshin' });
      this.Data_GLNT_all = await this.Data_GLNT_all.data;
    },
    async F_PUNT_g() {
      this.Data_PUNT_all = await axios({ method: 'get', url: this.domain_Backend + '/Phan_ung_nguyen_to_all_genshin' });
      this.Data_PUNT_all = await this.Data_PUNT_all.data;

      for (let i = 0; i < this.Data_PUNT_all.length; i++) {
        this.Data_PUNT_all[i]['Chi_tiet_danh_sach_Avatar_phan_ung'] = [];
        for (let j = 0; j < this.Data_PUNT_all[i].Danh_sach_Avatar.split('---').length; j++) {
          let user = this.Data_TTTK_all_g.Nguyen_to.find(x => x.Ten === this.Data_PUNT_all[i].Danh_sach_Avatar.split('---')[j]);
          // let user = 'thg';
          this.Data_PUNT_all[i]['Chi_tiet_danh_sach_Avatar_phan_ung'].push(user);
        }
        this.Data_PUNT_all[i]['Chi_tiet_danh_sach_Avatar_phan_ung_one'] = this.Data_PUNT_all[i]['Chi_tiet_danh_sach_Avatar_phan_ung'][0];
        this.Data_PUNT_all[i]['Chi_tiet_danh_sach_Avatar_phan_ung'].shift();
      }
    },
    async F_CHNT_g() {
      this.Data_CHNT_all = await axios({ method: 'get', url: this.domain_Backend + '/Cong_huong_nguyen_to_all_genshin' });
      this.Data_CHNT_all = await this.Data_CHNT_all.data;
    },
    async F_TANVDB_g() {
      this.Data_TANVDB_all = await axios({ method: 'get', url: this.domain_Backend + '/Thuc_an_nhan_vat_dac_biet_all_genshin?search=' + this.Search_Genshin });
      this.Data_TANVDB_all = await this.Data_TANVDB_all.data;

      for (let i = 0; i < this.Data_TANVDB_all.length; i++) {
        // this.Data_TANVDB_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TANVDB_all[i].Ten_dau_bep);
        this.Data_TANVDB_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_SLTK_g() {
      this.Data_SLTK_all = await axios({ method: 'get', url: this.domain_Backend + '/So_lieu_thong_ke_all_genshin?search=' + this.Search_Genshin });
      this.Data_SLTK_all = await this.Data_SLTK_all.data;

      for (let i = 0; i < this.Data_SLTK_all.length; i++) {
        // this.Data_SLTK_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_SLTK_all[i].Ten_dau_bep);
        this.Data_SLTK_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_CLTP_g() {
      this.Data_CLTP_all = await axios({ method: 'get', url: this.domain_Backend + '/Chua_lanh_thuc_pham_all_genshin?search=' + this.Search_Genshin });
      this.Data_CLTP_all = await this.Data_CLTP_all.data;

      for (let i = 0; i < this.Data_CLTP_all.length; i++) {
        // this.Data_SLTK_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_CLTP_all[i].Ten_dau_bep);
        this.Data_CLTP_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_HSTA_g() {
      this.Data_HSTA_all = await axios({ method: 'get', url: this.domain_Backend + '/Hoi_sinh_thuc_an_all_genshin?search=' + this.Search_Genshin });
      this.Data_HSTA_all = await this.Data_HSTA_all.data;

      for (let i = 0; i < this.Data_HSTA_all.length; i++) {
        // this.Data_SLTK_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_HSTA_all[i].Ten_dau_bep);
        this.Data_HSTA_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_TPSB_g() {
      this.Data_TPSB_all = await axios({ method: 'get', url: this.domain_Backend + '/Thuc_pham_suc_ben_all_genshin?search=' + this.Search_Genshin });
      this.Data_TPSB_all = await this.Data_TPSB_all.data;

      for (let i = 0; i < this.Data_TPSB_all.length; i++) {
        // this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TPSB_all[i].Ten_dau_bep);
        this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_TPSB_g() {
      this.Data_TPSB_all = await axios({ method: 'get', url: this.domain_Backend + '/Thuc_pham_suc_ben_all_genshin?search=' + this.Search_Genshin });
      this.Data_TPSB_all = await this.Data_TPSB_all.data;

      for (let i = 0; i < this.Data_TPSB_all.length; i++) {
        // this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
        let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TPSB_all[i].Ten_dau_bep);
        this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      }
    },
    async F_TGK_g() {
      this.Data_TGK_all = await axios({ method: 'get', url: this.domain_Backend + '/Thuat_gia_kim_all_genshin?search=' + this.Search_Genshin });
      this.Data_TGK_all = await this.Data_TGK_all.data;

      // for (let i = 0; i < this.Data_TPSB_all.length; i++) {
      //   // this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = [];
      //   let user = this.Data_NV_all_g.find(x => x.Ten === this.Data_TPSB_all[i].Ten_dau_bep);
      //   this.Data_TPSB_all[i]['Chi_tiet_Avatar_dau_bep'] = user;
      // }
    },









    F_Open_Dark() {
      if (this.Dark == true) {
        this.Open_Dark = 'darkk'
      }
      if (this.Dark == false) {
        this.Open_Dark = 'dark'
      }
    },
    Count() {
      count++;
    },
    async F_Data_List_Product() {
      this.Data_List_Product = await axios({ method: 'get', url: this.domain_Backend + '/ListProduct' });
      this.Data_List_Product = await this.Data_List_Product.data;
    },
    F_Loading() {
      this.Loading = 2;
    },
    async F_Data_List_Product_Home() {
      try {
        this.Data_List_Product_Home = await axios({ method: 'get', url: this.domain_Backend + '/ListProductHome' });
        this.Data_List_Product_Home = await this.Data_List_Product_Home.data;
      }
      catch (error) {
        this.Data_List_Product_Home = [];
      }
    },
    async F_Search() {
      this.Search_ListProduct_Today1 = await axios({ method: 'get', params: { search: this.Search }, url: this.domain_Backend + '/SearchListProduct' });
      this.Search_ListProduct_Today1 = await this.Search_ListProduct_Today1.data;
    },
    showModal() {
      this.isModalVisible = true
    },
  }
})


