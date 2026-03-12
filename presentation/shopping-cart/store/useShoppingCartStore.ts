import { create } from "zustand";
import { Cart } from "../interfaces/shopping-cart.interface";

interface ShoppingCartState {
  cart: Cart[];
  addToCart: (menu: Cart) => void;
  removeFromCart: (menuId: string) => void;

  increaseCountInCart: (id: string) => void;

  decreaseCountInCart: (id: string) => void;
}

export const useShoppingCartStore = create<ShoppingCartState>((set, get) => ({
  cart: [],
  addToCart: (menu) => {
    set((state) => ({ cart: [...state.cart, menu] }));
  },

  increaseCountInCart: (id) => {
    const cart = get().cart;

    const newCart = cart.map((item) => {
      if (id === item.id)
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      return item;
    });

    set({ cart: newCart });
  },

  decreaseCountInCart: (id) => {
    const cart = get().cart;

    const newCart = cart.map((item) => {
      if (id === item.id)
        return {
          ...item,
          quantity: Math.max(item.quantity - 1, 1),
        };
      return item;
    });

    set({ cart: newCart });
  },

  removeFromCart: (menuId) => {
    const currentCart = get().cart;

    const newCart = currentCart.filter((item) => item.id !== menuId);

    set({ cart: newCart });
  },
}));
