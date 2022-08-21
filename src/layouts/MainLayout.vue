<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>
<script>
import AppHeader from "@/components/layout/AppHeader.vue";
export default {
  name: "MainLayout",
  components: {
    AppHeader,
  },
};
</script>
