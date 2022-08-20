<template>
  <div class="w-full flex items-center justify-center">
    <AuthForm
      class="mx-5"
      @formSubmitted="onFormSubmit"
      :formFields="loginFormFields"
      formHeading="Log in"
    />
  </div>
</template>
<script>
import AuthForm from "@/components/common/AuthForm.vue";
import { loginFormFields } from "@/constants";
export default {
  name: "LoginPage",
  components: {
    AuthForm,
  },
  data() {
    return {
      loginFormFields,
    };
  },
  methods: {
    onFormSubmit(model) {
      console.log(model);
    },
  },
};
</script>
