<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
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
};
</script>

<style lang="scss">
@import "@/styles/tailwind.css";
@import "@/styles/app.scss";
</style>
