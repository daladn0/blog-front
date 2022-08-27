<template>
  <div class="bg-white rounded-lg border overflow-hidden shadow-lg">
    <!-- post header -->
    <div class="flex items-center justify-between p-2.5 border-b">
      <div class="flex items-center">
        <img
          class="w-7 h-7 rounded-full object-cover mr-4 block"
          src="https://i.guim.co.uk/img/media/48cb9586d9dd5c15b1ff15873e066d2977cb4482/66_0_1916_1150/master/1916.jpg?width=620&quality=85&fit=max&s=8c4a5febb4162c4ba3e870064339d34d"
          alt="John Doe"
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
        class="text-gray-600 p-2 block rounded-full transition-all hover:bg-gray-100 cursor-pointer"
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
      <h3 class="text-lg line-clamp-2 mb-2 font-medium">
        <router-link :to="{ name: 'single-post', params: { id: post._id } }">
          {{ post.title }}
        </router-link>
      </h3>
      <p class="text-sm line-clamp-3 text-gray-800">{{ post.body }}</p>
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
            to="/home"
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
export default {
  name: "PostItem",
  methods: {
    formatDate,
  },
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    categories() {
      return this.post.categories.slice(0, 3);
    },
  },
};
</script>
