import { menuData } from "@/constants/fakeData";
import { create } from "zustand";
import { Product } from "../interfaces/menu.interface";

interface MenuState {
  menu: Product[];
  selectedMenu?: Product;

  addDefaultCount: (quantity: number) => void;

  increaseMenu: () => void;
  decreaseMenu: () => void;

  clearSelectedMenu: () => void;

  setSelectedMenu: (menu: Product) => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
  menu: menuData,

  selectedMenu: undefined,

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
