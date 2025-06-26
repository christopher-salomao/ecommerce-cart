/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { FaCartPlus } from "react-icons/fa";

import { api } from "../../services/api";
import { type ProductProps } from "../../interfaces/productsProps";
import { formatPrice } from "../../utils/coinFormat";

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext/cartContext";

import toast from "react-hot-toast";

function ProductDetails() {
  const [product, setProduct] = useState<ProductProps>()

  const { id } = useParams()
  const navigate = useNavigate()

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await toast.promise(
          api.get<ProductProps>(`/products/${id}`),
          {
            loading: "Carregando informações do produto...",
            error: "Erro ao carregar informações do produto.",
          },
          {
            style: {
              backgroundColor: "#45556c",
              borderRadius: 4,
              color: "white",
            }
          }
        );
        setProduct(response.data)
      } catch (error) {
        navigate("/", {replace: true})
      }
    }
    loadProduct()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  function handleAddToCart() {
    addToCart(product as ProductProps)
    navigate("/meu-carrinho", {replace: true})
  }

  if (product === undefined) {
    return <h1>Carregando...</h1>
  }

  return (
    <section className="w-full max-w-7xl mx-auto mt-10 px-4 flex flex-col lg:flex-row items-center">
      <img
        className="w-full max-w-xs"
        src={product?.cover}
        alt={product?.title}
      />
      <div className="md:px-20">
        <h1 className="font-medium text-center text-xl mt-2 mb-4">
          {product?.title}
        </h1>
        <p className="text-justify ">
          {product?.description}
        </p>
        <div className="flex items-center gap-5 mt-4">
          <span className="font-medium text-lg">{formatPrice.format(product.price)}</span>
          <button onClick={handleAddToCart} className="cursor-pointer transition-transform duration-300 hover:scale-105">
            <FaCartPlus size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
