import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/api";
import { withAsync } from "@/utils/async";

import BaseComponents from "@/components/Base";

const app = createApp(App);

app.config.globalProperties.$api = api;
app.config.globalProperties.$withAsync = withAsync;

BaseComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
