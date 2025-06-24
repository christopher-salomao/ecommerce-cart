import { createContext } from "react";
import { type ProductProps } from "../../pages/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addToCart: (product: ProductProps) => void;
  
}

export interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export const CartContext = createContext({} as CartContextData);
