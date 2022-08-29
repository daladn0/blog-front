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
import { TOAST_TYPES } from "@/constants";
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
    ...mapActions("toast", ["addNewToast"]),
    async onFormSubmit(model) {
      this.errorMessage = null;
      this.isLoading = true;
      const { response, errorMessage } = await this.$withAsync(
        this.$api.post,
        "/user/login",
        { ...model, email: model.email, username: model.email }
      );
      this.isLoading = false;

      if (response) {
        const { user, tokens } = response.data;

        localStorage.setItem("token", tokens.accessToken);
        this.login(user);
        this.$router.push({ name: "home" });

        setTimeout(() => {
          this.addNewToast({
            type: TOAST_TYPES.SUCCESS,
            message: "You've logged in",
          });
        }, 500);
      }

      if (errorMessage) this.errorMessage = errorMessage;
    },
  },
};
</script>
