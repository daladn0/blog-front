import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseComponents from "@/components/Base";

const app = createApp(App);

BaseComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
