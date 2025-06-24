import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';

import CartProvider from './contexts/cartContext/cartProvaider.tsx';

import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>
);
