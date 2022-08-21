import axios from "axios";

const axiosOptions = {
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
};

const axiosInstance = axios.create(axiosOptions);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    put: (url, body, config) => axios.put(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
