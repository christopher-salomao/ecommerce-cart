import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext/cartContext";
import { Link } from "react-router-dom";

import { formatPrice } from "../../utils/coinFormat";

function Cart() {
  const { cart, cartTotal, addToCart, removeCartItem} = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="mt-10 mb-4 text-2xl font-bold text-center">
          Ops, seu carrinho está vazio...
        </h1>
        <Link to="/" className="bg-slate-600 my-3 p-1 px-3 text-white rounded font-medium">
          Acessar Produtos
        </Link>
      </section>
    );
  }

  return (
    <section id="cart" className="w-full max-w-7xl mx-auto">
      <h1 className="mt-10 mb-4 text-2xl font-bold text-center">
        Meu Carrinho
      </h1>

      <div className="w-full flex flex-col gap-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between border-b-2 pb-2.5 border-gray-300"
          >
            <img
              className="w-full rounded-lg max-w-24 mb-2"
              src={item.cover}
              alt={item.title}
            />

            <strong>Preço: {formatPrice.format(item.price)}</strong>

            <div className="flex gap-3 items-center">
              <button onClick={() => removeCartItem(item)} className="bg-slate-700 px-2 text-white text-medium  rounded flex items-center justify-center">
                -
              </button>
              <span>{item.amount}</span>
              <button onClick={() => addToCart(item)} className="bg-slate-700 px-1.5 text-white text-medium  rounded flex items-center justify-center">
                +
              </button>
            </div>

            <strong className="md:float-right">
              Subtotal: {formatPrice.format(item.total)}
            </strong>
          </div>
        ))}
      </div>
      <p className="font-bold mt-4 ml-2">Total: {cartTotal}</p>
    </section>
  );
}

export default Cart;
