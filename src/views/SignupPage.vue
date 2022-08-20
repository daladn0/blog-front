<template>
  <div class="w-full flex items-center justify-center">
    <AuthForm
      class="m-5"
      :formFields="signupFormFields"
      formHeading="Sign up"
      @formSubmitted="onFormSubmit"
    >
      <template #footer>
        <router-link
          :to="{ name: 'login' }"
          class="text-center block w-full text-sm mt-5 text-gray-700 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
          >Already have an account?</router-link
        >
      </template>
    </AuthForm>
  </div>
</template>
<script>
import AuthForm from "@/components/common/AuthForm.vue";
import { signupFormFields } from "@/constants";
export default {
  name: "SignupPage",
  components: {
    AuthForm,
  },
  data() {
    return {
      signupFormFields,
    };
  },
  methods: {
    onFormSubmit(model) {
      console.log(model);
    },
  },
};
</script>
