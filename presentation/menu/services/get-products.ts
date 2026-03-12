import { apiService } from "@/core/api/api";
import { Product } from "../interfaces/menu.interface";

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const { data } = await apiService.get<Product[]>("/products");

    console.log("SE LLAMO DE NUEVO");

    return data.map((product) => ({ ...product, quantity: 1 }));
  } catch (error) {
    return null;
  }
};
