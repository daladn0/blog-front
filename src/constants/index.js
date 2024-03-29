import {
  validateEmail,
  validateUsername,
  validateLoginOrEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/utils";

export const loginFormFields = [
  {
    label: "Email address or username:",
    placeholder: "neet1337",
    type: "email",
    name: "email",
    model: "",
    rules: validateLoginOrEmail,
  },
  {
    label: "Password:",
    placeholder: "******",
    type: "password",
    name: "password",
    model: "",
    rules: validatePassword,
  },
];

export const signupFormFields = [
  {
    label: "Username:",
    placeholder: "neet1337",
    type: "text",
    name: "username",
    model: "",
    rules: validateUsername,
  },
  {
    label: "Email address:",
    placeholder: "example@mail.com",
    type: "email",
    name: "email",
    model: "",
    rules: validateEmail,
  },
  {
    label: "Password:",
    placeholder: "******",
    type: "password",
    name: "password",
    model: "",
    rules: validatePassword,
  },
  {
    label: "Confirm password:",
    placeholder: "******",
    type: "password",
    name: "confirm-password",
    model: "",
    rules: validateConfirmPassword,
  },
];

export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};

// auth
export const MIN_USERNAME_LENGTH = 2;
export const MAX_USERNAME_LENGTH = 32;
export const MIN_PASSWORD_LENGTH = 6;

// post

export const POST_TITLE_MIN_LENGTH = 14;
export const POST_TITLE_MAX_LENGTH = 100;
export const POST_BODY_MIN_LENGTH = 30;
export const POST_BODY_MAX_LENGTH = 5000;

export const TOAST_TYPES = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
};
