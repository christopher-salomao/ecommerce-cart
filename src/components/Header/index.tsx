import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-slate-200 px-1">
      <nav className="flex w-full max-w-7xl h-16 justify-between items-center px-5 mx-auto">
        <Link className="text-3xl font-medium" to="/">
          Thunder Informática
        </Link>
        <Link className="relative" to="/meu-carrinho">
          <FaShoppingCart size={26} color="#121212" />
          <span className="absolute -top-3 -right-3 bg-sky-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
