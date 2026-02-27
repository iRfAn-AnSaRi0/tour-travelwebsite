import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://tour-travelwebsite.onrender.com/api", // backend base url https://tour-travelwebsite.onrender.com
  headers: {
    "Content-Type": "application/json",
  },
   timeout: 10000,
});

/* ✅ Request Interceptor */
 BaseApi.interceptors.request.use(
   (config) => {
     const token = localStorage.getItem("token");

     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }

     return config;
   },
   (error) => Promise.reject(error)
 );

 /* ✅ Response Interceptor */
 BaseApi.interceptors.response.use(
   (response) => response,
   (error) => {
     if (error.response?.status === 401) {
       console.error("Unauthorized – login again");
     }
     return Promise.reject(error);
   }
 );

export default BaseApi;
