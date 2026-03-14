import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL!;

export const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(async (config) => {
  const token = await SecureStorageAdapter.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
