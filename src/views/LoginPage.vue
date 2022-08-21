<template>
  <div class="w-full flex items-center justify-center">
    <AuthForm
      class="mx-5"
      formHeading="Log in"
      @formSubmitted="onFormSubmit"
      :formFields="loginFormFields"
      :isLoading="isLoading"
      :errorMessage="errorMessage"
    />
  </div>
</template>
<script>
import AuthForm from "@/components/common/AuthForm.vue";
import { mapActions } from "vuex";
import { loginFormFields } from "@/constants";
export default {
  name: "LoginPage",
  components: {
    AuthForm,
  },
  data() {
    return {
      loginFormFields,
      isLoading: false,
      errorMessage: null,
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async onFormSubmit(model) {
      this.isLoading = true;
      const { response, errorMessage } = await this.$withAsync(
        this.$api.post,
        "/user/login",
        { ...model, email: model.email, username: model.email }
      );
      this.isLoading = false;

      if (response) {
        const { user } = response.data;

        this.login(user);
        this.$router.push({ name: "home" });
      }

      if (errorMessage) this.errorMessage = errorMessage;
    },
  },
};
</script>
