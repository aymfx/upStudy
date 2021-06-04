import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
var Profile = Vue.extend({
  template: "<p>阿斯达撒{{firstName}} {{lastName}} aka {{alias}}</p>",
  render(h) {
    return h("p", { class: "age" }, "sdsd");
  },
  data: function () {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg",
    };
  },
});

var NotFound = Vue.extend({
  render(h) {
    return h("div", "404 not found");
  },
});
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/user",

    components: {
      default: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
      a: () => import(/* webpackChunkName: "User2" */ "../views/User2.vue"),
      b: () => import(/* webpackChunkName: "Sub" */ "../views/Sub.vue"),
    },
  },
  {
    path: "/about/:name",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    props: (route) => ({ name: route.query.id }),
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter");
      next();
    },
  },
  {
    path: "/aboutto",
    name: "aboutto",
    redirect: () => {
      return {
        path: "/about",
      };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(savedPosition, "scrollBehavior");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: "smooth" });
      }, 500);
    });
  },
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  next();
});
router.afterEach((to, from) => {
  console.log(to, from, "afterEach");
});

router.onReady(() => {
  router.addRoute({
    path: "*",
    component: NotFound,
  });
  console.log(router.getRoutes());
});

router.onError((err) => console.error(err));

export default router;
