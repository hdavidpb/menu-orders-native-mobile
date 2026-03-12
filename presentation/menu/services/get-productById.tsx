import { apiService } from "@/core/api/api";
import { Product } from "../interfaces/menu.interface";

export const getProductById = async (
  productId: string,
): Promise<Product | null> => {
  try {
    if (productId === "new") {
      return {
        name: "",
        description: "",
        id: "",
        image: "",
        ingredients: [],
        isAvailable: true,
        price: "",
        quantity: 1,
        updatedAt: new Date(Date.now()),
        createdAt: new Date(Date.now()),
      };
    }
    const { data } = await apiService.get<Product>(`/products/${productId}`);
    console.log("DATA: ", data);

    return data;
  } catch (error) {
    return null;
  }
};
