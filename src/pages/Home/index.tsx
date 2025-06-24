import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/cartContext/cartContext";

import { FaCartPlus } from "react-icons/fa";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/coinFormat";

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

function Home() {
  const [productsList, setProductsList] = useState<ProductProps[]>([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function loadProducts() {
      await api.get<ProductProps[]>("/products").then((response) => {
        setProductsList(response.data);
      });
    }
    loadProducts();
  }, []);

  return (
    <section id="home" className="w-full max-w-7xl mx-auto px-4">
      <h1 className="mt-10 mb-4 text-2xl font-bold text-center">
        Produtos em alta
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
      {productsList.length > 0 ? (
        productsList.map((product) => (
            <section key={product.id} className="w-full flex flex-col transition-transform duration-500 hover:scale-105">
              <img
                className="w-full rounded-lg self-center max-w-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
              <div className="flex gap-3 aling-center">
                <strong className="text-zinc-700/90">{formatPrice.format(product.price)}</strong>
                <button onClick={() => addToCart(product)} className="cursor-pointer px-1">
                  <FaCartPlus size={22} />
                </button>
              </div>
            </section>
        ))
      ) : (
        <p className="mb-4 text-center">Carregando...</p>
      )}
      </div>
    </section>
  );
}

export default Home;
