import { Product } from "@/presentation/menu/interfaces/menu.interface";

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  price: string;
  subtotal: string;
}
