import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      alias: "/movies",
      name: "Movies",
      component: () => import("@/components/Movies/MovieMain")
    },
    {
      path: "/people",
      name: "People",
      component: () => import("@/components/People/PersonMain")
    },
    /* redirect `/` to `/movies` */
    /*{
      path: '/',
      redirect: '/movies'
    }*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
