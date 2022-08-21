<template>
  <Form
    @submit="onFormSubmit"
    @invalid-submit="onInvalidSubmit"
    class="bg-white rounded-md shadow-2xl p-5 w-full max-w-lg"
  >
    <h1 class="text-gray-800 font-bold text-2xl mb-8 text-center">
      {{ formHeading }}
    </h1>

    <Field
      v-for="formField in formFields"
      :key="formField.name"
      :rules="formField.rules"
      :name="formField.name"
      v-slot="{ field, errorMessage, handleChange, handleBlur, meta }"
    >
      <div class="mb-9 relative">
        <label
          for="email"
          class="text-sm text-gray-700 mb-1 ml-1 block font-medium"
          >{{ formField.label }}</label
        >
        <div
          class="flex items-center border py-2 px-3 rounded-2xl transition-all"
          :class="{
            'border-red-500': errorMessage,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            v-model="formField.model"
            v-bind="field"
            @input="($event) => handleChange($event, meta.touched)"
            @blur="($event) => handleBlur($event, meta.touched)"
            :id="formField.name"
            :type="formField.type"
            :name="formField.name"
            :placeholder="formField.placeholder"
            :ref="formField.name"
            class="pl-2 w-full outline-none border-none"
          />
        </div>
        <span
          v-if="errorMessage"
          class="text-xs text-red-500 ml-1 mt-1 font-medium absolute top-full left-0"
          >{{ errorMessage }}</span
        >
      </div>
    </Field>

    <span
      v-if="errorMessage"
      class="text-sm font-medium mb-8 text-red-500 text-center block w-full"
      >{{ errorMessage }}</span
    >

    <button
      class="uppercase block w-full bg-indigo-600 focus:bg-indigo-800 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
      type="submit"
    >
      <LoadingSpinner class="mx-auto w-6 h-6" v-if="isLoading" />
      <span v-else>submit</span>
    </button>
    <slot name="footer">
      <div class="flex flex-col items-center sm:flex-row justify-between mt-4">
        <span
          class="text-sm ml-2 text-gray-700 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
          >Forgot Password ?</span
        >

        <router-link
          :to="{ name: 'signup' }"
          class="text-sm ml-2 text-gray-700 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
          >Don't have an account yet?</router-link
        >
      </div>
    </slot>
  </Form>
</template>
<script>
import { Form, Field, configure } from "vee-validate";

configure({
  validateOnBlur: false,
  validateOnModelUpdate: false,
});

export default {
  name: "AuthForm",
  emits: ["formSubmitted"],
  props: {
    formFields: {
      type: Array,
    },
    formHeading: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
  },
  methods: {
    onFormSubmit(model) {
      this.$emit("formSubmitted", model);
    },
    onInvalidSubmit({ errors }) {
      const firstInvalidField = this.$refs[Object.keys(errors)[0]];

      if (
        firstInvalidField &&
        firstInvalidField[0] &&
        firstInvalidField[0].focus
      )
        firstInvalidField[0].focus();
    },
  },
  components: {
    Form,
    Field,
  },
  mounted() {
    const firstField = this.formFields[0].name;

    if (firstField) this.$refs[firstField][0].focus();
  },
};
</script>
