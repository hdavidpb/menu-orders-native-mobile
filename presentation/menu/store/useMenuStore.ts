import { create } from "zustand";
import { Product } from "../interfaces/menu.interface";
import { getProducts } from "../services/get-products";

interface MenuState {
  menu: Product[];
  selectedMenu?: Product;

  getProductsToStore: () => Promise<Product[]>;

  addDefaultCount: (quantity: number) => void;

  increaseMenu: () => void;
  decreaseMenu: () => void;

  clearSelectedMenu: () => void;

  setSelectedMenu: (menu: Product) => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
  menu: [],
  selectedMenu: undefined,

  getProductsToStore: async () => {
    const products = await getProducts();

    if (products) {
      set({ menu: products });
      return products;
    } else {
      set({ menu: [] });
      return [];
    }
  },

  addDefaultCount: (quantity) => {
    const selectedMenu = get().selectedMenu!;
    set({
      selectedMenu: {
        ...selectedMenu,
        quantity,
      },
    });
  },

  setSelectedMenu: (menu) => {
    set({ selectedMenu: menu });
  },

  decreaseMenu: () => {
    const selectedMenu = get().selectedMenu!;
    set({
      selectedMenu: {
        ...selectedMenu,
        quantity: Math.max(selectedMenu?.quantity - 1, 0),
      },
    });
  },

  increaseMenu: () => {
    const selectedMenu = get().selectedMenu!;
    set({
      selectedMenu: { ...selectedMenu, quantity: selectedMenu.quantity + 1 },
    });
  },
  clearSelectedMenu: () => {
    set({ selectedMenu: undefined });
  },
}));
