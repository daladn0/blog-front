<template>
  <input
    type="text"
    class="bg-transparent border border-gray-300 hover:border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  />
</template>

<script>
export default {
  emits: ["update:modelValue"],
  name: "AppInput",
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
