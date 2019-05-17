import axios from "axios";
import { API_URL } from "./constants";

export function apiGet(endpoint) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, "get");
}

export function apiPost(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, "post", data);
}

export function apiPatch(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, "patch", data);
}

export function apiPut(endpoint, data) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, "put", data);
}

export function apiDelete(endpoint) {
  const finalEndpoint = finalUrl(endpoint);
  return apiRequest(finalEndpoint, "delete");
}

export function getHeader() {
  const user = getObject('user');
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token }
  }
  return {}
}

export function apiRequest(link, method = 'get', data = {}, headers = {}) {
  if (!link)
    return;

  headers = {
    ...headers,
    ...getHeader()
  }

  if (method == 'get' || method == 'delete') {
    data = {
      headers
    }
  }

  return axios[method](link, data, headers).then(res => {
    return res.data
  })
}

const finalUrl = slug => {
  return API_URL + slug;
};

export const saveObject = (key, data) => {
  let obj = JSON.stringify(data);
  localStorage.setItem(key, obj);
};

export const removeObject = key => {
  localStorage.removeItem(key);
};

export const getObject = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const isLoggedIn = () => {
  let user = getObject("user");
  if (user && user.token) {
    return true;
  }
  return false;
};
