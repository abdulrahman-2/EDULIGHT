import axios from "axios";

const baseUrl = "http://edulightapi.runasp.net/api";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export default axiosInstance;
