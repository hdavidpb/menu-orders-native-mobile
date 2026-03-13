export interface Product {
  id: string;
  name: string;
  price: string;
  ingredients: string[];
  description: string;
  isAvailable: boolean;
  image: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductLike {
  name: string;
  price: number;
  ingredients: string[];
  description: string;
  isAvailable: boolean;
  image: string;
}
