import { getProductById } from "@/presentation/menu/services/get-productById";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";
import { pathUpdateProductStatus } from "../services/path-update-product-status";

export const useQueryProductConfig = (productId: string) => {
  const queryClient = useQueryClient();

  const queryProduct = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
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
          queryKey: ["products", data?.id],
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

  return { queryProduct, updateStatusMutation };
};
