import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from '../views/profile/index.vue'
import EditProfile from '../views/profile/edit.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/editprofile",
    component: EditProfile
  }
];

const router = new VueRouter({
  routes
});

export default router;
