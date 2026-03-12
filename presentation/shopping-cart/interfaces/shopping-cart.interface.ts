import { Product } from "@/presentation/menu/interfaces/menu.interface";

export interface Cart extends Product {
  comments: string;
}
