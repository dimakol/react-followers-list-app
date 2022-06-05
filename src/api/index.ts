import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/vnd.github.v3+json",
  },
});
