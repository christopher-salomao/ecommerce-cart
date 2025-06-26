import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meu-carrinho",
        element: <Cart />,
      },
      {
        path: "/produtos/:id",
        element: <ProductDetails />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
