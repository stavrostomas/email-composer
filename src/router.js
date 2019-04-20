import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Success from "./views/success";

Vue.use(Router);

export default new Router({
  base: "email-composer",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/success",
      name: "success",
      component: Success
    }
  ]
});
