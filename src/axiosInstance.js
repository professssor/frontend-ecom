import axios from "axios";
const apikey =
  "9f31ab88c1e30cac7a93a5ceb5646c7e93a13661585d41e90582506be125b75c92675a8ec328ee8cc53c2bacdfe230740cf37c262b33c22091a18d5f2cc217e206a805e5fa35722539acd7bae9bcee4f91f2d000a38a56acb5b057e0989856753ace2e62c423ce965b221771782461207eba73652ca6e828aecdd92da68b33f3";
const apiURL = "https://ecommerce-web-app.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: "bearer" + apikey,
  },
});
