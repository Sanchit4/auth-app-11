import types from "../types";
import store from "../store";
import { signupApi } from "../apis/auth";
import { getPasswordAPI } from "../apis/resetPassword"
import { toast } from "react-toastify";

const { dispatch } = store;

const signFetch = () => {
  dispatch({
    type: types.SIGNUP_LOADING,
    payload: { isFetching: true }
  });
};

const signSuccess = data => {
  dispatch({
    type: types.SIGNUP_SUCCESS,
    payload: data
  });
};

export function onSignupPress(data) {
  signFetch();
  return new Promise((resolve, reject) => {
    signupApi(data)
      .then(res => {
        signSuccess(data);
        resolve({ ...res });
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function resetPassword(data) {

  return new Promise((resolve, reject) => {
    getPasswordAPI(data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error);
        toast.error(error.response.data.message || 'Something went wrong!');
      })
  })

}