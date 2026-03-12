import { useQuery } from "@tanstack/react-query";
import { useMenuStore } from "../store/useMenuStore";

export const useQueryProducts = () => {
  const { getProductsToStore } = useMenuStore();

  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsToStore(),
    staleTime: 1000 * 60 * 60, // 1hr
  });

  return {
    queryProducts,
  };
};
