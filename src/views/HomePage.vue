<template>
  <div class="w-full max-w-2xl mx-auto pb-8">
    <QuickPost v-if="isAuth" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/common/Posts/PostList.vue";
import QuickPost from "@/components/common/Posts/QuickPost.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    PostList,
    QuickPost,
  },
  computed: {
    ...mapGetters("user", ["isAuth"]),
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
