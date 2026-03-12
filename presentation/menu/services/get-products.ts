import { apiService } from "@/core/api/api";
import { Product } from "../interfaces/menu.interface";

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const { data } = await apiService.get<Product[]>("/products");

    return data;
  } catch (error) {
    return null;
  }
};
