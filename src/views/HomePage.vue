<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/common/PostList.vue";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  data() {
    return {
      isLoading: false,
      posts: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    const { response, error } = await this.$withAsync(this.$api.get, "/post/");
    this.isLoading = false;

    if (response) {
      this.posts = response.data;
    }

    if (error) {
      console.log(error);
    }
  },
};
</script>
