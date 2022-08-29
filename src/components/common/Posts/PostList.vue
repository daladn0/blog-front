<template>
  <div class="flex flex-col space-y-4">
    <PostItem v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>
<script>
import PostItem from "@/components/common/Posts/PostItem.vue";
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
    },
  },
  components: {
    PostItem,
  },
};
</script>
