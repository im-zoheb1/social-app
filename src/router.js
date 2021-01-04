import Vue from "vue";
import Router from "vue-router";
import LoginForm from "./view/headerfroms/Login";
import SignupForm from "./view/headerfroms/Signup";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/LandingPage.vue"),
      children: [
        {
          path: "/signup",
          name: "Signup",
          component: SignupForm
        },
        {
          path: "",
          name: "LoginForm",
          component: LoginForm
        }
      ]
    },
    {
      path: "/home",
      component: () => import("./components/Home.vue"),
      children: [
        {
          path: "/updateprofile",
          name: "UpdateProfile",
          component: () => import("./view/homenavigation/UpdateProfile.vue")
        },
        {
          path: "/suspectprofile",
          name: "SuspectProfile",
          component: () => import("./view/homenavigation/SuspectProfile.vue")
        },
        {
          path: "/chat",
          name: "Chat",
          component: () => import("./view/homenavigation/Chat.vue")
        },
        {
          path: "",
          name: "Discover",
          component: () => import("./view/homenavigation/Discover.vue")
        }
      ]
    }
  ]
});
