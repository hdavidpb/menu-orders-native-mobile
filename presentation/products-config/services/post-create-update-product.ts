import { apiService } from "@/core/api/api";
import {
  Product,
  ProductLike,
} from "@/presentation/menu/interfaces/menu.interface";

export const postCreateOrUpdateProduct = async (
  productId: string,
  productLike: Partial<ProductLike>,
): Promise<Product | null> => {
  try {
    if (productId === "new") {
      return await postCreateProduct(productLike);
    }

    return await putUpdateProduct(productId, productLike);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postCreateProduct = async (
  productLike: Partial<ProductLike>,
): Promise<Product | null> => {
  try {
    const { data } = await apiService.post<Product>(
      "/products/create",
      productLike,
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putUpdateProduct = async (
  productId: string,
  productLike: Partial<ProductLike>,
): Promise<Product | null> => {
  try {
    const { data } = await apiService.put<Product>(
      `/products/${productId}`,
      productLike,
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
