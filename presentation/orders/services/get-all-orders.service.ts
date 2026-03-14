import { apiService } from "@/core/api/api";
import { OrdersResponse } from "../interfaces/get-orders-response.interafce";

export const getAllOrders = async (): Promise<OrdersResponse[] | null> => {
  try {
    const { data } = await apiService.get<OrdersResponse[]>("/orders");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
