import { createContext } from "react";
import { type CartProps, type ProductProps } from "../../interfaces/productsProps";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  cartTotal: string;
  addToCart: (product: ProductProps) => void;
  removeCartItem: (product: CartProps) => void;
}

export const CartContext = createContext({} as CartContextData);
