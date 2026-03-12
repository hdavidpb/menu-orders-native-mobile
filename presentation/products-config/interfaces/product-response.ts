export interface ProductResponse {
  id: string;
  name: string;
  price: string;
  ingredients: string[];
  description: string;
  isAvailable: boolean;
  image: string;
  quantity?: number;
  createdAt: Date;
  updatedAt: Date;
}
