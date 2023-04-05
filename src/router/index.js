import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import SitemapView from "../views/SitemapView.vue";
import { useCounterStore } from '@/stores/counter';


// const counter = useCounterStore();
// return {counter};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/",
      component: HomeLayout,
      children: [
        // {
        //   path: "/",
        //   component: () => import("../views/HomeView.vue"),
        // },
        // {
        //   path: "/privacy",
        //   component: () => import("../views/HonkaiView/PrivacyView.vue"),
        // },
        // Honkai
        // {
        //   path: "/sitemap.xml",
        //   component: () => import("../views/HonkaiView/sitemap.xml"),
        // },
        {
          path: "/",
          component: () => import("../views/HonkaiView/CharactersView.vue"),
        },
        {
          path: "/farming-Guide",
          component: () => import("../views/HonkaiView/FarmingView.vue"),
        },
        {
          path: "/tier-list",
          component: () => import("../views/HonkaiView/TierView.vue"),
        },
        {
          path: "/character-stats",
          component: () => import("../views/HonkaiView/CharacterView.vue"),
        },
        {
          path: "/light-cone-stats",
          component: () => import("../views/HonkaiView/LightcsView.vue"),
        },
        {
          path: "/light-cones",
          component: () => import("../views/HonkaiView/LightcView.vue"),
        },
        {
          path: "/relics",
          component: () => import("../views/HonkaiView/RelicsView.vue"),
        },
        {
          path: "/ornaments",
          component: () => import("../views/HonkaiView/OrnamentsView.vue"),
        },
        {
          path: "/privacy",
          component: () => import("../views/HonkaiView/PrivacyView.vue"),
        },

        // Genshin
        {
          path: "/genshin-impact",
          component: () => import("../views/GenshinView/CharactersView.vue"),
        },
        {
          path: "/genshin-impact/builds",
          component: () => import("../views/GenshinView/BuildsView.vue"),
        },
        {
          path: "/genshin-impact/teams",
          component: () => import("../views/GenshinView/TeamsView.vue"),
        },
        {
          path: "/genshin-impact/tier-list",
          component: () => import("../views/GenshinView/TierView.vue"),
        },
        {
          path: "/genshin-impact/farming-guide",
          component: () => import("../views/GenshinView/FarmingView.vue"),
        },
        {
          path: "/genshin-impact/weapons",
          component: () => import("../views/GenshinView/WeaponsView.vue"),
        },
        {
          path: "/genshin-impact/artifacts",
          component: () => import("../views/GenshinView/ArtifactsView.vue"),
        },
        {
          path: "/genshin-impact/elements",
          component: () => import("../views/GenshinView/ElementsView.vue"),
        },
        {
          path: "/genshin-impact/cooking",
          component: () => import("../views/GenshinView/CookingView.vue"),
        },
        {
          path: "/genshin-impact/alchemy",
          component: () => import("../views/GenshinView/AlchemyView.vue"),
        },
      ]
    },
    // Tin tuc
    // {
    //   path: "/Tin-tuc",
    //   name: "Tin-tuc",
    //   redirect: "/Tin-tuc",
    //   component: HomeLayout,
    //   children: [
    //     {
    //       path: "/Tin-tuc/:tin",
    //       component: () => import("../views/NewsView.vue"),
    //     },
    //   ]
    // },
    // Honkai nhân vật
    {
      path: "/characters",
      name: "characters",
      redirect: "/characters",
      component: HomeLayout,
      children: [
        {
          path: "/characters/:user",
          component: () => import("../views/HomehonkaiView.vue"),
        },
      ]
    },
    // Genshin nhân vật
    {
      path: "/genshin-impact/characters",
      name: "genshinCharacters",
      redirect: "/genshin-impact/characters",
      component: HomeLayout,
      children: [
        {
          path: "/genshin-impact/characters/:user",
          component: () => import("../views/HomegenshinView.vue"),
        },
      ]
    },
    // {
    //   path: "/sitemapxml",
    //   name: "sitemap",
    //   component: SitemapView,
    // },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/",
    },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
