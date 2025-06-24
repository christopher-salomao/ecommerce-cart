import { useEffect, useState, type ReactNode } from "react";

import { CartContext, type CartProps } from "./cartContext";

import { type ProductProps } from "../../pages/Home";

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  /* useEffect(() => {
    const localCart = localStorage.getItem("@thunderInfo");
    try {
      const parsed = JSON.parse(localCart as string);
      if (Array.isArray(parsed)) {
        setCart(parsed);
      } else {
        setCart([]);
      }
    } catch {
      setCart([]);
    }
  }, []) */

  function addToCart(newItem: ProductProps) {
    const itemIndex = cart.findIndex(item => item.id === newItem.id)

    if (itemIndex !== -1) {
      const cartList = cart;

      cartList[itemIndex].amount = cartList[itemIndex].amount + 1;
      cartList[itemIndex].total =
        cartList[itemIndex].total * cartList[itemIndex].amount;

      // localStorage.setItem("@thunderInfo", JSON.stringify(cartList));
      setCart(cartList)
      return
    }


    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    const newCart = [...cart, data]

    // localStorage.setItem("@thunderInfo", JSON.stringify(newCart));

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{cart, cartAmount: cart.length, addToCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
