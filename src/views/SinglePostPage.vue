<template>
  <LoadingSpinner class="w-10 h-10 mx-auto my-8" v-if="isLoading" />
  <div v-else class="bg-white rounded-lg shadow-lg p-4 space-y-4">
    <div class="flex items-center">
      <div class="w-12 h-12 p-0.5 border-2 border-[#9333ea] rounded-full">
        <img
          class="w-full h-full object-cover rounded-full"
          src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
          alt="alt tag"
        />
      </div>

      <div class="flex flex-col ml-4">
        <h3 class="text-lg font-bold text-gray-800">
          Published by
          <span class="text-[#9333ea]">{{ post?.author?.username }}</span>
        </h3>
        <span class="text-base text-gray-500">{{
          formatDate(new Date(post.createdAt))
        }}</span>
      </div>
    </div>

    <hr />

    <h3 class="text-2xl font-bold text-gray-800">{{ post?.title }}</h3>
    <p>{{ post?.body }}</p>

    <hr />

    <div class="flex flex-wrap items-center px-2">
      <router-link
        v-for="category in post.categories"
        :key="category._id"
        to="/"
        class="mr-4 my-1 relative text-gray-600 text-sm font-medium hover:underline before:absolute before:w-1 before:h-1 before:rounded-full before:bg-gray-600 before:-left-2 before:top-1/2 before:transform before:-translate-y-1/2"
        >{{ category.title }}</router-link
      >
    </div>
  </div>
</template>
<script>
import { formatDate } from "@/utils/formaters";
export default {
  name: "SinglePost",
  data() {
    return {
      post: null,
      isLoading: true,
      error: null,
    };
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
  },
  methods: {
    formatDate,
  },
  async mounted() {
    this.isLoading = true;
    const { response, error } = await this.$withAsync(
      this.$api.get,
      `/post/${this.postId}`
    );
    this.isLoading = false;

    if (response) {
      this.post = response.data;
    }

    if (error) {
      console.log(error);
    }
  },
};
</script>
