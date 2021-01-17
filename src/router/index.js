import Vue from "vue";
import VueRouter from "vue-router";
import pastsales from "@/views/pastsales";
import pastevent from "@/views/pastevent";
import forecast from "@/views/forecast";
import linebot from "@/views/linebot";
import materialManage from "@/views/materialManage";
import inventory from "@/views/inventory";
import login from "@/components/login";
import counter from "@/views/counter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/pastsales",
    name: "pastsales",
    component: pastsales,
  },
  {
    path: "/pastevent",
    name: "pastevent",
    component: pastevent,
  },
  {
    path: "/forecast",
    name: "forecast",
    component: forecast,
  },
  {
    path: "/linebot",
    name: "linebot",
    component: linebot,
  },
  {
    path: "/materialManage",
    name: "materialManage",
    component: materialManage,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: inventory,
  },
  {
    path: "/counter",
    name: "counter",
    component: counter,
  },
];

const router = new VueRouter({
  routes,
});

export default router;