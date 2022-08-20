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

export const MIN_USERNAME_LENGTH = 2;
