import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/github",
      name: "github",
      redirect: (to) => {
        if (router.options.history.state.current == to.path) {
          window.location.href = "https://www.github.com/jourdelune";
        } else {
          window.open("https://www.github.com/jourdelune", "_blank");
        }
        return router.options.history.state.current;
      },
      component: HomeView,
    },
    {
      path: "/youtube",
      name: "youtube",
      redirect: (to) => {
        if (router.options.history.state.current == to.path) {
          window.location.href =
            "https://www.youtube.com/channel/UCGlPpIieapHtOr8bc2aSQPA";
        } else {
          window.open(
            "https://www.youtube.com/channel/UCGlPpIieapHtOr8bc2aSQPA",
            "_blank"
          );
        }
        return router.options.history.state.current;
      },
      component: HomeView,
    },
    {
      path: "/twitter",
      name: "twitter",
      redirect: (to) => {
        if (router.options.history.state.current == to.path) {
          window.location.href = "https://twitter.com/Jourdelune2";
        } else {
          window.open("https://twitter.com/Jourdelune2", "_blank");
        }
        return router.options.history.state.current;
      },
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
    },
  ],
});

export default router;
