<template>
  <component :is="layout">
    <router-view />
    <div class="absolute left-4 bottom-4 space-y-4 w-1/2">
      <transition-group name="toasts">
        <AppToast
          v-for="toast in toastStack"
          @close="deleteFromStackById(toast.id)"
          :type="toast.type"
          :message="toast.message"
          :key="toast.id"
        />
      </transition-group>
    </div>
  </component>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import MainLayout from "@/layouts/MainLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AppToast from "@/components/common/AppToast.vue";

export default {
  name: "App",
  components: {
    MainLayout,
    EmptyLayout,
    AppToast,
  },
  computed: {
    ...mapGetters("toast", ["toastStack"]),
    layout() {
      const layout = this.$route?.meta?.layout;

      if (!layout) return "MainLayout";

      return layout;
    },
  },
  methods: {
    ...mapActions("user", ["login"]),
    ...mapActions("toast", ["deleteFromStackById"]),
  },
  async mounted() {
    const { response } = await this.$withAsync(this.$api.get, "/user/refresh");

    if (response) {
      this.login(response.data.user);
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/tailwind.css";
@import "@/styles/app.scss";
</style>
