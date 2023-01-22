import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      alias: "/movie",
      name: "Movies",
      component: () => import("@/components/Movie/MovieMain")
    },
    {
      path: "/people",
      name: "People",
      component: () => import("@/components/People/PersonMain")
    },
    {
    path: "/people/edit/",
    name: "PeopleCreate",
    component: () => import("@/components/People/PersonEdit")
    },

    /* redirect `/` to `/movie` */
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
