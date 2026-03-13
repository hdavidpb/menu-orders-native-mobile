import { ProductLike } from "@/presentation/menu/interfaces/menu.interface";
import { getProductById } from "@/presentation/menu/services/get-productById";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Alert } from "react-native";
import { pathUpdateProductStatus } from "../services/path-update-product-status";
import { postCreateOrUpdateProduct } from "../services/post-create-update-product";

export const useQueryProductConfig = (id: string) => {
  const productIdRef = useRef(id);

  const queryClient = useQueryClient();

  const queryProduct = useQuery({
    queryKey: ["product", productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
    staleTime: 1000 * 60 * 60, // 1hr
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({
      productId,
      status,
    }: {
      productId: string;
      status: boolean;
    }) => pathUpdateProductStatus(productId, { status }),

    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({
          queryKey: ["product", data?.id],
        });
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
        Alert.alert(
          "Producto actualizado",
          "Se cambio el estado de tu producto",
        );
      } else {
        Alert.alert("Producto no actualizado", "Revisa que paso");
      }
    },
  });

  const createOrUpdateProductMutation = useMutation({
    mutationFn: (product: ProductLike) =>
      postCreateOrUpdateProduct(productIdRef.current, product),

    onSuccess: (data) => {
      if (data) {
        productIdRef.current = data.id;

        queryClient.invalidateQueries({
          queryKey: ["product", data?.id],
        });
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });

        Alert.alert(
          "Producto guardado",
          "El producto se guardo de manera exitosa",
        );
      }
    },
  });

  return { queryProduct, updateStatusMutation, createOrUpdateProductMutation };
};
