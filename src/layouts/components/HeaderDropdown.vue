<template>
  <div class="bg-white rounded divide-y divide-gray-100 shadow">
    <div class="text-sm text-gray-900 max-w-full">
      <button
        class="flex items-center justify-start text-left max-w-full transition-all hover:bg-gray-100 hover:after:bg-gray-100 px-4 py-3 cursor-pointer after:w-4 after:h-4 after:bg-white after:block after:absolute after:right-4 after:bottom-full after:rotate-45 after:transform after:transition-all after:rounded after:translate-y-1/2"
      >
        <img
          class="w-8 h-8 rounded-full flex-shrink-0 mr-2 object-cover"
          :src="user.avatar"
          alt="border avatar"
        />
        <div class="max-w-[80%]">
          <div class="font-medium max-w-full truncate">{{ user.username }}</div>
          <div class="truncate max-w-full">
            {{ user.email }}
          </div>
        </div>
      </button>
    </div>
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
    </ul>
    <div class="py-1">
      <button
        @click="$emit('logout')"
        class="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      >
        Sign out
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderDropdown",
  emits: ["logout"],
  props: {
    user: {
      type: Object,
    },
  },
};
</script>
