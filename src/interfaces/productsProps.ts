interface ProductProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

interface CartProps extends ProductProps {
  amount: number;
  total: number;
}

export { type ProductProps, type CartProps };
