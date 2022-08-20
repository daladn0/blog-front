import { MIN_USERNAME_LENGTH } from "@/constants";

export const validateLoginOrEmail = (value) => {
  if (!value) {
    return "This is required field";
  }

  return true;
};

export const validateUsername = (value) => {
  if (!value || value.length < MIN_USERNAME_LENGTH) {
    return `Username should have at least ${MIN_USERNAME_LENGTH} chars`;
  }

  return true;
};

export const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return "Email is required";
  }
  // if the field is not a valid email
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value)) {
    return "Invalid email";
  }
  // All is good
  return true;
};

export const validatePassword = (value) => {
  if (!value || value.length < 6) {
    return "Password should have at least 6 chars";
  }

  return true;
};

export const validateConfirmPassword = (value, ctx) => {
  const password = ctx?.form?.password;

  if (!value) return "Password is required";

  if (value !== password) return "Passwords don't match";

  return true;
};
