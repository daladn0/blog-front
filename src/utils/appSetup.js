import api from "@/api";
import { withAsync } from "@/utils/async";

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "vue-select/dist/vue-select.css";

import BaseComponents from "@/components/Base";
import { QuillEditor } from "@vueup/vue-quill";
import vSelect from "vue-select";

export default (app) => {
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$withAsync = withAsync;

  BaseComponents.forEach((component) => {
    app.component(component.name, component);
  });

  app.component("QuillEditor", QuillEditor);
  app.component("VSelect", vSelect);
};
