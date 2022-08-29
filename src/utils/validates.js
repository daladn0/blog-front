/* eslint-disable */

import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  POST_TITLE_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
} from "@/constants";

// auth

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

  if (value.length > MAX_USERNAME_LENGTH) {
    return `Username should not be longer than ${MAX_USERNAME_LENGTH} chars`;
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
  if (!value || value.length < MIN_PASSWORD_LENGTH) {
    return `Password should have at least ${MIN_PASSWORD_LENGTH} chars`;
  }

  return true;
};

export const validateConfirmPassword = (value, ctx) => {
  const password = ctx?.form?.password;

  if (!value) return "Confirm password";

  if (value !== password) return "Passwords don't match";

  return true;
};

// post
export const validatePostTitle = (value) => {
  if (!value) return "Post title is required";

  if (
    value.length < POST_TITLE_MIN_LENGTH ||
    value.length > POST_TITLE_MAX_LENGTH
  ) {
    return `Post should have from ${POST_TITLE_MIN_LENGTH} up to ${POST_TITLE_MAX_LENGTH}`;
  }

  return "asdasd";
};
