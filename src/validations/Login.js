import { empty, email } from "is_js";
import validator from "lodash";

export default function(data = {}) {
  let errors = {};

  if (data.email && !email(data.email)) {
    errors["email"] = "Invalid Email !";
  }

  if (!data.email && validator.isEmpty(data.email)) {
    errors["email"] = "Email Required !";
  }

  if (!data.password && validator.isEmpty(data.password)) {
    errors["password"] = "Password Required !";
  }

  return {
    isValid: empty(errors),
    errors
  };
}
