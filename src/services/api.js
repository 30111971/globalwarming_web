import axios from "axios";

let host = "https://192.168.0.7:8080/";

const api  = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
});

export default api;