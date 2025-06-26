import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';

import CartProvider from './contexts/cartContext/cartProvaider.tsx';

import { Toaster } from 'react-hot-toast';

import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>
);
