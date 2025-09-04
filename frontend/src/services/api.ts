import axios from "axios";


const token = localStorage.getItem("authToken");

export const apiLogin = axios.create({
  baseURL: "http://localhost:8080/realms/hypesoft/protocol/openid-connect/token",


});


const api = axios.create({
  baseURL: "http://localhost:8080/realms/hypesoft/protocol/openid-connect/token",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;