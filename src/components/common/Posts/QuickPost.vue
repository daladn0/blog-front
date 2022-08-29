<template>
  <div class="p-2 rounded-xl mb-8 border bg-white">
    <Form @submit="onPost" class="flex items-center space-x-2">
      <label
        id="quick-photo"
        class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center cursor-pointer transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          @input="onImageSelect"
          ref="file-input"
          type="file"
          id="quick-photo"
          hidden
          class="absolute z-[-1]"
        />
      </label>

      <Field
        :rules="validatePostTitle"
        name="postTitle"
        v-slot="{ field, errorMessage }"
      >
        <AppInput
          placeholder="Title.."
          v-model="title"
          @keydown.enter="onPost"
          v-bind="field"
        />
        {{ errorMessage }}
      </Field>

      <AppBtn type="submit" class="w-12 h-10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </AppBtn>
    </Form>

    <div class="mt-4 relative" v-if="selectedImg && preview">
      <button
        v-if="selectedImg"
        @click.stop.prevent="
          selectedImg = null;
          $refs['file-input'].value = null;
        "
        class="absolute right-4 top-8 text-white w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <hr class="mb-4" />
      <img class="rounded-md" :src="preview" :alt="selectedImg.name" />
    </div>
  </div>
</template>
<script>
import validatePostTitle from "@/utils";
import { Form, Field } from "vee-validate";
export default {
  name: "QuickPost",
  data() {
    return {
      selectedImg: null,
      preview: null,
      isLoading: false,
      title: "",
    };
  },
  components: {
    Form,
    Field,
  },
  methods: {
    validatePostTitle,
    onImageSelect(e) {
      this.selectedImg = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        this.preview = e.target.result;
      };

      reader.readAsDataURL(e.target.files[0]);
    },
    async onPost() {
      this.isLoading = true;
      const { response } = await this.$withAsync(this.$api.post, "/post", {
        title: this.title,
      });
      this.isLoading = false;

      if (response) {
        this.title = "";
        this.preview = null;
        this.selectedImg = null;
      }
    },
  },
};
</script>
