import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://restaurant-api.dicoding.dev",
});

export default axiosClient;
