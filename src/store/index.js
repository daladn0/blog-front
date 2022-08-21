import { createStore } from "vuex";
import user from "@/store/user";
import toast from "@/store/toast";

export default createStore({
  modules: {
    user,
    toast,
  },
});
