<template>
  <div>
    <AppHeader class="mb-5" />
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/layouts/components/AppHeader.vue";
export default {
  name: "MainLayout",
  components: {
    AppHeader,
  },
};
</script>
