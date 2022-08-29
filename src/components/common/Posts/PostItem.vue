<template>
  <div class="bg-white rounded-lg border overflow-hidden shadow-lg relative">
    <transition name="slide-down">
      <AppDropdown
        v-if="dropdownVisible"
        @edit="$router.push({ name: 'create-post' })"
        :items="dropItems"
        class="absolute right-2 top-14 w-44 border"
      />
    </transition>

    <!-- post header -->
    <div class="flex items-center justify-between p-2.5 border-b">
      <div class="flex items-center">
        <img
          class="w-7 h-7 rounded-full object-cover mr-4 block"
          :src="post.author.avatar"
          :alt="post.author.username"
        />
        <div>
          <p class="text-sm font-medium text-gray-900">
            {{ post.author.username }}
          </p>
          <p class="text-xs text-gray-500">
            {{ formatDate(new Date(post.createdAt)) }}
          </p>
        </div>
      </div>
      <button
        @click="dropdownVisible = !dropdownVisible"
        class="text-gray-600 p-2 block rounded-full transition-all hover:bg-gray-100 cursor-pointer"
        :class="{
          'bg-gray-100': dropdownVisible,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
    </div>

    <!-- post image -->
    <router-link :to="{ name: 'single-post', params: { id: post._id } }">
      <img
        class="w-full"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="post image"
      />
    </router-link>

    <!-- post body -->

    <div class="p-4">
      <h3 class="text-lg line-clamp-2 mb-2 font-medium break-words">
        <router-link :to="{ name: 'single-post', params: { id: post._id } }">
          {{ post.title }}
        </router-link>
      </h3>
      <div class="flex items-center justify-between mt-2">
        <router-link
          :to="{ name: 'single-post', params: { id: post._id } }"
          class="text-blue-600 block text-center transition-all font-medium w-fit px-2 py-1 -mx-2 hover:bg-blue-100 rounded"
          >Read more</router-link
        >

        <div class="flex items-center space-x-4">
          <router-link
            v-for="category in categories"
            :key="category._id"
            :to="{ name: 'home' }"
            class="relative text-gray-600 text-sm font-medium hover:underline before:absolute before:w-1 before:h-1 before:rounded-full before:bg-gray-600 before:-left-2 before:top-1/2 before:transform before:-translate-y-1/2"
            >{{ category.title }}</router-link
          >
          <span v-if="post.categories.length > 3" class="text-gray-600 text-sm">
            + {{ post.categories.length - 3 }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/formaters";
import AppDropdown from "@/components/common/AppDropdown.vue";
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },
  computed: {
    categories() {
      return this.post.categories.slice(0, 3);
    },
  },
  components: {
    AppDropdown,
  },
  methods: {
    formatDate,
  },
  created() {
    this.dropItems = [
      { title: "Edit", emit: "edit" },
      { title: "Save", emit: "save" },
      { title: "Delete", emit: "delete" },
    ];
  },
};
</script>
