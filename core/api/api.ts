import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL!;

export const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(async (config) => {
  // const token = SecureStorageAdapter.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhlcm5hbi5wbGF6YUBnbWFpbC5jb20iLCJpZCI6ImU2Yzg5YWU5LWQ4YzAtNDc2Ny05Mjg1LTllOWVjNDcwOWY1MCIsImlhdCI6MTc3MzM2OTU0NCwiZXhwIjoxNzczNDA1NTQ0fQ.vAi4A6V08jycAFLoCaE3Dz2B8UM7Ws8GOlxgEVIFZaM";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
