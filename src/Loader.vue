<template>
  <div class="w-full h-screen flex items-center justify-center bg-slate-50">
    <LoadingSpinner class="w-16 h-16" />
  </div>
</template>
<script>
import LoadingSpinner from "@/components/Base/LoadingSpinner.vue";
export default {
  name: "LoaderApp",
  components: {
    LoadingSpinner,
  },
};
</script>
