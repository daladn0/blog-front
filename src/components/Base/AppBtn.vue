<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center"
    :class="[rounded ? 'rounded-full' : 'rounded-lg']"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  props: ["rounded", "small"],
};
</script>
