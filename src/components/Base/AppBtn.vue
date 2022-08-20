<template>
  <button
    class="uppercase block w-full bg-indigo-600 focus:bg-indigo-800 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppBtn",
};
</script>
