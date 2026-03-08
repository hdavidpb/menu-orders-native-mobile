export interface IMenu {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  description: string;
  quantity: number;
  isAvailable: boolean;
  image: string;
}
