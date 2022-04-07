import axios from "axios";

export const BASE_URL = "https://eltere-backend.herokuapp.com/api/v1/";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
