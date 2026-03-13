import { apiService } from "@/core/api/api";
import { Product } from "@/presentation/menu/interfaces/menu.interface";

export const updateProduct = async (
  productId: string,
  product: Partial<Product>,
): Promise<Product | null> => {
  try {
    const { data } = await apiService.put<Product>(
      `/products/${productId}`,
      product,
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
