export interface ProductsResponse {
  id: string;
  name: string;
  price: string;
  ingredients: string[];
  description: string;
  isAvailable: boolean;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
