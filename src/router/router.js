import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/posts", name: "PostPage", component: PostPage },
  { path: "/about", name: "About", component: About },
  { path: "/posts/:id", name: "PostIdPage", component: PostIdPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
