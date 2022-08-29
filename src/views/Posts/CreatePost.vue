<template>
  <div class="pb-8">
    <LoadingSpinner v-if="isLoading" class="w-12 h-12 mx-auto mt-12" />
    <div
      class="p-8 rounded-lg bg-white border w-6/12 mx-auto space-y-8 shadow-md"
      v-else
    >
      <h1 class="text-3xl text-center text-gray-700">Create posts</h1>
      <div>
        <p class="mb-2">Categories:</p>
        <VSelect
          class="text-gray-800"
          placeholder="Choose a category.."
          multiple
          v-model="selectedCategories"
          :options="categoriesList"
        />
      </div>
      <div>
        <p class="mb-2">
          Title<span class="text-red-500 font-semibold">*</span> :
        </p>
        <AppInput v-model="title" placeholder="Post title" />
      </div>
      <div>
        <p class="mb-2">Body:</p>
        <QuillEditor
          v-model:content="body"
          contentType="html"
          toolbal="full"
          theme="snow"
          class="bg-white"
        />
      </div>
      <div>
        <p class="mb-2">Image:</p>
        <DragDrop />
      </div>
      <AppBtn @click="onPostCreate" class="text-lg w-1/3 py-2 block mx-auto"
        >Post</AppBtn
      >
    </div>
  </div>
</template>
<script>
import AppSelect from "@/components/common/AppSelect.vue";
import DragDrop from "@/components/common/DragDrop.vue";
export default {
  name: "CreatePost",
  components: {
    AppSelect,
    DragDrop,
  },
  data() {
    return {
      isLoading: false,
      categories: [],

      title: "",
      body: "",
      selectedCategories: [],
    };
  },
  computed: {
    categoriesList() {
      return this.categories.map((category) => category.title);
    },
  },
  methods: {
    onPostCreate() {
      const categories = this.categories
        .filter((category) => this.selectedCategories.includes(category.title))
        .map((category) => category._id);

      this.$api.post("/post", {
        title: this.title,
        body: this.body,
        categories,
      });
    },
    onCategorySelected(item) {
      this.selectedCategories = item._id;
    },
  },
  async mounted() {
    this.isLoading = true;
    const { response } = await this.$withAsync(this.$api.get, "/category");
    this.isLoading = false;

    if (response) {
      this.categories = response.data;
    }
  },
};
</script>
<style scoped>
>>> {
  --vs-search-input-placeholder-color: rgb(156, 163, 175);
  --vs-dropdown-option-padding: 10px 20px;
  --vs-border-radius: 8px;
  --vs-border-color: rgb(209, 213, 219);
  --vs-font-size: 14px;
}
</style>
