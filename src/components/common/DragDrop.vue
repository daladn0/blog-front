<template>
  <div class="flex justify-center items-center w-full">
    <label
      for="dropzone-file"
      class="relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-dashed cursor-pointer hover:bg-gray-100 transition-all"
      :class="[drag ? 'border-green-400' : 'border-gray-300']"
      @dragleave="onDragLeave"
      @dragover="onDragOver"
      @drop="onDrop"
      ref="dropzone"
    >
      <button
        v-if="selectedFile"
        @click.stop.prevent="
          selectedFile = null;
          $refs['file-input'].value = null;
        "
        class="absolute right-3 top-3 text-white w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"
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

      <img
        v-if="selectedFile && preview"
        :src="preview"
        :alt="selectedFile.title"
        class="max-w-full max-h-full object-contain"
      />
      <template v-else>
        <div
          class="flex flex-col justify-center items-center pt-5 pb-6 max-w-full relative"
        >
          <svg
            aria-hidden="true"
            class="mb-3 w-10 h-10 transition-all"
            :class="[drag ? 'text-green-400' : 'text-gray-400']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p
            v-if="selectedFile"
            class="text-sm text-gray-500 font-medium block truncate px-4 max-w-full"
          >
            {{ selectedFile.name }}
          </p>
          <template v-else>
            <p
              class="mb-2 text-sm transition-all"
              :class="[drag ? 'text-green-400' : 'text-gray-500']"
            >
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p
              class="text-xs text-gray-500 transition-all"
              :class="[drag ? 'text-green-400' : 'text-gray-500']"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </template>
        </div>
      </template>
      <input
        id="dropzone-file"
        ref="file-input"
        @input="uploadFile($event.target.files[0])"
        type="file"
        class="hidden"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "DragDrop",
  data() {
    return {
      selectedFile: null,
      preview: null,
      drag: false,
    };
  },
  methods: {
    uploadFile(file) {
      this.selectedFile = file;

      const reader = new FileReader();

      reader.onload = (e) => {
        this.preview = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onDrop(e) {
      e.preventDefault();
      this.drag = false;

      let file = e.dataTransfer.files[0];

      this.uploadFile(file);
    },
    onDragLeave(e) {
      e.preventDefault();
      this.drag = false;
    },
    onDragOver(e) {
      e.preventDefault();
      this.drag = true;
    },
    onWindowDrag(e) {
      e.preventDefault();
    },
  },
  mounted() {
    window.addEventListener("dragover", this.onWindowDrag);
    window.addEventListener("drop", this.onWindowDrag);
  },
  beforeUnmount() {
    window.removeEventListener("dragover", this.onWindowDrag);
    window.removeEventListener("drop", this.onWindowDrag);
  },
};
</script>
