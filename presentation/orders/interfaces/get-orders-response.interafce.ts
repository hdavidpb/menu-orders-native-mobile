import { UserInterface } from "@/presentation/interfaces/user.interface";
import { OrderItem } from "./order.interface";

export interface OrdersResponse {
  id: string;
  status: string;
  address: string;
  location: string;
  reference: string;
  totalPrice: string;
  user: UserInterface;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}
