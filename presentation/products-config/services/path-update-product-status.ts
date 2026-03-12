import { apiService } from "@/core/api/api";
import { Product } from "@/presentation/menu/interfaces/menu.interface";

export interface UpdateProductStatusPayload {
  status: boolean;
}

export const pathUpdateProductStatus = async (
  productId: string,
  payload: UpdateProductStatusPayload,
): Promise<Product | null> => {
  try {
    const { data } = await apiService.patch<Product>(
      `/products/${productId}`,
      payload,
    );

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
