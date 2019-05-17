import { apiPost } from "../utils";

export function loginApi(data) {
  return apiPost("/users/login", data);
}

export function signupApi(data) {
  return apiPost("/users/signup", data);
}

export function forgotPasswordAPI(data) {
  console.log(data, "Password API CALL")
  return apiPost("/users/forgot-password", data)
}