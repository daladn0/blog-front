/* eslint-disable */
import { createApp } from "vue";
import router from "@/router";
import store from "@/store";

import App from "@/App.vue";
import Loader from "@/Loader.vue";

import api from "@/api";
import appSetup from "@/utils/appSetup";

const app = createApp(App);
const loaderApp = createApp(Loader);

loaderApp.mount("#app");

api
  .get("/user/refresh")
  .then((res) => {
    store.dispatch("user/login", res.data.user);
    localStorage.setItem("token", res.data.tokens.accessToken);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loaderApp.unmount("#app");

    appSetup(app);
    app.use(store).use(router);
    app.mount("#app");
  });
