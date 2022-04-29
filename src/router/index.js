import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MusicBlogs from "../views/MusicBlogs.vue";
import TechBlogs from "../views/TechBlogs.vue";
import LifestyleBlogs from "../views/LifestyleBlogs.vue";
import GamingBlogs from "../views/GamingBlogs.vue";
import PostDetails from "../views/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Musicblogs",
    name: "MusicBlogs",
    component: MusicBlogs,
  },
  {
    path: "/Lifestyleblogs",
    name: "LifestyleBlogs",
    component: LifestyleBlogs,
  },
  {
    path: "/Gamingblogs",
    name: "GamingBlogs",
    component: GamingBlogs,
  },
  {
    path: "/Techblogs",
    name: "TechBlogs",
    component: TechBlogs,
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
