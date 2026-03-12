import { apiService } from "@/core/api/api";
import { BodyCreateUpdateProduct } from "../interfaces/body-create-update-product.interface";

export const postCreateOrUpdateProduct = async (
  productLike: BodyCreateUpdateProduct,
) => {
  try {
    if (productLike.id === "new") {
      return await postCreateProduct(productLike);
    }

    return await putUpdateProduct(productLike);
  } catch (error) {
    console.log(error);
  }
};

export const postCreateProduct = async (
  productLike: BodyCreateUpdateProduct,
) => {
  try {
    const { data } = await apiService.post(
      `/products/update/${productLike.id}`,
      productLike,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putUpdateProduct = async (
  productLike: BodyCreateUpdateProduct,
) => {
  try {
    const { data } = await apiService.put("/products/update", productLike);

    return data;
  } catch (error) {
    console.log(error);
  }
};
