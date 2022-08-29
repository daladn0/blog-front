<template>
  <div class="bg-white rounded divide-y divide-gray-100 shadow">
    <slot name="header" />
    <ul
      class="text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li
        v-for="item in items"
        :key="item.title"
        :class="{ 'border-t': item.separated }"
        class="py-1"
      >
        <button
          @click="$emit(item.emit)"
          class="w-full text-left block py-2 px-4 hover:bg-gray-100"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderDropdown",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
