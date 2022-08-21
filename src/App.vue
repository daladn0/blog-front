<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { mapActions } from "vuex";
import MainLayout from "@/layouts/MainLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
export default {
  name: "App",
  components: {
    MainLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      const layout = this.$route?.meta?.layout;

      if (!layout) return "MainLayout";

      return layout;
    },
  },
  methods: {
    ...mapActions("user", ["login"]),
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
