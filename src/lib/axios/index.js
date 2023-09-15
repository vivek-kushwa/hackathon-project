import axios from "axios";
// import { BASEURL } from "services";


// const axiosInstance = axios.create({
//   baseURL: BASEURL,
//   // headers: {
//   //   Authorization: `Bearer ${get_Token()}`,
//   // },
// });

// export default axiosInstance;

/**
 *
 * @param {*} path  endpoint
 * @returns data from api
 */
export const getApi = (path) => {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
    },
  };
  return axios.get(path, config);
};

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export const postApi = (path, data) => {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      "Content-Type": "application/json",
    },
  };
  return axios.post(path, data, config);
};

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export const postFileApi = (path, data) => {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(path, data, config);
};

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function putApi(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.put(path, data, config);
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function patchApi(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.patch(path, data, config);
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data params
 * @returns   data from api
 */
export function deleteApi(path, data) {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.delete(path, { ...config });
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function postWithCustomTokenApi(path, data, token) {
  const config = {
    headers: {
      Authorization: token ? `Basic ${token}` : null,
      "Content-Type": "application/json",
    },
  };

  return axios.post(path, data, config);
}
