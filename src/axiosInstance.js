import axios from "axios";
const apikey =
  "dd738c412e9c88666c0a09e0f27f3f0b6cc4b0127d88941b78ec38c4598eb54dcb1bab6181b6e87e8226057a2cb590a8f312c1865f2c6585d266f419a78b28979730e9d91c70c0ba8becc43bd88b4f433f0ce4ef1a798de13608850f54b9486adc8ee17bffc4ae8690f03937e88dd51bab787e633e2e63b292e4bc76f5d543d8";
const apiURL = "http://localhost:1337/api";

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: "bearer" + apikey,
  },
});
