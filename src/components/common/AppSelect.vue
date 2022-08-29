<template>
  <div class="relative">
    <button
      class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2.5 text-center inline-flex justify-between items-center transition-all"
      :class="[isActive ? 'rounded-t-lg' : 'rounded-lg']"
      type="button"
      @click="isActive = !isActive"
    >
      {{ currentItem?.title }}
      <svg
        class="ml-2 w-4 h-4 transition-all"
        :class="{
          'rotate-180': isActive,
        }"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>

    <div
      class="w-full z-10 bg-white rounded-b divide-y divide-gray-100 shadow transition-all absolute left-0 top-full"
      :class="[isActive ? 'opacity-100' : 'opacity-0 pointer-events-none']"
    >
      <ul class="py-1 text-sm text-gray-700">
        <li
          v-for="item in items"
          :key="item._id"
          class="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
          @click="onItemSelect(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSelect",
  emits: ["selected"],
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      isActive: false,
      currentItem: null,
    };
  },
  methods: {
    onItemSelect(item) {
      this.currentItem = item;
      this.isActive = false;
      this.$emit("selected", item);
    },
  },
  mounted() {
    this.currentItem = this.items[0];
  },
};
</script>
