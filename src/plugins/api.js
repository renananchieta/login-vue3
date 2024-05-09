import { useAppStore } from "@/stores/app";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;

const store = useAppStore();

const api = axios.create({
  baseURL: url,
  withXSRFToken: true,
  withCredentials: true,
});

api.defaults.timeout = 50000;

export default api;
