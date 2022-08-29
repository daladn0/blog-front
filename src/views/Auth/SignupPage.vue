<template>
  <div class="w-full flex items-center justify-center">
    <AuthForm
      ref="form"
      class="m-5"
      formHeading="Sign up"
      @formSubmitted="onFormSubmit"
      :formFields="signupFormFields"
      :errors="errors"
      :errorMessage="errorMessage"
      :isLoading="isLoading"
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
import { nextTick } from "@vue/runtime-core";
import { mapActions } from "vuex";
import { TOAST_TYPES } from "@/constants";
export default {
  name: "SignupPage",
  components: {
    AuthForm,
  },
  data() {
    return {
      signupFormFields,
      isLoading: false,
      errors: null,
      errorMessage: null,
    };
  },
  methods: {
    ...mapActions("toast", ["addNewToast"]),
    async onFormSubmit(model) {
      this.errorMessage = null;
      this.isLoading = true;
      const { response, error, errorMessage } = await this.$withAsync(
        this.$api.post,
        "/user/registration",
        model
      );
      this.isLoading = false;

      if (response) {
        this.$router.push({ name: "login" });

        setTimeout(() => {
          this.addNewToast({
            type: TOAST_TYPES.SUCCESS,
            message: "Successful registration",
          });
        }, 500);
      }

      if (error) {
        this.errors = error?.response?.data?.errors;
        if (this.errors && this.errors.length) {
          nextTick(() => {
            this.$refs.form.clickErrorBtn();
          });
        } else {
          this.errorMessage = errorMessage;
        }
      }
    },
  },
};
</script>
