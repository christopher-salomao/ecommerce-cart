import { useEffect, useState, type ReactNode } from "react";

import { CartContext } from "./cartContext";

import { formatPrice } from "../../utils/coinFormat";
import {
  type CartProps,
  type ProductProps,
} from "../../interfaces/productsProps";

import toast from "react-hot-toast";

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [cartTotal, setCartTotal] = useState("");

  useEffect(() => {
    const localCart = localStorage.getItem("@thunderInfo");
    try {
      const parsed = JSON.parse(localCart as string);
      if (Array.isArray(parsed)) {
        setCart(parsed);
        totalCartResult(parsed);
      } else {
        setCart([]);
      }
    } catch {
      setCart([]);
    }
  }, []);

  function addToCart(newItem: ProductProps) {
    toast.success("Produto adicionado ao carrinho!", {
      style: {
        backgroundColor: "#45556c",
        borderRadius: 4,
        color: "white"
      }
    });

    const itemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (itemIndex !== -1) {
      const cartList = cart;

      cartList[itemIndex].amount = cartList[itemIndex].amount + 1;
      cartList[itemIndex].total =
        cartList[itemIndex].amount * cartList[itemIndex].price;

      localStorage.setItem("@thunderInfo", JSON.stringify(cartList));

      setCart(cartList);
      totalCartResult(cartList);
      return;
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    const newCart = [...cart, data];

    localStorage.setItem("@thunderInfo", JSON.stringify(newCart));


    setCart(newCart);
    totalCartResult(newCart);
  }

  function removeCartItem(product: CartProps) {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (cart[productIndex].amount > 1) {
      const cartList = cart;

      cartList[productIndex].amount = cartList[productIndex].amount - 1;
      cartList[productIndex].total =
        cartList[productIndex].amount * cartList[productIndex].price;

      localStorage.setItem("@thunderInfo", JSON.stringify(cartList));

      setCart(cartList);
      totalCartResult(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("@thunderInfo", JSON.stringify(removeItem));
    setCart(removeItem);
    totalCartResult(removeItem);
  }

  function totalCartResult(item: CartProps[]) {
    const myCart = item;

    const result = myCart.reduce((acc, obj) => {
      return (acc = acc + obj.total);
    }, 0);

    const formatedResult = formatPrice.format(result);
    setCartTotal(formatedResult);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        cartTotal,
        addToCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
